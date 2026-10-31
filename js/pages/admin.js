/* Page Admin (#admin/<section>) : réservée au staff (Officier, Bras droit, Meneur) dans la vraie appli.
   Dans la maquette, l'onglet est toujours visible. */
pages.admin = {
  hidden: true,
  navKey: 'admin',
  icon: 'gear',
  title: 'Administration',

  sections: [
    { key: 'apercu',     label: 'Vue d’ensemble' },
    { key: 'solotages',  label: 'Solotages',  count: () => pendingRecords.length },
    { key: 'membres',    label: 'Membres' },
    { key: 'acces',      label: 'Demandes d’accès', count: () => accessRequests.length },
    { key: 'evenements', label: 'Événements' },
    { key: 'moderation', label: 'Modération', count: () => reports.length },
    { key: 'succes',     label: 'Succès' },
    { key: 'reglages',   label: 'Réglages' },
    { key: 'journal',    label: 'Journal' },
  ],

  render(arg) {
    const key = this.sections.some(s => s.key === arg) ? arg : 'apercu';
    return `
      <div class="adm">
        <nav class="adm-nav" aria-label="Sections admin">${this.sections.map(s => {
          const n = s.count ? s.count() : 0;
          return `<a href="#admin/${s.key}" class="${s.key === key ? 'on' : ''}">${s.label}${n ? `<em>${n}</em>` : ''}</a>`;
        }).join('')}</nav>
        <div class="adm-body">${this[key]()}</div>
      </div>`;
  },

  /* ---------- Vue d'ensemble ---------- */
  apercu() {
    const tiles = [
      ['Solotages à valider', pendingRecords.length, 'solotages'],
      ['Demandes d’accès', accessRequests.length, 'acces'],
      ['Signalements', reports.length, 'moderation'],
      ['Événements à venir', events.filter(e => e.at > NOW).length, 'evenements'],
    ];
    return `
      <div class="adm-tiles">${tiles.map(([l, n, k]) => `
        <a class="panel adm-tile ${n ? 'hot' : ''}" href="#admin/${k}"><b>${n}</b><span>${l}</span></a>`).join('')}
      </div>
      <div class="adm-2">
        <section class="panel">
          <div class="ph"><h2>À traiter</h2></div>
          ${pendingRecords.slice(0, 3).map(p => `<div class="mini-row">${bossImg(DJ(p.dungeon), 32)}<div>${M(p.by).name}<div class="ash xsmall">${p.dungeon}, ${p.turns} tours</div></div><div class="r"><b>${p.pts}</b>pts</div></div>`).join('') || '<p class="ash">Rien à valider.</p>'}
          <a class="btn ghost sm" href="#admin/solotages" style="margin-top:10px;display:inline-block">Ouvrir la file</a>
        </section>
        <section class="panel">
          <div class="ph"><h2>Derniers actes du staff</h2><a class="more" href="#admin/journal">Journal</a></div>
          ${this.logList(adminLog.slice(0, 5))}
        </section>
      </div>`;
  },

  /* ---------- Solotages ---------- */
  solotages() {
    if (!pendingRecords.length) return '<section class="panel ash">Aucun solotage à valider. La file est vide.</section>';
    const REASONS = ['Capture illisible', 'Nombre de tours faux', 'Challenges non visibles', 'Pas en solo'];
    return `<div class="adm-queue">${pendingRecords.map((p, i) => {
      const d = DJ(p.dungeon);
      const best = (records[p.dungeon] || [])[0];
      return `
        <article class="panel adm-rec">
          <div class="adm-proof">${p.proof
            ? `<img src="${p.proof}" alt="Capture de ${M(p.by).name}">`
            : p.trust
              ? `<div class="proof-trust">🤝<span>Envoyé sur parole</span></div>`
              : `<div class="proof-fake">${bossImg(d, 72)}<span>Capture d’exemple</span></div>`}
          </div>
          <div class="adm-rec-body">
            <div class="adm-rec-top">
              ${av(M(p.by), 'sm')}<b><a href="#profil/${p.by}">${M(p.by).name}</a></b><span class="ash small">avec ${p.char}, ${p.when}</span>
              ${p.trust ? '<span class="tag kin">🤝 Sur parole</span>' : ''}${p.askedProof ? '<span class="tag">Preuve demandée</span>' : ''}
            </div>
            <h3>${p.dungeon} <span class="ash small">niv. ${d.level}</span></h3>
            <div class="adm-rec-stats">
              <span><b>${p.turns}</b> tours</span>
              <span><b class="kin">${p.pts}</b> points</span>
              <span>${best ? (p.pts > best[2] ? `<b class="ember">Nouveau record</b> (actuel ${best[2]})` : `Record actuel ${best[2]}`) : 'Premier record'}</span>
            </div>
            ${p.achs.length ? `<div class="adm-rec-achs">${p.achs.map(id => djAch(d, id)).filter(Boolean).map(a => `<span class="ach-chip">${chalIcon(a, 18)}${achLabel(a)}</span>`).join('')}</div>` : ''}
            ${p.note ? `<p class="adm-note">« ${escHtml(p.note)} »</p>` : ''}
            ${p.video ? `<a class="ember small" href="${escHtml(p.video)}" target="_blank" rel="noopener">Voir la vidéo</a>` : ''}
            ${state.rejecting === i ? `
              <div class="adm-reject">
                <span class="small">Raison du refus :</span>
                <div class="chips">${REASONS.map(r => `<button class="chip" onclick="adminReject(${i},'${esc(r)}')">${r}</button>`).join('')}</div>
                <button class="linklike ash small" onclick="state.rejecting=null;render()">Annuler</button>
              </div>` : `
              <div class="adm-act">
                <button class="btn sm" onclick="adminValidate(${i})">Valider</button>
                <button class="btn ghost sm" onclick="adminAskProof(${i})">Demander une preuve</button>
                <button class="btn ghost sm danger" onclick="state.rejecting=${i};render()">Refuser</button>
              </div>`}
          </div>
        </article>`;
    }).join('')}</div>`;
  },

  /* ---------- Membres ---------- */
  membres() {
    return `
      <section class="panel">
        <div class="ph"><h2>Membres</h2><span class="ash small">${members.length} sur le portail</span></div>
        <table class="tbl">
          <thead><tr><th>Membre</th><th>Rôle</th><th class="hide-m num">Points</th><th class="hide-m">Persos</th><th></th></tr></thead>
          <tbody>${members.map(m => `
            <tr>
              <td><a class="who" href="#profil/${m.id}">${av(m, 'sm')}${m.name}</a></td>
              <td><select class="input sel-sm" onchange="adminSetRole('${m.id}', this.value)" ${m === me ? 'disabled title="Tu ne peux pas changer ton propre rôle"' : ''}>
                ${ROLES.map(r => `<option ${m.role === r ? 'selected' : ''}>${r}</option>`).join('')}
              </select></td>
              <td class="hide-m num">${m.pts}</td>
              <td class="hide-m ash">${charsOf(m).length}</td>
              <td class="adm-row-act">${m === me ? '' : `
                <button class="linklike ash small" onclick="adminResetPoints('${m.id}')">${state.confirm === 'reset-' + m.id ? 'Confirmer la remise à zéro' : 'Remettre à zéro'}</button>
                <button class="linklike danger small" onclick="adminKick('${m.id}')">${state.confirm === 'kick-' + m.id ? 'Confirmer le retrait' : 'Retirer'}</button>`}
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </section>`;
  },

  /* ---------- Demandes d'accès ---------- */
  acces() {
    return `
      <section class="panel">
        <div class="ph"><h2>Demandes d’accès</h2></div>
        ${accessRequests.length ? `<ul class="adm-list">${accessRequests.map((r, i) => `
          <li>
            <span class="av" style="background:#333">${r.name[0]}</span>
            <div><b>${r.name}</b> <span class="ash small">@${r.discord}, ${r.when}</span>${r.note ? `<p>${escHtml(r.note)}</p>` : ''}</div>
            <button class="btn sm" onclick="adminAccept(${i})">Accepter</button>
            <button class="btn ghost sm" onclick="adminDeny(${i})">Refuser</button>
          </li>`).join('')}</ul>` : '<p class="ash">Aucune demande en attente.</p>'}
      </section>`;
  },

  /* ---------- Événements ---------- */
  evenements() {
    return `
      <section class="panel">
        <div class="ph"><h2>Événements</h2><button class="btn sm" style="margin-left:auto" onclick="openEventForm()">Créer un événement</button></div>
        <ul class="adm-list">${events.map(e => `
          <li>
            <div class="adm-date"><b>${e.at.getDate()}</b>${MONTHS[e.at.getMonth()]}</div>${eventBoss(e, 40)}
            <div><b>${e.title}</b> <span class="tag kin">${e.cat}</span>
              <p class="ash small">${e.quest ? `📜 ${escHtml(e.quest)}, ` : ''}${hhmm(e.at)}, par ${M(e.org).name}, ${e.parts.length}/${e.max} inscrits${e.wait.length ? `, ${e.wait.length} en attente` : ''}</p></div>
            ${e.wait.length ? `<button class="btn ghost sm" onclick="adminPromoteWaiting('${e.id}')">Ajouter une place</button>` : ''}
            <button class="btn ghost sm" onclick="toast('Édition (à maquetter)')">Modifier</button>
            <button class="btn ghost sm danger" onclick="adminDeleteEvent('${e.id}')">${state.confirm === 'ev-' + e.id ? 'Confirmer' : 'Supprimer'}</button>
          </li>`).join('')}
        </ul>
      </section>`;
  },

  /* ---------- Modération ---------- */
  moderation() {
    const wall = Object.entries(comments).flatMap(([pid, list]) => list.map((c, i) => ({ pid, i, ...c }))).slice(0, 8);
    return `
      <section class="panel">
        <div class="ph"><h2>Signalements</h2></div>
        ${reports.length ? `<ul class="adm-list">${reports.map((r, i) => `
          <li>
            ${av(M(r.target), 'sm')}
            <div><b>${M(r.target).name}</b> <span class="ash small">${r.where}, signalé par ${M(r.from).name} ${r.when}</span><p class="adm-quote">${escHtml(r.text)}</p></div>
            <button class="btn sm danger-fill" onclick="adminDeleteReported(${i})">Supprimer le message</button>
            <button class="btn ghost sm" onclick="adminDismissReport(${i})">Classer</button>
          </li>`).join('')}</ul>` : '<p class="ash">Aucun signalement.</p>'}
      </section>
      <section class="panel">
        <div class="ph"><h2>Taverne, derniers messages</h2><a class="more" href="#messages">Ouvrir</a></div>
        <ul class="adm-list">${guildChat.slice(-6).map((c, k) => {
          const i = guildChat.length - Math.min(6, guildChat.length) + k;
          return `<li>${av(M(c.from), 'sm')}<div><b>${M(c.from).name}</b> <span class="ash small">${c.at}</span><p>${escHtml(c.text)}</p></div><button class="linklike danger small" onclick="adminDeleteChat(${i})">Supprimer</button></li>`;
        }).join('')}</ul>
      </section>
      <section class="panel">
        <div class="ph"><h2>Commentaires récents sur les murs</h2></div>
        <ul class="adm-list">${wall.map(c => `
          <li>${av(M(c.from), 'sm')}<div><b>${M(c.from).name}</b> <span class="ash small">sur le mur de ${M(c.pid).name}, ${c.when}</span><p>${escHtml(c.text)}</p></div>
          <button class="linklike danger small" onclick="adminDeleteComment('${c.pid}', ${c.i})">Supprimer</button></li>`).join('')}
        </ul>
      </section>`;
  },

  /* ---------- Succès ---------- */
  succes() {
    return `
      <section class="panel">
        <div class="ph"><h2>Attribuer un succès</h2></div>
        <div class="adm-grant">
          <select class="input" id="grantAch">${achievements.map(a => `<option value="${a.id}">${a.icon} ${a.name}</option>`).join('')}</select>
          <select class="input" id="grantMember">${members.map(m => `<option value="${m.id}">${m.name}</option>`).join('')}</select>
          <button class="btn" onclick="adminGrant()">Attribuer</button>
        </div>
      </section>
      <section class="panel">
        <div class="ph"><h2>Succès de guilde</h2></div>
        <ul class="adm-list">${achievements.map(a => {
          const off = disabledAchievements.includes(a.id);
          return `<li class="${off ? 'off' : ''}">${stamp(a, !off)}<div><b>${a.name}</b> <span class="tag">${a.cat}</span><p class="ash small">${a.desc} ${a.pts} pts, ${a.got.length} membres.</p></div>
            <label class="switch"><input type="checkbox" ${off ? '' : 'checked'} onchange="adminToggleAch('${a.id}')"><span></span>${off ? 'Désactivé' : 'Actif'}</label></li>`;
        }).join('')}</ul>
      </section>`;
  },

  /* ---------- Réglages ---------- */
  reglages() {
    const num = (key, label, hint, min = 0, max = 999) => `
      <label class="adm-field"><span>${label}<small>${hint}</small></span>
        <input class="input" type="number" min="${min}" max="${max}" value="${settings[key]}" oninput="adminSetSetting('${key}', this.value)"></label>`;
    return `
      <section class="panel">
        <div class="ph"><h2>Classement Discord</h2></div>
        <div class="adm-fields">
          ${num('ptsPerMsg', 'Points par message', 'Message admissible dans un salon compté')}
          ${num('ptsPerVoiceHour', 'Points par heure de vocal', 'Temps passé en salon vocal')}
          ${num('msgMinChars', 'Longueur minimale', 'En caractères, pour qu’un message compte', 1, 500)}
        </div>
        <div class="adm-field"><span>Salons comptés<small>Les messages ailleurs ne rapportent rien</small></span>
          <div class="chan-list">${settings.channels.map(c => `<span class="chan">${c}<button onclick="adminRemoveChannel('${esc(c)}')" aria-label="Retirer ${c}">${ico('x', 12)}</button></span>`).join('')}
            <form onsubmit="event.preventDefault();adminAddChannel()"><input class="input sel-sm" id="chanInput" placeholder="#nouveau-salon"></form>
          </div>
        </div>
      </section>
      <section class="panel">
        <div class="ph"><h2>Solotage</h2></div>
        <div class="adm-fields">
          ${num('soloMaxTurns', 'Tours de référence', 'Au-delà, plus de bonus de rapidité', 1, 50)}
          ${num('soloTurnBonus', 'Bonus par tour gagné', 'Points par tour en dessous de la référence', 0, 50)}
          ${num('trustMaxLevel', 'Trust me jusqu’au niveau', '200 = tous les donjons, 0 = jamais', 0, 200)}
        </div>
      </section>
      <section class="panel">
        <div class="ph"><h2>Accès au portail</h2></div>
        <div class="adm-fields">
          <label class="adm-field"><span>Rôle Discord requis<small>Sans ce rôle, la connexion est refusée</small></span>
            <input class="input" value="${escHtml(settings.discordRole)}" oninput="adminSetSetting('discordRole', this.value)"></label>
          <label class="adm-field"><span>Accepter automatiquement<small>Les membres ayant le rôle entrent sans validation</small></span>
            <label class="switch"><input type="checkbox" ${settings.autoAcceptInvites ? 'checked' : ''} onchange="adminSetSetting('autoAcceptInvites', this.checked)"><span></span></label></label>
        </div>
      </section>
      <div class="adm-save"><button class="btn" onclick="adminSaveSettings()">Enregistrer les réglages</button></div>`;
  },

  /* ---------- Journal ---------- */
  journal() {
    return `<section class="panel"><div class="ph"><h2>Journal du staff</h2><span class="ash small">${plural(adminLog.length, 'action')}</span></div>${this.logList(adminLog)}</section>`;
  },

  logList(list) {
    return `<ol class="adm-log">${list.map(l => `<li>${av(M(l.who) || me, 'sm')}<div><b>${(M(l.who) || me).name}</b> ${l.what}<small>${l.when}</small></div></li>`).join('')}</ol>`;
  },

  // Toute navigation dans l'admin annule une confirmation en cours
  after() {
    document.querySelectorAll('.adm-nav a').forEach(a => a.addEventListener('click', () => { state.confirm = null; state.rejecting = null; }));
  },
};
