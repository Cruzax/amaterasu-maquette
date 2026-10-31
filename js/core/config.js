/* =========================================================
   Configuration globale de la maquette
   ========================================================= */

// "Maintenant" figé pour la maquette : samedi 31 oct. 2026, 15h12
const NOW = new Date(2026, 9, 31, 15, 12);

// Nom affiché de la guilde
const GUILD_NAME = 'Amaterasu';
const GUILD_TAGLINE = 'Amaterasu';

// Couleurs de fond des avatars (cycliques)
const AVATAR_COLORS = ['#8f1420', '#2c3d6b', '#2f5a35', '#6b4a1f', '#4c2a6b', '#1f5c5a', '#6b2448', '#5a5520'];

// Catégories d'événements (filtres de l'agenda)
const EVENT_CATEGORIES = ['Tous', 'Donjon', 'Quête', 'Raid', 'Succès', 'PvP', 'XP', 'Guilde'];

// Métiers de forgemagie (filtres de l'atelier)
const FM_JOBS = ['Tous', 'Joaillomage', 'Costumage', 'Cordomage', 'Sculptemage', 'Forgemage', 'Façomage'];

// Métiers de Dofus (récolte, artisanat, forgemagie)
const DOFUS_JOBS = ['Alchimiste', 'Bijoutier', 'Bricoleur', 'Bûcheron', 'Chasseur', 'Cordonnier', 'Façonneur', 'Forgeron', 'Mineur', 'Paysan', 'Pêcheur', 'Sculpteur', 'Tailleur', 'Joaillomage', 'Cordomage', 'Costumage', 'Façomage', 'Forgemage', 'Sculptemage'];
const FM_JOB_NAMES = ['Joaillomage', 'Cordomage', 'Costumage', 'Façomage', 'Forgemage', 'Sculptemage'];

// Tranches de niveau (filtres des défis) : [min, max]
const LEVEL_TIERS = {
  'Tous': [0, 999],
  '1 à 50': [1, 50],
  '51 à 100': [51, 100],
  '101 à 150': [101, 150],
  '151 à 200': [151, 200],
};

// Couleur des donjons par tranche de niveau : [niveau max, couleur]
const LEVEL_COLORS = [
  [50, '#2f7a3d'],   // 1 à 50 : vert
  [100, '#2c4f8f'],  // 51 à 100 : bleu
  [150, '#6a2d9a'],  // 101 à 150 : violet
  [199, '#a3162a'],  // 151 à 199 : rouge
  [200, '#b8862b'],  // 200 : or
];
const levelColor = lvl => (LEVEL_COLORS.find(([max]) => lvl <= max) || LEVEL_COLORS[LEVEL_COLORS.length - 1])[1];

// Onglets du classement : clé de donnée -> libellé
const RANK_TABS = { pts: 'Général', voc: 'Vocal', msg: 'Messages' };

// Images des classes (API DofusDB)
const DOFUSDB = {
  symbol: id => `https://api.dofusdb.fr/img/breeds/symbol_${id}.png`,
  logo: id => `https://api.dofusdb.fr/img/breeds/logo_transparent_${id}.png`,
  head: (id, sex) => `https://api.dofusdb.fr/img/heads/SmallHead_${id * 10 + (sex === 'female' ? 1 : 0)}.png`,
};

// Éditeur d'apparence Skinoskope (Tnul.Songes)
// - en local : lien skinoskope/ servi à la même adresse, l'apparence choisie est lue automatiquement
// - en ligne (GitHub Pages) : version Netlify, autre adresse, on colle le lien du skin
const SKINOSKOPE_URL = location.hostname.endsWith('github.io') ? 'https://tnulsonges.netlify.app/palette/' : 'skinoskope/';
const SKINOSKOPE_SAME_ORIGIN = !/^https?:/.test(SKINOSKOPE_URL);

// Bannières de profil au choix
const BANNERS = {
  akatsuki:  { label: 'Akatsuki', bg: `url("${CLOUD_URI}") 0 0 / 240px 140px repeat, linear-gradient(180deg, #1a0709 0%, #050304 100%)` },
  amaterasu: { label: 'Amaterasu', bg: 'radial-gradient(70% 120% at 50% 110%, #8c1520 0%, #2a070c 45%, #050304 80%)' },
  soleil: { label: 'Soleil levant', bg: 'radial-gradient(60% 140% at 80% 0%, #c8202c 0%, #5a060d 45%, #120607 80%)' },
  vague:  { label: 'Grande vague', bg: 'linear-gradient(160deg, #0f1b2e 0%, #2a0a0e 70%), #0f1b2e' },
  sakura: { label: 'Sakura', bg: 'radial-gradient(80% 120% at 20% 0%, #8a2d4a 0%, #3a0d1c 50%, #120607 85%)' },
  nuit:   { label: 'Nuit d’encre', bg: 'linear-gradient(180deg, #1a1012 0%, #050304 100%)' },
  or:     { label: 'Feuille d’or', bg: 'radial-gradient(70% 130% at 70% 0%, #8a6420 0%, #2b2010 50%, #0e0a0b 85%)' },
};

// Points d'un solotage = niveau du donjon / 4 + bonus de rapidité + points des succès validés
// Les paramètres (tours max, bonus par tour) se règlent dans Admin > Réglages (objet settings)
function soloScore(level, turns, achPts = 0) {
  const base = Math.round(level / 4);
  const speed = (settings.soloMaxTurns - Math.min(turns, settings.soloMaxTurns)) * settings.soloTurnBonus;
  return { base, speed, ach: achPts, total: Math.max(5, base + speed + achPts) };
}

// Nombre maximum de succès en vitrine
const SHOWCASE_MAX = 4;

// Libellés de date
const DAYS = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
