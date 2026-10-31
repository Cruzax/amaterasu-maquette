/* Records solotage fictifs
   Le catalogue des donjons vient de DofusDB : voir dofusdb-dungeons.js (DUNGEONS, CHALLENGES).
   donjon -> [[id membre, tours, points, [ids des succès validés]], ...] trié par points */
const records = {
  'Salle du Minotot': [['yoru', 4, 78, [71, 745]], ['akane', 6, 62, [71, 744]], ['ren', 9, 49, [71]]],
  'Donjon des Tofus': [['kaze', 3, 47, []]],
  'Château du Wa Wabbit': [['hoshi', 5, 46, []], ['tsuki', 7, 40, []]],
  'Tour de Solar': [['akane', 12, 60, []]],
  'Tombe du Shogun Tofugawa': [['tsuki', 8, 52, []]],
  'Dojo du Vent': [['mizu', 6, 53, []]],
};

/* Solotages envoyés, en attente de validation par un officier */
const pendingRecords = [
  { dungeon: 'Antre du Dragon Cochon', by: 'kaze', char: 'Kaze', turns: 7, pts: 50, achs: [], proof: null, trust: false, video: '', note: 'Fait sans pain, à la dague', when: 'hier' },
  { dungeon: 'Salle du Minotot', by: 'hoshi', char: 'Hoshi', turns: 5, pts: 81, achs: [71, 744, 745], proof: null, trust: false, video: 'https://youtube.com/watch?v=demo', note: 'Premier + Circulez en même temps', when: 'il y a 1 h' },
  { dungeon: 'Crypte de Kardorim', by: 'sora', char: 'Sora', turns: 4, pts: 26, achs: [], proof: null, trust: true, video: '', note: '', when: 'il y a 3 h' },
  { dungeon: 'Tour de Solar', by: 'ren', char: 'Ren', turns: 9, pts: 59, achs: [], proof: null, trust: false, video: '', note: 'Record perso', when: 'hier' },
];
