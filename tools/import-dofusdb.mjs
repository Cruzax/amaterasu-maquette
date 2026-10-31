// Importe depuis l'API DofusDB : tous les donjons, leurs succès (base + challenges), les boss
// et télécharge les images (boss, icônes de challenge) dans assets/img/.
// Génère js/data/dofusdb-dungeons.js
//
// Lancer depuis le dossier de la maquette :  node tools/import-dofusdb.mjs

import { mkdir, writeFile, access } from 'node:fs/promises';

const API = 'https://api.dofusdb.fr';
const OUT_DATA = 'js/data/dofusdb-dungeons.js';
const IMG_BOSS = 'assets/img/bosses';
const IMG_CHAL = 'assets/img/challenges';

const get = async path => {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error(`${res.status} ${path}`);
  return res.json();
};

// Récupère toutes les pages d'une liste
async function all(path) {
  const out = [];
  for (let skip = 0; ; skip += 50) {
    const sep = path.includes('?') ? '&' : '?';
    const r = await get(`${path}${sep}$limit=50&$skip=${skip}&lang=fr`);
    out.push(...r.data);
    if (out.length >= r.total || !r.data.length) return out;
  }
}

// Récupère des objets par id, par paquets
async function byIds(endpoint, ids) {
  const out = [];
  const list = [...new Set(ids)];
  for (let i = 0; i < list.length; i += 40) {
    const q = list.slice(i, i + 40).map(id => `id[$in][]=${id}`).join('&');
    const r = await get(`/${endpoint}?${q}&$limit=50&lang=fr`);
    out.push(...r.data);
  }
  return out;
}

async function download(url, file) {
  try { await access(file); return true; } catch {}
  const res = await fetch(url);
  if (!res.ok) return false;
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  return true;
}

async function pool(items, size, fn) {
  const queue = [...items];
  await Promise.all(Array.from({ length: size }, async () => { while (queue.length) await fn(queue.shift()); }));
}

const fr = v => (v && typeof v === 'object' ? v.fr : v) || '';

console.log('Donjons…');
const dungeons = await all('/dungeons');

console.log('Succès…');
const achievements = await byIds('achievements', dungeons.flatMap(d => d.achievements || []));
const achById = new Map(achievements.map(a => [a.id, a]));

// Les challenges sont référencés dans la description : [challenge,52]
const chalIds = achievements.flatMap(a => [...fr(a.description).matchAll(/\[challenge,(\d+)\]/g)].map(m => Number(m[1])));
console.log('Challenges…');
const challenges = await byIds('challenges', chalIds);

console.log('Boss…');
const bosses = await byIds('monsters', dungeons.flatMap(d => (d.bosses || []).slice(0, 1)));
const bossById = new Map(bosses.map(m => [m.id, m]));

// Images
await mkdir(IMG_BOSS, { recursive: true });
await mkdir(IMG_CHAL, { recursive: true });
const bossOk = new Set();
const chalOk = new Set();
console.log(`Images : ${bosses.length} boss, ${challenges.length} challenges…`);
// L'image d'un monstre est indexée par son gfxId (champ img), pas par son id
await pool(bosses, 8, async m => { if (await download(m.img || `${API}/img/monsters/${m.gfxId}.png`, `${IMG_BOSS}/${m.id}.png`)) bossOk.add(m.id); });
await pool(challenges, 8, async c => { if (await download(`${API}/img/challenges/${c.iconId}.png`, `${IMG_CHAL}/${c.iconId}.png`)) chalOk.add(c.id); });

// Mise en forme
const CHALLENGES = {};
for (const c of challenges) {
  CHALLENGES[c.id] = {
    name: fr(c.name),
    // {0} = monstre ciblé par le challenge, {1} = valeur variable (nombre de tours…)
    desc: fr(c.description)
      .replace(/^\{0\}/, 'Le monstre désigné').replace(/\{0\}/g, 'le monstre désigné')
      .replace(/\{1\}/g, 'X').replace(/\s+/g, ' ').trim(),
    icon: chalOk.has(c.id) ? `${IMG_CHAL}/${c.iconId}.png` : null,
  };
}

const DUNGEONS = dungeons
  .map(d => {
    const boss = bossById.get((d.bosses || [])[0]);
    const achs = (d.achievements || []).map(id => achById.get(id)).filter(Boolean).map(a => {
      const chal = (fr(a.description).match(/\[challenge,(\d+)\]/) || [])[1];
      return {
        id: a.id,
        name: fr(a.name),
        desc: fr(a.description).replace(/\[challenge,(\d+)\]/g, (_, id) => CHALLENGES[id] ? `« ${CHALLENGES[id].name} »` : 'un challenge'),
        pts: a.points,
        challenge: chal ? Number(chal) : null,
      };
    });
    return {
      id: d.id,
      name: fr(d.name),
      level: d.optimalPlayerLevel || d.minLevel || 1,
      difficulty: d.difficulty,
      boss: boss ? { id: boss.id, name: fr(boss.name), img: bossOk.has(boss.id) ? `${IMG_BOSS}/${boss.id}.png` : null } : null,
      achievements: achs,
    };
  })
  .filter(d => d.achievements.length)
  .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name, 'fr'));

const js = `/* Donjons Dofus importés de DofusDB (api.dofusdb.fr) le ${new Date().toLocaleDateString('fr-FR')}
   Régénérer : node tools/import-dofusdb.mjs
   - DUNGEONS : donjon, niveau conseillé, boss (image locale), succès (base + challenges)
   - CHALLENGES : nom, description, icône locale */
const DUNGEONS = ${JSON.stringify(DUNGEONS, null, 1)};

const CHALLENGES = ${JSON.stringify(CHALLENGES, null, 1)};
`;
await writeFile(OUT_DATA, js);
console.log(`OK : ${DUNGEONS.length} donjons, ${achievements.length} succès, ${challenges.length} challenges, ${bossOk.size} images de boss, ${chalOk.size} icônes de challenge`);
