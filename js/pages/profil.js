/* Page Profil (#profil/<id>, #profil/<id>/mur pour aller au mur)
   Façon Steam : bannière, vitrine de succès, personnage principal, mur de commentaires.
   Sur son propre profil : mode « Personnaliser ». */
pages.profil = {
  hidden: true,
  navKey: arg => (M(arg.split('/')[0]) === me ? 'profil' : 'guilde'),
  icon: 'guild',
  title: arg => (M(arg.split('/')[0]) === me ? 'Mon profil' : 'Profil'),

  render(arg) {
    const m = M(arg.split('/')[0]) || me;
    const own = m === me;
    const edit = own && state.editProfile;

    return `
      ${this.header(m, own, edit)}
      ${edit ? this.editor() : ''}
      <div class="prof-grid">
        <div class="prof-main">
          ${this.mainChar(m)}
          ${this.showcase(m, own)}
          ${this.wall(m, own)}
        </div>
        <div class="prof-side">
          ${this.stats(m)}
          ${this.characters(m, own, edit)}
          ${this.jobs(m)}
          ${this.recs(m)}
        </div>
      </div>`;
  },

  header(m, own, edit) {
    const banner = BANNERS[m.banner || 'akatsuki'];
    return `
      <section class="prof-head" style="background:${banner.bg}">

        <div class="prof-id">
          ${av(m, 'xl')}
          <div class="prof-name">
            <h2>${m.name}</h2>
            <div class="prof-sub">${m.role} <span class="sep"></span> ${rankOf(m)}e au classement <span class="sep"></span> ${achPoints(m)} points de succès</div>
            ${m.bio ? `<p class="prof-bio">${escHtml(m.bio)}</p>` : ''}
          </div>
          <div class="prof-actions">
            ${own
              ? `<button class="btn ${edit ? '' : 'ghost'}" onclick="toggleEditProfile()">${ico('edit', 16)} ${edit ? 'Enregistrer' : 'Personnaliser'}</button>`
              : `<button class="btn" onclick="messageMember('${m.id}')">${ico('mail', 16)} Envoyer un message</button>
                 <a class="btn ghost" href="#profil/${m.id}/mur">Écrire sur son mur</a>`}
          </div>
        </div>
      </section>`;
  },

  // Panneau de personnalisation (son propre profil uniquement)
  editor() {
    const unlocked = achievements.filter(a => hasAch(a, me));
    return `
      <section class="panel prof-editor">
        <div class="ed-block">
          <h3>Bannière</h3>
          <div class="banners">${Object.entries(BANNERS).map(([k, b]) => `
            <button class="banner-swatch ${me.banner === k ? 'on' : ''}" style="background:${b.bg}" onclick="setBanner('${k}')" aria-label="${b.label}"><span>${b.label}</span></button>`).join('')}
          </div>
        </div>
        <div class="ed-block">
          <h3>Devise</h3>
          <textarea class="input area" id="bioInput" maxlength="140" oninput="saveBio()" placeholder="Une phrase sur toi, tes métiers, tes horaires…">${escHtml(me.bio || '')}</textarea>
          <div class="ash xsmall">140 caractères maximum</div>
        </div>
        <div class="ed-block">
          <h3>Vitrine <span class="ash small">${me.showcase.length}/${SHOWCASE_MAX}, clique pour épingler</span></h3>
          <div class="stamp-pick">${unlocked.map(a => `
            <button class="pick ${me.showcase.includes(a.id) ? 'on' : ''}" onclick="toggleShowcase('${a.id}')">${stamp(a, true)}<span>${a.name}</span></button>`).join('')}
          </div>
        </div>
      </section>`;
  },

  mainChar(m) {
    const ch = charsOf(m)[0];
    const cls = classById(ch.breed);
    return `
      <section class="panel main-char">
        ${lookPreview(ch)}
        <div class="main-char-info">
          <img class="cls-logo" src="${DOFUSDB.symbol(ch.breed)}" alt="" loading="lazy">
          <div>
            <div class="ash xsmall">Personnage principal</div>
            <h3>${ch.n}</h3>
            <div class="ash small">${cls.name} ${ch.sex === 'female' ? 'femme' : 'homme'}, niveau ${ch.l}</div>
          </div>
        </div>
      </section>`;
  },

  showcase(m, own) {
    const list = (m.showcase || achievements.filter(a => hasAch(a, m)).slice(0, SHOWCASE_MAX).map(a => a.id)).map(ACH);
    return `
      <section class="panel">
        <div class="ph"><h2>Vitrine de succès</h2><a class="more" href="#succes">Tous les succès</a></div>
        ${list.length
          ? `<div class="vitrine">${list.map(a => `
              <button class="vit" onclick="openAchievement('${a.id}')">${stamp(a, true, 'lg')}<b>${a.name}</b><span>${rarity(a)} % de la guilde</span></button>`).join('')}</div>`
          : `<p class="ash">${own ? 'Épingle tes succès préférés avec Personnaliser.' : 'Aucun succès épinglé.'}</p>`}
      </section>`;
  },

  wall(m, own) {
    const list = comments[m.id] || [];
    const bday = birthdays.includes(m.id) && !own;
    return `
      <section class="panel wall" id="mur">
        <div class="ph"><h2>Mur</h2><span class="ash small">${plural(list.length, 'commentaire')}</span></div>
        ${bday ? `<div class="bday-note">🎂 C’est l’anniversaire de ${m.name} aujourd’hui. Laisse-lui un mot.</div>` : ''}
        <div class="wall-form">
          ${av(me, 'sm')}
          <textarea class="input area" id="wallInput" maxlength="300" placeholder="${own ? 'Écris quelque chose sur ton mur…' : `Écris sur le mur de ${m.name}…`}"></textarea>
          <button class="btn" onclick="postComment('${m.id}')">Publier</button>
        </div>
        <ol class="wall-list">${list.map((c, i) => `
          <li>
            ${av(M(c.from))}
            <div class="wall-body">
              <div><a href="#profil/${c.from}"><b>${M(c.from).name}</b></a> <span class="ash xsmall">${c.when}</span></div>
              <p>${escHtml(c.text)}</p>
            </div>
            ${own || c.from === me.id ? `<button class="wall-del" onclick="deleteComment('${m.id}',${i})" aria-label="Supprimer">${ico('x', 14)}</button>` : ''}
          </li>`).join('')}
        </ol>
      </section>`;
  },

  stats(m) {
    return `
      <section class="panel">
        <div class="ph"><h2>Octobre</h2></div>
        <div class="stats3">
          <div>Rang<b style="color:var(--c-kin)">${rankOf(m)}e</b></div>
          <div>Messages<b>${m.msg}</b></div>
          <div>Vocal<b>${m.voc}</b></div>
        </div>
      </section>`;
  },

  characters(m, own, edit) {
    const list = charsOf(m);
    return `
      <section class="panel">
        <div class="ph"><h2>Personnages</h2>${own ? `<button class="more linklike" onclick="startCharacter()">${ico('plus', 14)} Créer</button>` : ''}</div>
        <div class="char-list">${list.map((ch, i) => `
          <div class="char-row">
            ${classIcon(ch.breed, 34)}
            <div><b>${ch.n}</b><span class="ash xsmall">${classById(ch.breed).name}, niv. ${ch.l}</span></div>
            ${i === 0 ? `<span class="tag kin">${ico('star', 12)} Principal</span>` : edit ? `<button class="btn ghost sm" onclick="setMainChar(${i})">Mettre principal</button>` : ''}
          </div>`).join('')}
        </div>
      </section>`;
  },

  jobs(m) {
    const list = m.jobs || [];
    return `
      <section class="panel">
        <div class="ph"><h2>Métiers</h2></div>
        ${list.length ? `<div class="list-plain">${list.map(j => `<div>${j.n}<span>niv. ${j.l}</span></div>`).join('')}</div>` : '<p class="ash" style="margin:0">Aucun métier renseigné.</p>'}
      </section>`;
  },

  recs(m) {
    const list = allRecords().filter(r => r.m === m);
    return `
      <section class="panel">
        <div class="ph"><h2>Records solotage</h2></div>
        ${list.length ? `<div class="list-plain">${list.map(r => `<div>${r.dungeon}<span>${r.pts} pts</span></div>`).join('')}</div>` : '<p class="ash" style="margin:0">Aucun record pour l’instant.</p>'}
      </section>`;
  },

  // #profil/<id>/mur : descend au mur et place le curseur
  after(arg) {
    if (arg.endsWith('/mur')) {
      const input = document.getElementById('wallInput');
      document.getElementById('mur').scrollIntoView({ block: 'start' });
      input.focus({ preventScroll: true });
    }
  },
};
