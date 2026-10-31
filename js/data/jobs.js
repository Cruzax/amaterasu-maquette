/* Demandes de forgemagie fictives, sur de vrais objets DofusDB (images dans assets/img/items/)
   st : open (ouverte) | taken (en cours) | done (terminée)
   stats : jets à respecter { label, target (valeur visée), max (jet max de l objet) } */
const jobs = [
 {
  "t": "Gelano, exo PM",
  "j": "Joaillomage",
  "k": 1500000,
  "by": "hoshi",
  "st": "open",
  "item": {
   "id": 2469,
   "img": "assets/img/items/2469.png",
   "type": "Anneau",
   "level": 60
  },
  "stats": [
   {
    "label": "PA",
    "target": 1,
    "max": 1
   }
  ],
  "exo": "PM",
  "runes": true,
  "note": "Gelano PM pour mon Eni, je fournis la Ga PM"
 },
 {
  "t": "Cape du Minotot",
  "j": "Costumage",
  "k": 4500000,
  "by": "ren",
  "st": "open",
  "item": {
   "id": 8280,
   "img": "assets/img/items/8280.png",
   "type": "Cape",
   "level": 156
  },
  "stats": [
   {
    "label": "Vitalité",
    "target": 250,
    "max": 250
   },
   {
    "label": "Intelligence",
    "target": 50,
    "max": 50
   }
  ],
  "exo": null,
  "runes": false,
  "note": "Jets parfaits en Vitalité et Intelligence, le reste osef"
 },
 {
  "t": "Bottes du Comte Harebourg, exo PA",
  "j": "Cordomage",
  "k": 9000000,
  "by": "sora",
  "st": "open",
  "item": {
   "id": 14078,
   "img": "assets/img/items/14078.png",
   "type": "Bottes",
   "level": 200
  },
  "stats": [
   {
    "label": "Vitalité",
    "target": 400,
    "max": 400
   },
   {
    "label": "Force",
    "target": 75,
    "max": 80
   },
   {
    "label": "Sagesse",
    "target": 50,
    "max": 50
   }
  ],
  "exo": "PA",
  "runes": false,
  "note": "Exo PA, je peux monter à 10M si les jets sont parfaits"
 },
 {
  "t": "Arc de Koutoulou",
  "j": "Sculptemage",
  "k": 6000000,
  "by": "kuro",
  "st": "open",
  "item": {
   "id": 18012,
   "img": "assets/img/items/18012.png",
   "type": "Arc",
   "level": 200
  },
  "stats": [
   {
    "label": "Vitalité",
    "target": 350,
    "max": 350
   },
   {
    "label": "Chance",
    "target": 55,
    "max": 60
   },
   {
    "label": "Agilité",
    "target": 60,
    "max": 60
   }
  ],
  "exo": null,
  "runes": true,
  "note": ""
 },
 {
  "t": "Bouclier de Solar",
  "j": "Façomage",
  "k": 3000000,
  "by": "kitsu",
  "st": "taken",
  "to": "mizu",
  "item": {
   "id": 19598,
   "img": "assets/img/items/19598.png",
   "type": "Bouclier",
   "level": 200
  },
  "stats": [
   {
    "label": "Vitalité",
    "target": 250,
    "max": 250
   },
   {
    "label": "Résistances Poussée",
    "target": 80,
    "max": 80
   }
  ],
  "exo": null,
  "runes": true,
  "note": "Résistances avant tout"
 },
 {
  "t": "Anneau du Comte Harebourg, exo PA",
  "j": "Joaillomage",
  "k": 6000000,
  "by": "yoru",
  "st": "done",
  "to": "kaze",
  "item": {
   "id": 14077,
   "img": "assets/img/items/14077.png",
   "type": "Anneau",
   "level": 200
  },
  "stats": [
   {
    "label": "Vitalité",
    "target": 350,
    "max": 350
   },
   {
    "label": "Force",
    "target": 45,
    "max": 50
   }
  ],
  "exo": "PA",
  "runes": false,
  "note": ""
 },
 {
  "t": "Ceinture du Minotot",
  "j": "Cordomage",
  "k": 900000,
  "by": "mizu",
  "st": "done",
  "to": "tsuki",
  "item": {
   "id": 8283,
   "img": "assets/img/items/8283.png",
   "type": "Ceinture",
   "level": 149
  },
  "stats": [
   {
    "label": "Pods",
    "target": 500,
    "max": 500
   },
   {
    "label": "Vitalité",
    "target": 250,
    "max": 250
   }
  ],
  "exo": null,
  "runes": false,
  "note": ""
 },
 {
  "t": "Coiffe du Tynril",
  "j": "Costumage",
  "k": 2300000,
  "by": "kitsu",
  "st": "done",
  "to": "akane",
  "item": {
   "id": 8699,
   "img": "assets/img/items/8699.png",
   "type": "Chapeau",
   "level": 164
  },
  "stats": [
   {
    "label": "Vitalité",
    "target": 250,
    "max": 250
   },
   {
    "label": "Sagesse",
    "target": 35,
    "max": 40
   }
  ],
  "exo": null,
  "runes": true,
  "note": ""
 }
];
