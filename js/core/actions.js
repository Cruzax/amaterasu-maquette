/* Actions de l'utilisateur (modifient les données puis re-rendent la page) */

// Change un filtre de l'état puis re-rend
function setFilter(key, value) {
  state[key] = value;
  render();
}

// Annuaire : clic sur un en-tête = tri ; re-clic = sens inverse
function sortDirectory(key) {
  if (state.sortKey === key) state.sortDir *= -1;
  else { state.sortKey = key; state.sortDir = pages.guilde.columns[key].dir; }
  render();
}

/* ---------- Événements ---------- */
function toggleSignup(id) {
  const e = events.find(x => x.id === id);

  if (e.parts.includes(me.id)) {
    e.parts = e.parts.filter(x => x !== me.id);
    toast(`Désinscrit de ${e.title}`);
  } else if (e.wait.includes(me.id)) {
    e.wait = e.wait.filter(x => x !== me.id);
    toast('Retiré de la liste d’attente');
  } else if (e.parts.length >= e.max) {
    e.wait.push(me.id);
    toast(`Ajouté à la liste d’attente de ${e.title}`);
  } else {
    e.parts.push(me.id);
    toast(`Inscrit à ${e.title} avec ${me.chars[0].n}`);
  }
  render();
}

function signupLabel(e) {
  if (e.parts.includes(me.id)) return 'Me désinscrire';
  if (e.wait.includes(me.id)) return 'Quitter l’attente';
  if (e.parts.length >= e.max) return 'Liste d’attente';
  return 'M’inscrire';
}

/* ---------- Forgemagie ---------- */
function takeJob(index) {
  jobs[index].st = 'taken';
  jobs[index].to = me.id;
  toast(`Tu as pris en charge : ${jobs[index].t}`);
  render();
}

/* ---------- Solotage ---------- */
function submitRecord() {
  const d = DJ(document.getElementById('recDungeon').value);
  const turns = Number(document.getElementById('recTurns').value);
  const ch = me.chars[Number(document.querySelector('input[name=recChar]:checked').value)];
  const proof = document.getElementById('recDrop').dataset.img || null;
  if (!d || !turns) return toast('Choisis un donjon et un nombre de tours');
  const trust = isTrusted();
  if (!proof && !trust) return toast('Ajoute une capture de fin de combat, ou coche Trust me');

  const achs = checkedAchs();
  const achPts = achs.reduce((s, id) => s + djAch(d, id).pts, 0);
  pendingRecords.unshift({
    dungeon: d.name, by: me.id, char: ch.n, turns, achs,
    pts: soloScore(d.level, turns, achPts).total, proof: trust ? null : proof, trust,
    video: document.getElementById('recVideo').value.trim(),
    note: document.getElementById('recNote').value.trim(),
    when: 'à l’instant',
  });
  closeAll();
  toast('Solotage envoyé, en attente de validation');
  render();
}

// Maquette uniquement : simule la validation par un officier
function validateRecord(index) {
  const p = pendingRecords.splice(index, 1)[0];
  const list = (records[p.dungeon] = records[p.dungeon] || []);
  list.push([p.by, p.turns, p.pts, p.achs]);
  list.sort((a, b) => b[2] - a[2]);
  toast(`Record validé : ${p.dungeon}, ${p.pts} points`);
  render();
}

function cancelRecord(index) {
  pendingRecords.splice(index, 1);
  toast('Envoi annulé');
  render();
}

/* ---------- Mur de commentaires ---------- */
function postComment(profileId) {
  const input = document.getElementById('wallInput');
  const text = input.value.trim();
  if (!text) return;
  (comments[profileId] = comments[profileId] || []).unshift({ from: me.id, text, when: 'à l’instant' });
  toast(profileId === me.id ? 'Publié sur ton mur' : `Publié sur le mur de ${M(profileId).name}`);
  render();
}

function deleteComment(profileId, index) {
  comments[profileId].splice(index, 1);
  toast('Commentaire supprimé');
  render();
}

/* ---------- Messages privés ---------- */
function openConversation(id) {
  state.conv = id;
  const c = conversations.find(x => x.id === id);
  if (c) c.unread = 0;
  if (id === GUILD_CHANNEL.id) GUILD_CHANNEL.unread = 0;
  render();
}

