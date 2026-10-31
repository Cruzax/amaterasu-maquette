/* Panneau latéral : détail d'un donjon, formulaire de solotage, détail d'un succès */

// size : false (panneau à droite), true ou 'wide' (panneau large), 'modal' (pop-up centrée), 'xl' (grande pop-up, pour Skinoskope)
function openDrawer(html, size = false) {
  const drawer = document.getElementById('drawer');
  drawer.innerHTML = `<button class="iconbtn x" onclick="closeAll()" aria-label="Fermer">${ico('x', 18)}</button>` + html;
  drawer.classList.toggle('wide', size === true || size === 'wide');
  drawer.classList.toggle('xl', size === 'xl');
  // 'modal' et 'xl' : pop-up au centre de l'écran (formulaires, éditeur de skin)
  drawer.classList.toggle('modal', size === 'modal' || size === 'xl');
  drawer.classList.add('on');
  drawer.setAttribute('aria-hidden', 'false');
  document.getElementById('scrim').classList.add('on');
}

// Ferme le panneau latéral et la palette
function closeAll() {
  const drawer = document.getElementById('drawer');
  drawer.classList.remove('on');
  drawer.setAttribute('aria-hidden', 'true');
  document.getElementById('scrim').classList.remove('on');
  document.getElementById('pal').classList.remove('on');
}

// Le profil est une page complète
function openProfile(id) {
  location.hash = 'profil/' + id;
}

/* ---------- Donjon ---------- */
function openDungeon(name) {
  const d = DJ(name);
  const recs = records[name] || [];
  const pend = pendingRecords.filter(p => p.dungeon === name);

  openDrawer(`
    <div class="dj-head">
      ${bossImg(d, 96)}
      <div>
        <h2>${d.name}</h2>
        <div class="ash">Niveau ${d.level}, boss : ${d.boss ? d.boss.name : 'inconnu'}</div>
      </div>
    </div>

    <h4>Records</h4>
    ${recs.length
      ? `<div class="list-plain">${recs.map(([id, turns, pts, achs = []], i) => `
          <div><span class="rec-who">${i + 1}. ${M(id).name} <span class="rec-achs">${achs.filter(a => djAch(d, a) && djAch(d, a).challenge).map(a => chalIcon(djAch(d, a), 18)).join('')}</span></span><span>${pts} pts, ${turns} tours</span></div>`).join('')}</div>`
      : '<p class="ash">Personne n’a encore soloté ce donjon.</p>'}

    ${pend.length ? `
      <h4>En attente de validation</h4>
      <div class="list-plain">${pend.map(p => `<div>${M(p.by).name}<span>${p.pts} pts, ${p.turns} tours</span></div>`).join('')}</div>` : ''}

    <h4>Succès du donjon <span class="ash small">${d.achievements.length}</span></h4>
    <ul class="dj-achs">${d.achievements.map(a => `
      <li>${chalIcon(a, 32)}<div><b>${achLabel(a)}</b><span>${a.challenge && CHALLENGES[a.challenge] ? CHALLENGES[a.challenge].desc : a.desc}</span></div><em>${a.pts}</em></li>`).join('')}
    </ul>

    <button class="btn block" style="margin-top:20px" onclick="openRecordForm('${esc(name)}')">Enregistrer mon solotage</button>
  `);
}

