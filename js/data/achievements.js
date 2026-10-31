/* Succès de guilde fictifs
   got   : membres qui l'ont débloqué
   mine  : progression de l'utilisateur connecté s'il ne l'a pas encore
   when  : date de déblocage pour l'utilisateur connecté */
const ACH_CATEGORIES = ['Tous', 'Événements', 'Solotage', 'Forgemagie', 'Communauté', 'Guilde'];

const achievements = [
  // Événements
  { id: 'a1',  cat: 'Événements', icon: '🎌', name: 'Première sortie', desc: 'Participer à un événement de guilde.', goal: 1, pts: 10,
    got: ['kaze', 'yoru', 'akane', 'tsuki', 'hoshi', 'ren', 'mizu', 'kitsu', 'shiro', 'raiden'], when: '12 sept.' },
  { id: 'a2',  cat: 'Événements', icon: '🏯', name: 'Pilier', desc: 'Participer à 20 événements.', goal: 20, pts: 50,
    got: ['yoru', 'akane', 'tsuki'], mine: 7 },
  { id: 'a3',  cat: 'Événements', icon: '📜', name: 'Organisateur', desc: 'Créer 5 événements.', goal: 5, pts: 25,
    got: ['yoru', 'akane'], mine: 0 },
  { id: 'a4',  cat: 'Événements', icon: '🐉', name: 'Raideur', desc: 'Terminer 3 raids de guilde.', goal: 3, pts: 50,
    got: ['yoru', 'akane', 'tsuki', 'mizu'], mine: 1 },

  // Solotage
  { id: 'a5',  cat: 'Solotage', icon: '🗡️', name: 'Premier sang', desc: 'Enregistrer un premier record solotage.', goal: 1, pts: 10,
    got: ['kaze', 'yoru', 'akane', 'ren', 'hoshi', 'tsuki', 'mizu'], when: '3 oct.' },
  { id: 'a6',  cat: 'Solotage', icon: '🗺️', name: 'Collectionneur', desc: 'Avoir un record sur 10 donjons différents.', goal: 10, pts: 50,
    got: [], mine: 1 },
  { id: 'a7',  cat: 'Solotage', icon: '👑', name: 'Roi du donjon', desc: 'Être premier du classement d’un donjon.', goal: 1, pts: 25,
    got: ['kaze', 'yoru', 'akane', 'hoshi', 'tsuki', 'mizu'], when: '3 oct.' },
  { id: 'a8',  cat: 'Solotage', icon: '⚡', name: 'Éclair', desc: 'Finir un donjon niveau 160+ en 4 tours ou moins.', goal: 1, pts: 100,
    got: ['yoru'], mine: 0 },

  // Forgemagie
  { id: 'a9',  cat: 'Forgemagie', icon: '🔨', name: 'Apprenti mage', desc: 'Terminer une demande de forgemagie.', goal: 1, pts: 10,
    got: ['kaze', 'tsuki', 'akane', 'mizu'], when: 'hier' },
  { id: 'a10', cat: 'Forgemagie', icon: '💎', name: 'Mains d’or', desc: 'Terminer 10 demandes de forgemagie.', goal: 10, pts: 50,
    got: ['mizu'], mine: 1 },
  { id: 'a11', cat: 'Forgemagie', icon: '✨', name: 'Exo PA', desc: 'Réussir un exo PA pour un membre.', goal: 1, pts: 100,
    got: ['kaze'], when: 'hier' },

  // Communauté
  { id: 'a12', cat: 'Communauté', icon: '💬', name: 'Bavard', desc: 'Atteindre 500 messages admissibles.', goal: 500, pts: 25,
    got: ['yoru', 'akane', 'tsuki'], mine: 212 },
  { id: 'a13', cat: 'Communauté', icon: '🎙️', name: 'Voix de la guilde', desc: 'Passer 50 heures en vocal.', goal: 50, pts: 25,
    got: ['yoru', 'akane'], mine: 18 },
  { id: 'a14', cat: 'Communauté', icon: '🎂', name: 'Chaleureux', desc: 'Écrire sur le mur de 10 membres le jour de leur anniversaire.', goal: 10, pts: 25,
    got: ['tsuki'], mine: 3 },

  // Guilde
  { id: 'a15', cat: 'Guilde', icon: '⛩️', name: 'Bienvenue', desc: 'Rejoindre Amaterasu.', goal: 1, pts: 10,
    got: ['kaze', 'yoru', 'akane', 'tsuki', 'hoshi', 'ren', 'mizu', 'kitsu', 'shiro', 'raiden', 'sora', 'kuro'], when: '2 sept.' },
  { id: 'a16', cat: 'Guilde', icon: '🏮', name: 'Vétéran', desc: 'Être dans la guilde depuis un an.', goal: 365, pts: 50,
    got: ['yoru', 'akane'], mine: 59 },
  { id: 'a17', cat: 'Guilde', icon: '🥇', name: 'Podium', desc: 'Finir un mois dans le top 3 du classement général.', goal: 1, pts: 50,
    got: ['yoru', 'akane', 'tsuki', 'mizu'], mine: 0 },
];

// Derniers déblocages dans la guilde : [id membre, id succès, quand]
const recentUnlocks = [
  ['kaze', 'a11', 'hier'],
  ['kaze', 'a9', 'hier'],
  ['mizu', 'a10', 'mar.'],
  ['akane', 'a16', 'lun.'],
  ['sora', 'a15', 'hier'],
];
