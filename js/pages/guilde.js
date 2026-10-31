/* Page Guilde : podium + annuaire (fusion Membres / Classements)
   L'annuaire se trie en cliquant sur les en-têtes et se filtre par classe et par rôle. */
pages.guilde = {
  label: 'Guilde',
  icon: 'guild',
  title: 'Guilde',

  // Colonnes triables : clé -> { libellé, valeur de tri, sens par défaut }
  columns: {
    rank:  { label: 'Rang',     get: (m, k) => rankOf(m, k), dir: 1 },
    name:  { label: 'Membre',   get: m => noAccent(m.name), dir: 1 },
    role:  { label: 'Rôle',     get: m => ROLES.indexOf(m.role), dir: 1, hide: true },
    cls:   { label: 'Classe',   get: m => noAccent(classById(charsOf(m)[0].breed).name), dir: 1, hide: true },
    lvl:   { label: 'Niveau',   get: m => charsOf(m)[0].l, dir: -1, hide: true },
    act:   { label: 'Activité', get: (m, k) => m[k], dir: -1, hide: true },
    pts:   { label: 'Points',   get: (m, k) => m[k], dir: -1, num: true },
  },

  rows(key) {
    const col = this.columns[state.sortKey] || this.columns.rank;
    const q = noAccent(state.q);
    return members
      .filter(m => !q || noAccent(m.name).includes(q))
      .filter(m => state.fClass === 'Toutes' || charsOf(m)[0].breed === Number(state.fClass))
      .filter(m => state.fRole === 'Tous' || m.role === state.fRole)
      .sort((a, b) => {
        const va = col.get(a, key), vb = col.get(b, key);
        return (va > vb ? 1 : va < vb ? -1 : 0) * state.sortDir;
      });
  },

  // Bascule Classement / Métiers, en haut de la page
  viewSwitch() {
    return `<div class="seg gview">${[['classement', 'Classement'], ['metiers', 'Métiers']].map(([k, l]) =>
      `<button class="${state.gView === k ? 'on' : ''}" onclick="setFilter('gView','${k}')">${l}</button>`).join('')}</div>`;
  },

  render() {
    if (state.gView === 'metiers') return this.jobsView();
    const key = state.rank;
    const sorted = sortBy(key);
    const max = sorted[0][key] || 1;
    const rows = this.rows(key);
    const usedClasses = [...new Set(members.map(m => charsOf(m)[0].breed))].map(classById).sort((a, b) => a.name.localeCompare(b.name, 'fr'));

    return `
      <div class="bar-row">
        <div class="bar-left">
          ${this.viewSwitch()}
          <div class="seg">${Object.entries(RANK_TABS).map(([k, label]) => `<button class="${k === key ? 'on' : ''}" onclick="setFilter('rank','${k}')">${label}</button>`).join('')}</div>
        </div>
      </div>
      ${this.podium(sorted, key)}
      <div class="panel">
        <div class="bar-row">
          <h2>Annuaire</h2>
          <div class="dir-filters">
            <input class="input" id="guildSearch" placeholder="Chercher un membre" value="${escHtml(state.q)}">
            <select class="input" onchange="setFilter('fClass', this.value)" aria-label="Filtrer par classe">
              <option value="Toutes">Toutes les classes</option>
              ${usedClasses.map(c => `<option value="${c.id}" ${String(c.id) === String(state.fClass) ? 'selected' : ''}>${c.name}</option>`).join('')}
            </select>
            <select class="input" onchange="setFilter('fRole', this.value)" aria-label="Filtrer par rôle">
              <option value="Tous">Tous les rôles</option>
              ${ROLES.map(r => `<option ${state.fRole === r ? 'selected' : ''}>${r}</option>`).join('')}
            </select>
          </div>
        </div>
        <table class="tbl">
          <thead><tr>${Object.entries(this.columns).map(([k, c]) => `
            <th class="${c.hide ? 'hide-m' : ''} ${c.num ? 'num' : ''}" aria-sort="${state.sortKey === k ? (state.sortDir === 1 ? 'ascending' : 'descending') : 'none'}">
              <button class="sort ${state.sortKey === k ? 'on' : ''}" onclick="sortDirectory('${k}')">${c.label}<span>${state.sortKey === k ? (state.sortDir === 1 ? '▲' : '▼') : '↕'}</span></button>
            </th>`).join('')}
          </tr></thead>
          <tbody>${rows.map(m => {
            const ch = charsOf(m)[0];
            return `
            <tr class="row ${m === me ? 'mine' : ''}" onclick="openProfile('${m.id}')">
              <td class="rk">${sorted.indexOf(m) + 1}</td>
              <td><span class="who">${av(m, 'sm')}${m.name}${m === me ? ' <span class="tag">Toi</span>' : ''}</span></td>
              <td class="hide-m ash">${m.role}</td>
              <td class="hide-m"><span class="who">${classIcon(ch.breed, 24)}<span class="ash">${classById(ch.breed).name}</span></span></td>
              <td class="hide-m ash">${ch.l}</td>
              <td class="hide-m"><span class="mbar"><i style="width:${m[key] / max * 100}%"></i></span></td>
              <td class="num"><b>${m[key]}</b></td>
            </tr>`;
          }).join('') || `<tr><td colspan="7" class="ash">Aucun membre ne correspond.</td></tr>`}
          </tbody>
        </table>
      </div>`;
  },

  // Top 3 discret : une ligne de trois petites cartes, dans l ordre 1, 2, 3
  podium(sorted, key) {
    return `
      <div class="podium">${sorted.slice(0, 3).map((m, i) => `
        <button class="step ${i === 0 ? 'p1' : ''}" onclick="openProfile('${m.id}')">
          <span class="pos">${i + 1}</span>${av(m, 'sm')}
          <span class="step-name"><b>${m.name}</b><small>${m.role}</small></span>
          ${sharingan(18, 3 - i, 'pod-eye')}<span class="step-pts">${m[key]} pts</span>
        </button>`).join('')}
      </div>`;
  },

  // Qui a quoi : un bloc par métier, membres du plus haut niveau au plus bas
  jobsView() {
    const holders = n => members
      .map(m => ({ m, job: (m.jobs || []).find(j => j.n === n) }))
      .filter(x => x.job)
      .sort((a, b) => b.job.l - a.job.l);
    const shown = DOFUS_JOBS.filter(n => state.jobQ === 'Tous' || (state.jobQ === 'FM') === FM_JOB_NAMES.includes(n));
    return `
      <div class="bar-row">
        <div class="bar-left">
          ${this.viewSwitch()}
          <div class="chips">${[['Tous', 'Tous les métiers'], ['Artisanat', 'Récolte et artisanat'], ['FM', 'Forgemagie']].map(([k, l]) =>
            `<button class="chip ${state.jobQ === k ? 'on' : ''}" onclick="setFilter('jobQ','${k}')">${l}</button>`).join('')}</div>
        </div>
      </div>
      <div class="jobs-grid">${shown.map(n => {
        const list = holders(n);
        return `
          <section class="panel job-card ${list.length ? '' : 'empty'}">
            <div class="ph"><h2>${n}</h2>${FM_JOB_NAMES.includes(n) ? '<span class="tag kin">FM</span>' : ''}</div>
            ${list.length ? `<ul class="job-who">${list.map(({ m, job }) => `
              <li><a href="#profil/${m.id}">${av(m, 'sm')}<span>${m.name}</span></a>
                <span class="job-lvl ${job.l >= 200 ? 'max' : ''}">niv. ${job.l}</span>
                <i style="width:${job.l / 2}%"></i></li>`).join('')}</ul>`
              : '<p class="ash small">Personne dans la guilde.</p>'}
          </section>`;
      }).join('')}</div>`;
  },

  // Recherche en direct sans perdre le focus
  after() {
    const input = document.getElementById('guildSearch');
    if (!input) return;
    input.oninput = () => {
      state.q = input.value;
      render();
      const fresh = document.getElementById('guildSearch');
      fresh.focus();
      fresh.setSelectionRange(fresh.value.length, fresh.value.length);
    };
  },
};
