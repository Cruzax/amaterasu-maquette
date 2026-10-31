/* État de l'interface (filtres, onglets) et registre des pages */
const state = {
  rank: 'pts',        // onglet du classement : pts | voc | msg
  cat: 'Tous',        // catégorie d'événement
  q: '',              // recherche dans l'annuaire
  sortKey: 'rank',    // annuaire : colonne triée (voir pages.guilde.columns)
  sortDir: 1,         // 1 croissant, -1 décroissant
  fClass: 'Toutes',   // annuaire : filtre par classe (id) ou 'Toutes'
  fRole: 'Tous',      // annuaire : filtre par rôle
  tier: 'Tous',       // tranche de niveau des donjons
  djq: '',            // recherche de donjon
  day: null,          // jour sélectionné dans l'agenda (chaîne toDateString) ou null
  jobF: 'Tous',       // métier de forgemagie
  achCat: 'Tous',     // catégorie de succès
  achShow: 'tous',    // tous | obtenus | a-faire
  conv: 'taverne',    // conversation ouverte : 'taverne' (chat général) ou id de MP
  confirm: null,      // admin : action en attente de second clic (ex. 'kick-ren')
  rejecting: null,    // admin : index du solotage en cours de refus
  editProfile: false, // mode personnalisation du profil
  draft: null,        // personnage en cours de création { breed, sex, n, l }
};

// Chaque fichier de js/pages/ s'enregistre ici :
// pages.cle = { label, icon, title, render(arg), after(arg)?, hidden?, navKey? }
// hidden : absente du rail ; navKey : entrée du rail à surligner
const pages = {};
