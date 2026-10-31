/* Page Défis solotage : top 10, mes envois, catalogue des donjons (DofusDB) */
pages.defis = {
  label: 'Défis',
  icon: 'sword',
  title: 'Défis solotage',

  // Déjà fait = record validé ou solotage en attente de validation
  isDone(d) {
    return (records[d.name] || []).some(r => r[0] === me.id) || pendingRecords.some(p => p.dungeon === d.name && p.by === me.id);
  },

  filtered() {
    const [min, max] = LEVEL_TIERS[state.tier];
    const q = noAccent(state.djq);
    return DUNGEONS.filter(d => d.level >= min && d.level <= max &&
      (!q || noAccent(d.name).includes(q) || (d.boss && noAccent(d.boss.name).includes(q))) &&
      !(state.hideDone && this.isDone(d)));
  },

  render() {
    const list = this.filtered();
    return `
      <div class="defis">
        <div class="side">
          ${this.top10()}
          ${this.pending()}
        </div>
        <div class="dj-main">
          <div class="dj-toolbar bar-row">
            <span class="ash small">${plural(list.length, 'donjon')}${state.djq || state.tier !== 'Tous' ? ' trouvés' : ''}</span>
            <button class="btn" onclick="openRecordForm()">Enregistrer un solotage</button>
          </div>
          <div class="dj-scroll" id="djScroll"><div class="tiles">${list.map(d => this.tile(d)).join('') || '<p class="ash">Aucun donjon ne correspond.</p>'}</div></div>
        </div>
      </div>`;
  },

  top10() {
    return `
      <section class="panel">
        <div class="ph"><h2>Top 10</h2><span class="ash xsmall">tous donjons</span></div>
        <ol class="top10">${allRecords().slice(0, 10).map((r, i) => `
          <li><em>${i + 1}</em>${av(r.m, 'sm')}<div>${r.m.name}<small>${r.dungeon}, ${r.turns} tours</small></div><b>${r.pts}</b></li>`).join('')}
        </ol>
      </section>`;
  },

  // Mes solotages envoyés, en attente de validation
  pending() {
    const mine = pendingRecords.map((p, i) => ({ ...p, i })).filter(p => p.by === me.id);
    return `
      <section class="panel">
        <div class="ph"><h2>Mes envois</h2><span class="ash xsmall">${mine.length} en attente</span></div>
        ${mine.length ? `<ul class="pending">${mine.map(p => `
          <li>
            ${p.proof ? `<img src="${p.proof}" alt="Capture">` : bossImg(DJ(p.dungeon), 48)}
            <div>
              <b>${p.dungeon}</b>
              <small>${p.char}, ${p.turns} tours, ${p.pts} pts, ${p.when}</small>
              <span class="tag">En attente</span>${p.trust ? ' <span class="tag kin">🤝 Sur parole</span>' : ''}
              <div class="pending-act">
                <button class="linklike" onclick="validateRecord(${p.i})">Simuler la validation</button>
                <button class="linklike ash" onclick="cancelRecord(${p.i})">Annuler</button>
              </div>
            </div>
          </li>`).join('')}</ul>`
        : '<p class="ash small" style="margin:0">Aucun solotage en attente.</p>'}
      </section>`;
  },

  tile(d) {
    const recs = records[d.name] || [];
    const waiting = pendingRecords.some(p => p.dungeon === d.name && p.by === me.id);
    const color = levelColor(d.level);
    return `
      <button class="tile" onclick="openDungeon('${esc(d.name)}')">
        <div class="art" style="background:linear-gradient(150deg,${color},var(--c-ink) 85%)">
          <span class="lv"><small>niveau</small>${d.level}</span>${bossImg(d, 116)}
        </div>
        ${recs.length ? `<span class="crown tag kin">👑 ${M(recs[0][0]).name}</span>` : ''}
        ${waiting ? '<span class="waiting tag">En attente</span>' : this.isDone(d) ? '<span class="waiting tag ok">✓ Fait</span>' : ''}
        <div class="nm">${d.name}<small>${d.boss ? d.boss.name + ', ' : ''}${plural(d.achievements.length, 'succès').replace('succèss', 'succès')}${recs.length ? `, ${plural(recs.length, 'record')}` : ''}</small></div>
      </button>`;
  },

  // Recherche et filtres de niveau, affichés dans la barre du haut (à côté du titre)
  toolbar() {
    return `
      <input class="input" id="djSearch" placeholder="Donjon ou boss…" value="${escHtml(state.djq)}" aria-label="Chercher un donjon ou un boss">
      <div class="chips">${Object.keys(LEVEL_TIERS).map(t => `<button class="chip ${state.tier === t ? 'on' : ''}" onclick="setFilter('tier','${esc(t)}');pages.defis.toResults()">${t === 'Tous' ? '' : `<i class="tier-dot" style="background:${levelColor(LEVEL_TIERS[t][0])}"></i>`}${t}</button>`).join('')}</div>
      <label class="hide-done"><input type="checkbox" ${state.hideDone ? 'checked' : ''} onchange="setFilter('hideDone', this.checked);pages.defis.toResults()"> Masquer les faits</label>`;
  },

  // Nouveau filtre ou nouvelle recherche : revient en haut de la liste des donjons
  toResults() {
    const box = document.getElementById('djScroll');
    if (box) box.scrollTop = 0;
  },

  // Recherche en direct sans perdre le focus
  after() {
    const input = document.getElementById('djSearch');
    input.oninput = () => {
      state.djq = input.value;
      render();
      const fresh = document.getElementById('djSearch');
      fresh.focus();
      fresh.setSelectionRange(fresh.value.length, fresh.value.length);
      this.toResults();
    };
  },
};