// Ouvre (ou crée) la conversation avec un membre
function messageMember(memberId) {
  let c = conversations.find(x => x.with === memberId);
  if (!c) {
    c = { id: 'c-' + memberId, with: memberId, unread: 0, msgs: [] };
    conversations.unshift(c);
  }
  state.conv = c.id;
  location.hash = 'messages';
  render();
}

function sendMessage() {
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if (!text) return;
  const msg = { from: me.id, text, at: 'à l’instant' };
  if (state.conv === GUILD_CHANNEL.id) guildChat.push(msg);
  else conversations.find(x => x.id === state.conv).msgs.push(msg);
  render();
  document.getElementById('msgInput').focus();
}

const unreadCount = () => GUILD_CHANNEL.unread + conversations.reduce((s, c) => s + c.unread, 0);

/* ---------- Profil ---------- */
function toggleEditProfile() {
  state.editProfile = !state.editProfile;
  if (!state.editProfile) toast('Profil enregistré');
  render();
}

function setBanner(key) {
  me.banner = key;
  render();
}

function saveBio() {
  me.bio = document.getElementById('bioInput').value.trim();
}

function toggleShowcase(id) {
  if (me.showcase.includes(id)) me.showcase = me.showcase.filter(x => x !== id);
  else if (me.showcase.length < SHOWCASE_MAX) me.showcase.push(id);
  else return toast(`Vitrine pleine : ${SHOWCASE_MAX} succès maximum`);
  render();
}

function setMainChar(index) {
  const [ch] = me.chars.splice(index, 1);
  me.chars.unshift(ch);
  toast(`${ch.n} est maintenant ton personnage principal`);
  render();
}

/* ---------- Création de personnage ---------- */
// Brouillon : step 1 classe, 2 apparence, 3 nom ; look = apparence lue dans Skinoskope
const newDraft = () => ({ step: 1, breed: null, sex: 'male', n: '', l: 200, look: null });

function startCharacter() {
  state.draft = newDraft();
  location.hash = 'perso';
}

function pickClass(breed) {
  state.draft.breed = breed;
  state.draft.look = null;
  render();
}

function setDraft(key, value) {
  state.draft[key] = value;
  if (key === 'sex') state.draft.look = null;
  if (key !== 'n' && key !== 'l') render();
}

// Lit l'apparence en cours dans Skinoskope (servi à la même adresse, donc lisible)
function readSkinoskope() {
  // 1. Lien collé par l'utilisateur (version en ligne)
  const pasted = document.getElementById('skinoLink');
  if (pasted && pasted.value.trim()) {
    try {
      const param = new URL(pasted.value.trim()).searchParams.get('s');
      const look = param && decodeLook(param);
      if (look) return look;
    } catch (e) { /* lien invalide : on tente la lecture directe */ }
    toast('Lien Skinoskope illisible, apparence par défaut');
  }
  // 2. Lecture directe de l'éditeur (même adresse, en local)
  try {
    const param = new URLSearchParams(document.getElementById('skino').contentWindow.location.search).get('s');
    return param ? decodeLook(param) : null;
  } catch (e) {
    return null; // autre adresse : apparence par défaut
  }
}

function draftStep(step) {
  const d = state.draft;
  if (step > 1 && !d.breed) return toast('Choisis d’abord une classe');
  if (d.step === 2 && step > 2) {
    const look = readSkinoskope();
    if (look) { d.look = look; d.sex = look.sex; d.breed = look.breed; }
  }
  d.step = step;
  render();
  scrollTo(0, 0);
}

function saveCharacter() {
  const d = state.draft;
  if (!d.n.trim()) return toast('Donne un nom à ton personnage');
  const ch = { n: d.n.trim(), l: Math.min(200, Math.max(1, Number(d.l) || 1)), breed: d.breed, sex: d.sex, ...(d.look || {}) };
  me.chars.push(ch);
  state.draft = null;
  toast(`${ch.n} a rejoint tes personnages`);
  location.hash = 'profil/' + me.id;
}