/* ---------- Formulaire de solotage ---------- */
function openRecordForm(name = '') {
  openDrawer(`
    <h2>Enregistrer un solotage</h2>
    <form class="rec-form" onsubmit="event.preventDefault();submitRecord()">
      <div class="modal-grid">
        <div class="modal-col">
      <div class="field"><span class="field-lbl">Donjon</span>${dungeonPicker('recDungeon', name)}</div>

      <div id="recDj"></div>
      <fieldset class="rec-field">
        <legend>Personnage</legend>
        <div class="rec-chars">${me.chars.map((ch, i) => `
          <label class="rec-char"><input type="radio" name="recChar" value="${i}" ${i === 0 ? 'checked' : ''}>
            ${classIcon(ch.breed, 30)}<span><b>${ch.n}</b><small>${classById(ch.breed).name}, niv. ${ch.l}</small></span>
          </label>`).join('')}
        </div>
      </fieldset>
      <label>Nombre de tours
        <input class="input" id="recTurns" type="number" min="1" max="99" value="6" oninput="updateRecordEstimate()" required>
      </label>
      <div class="rec-proof">
        <div class="rec-proof-head">
          <span>Capture de fin de combat</span>
          <button type="button" class="trust" id="recTrust" aria-pressed="false" onclick="toggleTrust()">🤝 Trust me</button>
        </div>
        <label class="rec-drop" id="recDrop">
          <input type="file" id="recProof" accept="image/*" onchange="previewProof(this)">
          <span id="recDropText">Ajouter une capture</span>
        </label>
      </div>
        </div>
        <div class="modal-col">
      <fieldset class="rec-field">
        <legend>Succès validés pendant le combat</legend>
        <div id="recAchs" class="rec-achs-pick"></div>
      </fieldset>
      <label><span>Lien vidéo <span class="ash xsmall">facultatif</span></span>
        <input class="input" id="recVideo" type="url" placeholder="https://youtube.com/…">
      </label>
      <label><span>Commentaire <span class="ash xsmall">facultatif</span></span>
        <textarea class="input area" id="recNote" maxlength="200" placeholder="Stuff, stratégie, conditions…"></textarea>
      </label>
        </div>
      </div>
      <div class="modal-foot">
        <div class="rec-estimate" id="recEstimate"></div>
        <button class="btn" type="submit">Envoyer pour validation</button>
      </div>
    </form>
  `, 'modal');
  initDungeonPicker('recDungeon', renderRecordDungeon);
  renderRecordDungeon();
  if (!name) setTimeout(() => document.querySelector('#recDungeon-djp .djp-q')?.focus(), 50);
}

// En-tête du donjon choisi + liste de ses succès à cocher
function renderRecordDungeon() {
  const d = DJ(document.getElementById('recDungeon').value);

  // Trust me seulement jusqu'au niveau réglé dans Admin > Réglages
  const trustOk = settings.trustMaxLevel > 0 && (!d || d.level <= settings.trustMaxLevel);
  const trustBtn = document.getElementById('recTrust');
  if (!trustOk && trustBtn.getAttribute('aria-pressed') === 'true') toggleTrust();
  trustBtn.hidden = !trustOk;
  document.getElementById('recDj').innerHTML = d ? `
    <div class="rec-dj">${bossImg(d, 56)}<div><b>${d.name}</b><span class="ash small">Niveau ${d.level}, ${d.boss ? d.boss.name : ''}</span></div></div>` : '';
  document.getElementById('recAchs').innerHTML = d ? d.achievements.map(a => `
    <label class="ach-check">
      <input type="checkbox" value="${a.id}" ${a.challenge ? '' : 'checked'} onchange="updateRecordEstimate()">
      ${chalIcon(a, 34)}
      <span><b>${achLabel(a)}</b><small>${a.challenge && CHALLENGES[a.challenge] ? CHALLENGES[a.challenge].desc : a.desc}</small></span>
      <em>+${a.pts}</em>
    </label>`).join('') : '';
  updateRecordEstimate();
}

const checkedAchs = () => [...document.querySelectorAll('#recAchs input:checked')].map(i => Number(i.value));

