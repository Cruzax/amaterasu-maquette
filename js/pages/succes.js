/* Page Succès (#succes) : progression perso, tampons par catégorie, raretés */
pages.succes = {
  label: 'Succès',
  icon: 'seal',
  title: 'Succès',

  render() {
    const mine = achievements.filter(a => hasAch(a, me));
    const total = achievements.reduce((s, a) => s + a.pts, 0);
    const list = achievements
      .filter(a => state.achCat === 'Tous' || a.cat === state.achCat)
      .filter(a => state.achShow === 'tous' || (state.achShow === 'obtenus') === hasAch(a, me));

    return `
      <div class="ach-layout">
        <div>
          <section class="panel ach-summary">
            <div class="ach-score">
              <b>${achPoints(me)}</b><span>points de succès sur ${total}</span>
            </div>
            <div class="ach-progress">
              <div class="ash small">${mine.length} succès débloqués sur ${achievements.length}</div>
              <div class="meter"><i style="width:${mine.length / achievements.length * 100}%"></i></div>
              <div class="ach-cats">${ACH_CATEGORIES.slice(1).map(cat => {
                const all = achievements.filter(a => a.cat === cat);
                return `<span>${cat} <b>${all.filter(a => hasAch(a, me)).length}/${all.length}</b></span>`;
              }).join('')}</div>
            </div>
          </section>

          <div class="bar-row">
            <div class="chips">${ACH_CATEGORIES.map(c => `<button class="chip ${state.achCat === c ? 'on' : ''}" onclick="setFilter('achCat','${c}')">${c}</button>`).join('')}</div>
            <div class="seg">${[['tous', 'Tous'], ['obtenus', 'Obtenus'], ['a-faire', 'À faire']].map(([k, l]) => `<button class="${state.achShow === k ? 'on' : ''}" onclick="setFilter('achShow','${k}')">${l}</button>`).join('')}</div>
          </div>

          <div class="ach-grid">${list.length ? list.map(a => this.card(a)).join('') : '<p class="ash">Aucun succès ici.</p>'}</div>
        </div>

        <aside class="ach-side">
          ${this.recent()}
          ${this.rarest()}
          ${this.hunters()}
        </aside>
      </div>`;
  },

  card(a) {
    const got = hasAch(a, me);
    const pct = Math.min(100, (a.mine || 0) / a.goal * 100);
    return `
      <button class="ach ${got ? 'got' : ''}" onclick="openAchievement('${a.id}')">
        ${stamp(a, got, 'lg')}
        <div class="ach-txt">
          <b>${a.name}</b>
          <span>${a.desc}</span>
          ${got
            ? `<small class="ok">Débloqué le ${a.when}</small>`
            : `<div class="meter thin"><i style="width:${pct}%"></i></div><small>${a.mine || 0} / ${a.goal}</small>`}
        </div>
        <div class="ach-meta"><b>${a.pts}</b><span>${rarity(a)} %</span></div>
      </button>`;
  },

  recent() {
    return `
      <section class="panel">
        <div class="ph"><h2>Récemment débloqués</h2></div>
        <ul class="ach-mini">${recentUnlocks.map(([mid, aid, when]) => `
          <li>${stamp(ACH(aid), true)}<div><a href="#profil/${mid}"><b>${M(mid).name}</b></a> a obtenu ${ACH(aid).name}<small>${when}</small></div></li>`).join('')}
        </ul>
      </section>`;
  },

  rarest() {
    const list = [...achievements].sort((a, b) => a.got.length - b.got.length).slice(0, 4);
    return `
      <section class="panel">
        <div class="ph"><h2>Les plus rares</h2></div>
        <ul class="ach-mini">${list.map(a => `
          <li><button class="linklike" onclick="openAchievement('${a.id}')">${stamp(a, hasAch(a, me))}</button><div><b>${a.name}</b><small>${a.got.length ? `${rarity(a)} % de la guilde` : 'Personne ne l’a encore'}</small></div></li>`).join('')}
        </ul>
      </section>`;
  },

  hunters() {
    const list = [...members].sort((a, b) => achPoints(b) - achPoints(a)).slice(0, 5);
    return `
      <section class="panel">
        <div class="ph"><h2>Chasseurs de succès</h2></div>
        <div class="podium-mini">${list.map((m, i) => `<div><em>${i + 1}</em>${av(m, 'sm')}<a href="#profil/${m.id}">${m.name}</a><b>${achPoints(m)} pts</b></div>`).join('')}</div>
      </section>`;
  },
};
