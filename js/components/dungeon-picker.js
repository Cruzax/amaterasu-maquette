/* Recherche de donjon avec suggestions (autocomplétion)
   La valeur choisie est rangée dans un <input type="hidden" id="..."> : le code qui lit
   document.getElementById(id).value continue de marcher comme avec un <select>.

   Utilisation :
     html  : dungeonPicker('recDungeon', nomPréselectionné)
     après : initDungeonPicker('recDungeon', fonctionAppeléeAuChoix) */

const DJP_MAX = 8; // nombre de suggestions affichées

function dungeonPicker(id, selected = '') {
  const d = DJ(selected);
  return `
    <div class="djp" id="${id}-djp">
      <input type="hidden" id="${id}" value="${d ? escHtml(d.name) : ''}">
      <div class="djp-field">
        <span class="djp-pic">${d ? bossImg(d, 30) : ico('sword', 18)}</span>
        <input class="djp-q" type="text" value="${d ? escHtml(d.name) : ''}" placeholder="Tape un donjon, un boss ou un niveau…"
          autocomplete="off" role="combobox" aria-expanded="false" aria-controls="${id}-list" aria-autocomplete="list">
        <button type="button" class="djp-clear" aria-label="Effacer" ${d ? '' : 'hidden'}>${ico('x', 14)}</button>
      </div>
      <ul class="djp-list" id="${id}-list" role="listbox" hidden></ul>
    </div>`;
}

// Donjons correspondant à la saisie : nom ou boss contient le texte, ou niveau égal au nombre tapé
function djpSearch(q) {
  const n = noAccent(q.trim());
  if (!n) return [...DUNGEONS].sort((a, b) => (records[b.name] ? 1 : 0) - (records[a.name] ? 1 : 0) || b.level - a.level).slice(0, DJP_MAX);
  const lvl = /^\d+$/.test(n) ? Number(n) : null;
  return DUNGEONS
    .map(d => {
      const name = noAccent(d.name), boss = d.boss ? noAccent(d.boss.name) : '';
      const score = lvl !== null ? (d.level === lvl ? 0 : Math.abs(d.level - lvl) <= 10 ? 1 : 9)
        : name.startsWith(n) || boss.startsWith(n) ? 0
        : name.includes(' ' + n) || boss.includes(' ' + n) ? 1
        : name.includes(n) || boss.includes(n) ? 2 : 9;
      return { d, score };
    })
    .filter(x => x.score < 9)
    .sort((a, b) => a.score - b.score || a.d.level - b.d.level)
    .slice(0, DJP_MAX)
    .map(x => x.d);
}

// Met en gras la partie tapée
function djpMark(text, q) {
  const n = noAccent(q.trim());
  const i = n ? noAccent(text).indexOf(n) : -1;
  return i < 0 ? escHtml(text) : `${escHtml(text.slice(0, i))}<mark>${escHtml(text.slice(i, i + n.length))}</mark>${escHtml(text.slice(i + n.length))}`;
}

function initDungeonPicker(id, onChange = () => {}) {
  const root = document.getElementById(id + '-djp');
  const hidden = document.getElementById(id);
  const q = root.querySelector('.djp-q');
  const list = root.querySelector('.djp-list');
  const pic = root.querySelector('.djp-pic');
  const clear = root.querySelector('.djp-clear');
  let items = [], active = 0;

  const open = () => {
    items = djpSearch(q.value === hidden.value ? '' : q.value);
    active = 0;
    list.innerHTML = items.length
      ? items.map((d, i) => `
          <li role="option" id="${id}-opt-${i}" class="${i === active ? 'on' : ''}" data-i="${i}" aria-selected="${i === active}">
            ${bossImg(d, 36)}
            <span><b>${djpMark(d.name, q.value)}</b><small>${d.boss ? djpMark(d.boss.name, q.value) + ', ' : ''}${plural(d.achievements.length, 'succès').replace('succèss', 'succès')}</small></span>
            <em>niv. ${d.level}</em>
          </li>`).join('')
      : '<li class="djp-none">Aucun donjon ne correspond</li>';
    list.hidden = false;
    q.setAttribute('aria-expanded', 'true');
    q.setAttribute('aria-activedescendant', items.length ? `${id}-opt-0` : '');
  };
  const close = () => { list.hidden = true; q.setAttribute('aria-expanded', 'false'); };
  const highlight = i => {
    active = (i + items.length) % items.length;
    list.querySelectorAll('li[data-i]').forEach(li => {
      const on = Number(li.dataset.i) === active;
      li.classList.toggle('on', on);
      li.setAttribute('aria-selected', on);
      if (on) li.scrollIntoView({ block: 'nearest' });
    });
    q.setAttribute('aria-activedescendant', `${id}-opt-${active}`);
  };
  const choose = d => {
    hidden.value = d ? d.name : '';
    q.value = d ? d.name : '';
    pic.innerHTML = d ? bossImg(d, 30) : ico('sword', 18);
    clear.hidden = !d;
    close();
    onChange(d);
  };

  q.addEventListener('focus', () => { q.select(); open(); });
  q.addEventListener('input', open);
  q.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); list.hidden ? open() : highlight(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(active - 1); }
    else if (e.key === 'Enter') { if (!list.hidden && items[active]) { e.preventDefault(); choose(items[active]); } }
    else if (e.key === 'Escape') { if (!list.hidden) { e.stopPropagation(); close(); q.value = hidden.value; } }
  });
  // mousedown plutôt que click : se déclenche avant que le champ perde le focus
  list.addEventListener('mousedown', e => {
    const li = e.target.closest('li[data-i]');
    if (li) { e.preventDefault(); choose(items[Number(li.dataset.i)]); }
  });
  q.addEventListener('blur', () => setTimeout(() => { close(); q.value = hidden.value; }, 120));
  clear.addEventListener('click', () => { choose(null); q.focus(); });
}