// Détail des points + comparaison avec le record actuel du donjon
function updateRecordEstimate() {
  const d = DJ(document.getElementById('recDungeon').value);
  const turns = Number(document.getElementById('recTurns').value) || 0;
  const box = document.getElementById('recEstimate');
  if (!d || !turns) { box.innerHTML = '<span class="ash small">Choisis un donjon et un nombre de tours pour voir les points.</span>'; return; }

  const achPts = checkedAchs().reduce((s, id) => s + djAch(d, id).pts, 0);
  const s = soloScore(d.level, turns, achPts);
  const best = (records[d.name] || [])[0];
  box.innerHTML = `
    <div class="est-total"><b>${s.total}</b><span>points estimés</span></div>
    <div class="est-lines">
      <span>Niveau du donjon <b>+${s.base}</b></span>
      <span>Rapidité <b>+${s.speed}</b></span>
      <span>Succès <b>+${s.ach}</b></span>
    </div>
    <div class="est-cmp">${best
      ? s.total > best[2] ? `Nouveau record du donjon, devant ${M(best[0]).name} (${best[2]})` : `Record actuel : ${best[2]} par ${M(best[0]).name}`
      : 'Premier record de ce donjon'}</div>`;
}

// « Trust me » : envoi sans capture (sur parole)
function toggleTrust() {
  const btn = document.getElementById('recTrust');
  const on = btn.getAttribute('aria-pressed') !== 'true';
  btn.setAttribute('aria-pressed', on);
  document.getElementById('recDrop').hidden = on;
}

const isTrusted = () => document.getElementById('recTrust').getAttribute('aria-pressed') === 'true';

function previewProof(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const drop = document.getElementById('recDrop');
    drop.classList.add('has-img');
    drop.style.backgroundImage = `url(${reader.result})`;
    drop.dataset.img = reader.result;
    document.getElementById('recDropText').textContent = file.name;
  };
  reader.readAsDataURL(file);
}

/* ---------- Succès de guilde ---------- */
function openAchievement(id) {
  const a = ACH(id);
  const mine = hasAch(a, me);
  openDrawer(`
    ${stamp(a, mine, 'xl')}
    <h2>${a.name}</h2>
    <div class="ash">${a.desc}</div>
    <div class="stats3" style="margin-top:18px">
      <div>Points<b>${a.pts}</b></div>
      <div>Guilde<b>${rarity(a)} %</b></div>
      <div>Toi<b>${mine ? '✓' : `${a.mine || 0}/${a.goal}`}</b></div>
    </div>
    ${mine ? `<p class="ash small">Débloqué le ${a.when}.</p>` : ''}
    <h4>Obtenu par ${plural(a.got.length, 'membre')}</h4>
    ${a.got.length
      ? `<div class="list-plain">${a.got.map(mid => `<div><a href="#profil/${mid}" onclick="closeAll()">${M(mid).name}</a><span>${M(mid).role}</span></div>`).join('')}</div>`
      : '<p class="ash">Personne ne l’a encore. Sois le premier.</p>'}
  `);
}

/* ---------- Création d'événement ---------- */
// dayKey : jour présélectionné (chaîne toDateString), sinon demain
function openEventForm(dayKey = null) {
  const d = dayKey ? new Date(dayKey) : new Date(NOW.getTime() + 864e5);
  const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  openDrawer(`
    <h2>Créer un événement</h2>
    <form class="rec-form" onsubmit="event.preventDefault();createEvent()">
      <div class="modal-grid">
        <div class="modal-col">
      <label>Titre
        <input class="input" id="evTitle" maxlength="60" placeholder="Raid Comte Harebourg, soirée succès…" oninput="this.dataset.auto=''" required>
      </label>
      <fieldset class="rec-field">
        <legend>Catégorie</legend>
        <div class="chips">${EVENT_CATEGORIES.slice(1).map((c, i) => `
          <label class="chip-radio"><input type="radio" name="evCat" value="${c}" ${i ? '' : 'checked'} onchange="onEventCat()"><span>${c}</span></label>`).join('')}
        </div>
      </fieldset>
      <div class="field"><span class="field-lbl">Donjon <span class="ash xsmall">facultatif, affiche le boss sur l’événement</span></span>${dungeonPicker('evDungeon')}</div>
      <div id="evBoss"></div>
      <label id="evQuestWrap" hidden><span>Nom de la quête</span>
        <input class="input" id="evQuest" maxlength="80" placeholder="Ex. : Le Dofus Ocre, La Quête du Dofus Vulbis…" oninput="onEventQuest()">
      </label>
        </div>
        <div class="modal-col">
      <div class="ev-row">
        <label>Date<input class="input" id="evDate" type="date" value="${iso}" required></label>
        <label>Heure<input class="input" id="evTime" type="time" value="21:00" required></label>
        <label>Places<input class="input" id="evMax" type="number" min="1" max="50" value="8" required></label>
      </div>
      <label>Description
        <textarea class="input area" id="evDesc" maxlength="300" placeholder="Niveau conseillé, stuff, vocal…"></textarea>
      </label>
        </div>
      </div>
      <div class="modal-foot">
        <label class="ev-check"><input type="checkbox" id="evJoin" checked> M’inscrire avec ${me.chars[0].n}</label>
        <button class="btn" type="submit">Créer l’événement</button>
      </div>
    </form>
  `, 'modal');
  initDungeonPicker('evDungeon', onEventDungeon);
  setTimeout(() => document.getElementById('evTitle')?.focus(), 50);
}

