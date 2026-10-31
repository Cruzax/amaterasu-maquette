/* Point d'entrée : routeur par #hash et rendu de la page courante
   Format des adresses : #page ou #page/argument (ex. #profil/kaze) */

const DEFAULT_PAGE = 'accueil';

function currentRoute() {
  const [key, ...rest] = location.hash.slice(1).split('/');
  return pages[key] ? { key, arg: rest.join('/') } : { key: DEFAULT_PAGE, arg: '' };
}

// Nuages qui traversent tout l'écran : taille, hauteur, vitesse et départ au hasard
const BACKDROP_CLOUDS = 9;
function backdropClouds(n) {
  const rnd = (min, max) => min + Math.random() * (max - min);
  return Array.from({ length: n }, () => {
    const dur = rnd(70, 160);
    return `<div class="bd-cloud" style="top:${rnd(2, 88).toFixed(1)}vh;opacity:${rnd(.08, .2).toFixed(2)};animation-duration:${dur.toFixed(0)}s;animation-delay:-${rnd(0, dur).toFixed(0)}s">${akaCloud(Math.round(rnd(70, 200)))}</div>`;
  }).join('');
}

const adminTodo = () => pendingRecords.length + accessRequests.length + reports.length;

function renderRail(activeKey) {
  document.getElementById('rail').innerHTML =
    `<a class="seal" href="#accueil" aria-label="Accueil Amaterasu">${logoEye(42)}</a>` +
    Object.entries(pages)
      .filter(([, p]) => !p.hidden)
      .map(([key, p]) =>
        `<a href="#${key}" class="${key === activeKey ? 'on' : ''}" ${key === activeKey ? 'aria-current="page"' : ''}>${ico(p.icon)}${p.label}</a>`
      ).join('') +
    '<div class="spacer"></div>' +
    // Onglet Admin (réservé au staff dans la vraie appli), avec le nombre de choses à traiter
    `<a href="#admin" class="${activeKey === 'admin' ? 'on' : ''}">${ico('gear')}Admin${adminTodo() ? `<span class="rail-count">${adminTodo()}</span>` : ''}</a>` +
    // Onglet Profil, tout en bas
    `<a href="#profil/${me.id}" class="rail-me ${activeKey === 'profil' ? 'on' : ''}" ${activeKey === 'profil' ? 'aria-current="page"' : ''}>${av(me, 'sm')}Profil</a>`;
}

function renderTopbar() {
  const n = unreadCount();
  document.getElementById('msgBtn').innerHTML = ico('mail', 18) + (n ? `<span class="count">${n}</span>` : '');
}

function render() {
  const { key, arg } = currentRoute();
  const page = pages[key];
  renderRail(typeof page.navKey === 'function' ? page.navKey(arg) : page.navKey || key);
  renderTopbar();
  document.getElementById('ptitle').textContent = typeof page.title === 'function' ? page.title(arg) : page.title;
  // Outils propres à la page (recherche, filtres) affichés dans la barre du haut
  document.getElementById('pageTools').innerHTML = page.toolbar ? page.toolbar(arg) : '';
  document.getElementById('view').innerHTML = page.render(arg);
  if (page.after) page.after(arg);
}

function init() {
  document.getElementById('backdrop').innerHTML = `
    <div class="bd-moon"></div>
    ${backdropClouds(BACKDROP_CLOUDS)}
    <div class="bd-torii">${torii(260)}</div>`;

  const meBtn = document.getElementById('meBtn');
  meBtn.innerHTML = `${av(me, 'sm')}<div><b>${me.name}</b><small>${me.role}</small></div>`;
  meBtn.onclick = () => { location.hash = 'profil/' + me.id; };
  document.getElementById('msgBtn').onclick = () => { location.hash = 'messages'; };

  document.getElementById('scrim').onclick = closeAll;
  initPalette();

  addEventListener('hashchange', () => { closeAll(); state.editProfile = false; render(); scrollTo(0, 0); });
  render();
}

init();
