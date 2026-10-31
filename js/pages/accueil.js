/* Page Accueil : prochain événement, actions perso, fil de la guilde */
pages.accueil = {
  label: 'Accueil',
  icon: 'home',
  title: `Bonsoir, ${me.chars[0].n}`,

  render() {
    return `
      ${this.sunCard()}
      <div class="home-2">
        ${this.todo()}
        ${this.feed()}
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
            <div class="k">${fmtDay(next.at)} à ${hhmm(next.at)}</div>
            <h3>${next.title}</h3>
            ${next.quest ? `<div class="ev-quest">📜 ${escHtml(next.quest)}</div>` : ''}
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

  // Deux actions au plus, chacune avec son bouton
  todo() {
    const raid = events.find(e => e.id === 'e2');
    const mine = jobs.filter(j => j.st === 'open' && (me.jobs || []).some(x => x.n === j.j));
    return `
      <section class="panel todo">
        <div class="ph"><h2>Pour toi</h2></div>
        <ul>
          ${raid ? `<li class="urgent">
            <b>${raid.title}</b>
            <span>${raid.wait.includes(me.id) ? 'Tu es en liste d’attente.' : raid.parts.length >= raid.max ? 'Complet, la liste d’attente est ouverte.' : 'Des places sont libres.'}</span>
            <button class="btn sm" onclick="toggleSignup('${raid.id}')">${signupLabel(raid)}</button>
          </li>` : ''}
          ${mine.length ? `<li>
            <b>${plural(mine.length, 'demande')} de FM dans tes métiers</b>
            <span>${mine.map(j => j.t).join(', ')}</span>
            <a class="btn ghost sm" href="#atelier">Voir l’atelier</a>
          </li>` : ''}
        </ul>
      </section>`;
  },

  // Fil de la guilde, avec l'anniversaire du jour en tête
  feed() {
    const bdays = birthdays().map(id => `<li class="feed-bday">${av(M(id))}<div><a href="#profil/${id}"><b>${M(id).name}</b></a> fête son anniversaire 🎂 <a class="feed-link" href="#profil/${id}/mur">Écrire sur son mur</a><small>aujourd’hui</small></div></li>`).join('');
    return `
      <section class="panel feed">
        <div class="ph"><h2>Dans la guilde</h2></div>
        <ol>${bdays}${feed.map(([id, text, when]) => `<li>${av(M(id))}<div><a href="#profil/${id}"><b>${M(id).name}</b></a> ${text}<small>${when}</small></div></li>`).join('')}</ol>
      </section>`;
  },
};