// Choix d'un donjon : aperçu du boss, catégorie Donjon cochée, titre proposé s'il est vide
function onEventDungeon() {
  const d = DJ(document.getElementById('evDungeon').value);
  document.getElementById('evBoss').innerHTML = d ? `
    <div class="rec-dj">${bossImg(d, 64)}<div><b>${d.boss ? d.boss.name : d.name}</b><span class="ash small">${d.name}, niveau ${d.level}</span></div></div>` : '';
  if (!d) return;
  // Une quête peut passer par un donjon : on ne change la catégorie que si ce n'est pas une quête
  if (document.querySelector('input[name=evCat]:checked').value !== 'Quête') {
    document.querySelector('input[name=evCat][value="Donjon"]').checked = true;
    onEventCat();
  }
  const title = document.getElementById('evTitle');
  if (!title.value.trim()) title.value = d.name;
}

// Catégorie Quête : affiche le champ libre « Nom de la quête »
function onEventCat() {
  const isQuest = document.querySelector('input[name=evCat]:checked').value === 'Quête';
  document.getElementById('evQuestWrap').hidden = !isQuest;
  if (isQuest) document.getElementById('evQuest').focus();
}

// Le titre suit le nom de la quête tant que l'utilisateur ne l'a pas écrit lui-même
function onEventQuest() {
  const title = document.getElementById('evTitle');
  const quest = document.getElementById('evQuest').value.trim();
  if (!title.value.trim() || title.dataset.auto === '1') {
    title.value = quest ? `Quête : ${quest}` : '';
    title.dataset.auto = '1';
  }
}

/* ---------- Demande de forgemagie ---------- */
function openFmForm() {
  openDrawer(`
    <h2>Demander une FM</h2>
    <form class="rec-form" onsubmit="event.preventDefault();createFmRequest()">
      <div class="modal-grid">
        <div class="modal-col">
      <div class="field"><span class="field-lbl">Objet à forgemager</span>${itemPicker('fmItem')}</div>
      <div id="fmPreview"><div class="fm-empty">${ico('anvil', 40)}</div></div>
        </div>
        <div class="modal-col">
      <div id="fmJets"></div>
      <fieldset class="rec-field">
        <legend>Exo souhaité</legend>
        <div class="chips">${FM_EXOS.map((x, i) => `
          <label class="chip-radio"><input type="radio" name="fmExo" value="${x}" ${i ? '' : 'checked'}><span>${x}</span></label>`).join('')}
        </div>
      </fieldset>
      <div class="ev-row fm-row">
        <label>Budget (kamas)<input class="input" id="fmBudget" type="number" min="0" step="100000" value="1000000" required></label>
        <label class="ev-check fm-runes"><input type="checkbox" id="fmRunes"> Je fournis les runes</label>
      </div>
      <label><span>Commentaire <span class="ash xsmall">facultatif</span></span>
        <textarea class="input area" id="fmNote" maxlength="250" placeholder="Jets visés, runes déjà en ma possession, délai…"></textarea>
      </label>
        </div>
      </div>
      <div class="modal-foot">
        <span></span>
        <button class="btn" type="submit">Envoyer la demande</button>
      </div>
    </form>
  `, 'modal');
  initItemPicker('fmItem', onFmItem);
  setTimeout(() => document.querySelector('#fmItem-djp .djp-q')?.focus(), 50);
}