/* ---------- Création d'événement ---------- */
function createEvent() {
  const title = document.getElementById('evTitle').value.trim();
  if (!title) return toast('Donne un titre à l’événement');
  const [y, mo, d] = document.getElementById('evDate').value.split('-').map(Number);
  const [h, mi] = document.getElementById('evTime').value.split(':').map(Number);
  const e = {
    id: 'e' + Date.now(),
    at: new Date(y, mo - 1, d, h, mi),
    cat: document.querySelector('input[name=evCat]:checked').value,
    dungeon: document.getElementById('evDungeon').value || null,
    quest: document.querySelector('input[name=evCat]:checked').value === 'Quête' ? document.getElementById('evQuest').value.trim() || null : null,
    title,
    desc: document.getElementById('evDesc').value.trim(),
    org: me.id,
    parts: document.getElementById('evJoin').checked ? [me.id] : [],
    max: Math.max(1, Number(document.getElementById('evMax').value) || 1),
    wait: [],
  };
  events.push(e);
  feed.unshift([me.id, `a créé l’événement ${title}`, 'à l’instant']);
  closeAll();
  toast(`Événement créé : ${title}`);
  render();
}

/* ---------- Demande de forgemagie ---------- */
function createFmRequest() {
  const item = pickedItems.fmItem;
  if (!item) return toast('Choisis l’objet à forgemager');
  const exo = document.querySelector('input[name=fmExo]:checked').value;
  // Jets cochés avec leur valeur visée
  const stats = [...document.querySelectorAll('#fmStats input[type=checkbox]:checked')].map(c => {
    const max = Number(c.dataset.max);
    const target = Math.min(max, Number(c.closest('label').querySelector('.jet-target').value) || max);
    return { label: c.dataset.label, target, max };
  });
  jobs.unshift({
    t: item.name + (exo !== 'Aucun' ? `, exo ${exo}` : ''),
    j: item.job || 'Forgemage',
    k: Math.max(0, Number(document.getElementById('fmBudget').value) || 0),
    by: me.id,
    st: 'open',
    item: { id: item.id, img: item.img, type: item.type, level: item.level },
    stats,
    exo: exo !== 'Aucun' ? exo : null,
    runes: document.getElementById('fmRunes').checked,
    note: document.getElementById('fmNote').value.trim(),
  });
  feed.unshift([me.id, `a demandé une FM : ${item.name}`, 'à l’instant']);
  closeAll();
  toast(`Demande envoyée : ${item.name}`);
  if (!location.hash.startsWith('#atelier')) location.hash = 'atelier';
  else render();
}

/* ---------- Skin d'un personnage ---------- */
function saveSkin(index) {
  const look = readSkinoskope();
  if (!look) return toast(SKINOSKOPE_SAME_ORIGIN ? 'Skin introuvable dans l’éditeur' : 'Colle d’abord le lien de ton skin');
  const ch = me.chars[index];
  Object.assign(ch, look);
  closeAll();
  toast(`Nouveau skin enregistré pour ${ch.n}`);
  render();
}

/* ---------- Profil : anniversaire, personnages, métiers ---------- */
function setBday(key, value) {
  me.bday = { ...(me.bday || {}), [key]: value ? Number(value) : undefined };
}

function renameChar(index, name) {
  const n = name.trim();
  if (n) me.chars[index].n = n;
  render();
}

function setCharLevel(index, level) {
  me.chars[index].l = Math.min(200, Math.max(1, Number(level) || 1));
  render();
}

function deleteChar(index) {
  if (me.chars.length === 1) return toast('Il te faut au moins un personnage');
  confirmThen('char-' + index, () => {
    const [ch] = me.chars.splice(index, 1);
    toast(`${ch.n} a été supprimé`);
    render();
  });
}

function addJob() {
  me.jobs = me.jobs || [];
  const free = DOFUS_JOBS.find(n => !me.jobs.some(j => j.n === n));
  if (!free) return;
  me.jobs.push({ n: free, l: 1 });
  render();
}

function setJob(index, key, value) {
  me.jobs[index][key] = key === 'l' ? Math.min(200, Math.max(1, Number(value) || 1)) : value;
  render();
}

function removeJob(index) {
  const [j] = me.jobs.splice(index, 1);
  toast(`${j.n} retiré de tes métiers`);
  render();
}
