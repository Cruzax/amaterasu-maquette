/* Événements fictifs */
const events = [
  {
    id: 'e1', at: new Date(2026, 9, 31, 17, 0), cat: 'Donjon', dungeon: 'Salle du Minotot',
    title: 'Session solotage Minotot',
    desc: 'On lance tous la Salle du Minotot en solo à la même heure, puis on compare les scores.',
    org: 'yoru', parts: ['yoru', 'akane', 'ren'], max: 12, wait: [],
  },
  {
    id: 'e2', at: new Date(2026, 10, 2, 21, 0), cat: 'Raid', dungeon: 'Donjon du Comte Harebourg',
    title: 'Raid Comte Harebourg',
    desc: 'Perso 200 conseillé, bonne résistance eau. Vocal obligatoire.',
    org: 'akane', parts: ['akane', 'tsuki', 'mizu', 'hoshi', 'yoru', 'kitsu', 'shiro', 'raiden'], max: 8, wait: ['sora', 'kuro'],
  },
  {
    id: 'e5', at: new Date(2026, 10, 4, 20, 0), cat: 'Quête', quest: 'Le Dofus Ocre',
    title: 'Quête : Le Dofus Ocre',
    desc: 'On avance ensemble sur les étapes de capture d’âmes. Pierre d’âme pleine conseillée.',
    org: 'mizu', parts: ['mizu', 'hoshi', 'kaze'], max: 6, wait: [],
  },
  {
    id: 'e3', at: new Date(2026, 10, 5, 20, 30), cat: 'Succès',
    title: 'Soirée succès Dimensions',
    desc: 'On enchaîne les succès des dimensions divines. Tous niveaux bienvenus.',
    org: 'tsuki', parts: ['tsuki', 'ren'], max: 6, wait: [],
  },
  {
    id: 'e4', at: new Date(2026, 10, 9, 21, 0), cat: 'PvP',
    title: 'Percepteurs et AvA',
    desc: 'Défense des percepteurs puis prise de zone en Alliance contre Alliance.',
    org: 'yoru', parts: ['yoru', 'raiden', 'kuro', 'sora'], max: 16, wait: [],
  },
];
