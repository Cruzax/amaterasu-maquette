/* Recherche d'objet DofusDB avec suggestions (même principe que dungeon-picker.js, mais en direct sur l'API)
   html  : itemPicker('fmItem')
   après : initItemPicker('fmItem', fonctionAppeléeAuChoix)
   L'objet choisi est dans pickedItems[id] (et son id dans <input type="hidden" id="...">). */

const pickedItems = {};

function itemPicker(id) {
  return `
    <div class="djp" id="${id}-djp">
      <input type="hidden" id="${id}" value="">
      <div class="djp-field">
        <span class="djp-pic">${ico('anvil', 18)}</span>
        <input class="djp-q" type="text" placeholder="Tape le nom de l’objet : Gelano, Coiffe du Bouftou…"
          autocomplete="off" role="combobox" aria-expanded="false" aria-controls="${id}-list" aria-autocomplete="list">
        <button type="button" class="djp-clear" aria-label="Effacer" hidden>${ico('x', 14)}</button>
      </div>
      <ul class="djp-list" id="${id}-list" role="listbox" hidden></ul>
    </div>`;
}

function initItemPicker(id, onChange = () => {}) {
  const root = document.getElementById(id + '-djp');
  const hidden = document.getElementById(id);
  const q = root.querySelector('.djp-q');
  const list = root.querySelector('.djp-list');
  const pic = root.querySelector('.djp-pic');
  const clear = root.querySelector('.djp-clear');
  let items = [], active = 0, timer = null, ticket = 0;

  const show = html => { list.innerHTML = html; list.hidden = false; q.setAttribute('aria-expanded', 'true'); };
  const close = () => { list.hidden = true; q.setAttribute('aria-expanded', 'false'); };

  const draw = () => {
    active = 0;
    show(items.length
      ? items.map((it, i) => `
          <li role="option" id="${id}-opt-${i}" class="${i ? '' : 'on'}" data-i="${i}" aria-selected="${!i}">
            <img class="item-img" src="${it.img}" width="36" height="36" alt="" loading="lazy">
            <span><b>${djpMark(it.name, q.value)}</b><small>${it.type}${it.job ? `, ${it.job}` : ''}</small></span>
            <em>niv. ${it.level}</em>
          </li>`).join('')
      : '<li class="djp-none">Aucun objet forgemageable ne correspond</li>');
    q.setAttribute('aria-activedescendant', items.length ? `${id}-opt-0` : '');
  };

  // Attend une courte pause dans la frappe avant d'interroger l'API
  const search = () => {
    clearTimeout(timer);
    const text = q.value.trim();
    if (text.length < 2) { show('<li class="djp-none">Tape au moins 2 lettres</li>'); return; }
    show('<li class="djp-none">Recherche sur DofusDB…</li>');
    timer = setTimeout(async () => {
      const mine = ++ticket;
      try {
        const res = await searchItems(text);
        if (mine !== ticket) return; // une recherche plus récente est partie
        items = res;
        draw();
      } catch (e) {
        show('<li class="djp-none">DofusDB ne répond pas, réessaie dans un instant</li>');
      }
    }, 220);
  };

  const highlight = i => {
    if (!items.length) return;
    active = (i + items.length) % items.length;
    list.querySelectorAll('li[data-i]').forEach(li => {
      const on = Number(li.dataset.i) === active;
      li.classList.toggle('on', on);
      li.setAttribute('aria-selected', on);
      if (on) li.scrollIntoView({ block: 'nearest' });
    });
    q.setAttribute('aria-activedescendant', `${id}-opt-${active}`);
  };

  const choose = it => {
    pickedItems[id] = it || null;
    hidden.value = it ? it.id : '';
    q.value = it ? it.name : '';
    pic.innerHTML = it ? `<img class="item-img" src="${it.img}" width="30" height="30" alt="">` : ico('anvil', 18);
    clear.hidden = !it;
    close();
    onChange(it);
  };

  q.addEventListener('focus', () => { if (q.value && !hidden.value) search(); });
  q.addEventListener('input', search);
  q.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); highlight(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(active - 1); }
    else if (e.key === 'Enter') { if (!list.hidden && items[active]) { e.preventDefault(); choose(items[active]); } }
    else if (e.key === 'Escape') { if (!list.hidden) { e.stopPropagation(); close(); } }
  });
  list.addEventListener('mousedown', e => {
    const li = e.target.closest('li[data-i]');
    if (li) { e.preventDefault(); choose(items[Number(li.dataset.i)]); }
  });
  q.addEventListener('blur', () => setTimeout(() => { close(); if (pickedItems[id]) q.value = pickedItems[id].name; }, 120));
  clear.addEventListener('click', () => { choose(null); q.focus(); });
}
