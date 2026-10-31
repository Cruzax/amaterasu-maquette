/* Page Atelier : demandes de forgemagie en 3 colonnes */
pages.atelier = {
  label: 'Atelier',
  icon: 'anvil',
  title: 'Atelier de forgemagie',

  columns: [
    { st: 'open',  title: 'Ouvertes',  empty: 'Aucune demande ouverte pour ce métier.' },
    { st: 'taken', title: 'En cours',  empty: 'Personne ne travaille sur ce métier en ce moment.' },
    { st: 'done',  title: 'Terminées', empty: 'Rien de terminé pour l’instant.' },
  ],

  render() {
    return `
      <div class="bar-row">
        <div class="chips">${FM_JOBS.map(j => `<button class="chip ${state.jobF === j ? 'on' : ''}" onclick="setFilter('jobF','${j}')">${j}</button>`).join('')}</div>
        <button class="btn" onclick="openFmForm()">Demander une FM</button>
      </div>
      <div class="kanban">${this.columns.map(c => this.column(c)).join('')}</div>`;
  },

  column({ st, title, empty }) {
    const list = jobs
      .map((j, i) => ({ ...j, i }))
      .filter(j => j.st === st && (state.jobF === 'Tous' || j.j === state.jobF));
    return `
      <section class="col">
        <h3>${title} <span>${list.length}</span></h3>
        ${list.length ? list.map(j => this.card(j)).join('') : `<p class="empty">${empty}</p>`}
      </section>`;
  },

  card(j) {
    const owner = j.st === 'open' ? M(j.by).name : `${M(j.by).name} pour ${M(j.to).name}`;
    return `
      <div class="job ${j.item ? 'has-item' : ''}">
        ${j.item ? `<img class="item-img job-item" src="${j.item.img}" width="56" height="56" alt="" title="${j.item.type}, niveau ${j.item.level}">` : ''}
        <span class="tag ${j.st === 'done' ? 'ok' : 'kin'}">${j.j}</span>${j.runes ? ' <span class="tag">Runes fournies</span>' : ''}
        <b>${j.t}</b>
        ${j.stats && j.stats.length ? `
          <div class="job-stats">
            ${j.stats.map(s => `
              <div class="jet ${s.target >= s.max ? 'perfect' : ''}">
                <span>${s.label}</span>
                <b>${s.target}<small> / ${s.max}</small></b>
                <i style="width:${Math.min(100, s.target / s.max * 100)}%"></i>
              </div>`).join('')}
          </div>` : ''}
        <div class="k">${kamas(j.k)} <small>kamas</small></div>
        <div class="who">${av(M(j.by), 'sm')}${owner}
          ${j.st === 'open' ? `<button class="btn sm" onclick="takeJob(${j.i})">Je m’en charge</button>` : ''}
        </div>
      </div>`;
  },
};
