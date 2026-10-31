/* Symboles de la DA Amaterasu (dessins originaux, inspirés de l'univers de Naruto)
   - akaCloud : nuage rouge cerclé de blanc
   - sharingan : œil rouge à tomoe (1 à 3)
   - mangekyo : œil à trois lames (l'Amaterasu d'Itachi)
   - blackFlames : flammes noires d'Amaterasu
   - torii, redMoon : décor */

const SYM_RED = '#c8202c';

function akaCloud(width = 120, stroke = '#fff') {
  return `<svg class="sym-cloud" width="${width}" viewBox="0 0 120 64" aria-hidden="true">
    <path d="M22 56c-12 0-17-12-9-19-5-13 10-22 21-15 4-13 25-15 31-2 10-8 28-2 25 13 13 2 14 23-1 23Z"
      fill="${SYM_RED}" stroke="${stroke}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M34 22c6 1 9 6 8 11M65 20c5 3 6 9 4 13M90 35c-3 1-6 4-6 8" fill="none" stroke="${stroke}" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

// Un tomoe (virgule) placé sur l'anneau intérieur
const tomoe = angle => `<g transform="rotate(${angle} 50 50) translate(50 23)">
  <circle r="6.5"/><path d="M-6.5 0a6.5 6.5 0 0 0 6 6.5c-1 6-6 9-13 9 4-3 6-8 7-15.5Z"/></g>`;

function sharingan(size = 96, count = 3, cls = '') {
  const angles = [0, 120, 240].slice(0, count);
  return `<svg class="sym-eye ${cls}" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
    <defs><radialGradient id="eyeRed" cx="40%" cy="35%"><stop offset="0" stop-color="#ef3b47"/><stop offset=".65" stop-color="#b3121f"/><stop offset="1" stop-color="#5a060d"/></radialGradient></defs>
    <circle cx="50" cy="50" r="47" fill="url(#eyeRed)" stroke="#0a0506" stroke-width="3"/>
    <circle cx="50" cy="50" r="27" fill="none" stroke="#0a0506" stroke-width="1.6" opacity=".7"/>
    <circle cx="50" cy="50" r="10" fill="#0a0506"/>
    <g class="tomoes" fill="#0a0506">${angles.map(tomoe).join('')}</g>
  </svg>`;
}

// Logo du site : Sharingan à 3 tomoe, traits épais pour rester lisible en petit
function logoEye(size = 40) {
  const bigTomoe = a => `<g transform="rotate(${a} 50 50) translate(50 24) scale(1.35)">
    <circle r="6.5"/><path d="M-6.5 0a6.5 6.5 0 0 0 6 6.5c-1 6-6 9-13 9 4-3 6-8 7-15.5Z"/></g>`;
  return `<svg class="sym-eye logo-eye" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
    <defs><radialGradient id="logoRed" cx="40%" cy="35%"><stop offset="0" stop-color="#ff4450"/><stop offset=".6" stop-color="#c8202c"/><stop offset="1" stop-color="#6a0a12"/></radialGradient></defs>
    <circle cx="50" cy="50" r="45" fill="url(#logoRed)" stroke="#0a0506" stroke-width="8"/>
    <circle cx="50" cy="50" r="26" fill="none" stroke="#0a0506" stroke-width="3.5"/>
    <circle cx="50" cy="50" r="12" fill="#0a0506"/>
    <g class="tomoes" fill="#0a0506">${[0, 120, 240].map(bigTomoe).join('')}</g>
  </svg>`;
}

// Trois lames recourbées autour de la pupille
function mangekyo(size = 96, cls = '') {
  const blade = a => `<path transform="rotate(${a} 50 50)" d="M50 50C54 36 66 22 86 20 70 28 62 40 60 54Z"/>`;
  return `<svg class="sym-eye ${cls}" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
    <defs><radialGradient id="mgkRed" cx="40%" cy="35%"><stop offset="0" stop-color="#ef3b47"/><stop offset=".65" stop-color="#b3121f"/><stop offset="1" stop-color="#5a060d"/></radialGradient></defs>
    <circle cx="50" cy="50" r="47" fill="url(#mgkRed)" stroke="#0a0506" stroke-width="3"/>
    <g class="tomoes" fill="#0a0506">${[0, 120, 240].map(blade).join('')}<circle cx="50" cy="50" r="12"/></g>
    <circle cx="50" cy="50" r="5" fill="${SYM_RED}"/>
  </svg>`;
}

// Rangée de flammes noires (largeur libre, s'étire)
function blackFlames(cls = '') {
  const tongues = [];
  for (let i = 0; i < 14; i++) {
    const x = i * 30 + (i % 2 ? 8 : 0);
    const h = 30 + ((i * 37) % 34);
    tongues.push(`<path d="M${x} 80C${x - 10} 60 ${x + 2} ${70 - h} ${x + 8} ${78 - h - 12}C${x + 10} ${70 - h + 14} ${x + 26} ${66 - h / 2} ${x + 22} 80Z"/>`);
  }
  return `<svg class="sym-flames ${cls}" viewBox="0 0 420 80" preserveAspectRatio="none" aria-hidden="true">
    <g fill="#050304" stroke="#6a0a12" stroke-width="1.5">${tongues.join('')}</g>
  </svg>`;
}

const torii = (width = 220) => `<svg class="sym-torii" width="${width}" viewBox="0 0 300 150" aria-hidden="true"><g fill="currentColor">
  <path d="M0 20Q150 0 300 20V36Q150 16 0 36Z"/><rect x="40" y="54" width="220" height="12"/>
  <rect x="62" y="30" width="16" height="120"/><rect x="222" y="30" width="16" height="120"/><rect x="142" y="36" width="14" height="22"/></g></svg>`;

// Nuage en image de fond (data URI) pour les bannières et décors
const CLOUD_URI = 'data:image/svg+xml,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="140" viewBox="0 0 240 140">
    <g transform="translate(20 20)"><path d="M22 56c-12 0-17-12-9-19-5-13 10-22 21-15 4-13 25-15 31-2 10-8 28-2 25 13 13 2 14 23-1 23Z" fill="#c8202c" stroke="#fff" stroke-width="3.5" stroke-linejoin="round"/></g>
    <g transform="translate(140 80) scale(.6)"><path d="M22 56c-12 0-17-12-9-19-5-13 10-22 21-15 4-13 25-15 31-2 10-8 28-2 25 13 13 2 14 23-1 23Z" fill="#c8202c" stroke="#fff" stroke-width="3.5" stroke-linejoin="round"/></g>
  </svg>`);
