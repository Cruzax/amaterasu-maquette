/* Icônes SVG (tracés au format 24x24) */
const ICONS = {
  home: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  guild: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  sword: '<path d="M14.5 3H21v6.5L10 20.5 3.5 14Z"/><path d="m6 17-3 3M13 7l4 4"/>',
  anvil: '<path d="M3 7h13a5 5 0 0 0 5-3v6a4 4 0 0 1-4 4h-1l1 5H7l1-5H7a4 4 0 0 1-4-4Z"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  seal: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-2 7 5.5-3 5.5 3-2-7"/>',
  send: '<path d="M4 12 20 4l-6 16-3-7Z"/><path d="m11 13 9-9"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16Z"/><path d="m13 7 4 4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9Z"/>',
};

// Logo nuage de la guilde
const LOGO_SVG = '<svg viewBox="0 0 46 30"><path fill="#fff" d="M12 29a10 10 0 0 1-1.5-19.9A12 12 0 0 1 33 7.5 9 9 0 0 1 36 29Z"/></svg>';

function ico(name, size = 22) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}
