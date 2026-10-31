/* Appels en direct à l'API DofusDB (objets pour la forgemagie)
   Les objets ne sont pas importés en local (environ 20 000) : on les cherche à la demande. */

const DOFUSDB_API = 'https://api.dofusdb.fr';

// Types d'équipement forgemageables -> métier de forgemagie
const FM_TYPES = {
  1: 'Joaillomage',   // Amulette
  9: 'Joaillomage',   // Anneau
  10: 'Cordomage',    // Ceinture
  11: 'Cordomage',    // Bottes
  16: 'Costumage',    // Chapeau
  17: 'Costumage',    // Cape
  82: 'Façomage',     // Bouclier
  2: 'Sculptemage',   // Arc
  3: 'Sculptemage',   // Baguette
  4: 'Sculptemage',   // Bâton
  5: 'Forgemage',     // Dague
  6: 'Forgemage',     // Épée
  7: 'Forgemage',     // Marteau
  8: 'Forgemage',     // Pelle
  19: 'Forgemage',    // Hache
  21: 'Forgemage',    // Pioche
  22: 'Forgemage',    // Faux
  271: 'Forgemage',   // Lance
};

// Exos proposés dans le formulaire
const FM_EXOS = ['Aucun', 'PA', 'PM', 'PO', 'Invocation'];

const dbCache = new Map();
async function dbGet(path) {
  if (!dbCache.has(path)) {
    dbCache.set(path, fetch(DOFUSDB_API + path).then(r => (r.ok ? r.json() : Promise.reject(r.status))).catch(e => { dbCache.delete(path); throw e; }));
  }
  return dbCache.get(path);
}

// Objet réduit à ce dont la maquette a besoin
const slimItem = i => ({
  id: i.id,
  name: i.name.fr,
  level: i.level,
  typeId: i.typeId,
  type: i.type ? i.type.name.fr : '',
  img: i.img,
  effects: i.effects || [],
  job: FM_TYPES[i.typeId] || null,
});

// Recherche : l'API cherche le mot le plus long, on filtre ensuite sur tous les mots tapés
async function searchItems(q) {
  const words = noAccent(q).split(/\s+/).filter(w => w.length > 1);
  if (!words.length) return [];
  const key = [...words].sort((a, b) => b.length - a.length)[0];
  const types = Object.keys(FM_TYPES).map(t => `typeId[$in][]=${t}`).join('&');
  const r = await dbGet(`/items?${types}&slug.fr[$search]=${encodeURIComponent(key)}&$limit=50&$sort[level]=-1&lang=fr`);
  return r.data.map(slimItem).filter(i => words.every(w => noAccent(i.name).includes(w))).slice(0, 8);
}

// Texte lisible des effets d'un objet (« 16 à 20 Force », « -1 PM »)
async function itemEffectLines(item) {
  if (!item.effects.length) return [];
  const ids = [...new Set(item.effects.map(e => e.effectId))];
  const r = await dbGet(`/effects?${ids.map(i => `id[$in][]=${i}`).join('&')}&$limit=50&lang=fr`);
  const byId = new Map(r.data.map(e => [e.id, e]));
  return item.effects.map(e => {
    const def = byId.get(e.effectId);
    // bonusType 0 = effet technique (durabilité Ankarton…), pas un jet
    if (!def || !def.description || def.bonusType === 0) return null;
    // « #1{{~1~2 à }}#2 Force » -> « Force » ; {{~ps}} = pluriel (Pods, Résistances…)
    const label = def.description.fr.replace(/#1\{\{?[^}]*\}\}?#2\s*/, '').replace(/#\d/g, '')
      .replace(/\{\{~ps\}\}/g, 's').replace(/\{\{~[a-z]+\}\}/g, '').trim();
    const max = Math.max(e.from, e.to);
    const value = e.to > 0 && e.to !== e.from ? `${e.from} à ${e.to}` : `${e.from}`;
    return { text: `${def.bonusType === -1 ? '-' : ''}${value} ${label}`, label, min: e.from, max, malus: def.bonusType === -1, characteristic: e.characteristic };
  }).filter(Boolean);
}
