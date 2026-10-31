/* Messages privés fictifs
   Une conversation = un interlocuteur + une liste de messages { from, text, at } */
const conversations = [
  {
    id: 'c-akane', with: 'akane', unread: 2,
    msgs: [
      { from: 'akane', text: 'Yo, tu viens au raid Harebourg lundi ?', at: 'hier, 22h10' },
      { from: 'kaze', text: 'C’est complet je crois, je me mets en attente', at: 'hier, 22h14' },
      { from: 'akane', text: 'Raiden risque de pas pouvoir, je te garde sa place si il se désiste', at: '14h02' },
      { from: 'akane', text: 'Prends des potions de rappel au cas où', at: '14h03' },
    ],
  },
  {
    id: 'c-yoru', with: 'yoru', unread: 0,
    msgs: [
      { from: 'yoru', text: 'Merci pour l’anneau, l’exo PA est passé du premier coup', at: 'jeu., 19h40' },
      { from: 'kaze', text: 'Avec plaisir, j’avais les runes en stock', at: 'jeu., 19h52' },
      { from: 'yoru', text: 'Je te dois un passage Minotot du coup', at: 'jeu., 19h53' },
    ],
  },
  {
    id: 'c-hoshi', with: 'hoshi', unread: 1,
    msgs: [
      { from: 'hoshi', text: 'Tu pourrais regarder ma demande de cape ? Je fournis les runes vi', at: '11h20' },
    ],
  },
  {
    id: 'c-sora', with: 'sora', unread: 0,
    msgs: [
      { from: 'kaze', text: 'Bienvenue dans la guilde ! Hésite pas si t’as besoin d’un coup de main', at: 'hier, 18h05' },
      { from: 'sora', text: 'Merci beaucoup, c’est gentil', at: 'hier, 18h30' },
    ],
  },
];