// Objet choisi : fiche avec le métier déduit et ses jets de base, à cocher pour les monter
async function onFmItem(item) {
  const box = document.getElementById('fmPreview');
  const jets = document.getElementById('fmJets');
  if (!item) { box.innerHTML = ''; jets.innerHTML = ''; return; }
  box.innerHTML = `
    <div class="fm-item fm-item-big">
      <img class="item-img" src="${item.img}" width="72" height="72" alt="">
      <div><b>${item.name}</b><span class="ash small">${item.type}, niveau ${item.level}</span>
        ${item.job ? `<span class="tag kin">${item.job}</span>` : ''}</div>
    </div>`;
  jets.innerHTML = `<fieldset class="rec-field"><legend>Jets à respecter</legend><div id="fmStats" class="rec-achs-pick"><p class="ash small">Chargement des jets…</p></div></fieldset>`;
  try {
    const lines = await itemEffectLines(item);
    if (pickedItems.fmItem !== item) return;
    document.getElementById('fmStats').innerHTML = lines.length
      ? lines.map((l, i) => l.malus
          ? `<div class="ach-check malus"><span><b>${l.text}</b><small>Malus, ne se monte pas</small></span></div>`
          : `<label class="ach-check jet-pick"><input type="checkbox" value="${i}" data-label="${escHtml(l.label)}" data-max="${l.max}" onchange="this.closest('label').querySelector('.jet-target').disabled=!this.checked"><span><b>${l.label}</b><small>Jet de l’objet : ${l.text.replace(' ' + l.label, '')}</small></span><input class="input jet-target" type="number" min="${l.min}" max="${l.max}" value="${l.max}" disabled aria-label="Valeur visée pour ${escHtml(l.label)}"><em>/ ${l.max}</em></label>`).join('')
      : '<p class="ash small">Cet objet n’a pas de jets.</p>';
  } catch (e) {
    document.getElementById('fmStats').innerHTML = '<p class="ash small">Impossible de charger les jets depuis DofusDB.</p>';
  }
}

/* ---------- Changer de skin (Skinoskope) ---------- */
const skinUrl = ch => `${SKINOSKOPE_URL || 'https://tnulsonges.netlify.app/palette/'}?s=${lookParam(ch)}`;

function openSkinEditor(index = 0) {
  const ch = me.chars[index];
  openDrawer(`
    <h2>Changer le skin de ${ch.n}</h2>
    <div class="skin-frame"><iframe id="skino" src="${skinUrl(ch)}" title="Éditeur Skinoskope"></iframe></div>
    ${SKINOSKOPE_SAME_ORIGIN ? '' : `
      <div class="cc-paste">
        <div class="cc-paste-row">
          <a class="btn ghost sm" href="${skinUrl(ch)}" target="_blank" rel="noopener">Ouvrir en grand</a>
          <input class="input" id="skinoLink" placeholder="Colle ici le lien de ton skin" aria-label="Lien du skin Skinoskope">
        </div>
      </div>`}
    <div class="cc-foot">
      <button class="btn ghost" onclick="copySkinLink('${me.id}', ${index})">Copier le lien actuel</button>
      <span style="flex:1"></span>
      <button class="btn ghost" onclick="closeAll()">Annuler</button>
      <button class="btn" onclick="saveSkin(${index})">Enregistrer le skin</button>
    </div>
  `, 'xl');
}

function copySkinLink(memberId, index = 0) {
  const url = skinUrl(charsOf(M(memberId))[index]);
  (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject())
    .then(() => toast('Lien du skin copié'))
    .catch(() => { toast('Copie impossible, lien : ' + url.slice(0, 60) + '…'); });
}
