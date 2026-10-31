/* Page Agenda : semaine + liste d'événements en tickets */
pages.agenda = {
  label: 'Agenda',
  icon: 'cal',
  title: 'Agenda',

  render() {
    const list = events
      .filter(e => state.cat === 'Tous' || e.cat === state.cat)
      .filter(e => !state.day || e.at.toDateString() === state.day)
      .sort((a, b) => a.at - b.at);

    return `
      ${this.week()}
      <div class="bar-row">
        <div class="chips">${EVENT_CATEGORIES.map(c => `<button class="chip ${state.cat === c ? 'on' : ''}" onclick="setFilter('cat','${c}')">${c}</button>`).join('')}</div>
        <button class="btn" onclick="openEventForm()">Créer un événement</button>
      </div>
      ${state.day ? `<div class="day-filter">${this.dayLabel(new Date(state.day))} <button class="linklike" onclick="setFilter('day',null)">Voir tous les jours</button></div>` : ''}
      ${list.length ? list.map(e => this.ticket(e)).join('') : this.empty()}`;
  },

  dayLabel(d) {
    return d.toDateString() === NOW.toDateString() ? 'Aujourd’hui' : `${DAYS[d.getDay()].replace('.', '')} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
  },

  // Les 7 prochains jours à partir d'aujourd'hui ; un clic filtre sur le jour (re-clic pour tout revoir)
  week() {
    const days = [...Array(7)].map((_, i) => { const d = new Date(NOW); d.setDate(d.getDate() + i); return d; });
    return `
      <div class="week">${days.map((d, i) => {
        const key = d.toDateString();
        const evs = events.filter(e => e.at.toDateString() === key);
        return `<button class="day ${i ? '' : 'today'} ${state.day === key ? 'sel' : ''}" onclick="setFilter('day', state.day === '${key}' ? null : '${key}')" aria-pressed="${state.day === key}">
          <span class="dn">${i ? DAYS[d.getDay()] : 'Aujourd’hui'}</span>
          <span class="dd">${d.getDate()}</span>
          ${evs.length ? evs.map(e => `<span class="ev-dot">${eventBoss(e, 16)}${hhmm(e.at)} ${e.title}</span>`).join('') : '<span class="ev-none">Libre</span>'}
        </button>`;
      }).join('')}</div>`;
  },

  ticket(e) {
    const full = e.parts.length >= e.max;
    const mine = e.parts.includes(me.id);
    return `
      <article class="ticket">
        <div class="when"><b>${e.at.getDate()}</b><span>${MONTHS[e.at.getMonth()]}</span><span class="hour">${hhmm(e.at)}</span></div>
        <div class="what ${e.dungeon ? 'has-boss' : ''}">
          ${e.dungeon ? `<button class="ev-boss" onclick="openDungeon('${esc(e.dungeon)}')" title="Voir le donjon">${eventBoss(e, 96)}<span>${DJ(e.dungeon).boss.name}</span></button>` : ''}
          <span class="tag kin">${e.cat}</span>${mine ? ' <span class="tag ok">Inscrit</span>' : ''}
          <h3>${e.title}</h3>
          ${e.quest ? `<div class="ev-quest">📜 ${escHtml(e.quest)}</div>` : ''}
          ${e.dungeon ? `<div class="ev-quest">⚔️ ${e.dungeon}, niv. ${DJ(e.dungeon).level}</div>` : ''}
          <p>${e.desc}</p>
          <div class="who">
            <span class="avs">${e.parts.map(id => av(M(id), 'sm')).join('')}</span>
            Organisé par ${M(e.org).name}${e.wait.length ? `, ${e.wait.length} en attente` : ''}
          </div>
        </div>
        <div class="act">
          <div class="places"><b>${e.parts.length}/${e.max}</b> places${full ? ', complet' : ''}</div>
          <div class="meter"><i style="width:${Math.min(100, e.parts.length / e.max * 100)}%"></i></div>
          <button class="btn ${mine ? 'ghost' : ''}" onclick="toggleSignup('${e.id}')">${signupLabel(e)}</button>
        </div>
      </article>`;
  },

  empty() {
    const when = state.day ? ` ${this.dayLabel(new Date(state.day)).toLowerCase()}` : '';
    const what = state.cat === 'Tous' ? 'Aucun événement' : `Aucun événement ${state.cat}`;
    return `<div class="panel day-empty">
      <p>${what} prévu${when}${when.endsWith('.') ? '' : '.'}</p>
      <button class="btn" onclick="openEventForm(state.day)">Créer un événement${when ? ' ce jour-là' : ''}</button>
    </div>`;
  },
};
