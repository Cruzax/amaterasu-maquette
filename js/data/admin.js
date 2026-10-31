/* Données du panneau admin (fictives) */

// Réglages de la guilde, modifiables depuis Admin > Réglages
const settings = {
  // Classement Discord
  ptsPerMsg: 1,             // points par message admissible
  ptsPerVoiceHour: 2,       // points par heure de vocal
  msgMinChars: 12,          // longueur minimale d'un message admissible
  channels: ['#général', '#donjons', '#raids', '#forgemagie'],
  // Solotage (utilisés par soloScore et le formulaire)
  soloMaxTurns: 12,
  soloTurnBonus: 3,
  trustMaxLevel: 200,       // Trust me (sans capture) autorisé jusqu'à ce niveau de donjon (200 = partout)
  // Accès
  discordRole: 'Amaterasu', // rôle Discord requis pour entrer sur le portail
  autoAcceptInvites: false,
};

// Rôles possibles, du plus haut au plus bas
const ROLES = ['Meneur', 'Bras droit', 'Officier', 'Membre'];
const isStaff = m => ['Meneur', 'Bras droit', 'Officier'].includes(m.role);

// Demandes d'accès au portail (comptes Discord sans le rôle)
const accessRequests = [
  { name: 'Zephyr', discord: 'zephyr_iop', when: 'il y a 2 h', note: 'Ami de Yoru, joue Iop 199' },
  { name: 'Lunaria', discord: 'lunaria.osa', when: 'hier', note: 'Ancienne de la guilde, revient après une pause' },
  { name: 'Brakmar', discord: 'brak_mar', when: 'il y a 3 j', note: '' },
];

// Signalements de la communauté
const reports = [
  { from: 'ren', target: 'kuro', where: 'Mur de Akane-Iop', text: 'ptdr t’es nul au Harebourg, désinstalle', when: 'il y a 40 min' },
  { from: 'hoshi', target: 'sora', where: 'Demande FM', text: 'Demande en double, déjà postée hier', when: 'hier' },
];

// Journal des actions du staff
const adminLog = [
  { who: 'yoru', what: 'a validé le record de Akane-Iop (Tour de Solar, 60 pts)', when: 'il y a 25 min' },
  { who: 'akane', what: 'a créé l’événement Raid Comte Harebourg', when: 'il y a 6 h' },
  { who: 'yoru', what: 'a accepté la demande d’accès de Sora-Elio', when: 'hier' },
  { who: 'tsuki', what: 'a passé Mizu-Feca Officier', when: 'lun.' },
];

// Succès de guilde désactivés (ids)
const disabledAchievements = [];
