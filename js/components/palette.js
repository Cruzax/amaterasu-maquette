/* Palette de recherche rapide (Ctrl+K) : pages, membres, donjons */

function paletteItems() {
  return [
    ...Object.entries(pages).filter(([, p]) => p.label).map(([key, p]) => ({ t: p.label, s: 'Page', go: () => { location.hash = key; } })),
    ...achievements.map(a => ({ t: a.name, s: 'Succès', go: () => openAchievement(a.id) })),
    ...members.map(m => ({ t: m.name, s: 'Membre', go: () => openProfile(m.id) })),
    ...DUNGEONS.map(d => ({ t: d.name, s: `Donjon niv. ${d.level}`, go: () => openDungeon(d.name) })),
  ];
}

function drawPalette() {
  const input = document.getElementById('palIn');
  const list = document.getElementById('palList');
  const q = input.value.toLowerCase();
  const items = paletteItems().filter(i => i.t.toLowerCase().includes(q)).slice(0, 8);

  list.innerHTML = items
    .map((i, n) => `<li><a href="#" class="${n ? '' : 'sel'}" data-n="${n}">${i.t}<small>${i.s}</small></a></li>`)
    .join('');
  list.querySelectorAll('a').forEach(a => {
    a.onclick = e => { e.preventDefault(); closeAll(); items[a.dataset.n].go(); };
  });
  list._items = items;
}

function openPalette() {
  closeAll();
  document.getElementById('pal').classList.add('on');
  document.getElementById('scrim').classList.add('on');
  const input = document.getElementById('palIn');
  input.value = '';
  drawPalette();
  setTimeout(() => input.focus(), 10);
}

function initPalette() {
  const input = document.getElementById('palIn');
  input.oninput = drawPalette;
  input.onkeydown = e => {
    const first = document.getElementById('palList')._items[0];
    if (e.key === 'Enter' && first) { closeAll(); first.go(); }
  };
  document.getElementById('openPal').onclick = openPalette;

  addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openPalette(); }
    if (e.key === 'Escape') closeAll();
  });
}
