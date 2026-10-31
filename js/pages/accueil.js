/* Page Accueil : prochain événement, actions perso, rang, fil, atelier, records */
pages.accueil = {
  label: 'Accueil',
  icon: 'home',
  title: `Bonsoir, ${me.chars[0].n}`,

  render() {
    return `
      ${this.birthdayBanner()}
      <div class="bento">
        ${this.sunCard()}
        ${this.todo()}
        ${this.rank()}
        ${this.feed()}
        ${this.atelier()}
        ${this.lastRecords()}
      </div>`;
  },

  birthdayBanner() {
    if (!birthdays.length) return '';
    const m = M(birthdays[0]);
    return `
      <div class="bday">🎂 <span><b>${m.name}</b> fête son anniversaire aujourd’hui.</span>
        <a class="btn ghost sm" href="#profil/${m.id}/mur">Écrire sur son mur</a>
      </div>`;
  },

  // Grand soleil = compte à rebours ; l'anneau = taux de remplissage
  sunCard() {
    const next = events.filter(e => e.at > NOW).sort((a, b) => a.at - b.at)[0];
    const diff = next.at - NOW;
    const h = Math.floor(diff / 36e5);
    const mn = Math.floor(diff % 36e5 / 6e4);
    const fill = next.parts.length / next.max;
    const C = 2 * Math.PI * 49;

    return `
      <section class="sun-card" aria-label="Prochain événement">
        <div class="sun">
          ${mangekyo(96, 'spin')}
          <svg class="ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" fill="none" stroke="#ffffff14" stroke-width="1.2"/>
            <circle cx="50" cy="50" r="49" fill="none" stroke="var(--c-ember)" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="${C * fill} ${C}"/>
          </svg>
        </div>
        <div class="count"><b>${h}h${String(mn).padStart(2, '0')}</b><span>avant le départ</span></div>
        <div class="next">
          ${next.dungeon ? `<button class="next-boss" onclick="openDungeon('${esc(next.dungeon)}')" title="${next.dungeon}">${eventBoss(next, 72)}</button>` : ''}
          <div>
            <div class="k">Prochain événement : ${next.cat}, ${fmtDay(next.at)} à ${hhmm(next.at)}</div>
            <h3>${next.title}</h3>
            ${next.quest ? `<div class="ev-quest">📜 ${escHtml(next.quest)}</div>` : ''}
            <p>${next.desc}</p>
          </div>
        </div>
        <div class="next-act">
          <div class="stack">
            <span class="avs">${next.parts.slice(0, 5).map(id => av(M(id), 'sm')).join('')}</span>
            <span class="ash small">${next.parts.length}/${next.max} inscrits</span>
          </div>
          <div class="next-btns">
            <button class="btn ghost" onclick="openEventForm()">${ico('plus', 16)} Créer un événement</button>
            <button class="btn" onclick="toggleSignup('${next.id}')">${signupLabel(next)}</button>
          </div>
        </div>

      </section>`;
  },

  todo() {
    const raid = events.find(e => e.id === 'e2');
    const open = jobs.filter(j => j.st === 'open');
    return `
      <section class="panel todo">
        <div class="ph"><h2>Pour toi</h2><span class="ash small">3 choses à faire</span></div>
        <ul>
          <li class="urgent">
            <b>${raid.title} complet</b>
            <span>${raid.wait.includes(me.id) ? 'Tu es en liste d’attente.' : 'Rejoins la liste d’attente, des places se libèrent souvent.'}</span>
            <button class="btn sm" onclick="toggleSignup('${raid.id}')">${signupLabel(raid)}</button>
          </li>
          <li>
            <b>${plural(open.length, 'demande')} de forgemagie</b>
            <span>Dont une en Joaillomage, ton métier.</span>
            <a class="btn ghost sm" href="#atelier">Voir l’atelier</a>
          </li>
          <li>
            <b>Un seul record solotage</b>
            <span>Le Donjon des Tofus est ton seul score. Tente la Salle du Minotot ce soir.</span>
            <a class="btn ghost sm" href="#defis">Choisir un donjon</a>
          </li>
        </ul>
      </section>`;
  },

  rank() {
    const top = sortBy('pts');
    const r = rankOf(me);
    const above = top[r - 2];
    const progress = above ? Math.round(me.pts / above.pts * 100) : 100;
    return `
      <section class="panel rank">
        <div class="ph"><h2>Ton rang</h2><a class="more" href="#guilde">Classement</a></div>
        <div class="big"><b>${r}<sup style="font-size:24px">e</sup></b><span>sur ${members.length}, ${me.pts} points en octobre</span></div>
        <div class="meter"><i style="width:${progress}%"></i></div>
        <div class="ash xsmall" style="margin-top:8px">${above ? `${plural(above.pts - me.pts, 'point')} pour dépasser ${above.name}` : 'Tu es premier'}</div>
        <div class="podium-mini">${top.slice(0, 3).map((m, i) => `<div><em>${i + 1}</em>${av(m, 'sm')}${m.name}<b>${m.pts} pts</b></div>`).join('')}</div>
      </section>`;
  },

  feed() {
    return `
      <section class="panel feed">
        <div class="ph"><h2>Dans la guilde</h2></div>
        <ol>${feed.map(([id, text, when]) => `<li>${av(M(id))}<div><a href="#profil/${id}"><b>${M(id).name}</b></a> ${text}<small>${when}</small></div></li>`).join('')}</ol>
      </section>`;
  },

  atelier() {
    const open = jobs.filter(j => j.st === 'open').slice(0, 3);
    return `
      <section class="panel atelier-mini">
        <div class="ph"><h2>Atelier</h2><a class="more" href="#atelier">Tout voir</a></div>
        ${open.map(j => `<div class="mini-row">${av(M(j.by), 'sm')}<div>${j.t}<div class="ash xsmall">${j.j}</div></div><div class="r"><b>${kamas(j.k)}</b>kamas</div></div>`).join('')}
      </section>`;
  },

  lastRecords() {
    // Meilleur record de chaque donjon, top 3
    const best = Object.entries(records)
      .map(([dungeon, [[id, , pts]]]) => ({ dungeon, m: M(id), pts }))
      .sort((a, b) => b.pts - a.pts)
      .slice(0, 3);
    return `
      <section class="panel defis-mini">
        <div class="ph"><h2>Derniers records</h2><a class="more" href="#defis">Défis</a></div>
        ${best.map(x => `<div class="mini-row">${av(x.m, 'sm')}<div>${x.m.name}<div class="ash xsmall">${x.dungeon}</div></div><div class="r"><b>${x.pts}</b>points</div></div>`).join('')}
      </section>`;
  },
};
