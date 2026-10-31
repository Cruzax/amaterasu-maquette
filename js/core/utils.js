/* Fonctions utilitaires partagées */

// Retrouver un membre par son id (un membre retiré devient « Ancien membre » dans les messages, records…)
const M = id => members.find(m => m.id === id) ||
  { id, name: 'Ancien membre', role: 'Ancien', color: '#3a3335', msg: 0, voc: 0, pts: 0, cls: 'Iop', lvl: 1, gone: true };

// Avatar rond avec l'initiale
const av = (m, size = '') =>
  `<span class="av ${size}" style="background:${m.color}" title="${m.name}">${m.name[0]}</span>`;

// Formatage
const kamas = n => n.toLocaleString('fr-FR');
const fmtDay = d => `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
const hhmm = d => d.toTimeString().slice(0, 5).replace(':', 'h');
const plural = (n, word) => `${n} ${word}${n > 1 ? 's' : ''}`;

// Échapper une apostrophe pour un attribut onclick, et le HTML saisi par l'utilisateur
const esc = s => s.replace(/'/g, "\\'");
const escHtml = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Classement
const sortBy = key => [...members].sort((a, b) => b[key] - a[key]);
const rankOf = (m, key = 'pts') => sortBy(key).indexOf(m) + 1;

// Tous les records à plat, triés par points
function allRecords() {
  return Object.entries(records)
    .flatMap(([dungeon, list]) => list.map(([id, turns, pts, achs = []]) => ({ dungeon, m: M(id), turns, pts, achs })))
    .sort((a, b) => b.pts - a.pts);
}

/* ---------- Donjons (DofusDB) ---------- */
const DJ = name => DUNGEONS.find(d => d.name === name);
const djAch = (d, id) => d.achievements.find(a => a.id === id);

// Nom court d'un succès de donjon : « Minotot (Duo) » -> « Duo », le succès de base -> « Vaincre le boss »
const achLabel = a => (a.challenge ? (a.name.match(/\(([^)]+)\)\s*$/) || [, a.name])[1] : 'Vaincre le boss');


// Image du boss (locale), avec repli sur l'initiale
const bossImg = (d, size = 48) => d.boss && d.boss.img
  ? `<img class="boss-img" src="${d.boss.img}" width="${size}" height="${size}" alt="${d.boss.name}" loading="lazy">`
  : `<span class="boss-img" style="width:${size}px;height:${size}px">${d.name[0]}</span>`;

// Boss du donjon lié à un événement (rien si l'événement n'a pas de donjon)
const eventBoss = (e, size = 48) => (e.dungeon && DJ(e.dungeon) ? bossImg(DJ(e.dungeon), size) : '');

// Icône du challenge d'un succès
const chalIcon = (a, size = 28) => {
  const c = a.challenge && CHALLENGES[a.challenge];
  return c && c.icon
    ? `<img class="chal-ico" src="${c.icon}" width="${size}" height="${size}" alt="" loading="lazy">`
    : `<i class="chal-ico base" style="width:${size}px;height:${size}px">⚔</i>`;
};

/* ---------- Classes et personnages ---------- */
const noAccent = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const classById = id => DOFUS_CLASSES.find(c => c.id === id);
const classByName = name => DOFUS_CLASSES.find(c => noAccent(c.name) === noAccent(name));

// Personnages d'un membre (un perso par défaut si non renseigné)
function charsOf(m) {
  if (m.chars) return m.chars;
  const i = members.indexOf(m);
  return [{ n: m.name.split('-')[0], breed: classByName(m.cls).id, sex: i % 2 ? 'female' : 'male', l: m.lvl }];
}

// Paramètre ?s= de Skinoskope (lz-string + JSON)
function lookParam(ch) {
  const cls = classById(ch.breed);
  const colors = ch.colors || cls[ch.sex].colors;
  return LZString.compressToEncodedURIComponent(JSON.stringify({
    b: ch.breed,
    s: ch.sex === 'female' ? 1 : 0,
    h: ch.head || 0,
    c: colors.map(c => c.slice(1).toLowerCase()).join('.'),
    p: 0,
    bd: 0,
  }));
}

function decodeLook(param) {
  try {
    const o = JSON.parse(LZString.decompressFromEncodedURIComponent(param));
    return {
      breed: o.b,
      sex: o.s === 1 ? 'female' : 'male',
      head: o.h,
      colors: String(o.c).split('.').map(c => '#' + c.toUpperCase()),
    };
  } catch (e) {
    return null;
  }
}

// Vignette de classe (symbole DofusDB)
const classIcon = (breed, size = 36) =>
  `<img class="cls-ico" src="${DOFUSDB.symbol(breed)}" width="${size}" height="${size}" alt="${classById(breed).name}" loading="lazy">`;

// Aperçu rendu par Skinoskope, recadré sur le personnage (non interactif)
// Sans Skinoskope (version en ligne) : grand symbole de la classe à la place du rendu
const lookPreview = ch => SKINOSKOPE_URL
  ? `<div class="look-crop"><iframe src="${SKINOSKOPE_URL}?s=${lookParam(ch)}" tabindex="-1" title="Aperçu de ${ch.n}" loading="lazy"></iframe></div>`
  : `<div class="look-crop look-fallback"><img src="${DOFUSDB.symbol(ch.breed)}" width="150" height="150" alt="${classById(ch.breed).name}"></div>`;

// Succès
const ACH = id => achievements.find(a => a.id === id);
const hasAch = (a, m) => a.got.includes(m.id);
const rarity = a => Math.round(a.got.length / members.length * 100);
const achPoints = m => achievements.filter(a => hasAch(a, m)).reduce((s, a) => s + a.pts, 0);

// Tampon (hanko) d'un succès
const stamp = (a, unlocked, size = '') =>
  `<span class="stamp ${size} ${unlocked ? 'on' : ''} ${rarity(a) <= 15 ? 'rare' : ''}" title="${a.name}">${a.icon}</span>`;
