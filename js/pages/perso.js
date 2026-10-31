/* Page Création de personnage (#perso)
   1. Classe (données et images DofusDB)  2. Apparence (Skinoskope intégré)  3. Nom et niveau */
pages.perso = {
  hidden: true,
  navKey: 'profil',
  icon: 'plus',
  title: 'Nouveau personnage',

  steps: ['Classe', 'Apparence', 'Nom'],

  render() {
    if (!state.draft) state.draft = newDraft();
    const d = state.draft;
    return `
      <ol class="stepper">${this.steps.map((s, i) => `
        <li class="${d.step === i + 1 ? 'on' : ''} ${d.step > i + 1 ? 'done' : ''}">
          <button onclick="draftStep(${i + 1})"><span>${i + 1}</span>${s}</button>
        </li>`).join('')}
      </ol>
      ${[this.stepClass, this.stepLook, this.stepName][d.step - 1].call(this, d)}`;
  },

  stepClass(d) {
    const sel = d.breed && classById(d.breed);
    return `
      <div class="cc-layout">
        <div class="cls-grid">${DOFUS_CLASSES.map(c => `
          <button class="cls-card ${d.breed === c.id ? 'on' : ''}" onclick="pickClass(${c.id})">
            <img src="${DOFUSDB.symbol(c.id)}" alt="" loading="lazy">
            <b>${c.name}</b>
            <span>${c.role}</span>
          </button>`).join('')}
        </div>
        <aside class="panel cc-side">
          ${sel ? `
            <img class="cc-logo" src="${DOFUSDB.symbol(sel.id)}" alt="">
            <h2>${sel.name}</h2>
            <div class="ash">${sel.role}</div>
            <div class="cx" title="Complexité ${sel.complexity} sur 5">Complexité ${[1, 2, 3, 4, 5].map(i => `<i class="${i <= sel.complexity ? 'on' : ''}"></i>`).join('')}</div>
            <h4>Sexe</h4>
            <div class="sex-pick">${['male', 'female'].map(s => `
              <button class="${d.sex === s ? 'on' : ''}" onclick="setDraft('sex','${s}')">
                <img src="${DOFUSDB.head(sel.id, s)}" alt="" onerror="this.style.visibility='hidden'">${s === 'male' ? 'Homme' : 'Femme'}
              </button>`).join('')}
            </div>
            <button class="btn block" style="margin-top:20px" onclick="draftStep(2)">Choisir l’apparence</button>`
          : `<p class="ash">Choisis une classe pour voir son rôle et sa complexité.</p>`}
        </aside>
      </div>`;
  },

  // Skinoskope complet dans un cadre : on lit son ?s= en passant à l'étape suivante
  stepLook(d) {
    const ch = d.look ? { ...d.look } : { breed: d.breed, sex: d.sex };
    return `
      <div class="cc-look">
        ${SKINOSKOPE_URL
          ? `<iframe id="skino" src="${SKINOSKOPE_URL}?s=${lookParam(ch)}" title="Éditeur d’apparence Skinoskope"></iframe>`
          : `<div class="cc-look-off"><img src="${DOFUSDB.symbol(d.breed)}" width="120" height="120" alt="">
              <p>L’éditeur d’apparence Skinoskope n’est disponible que sur la version locale de la maquette.<br>Le personnage gardera l’apparence par défaut de sa classe.</p></div>`}
      </div>
      ${SKINOSKOPE_URL && !SKINOSKOPE_SAME_ORIGIN ? `
        <div class="cc-paste">
          <p>Sur la version en ligne, l’apparence ne peut pas être lue toute seule. Ouvre l’éditeur en grand, fais ton skin, puis colle ici l’adresse de la page.</p>
          <div class="cc-paste-row">
            <a class="btn ghost sm" href="${SKINOSKOPE_URL}?s=${lookParam(ch)}" target="_blank" rel="noopener">Ouvrir l’éditeur en grand</a>
            <input class="input" id="skinoLink" placeholder="${SKINOSKOPE_URL}?s=…" aria-label="Lien du skin Skinoskope">
          </div>
        </div>` : ''}
      <div class="cc-foot">
        <span class="ash small">Corps, tête, couleurs, équipements : tout se règle dans l’éditeur. Ton choix est repris à l’étape suivante.</span>
        <button class="btn ghost" onclick="draftStep(1)">Retour</button>
        <button class="btn" onclick="draftStep(3)">Valider l’apparence</button>
      </div>`;
  },

  stepName(d) {
    const ch = { n: d.n || 'Nouveau personnage', breed: d.breed, sex: d.sex, ...(d.look || {}) };
    return `
      <div class="cc-name">
        <section class="panel main-char">${lookPreview(ch)}
          <div class="main-char-info">
            <img class="cls-logo" src="${DOFUSDB.symbol(d.breed)}" alt="">
            <div><h3>${classById(d.breed).name}</h3><div class="ash small">${d.sex === 'female' ? 'Femme' : 'Homme'}${d.look ? ', apparence personnalisée' : ', apparence par défaut'}</div></div>
          </div>
        </section>
        <section class="panel cc-form">
          <label>Nom du personnage<input class="input" id="ccName" value="${escHtml(d.n)}" maxlength="20" oninput="setDraft('n',this.value)" placeholder="Comme en jeu"></label>
          <label>Niveau<input class="input" type="number" min="1" max="200" value="${d.l}" oninput="setDraft('l',this.value)"></label>
          <div class="cc-actions">
            <button class="btn ghost" onclick="draftStep(2)">Modifier l’apparence</button>
            <button class="btn" onclick="saveCharacter()">Créer le personnage</button>
          </div>
        </section>
      </div>`;
  },

  after() {
    const name = document.getElementById('ccName');
    if (name) name.focus();
  },
};
