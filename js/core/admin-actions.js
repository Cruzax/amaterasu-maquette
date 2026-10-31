/* Actions du panneau admin. Chaque action est inscrite au journal (adminLog). */

function logAdmin(what) {
  adminLog.unshift({ who: me.id, what, when: 'à l’instant' });
}

// Confirmation en deux clics (pas de boîte de dialogue navigateur)
function confirmThen(key, fn) {
  if (state.confirm === key) { state.confirm = null; fn(); return; }
  state.confirm = key;
  render();
}

/* ---------- Solotages ---------- */
function adminValidate(i) {
  const p = pendingRecords[i];
  validateRecord(i);
  logAdmin(`a validé le record de ${M(p.by).name} (${p.dungeon}, ${p.pts} pts)`);
}

function adminReject(i, reason) {
  const p = pendingRecords.splice(i, 1)[0];
  state.rejecting = null;
  logAdmin(`a refusé le record de ${M(p.by).name} (${p.dungeon}) : ${reason}`);
  toast(`Record refusé : ${reason}`);
  render();
}

function adminAskProof(i) {
  const p = pendingRecords[i];
  p.askedProof = true;
  logAdmin(`a demandé une preuve à ${M(p.by).name} (${p.dungeon})`);
  toast(`Preuve demandée à ${M(p.by).name}`);
  render();
}

/* ---------- Membres ---------- */
function adminSetRole(id, role) {
  const m = M(id);
  m.role = role;
  logAdmin(`a passé ${m.name} ${role}`);
  toast(`${m.name} est maintenant ${role}`);
  render();
}

function adminResetPoints(id) {
  confirmThen('reset-' + id, () => {
    const m = M(id);
    m.msg = 0; m.voc = 0; m.pts = 0;
    logAdmin(`a remis à zéro les points de ${m.name}`);
    toast(`Points de ${m.name} remis à zéro`);
    render();
  });
}

function adminKick(id) {
  confirmThen('kick-' + id, () => {
    const m = M(id);
    members.splice(members.indexOf(m), 1);
    logAdmin(`a retiré ${m.name} de la guilde`);
    toast(`${m.name} a été retiré du portail`);
    render();
  });
}

function adminAccept(i) {
  const r = accessRequests.splice(i, 1)[0];
  const n = members.length;
  members.push({
    id: r.discord, name: r.name, role: 'Membre', msg: 0, voc: 0, pts: 0,
    color: AVATAR_COLORS[n % AVATAR_COLORS.length], cls: CLASSES[n % CLASSES.length], lvl: 200,
  });
  logAdmin(`a accepté la demande d’accès de ${r.name}`);
  toast(`${r.name} a rejoint le portail`);
  render();
}

function adminDeny(i) {
  const r = accessRequests.splice(i, 1)[0];
  logAdmin(`a refusé la demande d’accès de ${r.name}`);
  toast(`Demande de ${r.name} refusée`);
  render();
}

/* ---------- Événements ---------- */
function adminDeleteEvent(id) {
  confirmThen('ev-' + id, () => {
    const e = events.find(x => x.id === id);
    events.splice(events.indexOf(e), 1);
    logAdmin(`a supprimé l’événement ${e.title}`);
    toast(`Événement supprimé : ${e.title}`);
    render();
  });
}

function adminPromoteWaiting(id) {
  const e = events.find(x => x.id === id);
  if (!e.wait.length) return;
  e.max += 1;
  e.parts.push(e.wait.shift());
  logAdmin(`a ajouté une place à ${e.title}`);
  toast(`Une place ajoutée, ${M(e.parts[e.parts.length - 1]).name} passe inscrit`);
  render();
}

/* ---------- Réglages ---------- */
function adminSetSetting(key, value) {
  settings[key] = typeof settings[key] === 'number' ? Number(value) : value;
}

function adminSaveSettings() {
  logAdmin('a modifié les réglages de la guilde');
  toast('Réglages enregistrés');
  render();
}

function adminAddChannel() {
  const input = document.getElementById('chanInput');
  let v = input.value.trim().replace(/\s+/g, '-').toLowerCase();
  if (!v) return;
  if (!v.startsWith('#')) v = '#' + v;
  if (!settings.channels.includes(v)) settings.channels.push(v);
  render();
}

function adminRemoveChannel(c) {
  settings.channels = settings.channels.filter(x => x !== c);
  render();
}

/* ---------- Modération ---------- */
function adminDismissReport(i) {
  reports.splice(i, 1);
  toast('Signalement classé');
  render();
}

function adminDeleteReported(i) {
  const r = reports.splice(i, 1)[0];
  logAdmin(`a supprimé un message de ${M(r.target).name} (${r.where})`);
  toast('Message supprimé');
  render();
}

function adminDeleteComment(profileId, index) {
  const c = comments[profileId].splice(index, 1)[0];
  logAdmin(`a supprimé un commentaire de ${M(c.from).name} sur le mur de ${M(profileId).name}`);
  toast('Commentaire supprimé');
  render();
}

function adminDeleteChat(index) {
  const c = guildChat.splice(index, 1)[0];
  logAdmin(`a supprimé un message de ${M(c.from).name} dans la Taverne`);
  toast('Message supprimé');
  render();
}

/* ---------- Succès ---------- */
function adminToggleAch(id) {
  const i = disabledAchievements.indexOf(id);
  if (i >= 0) disabledAchievements.splice(i, 1); else disabledAchievements.push(id);
  logAdmin(`a ${i >= 0 ? 'réactivé' : 'désactivé'} le succès ${ACH(id).name}`);
  render();
}

function adminGrant() {
  const a = ACH(document.getElementById('grantAch').value);
  const m = M(document.getElementById('grantMember').value);
  if (!a || !m) return toast('Choisis un succès et un membre');
  if (a.got.includes(m.id)) return toast(`${m.name} a déjà ${a.name}`);
  a.got.push(m.id);
  recentUnlocks.unshift([m.id, a.id, 'à l’instant']);
  logAdmin(`a attribué le succès ${a.name} à ${m.name}`);
  toast(`${a.name} attribué à ${m.name}`);
  render();
}
