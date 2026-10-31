/* Membres fictifs de la guilde
   Format brut : [id, pseudo, rôle, points messages, points vocal] */
const CLASSES = ['Sram', 'Iop', 'Eniripsa', 'Cra', 'Feca', 'Osamodas', 'Xélor', 'Pandawa', 'Eliotrope', 'Enutrof', 'Sadida', 'Zobal'];

const members = [
  ['kaze',   'Kaze-Sram',   'Membre',     4,  2],
  ['yoru',   'Yoru',        'Meneur',     28, 19],
  ['akane',  'Akane-Iop',   'Bras droit', 14, 9],
  ['tsuki',  'Tsukiyo',     'Officier',   11, 6],
  ['hoshi',  'Hoshi-Eni',   'Membre',     6,  5],
  ['ren',    'Ren-Cra',     'Membre',     7,  2],
  ['mizu',   'Mizu-Feca',   'Officier',   3,  4],
  ['kitsu',  'Kitsune-Osa', 'Membre',     5,  1],
  ['shiro',  'Shiro-Xelor', 'Membre',     2,  2],
  ['raiden', 'Raiden',      'Membre',     1,  2],
  ['sora',   'Sora-Elio',   'Membre',     2,  0],
  ['kuro',   'Kuro-Enu',    'Membre',     1,  0],
].map(([id, name, role, msg, voc], i) => ({
  id, name, role, msg, voc,
  pts: msg + voc,
  color: AVATAR_COLORS[i % AVATAR_COLORS.length],
  cls: CLASSES[i],
  lvl: 200 - ((i * 7) % 40),
}));

// Utilisateur connecté
const ME_ID = 'kaze';
const me = members.find(m => m.id === ME_ID);
// Personnages : breed = id de classe (voir classes.js), head = index de tête, colors = couleurs perso (sinon défaut)
me.chars = [
  { n: 'Kaze',       breed: 4, sex: 'male',   l: 200, head: 3, colors: ['#E9C6A0', '#1C1416', '#B3121F', '#2A0A0E', '#1A1A1A', '#D9A441'] },
  { n: 'Kaze-Mule',  breed: 3, sex: 'male',   l: 187 },
  { n: 'Petit-Kaze', breed: 7, sex: 'female', l: 142 },
];
me.bio = 'Joaillomage à la demande, solo Minotot le soir. Pas de MP pour des prêts de kamas.';
me.banner = 'amaterasu';
me.showcase = ['a11', 'a7', 'a5', 'a1'];
me.jobs = [
  { n: 'Bijoutier',   l: 200 },
  { n: 'Joaillomage', l: 120 },
  { n: 'Paysan',      l: 60 },
];

// Métiers des autres membres : id -> [[métier, niveau], ...]
const MEMBER_JOBS = {
  yoru:   [['Forgeron', 200], ['Forgemage', 200], ['Mineur', 200]],
  akane:  [['Tailleur', 200], ['Costumage', 180], ['Alchimiste', 150]],
  tsuki:  [['Cordonnier', 200], ['Cordomage', 200], ['Costumage', 140]],
  hoshi:  [['Alchimiste', 200], ['Paysan', 180]],
  ren:    [['Sculpteur', 190], ['Sculptemage', 160], ['Bûcheron', 200]],
  mizu:   [['Façonneur', 200], ['Façomage', 200], ['Sculptemage', 180], ['Joaillomage', 90]],
  kitsu:  [['Chasseur', 200], ['Pêcheur', 170]],
  shiro:  [['Bricoleur', 160], ['Mineur', 120]],
  raiden: [['Forgeron', 140], ['Forgemage', 100]],
  sora:   [['Paysan', 40]],
  kuro:   [['Bûcheron', 110], ['Pêcheur', 80]],
};
for (const [id, list] of Object.entries(MEMBER_JOBS)) members.find(m => m.id === id).jobs = list.map(([n, l]) => ({ n, l }));

// Anniversaires { d: jour, m: mois }
const BIRTHDAYS = { kaze: { d: 14, m: 3 }, akane: { d: 31, m: 10 }, yoru: { d: 2, m: 11 }, tsuki: { d: 21, m: 6 }, mizu: { d: 8, m: 12 } };
for (const [id, b] of Object.entries(BIRTHDAYS)) members.find(m => m.id === id).bday = b;

// Membres dont c'est l'anniversaire aujourd'hui (ids)
const isBirthday = m => !!m.bday && m.bday.d === NOW.getDate() && m.bday.m === NOW.getMonth() + 1;
const birthdays = () => members.filter(isBirthday).map(m => m.id);
