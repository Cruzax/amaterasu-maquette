/* Donjons Dofus importés de DofusDB (api.dofusdb.fr) le 31/10/2026
   Régénérer : node tools/import-dofusdb.mjs
   - DUNGEONS : donjon, niveau conseillé, boss (image locale), succès (base + challenges)
   - CHALLENGES : nom, description, icône locale */
const DUNGEONS = [
 {
  "id": 90,
  "name": "Crypte de Kardorim",
  "level": 10,
  "difficulty": 1,
  "boss": {
   "id": 4051,
   "name": "Kardorim",
   "img": "assets/img/bosses/4051.png"
  },
  "achievements": [
   {
    "id": 33,
    "name": "Crypte de Kardorim",
    "desc": "Vaincre Kardorim dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 571,
    "name": "Kardorim (Zombie)",
    "desc": "Vaincre Kardorim dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 115
   },
   {
    "id": 487,
    "name": "Kardorim (Duo)",
    "desc": "Vaincre Kardorim dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 102
   },
   {
    "id": 6148,
    "name": "Kardorim (Spécial)",
    "desc": "Vaincre Kardorim dans son donjon en validant le challenge « Lâche mes côtes ».",
    "pts": 10,
    "challenge": 977
   },
   {
    "id": 574,
    "name": "Kardorim (Premier)",
    "desc": "Vaincre Kardorim dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 117
   }
  ]
 },
 {
  "id": 19,
  "name": "Château Ensablé",
  "level": 20,
  "difficulty": 1,
  "boss": {
   "id": 928,
   "name": "Mob l'Éponge",
   "img": "assets/img/bosses/928.png"
  },
  "achievements": [
   {
    "id": 54,
    "name": "Château Ensablé",
    "desc": "Vaincre Mob l'Eponge dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 489,
    "name": "Mob l'Éponge (Duo)",
    "desc": "Vaincre Mob l'Éponge dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 104
   },
   {
    "id": 578,
    "name": "Mob l'Éponge (Misanthrope)",
    "desc": "Vaincre Mob l'Éponge en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 119
   },
   {
    "id": 6150,
    "name": "Mob l'Éponge (Spécial)",
    "desc": "Vaincre Mob l'Éponge dans son donjon en validant le challenge « Passer l'éponge ».",
    "pts": 10,
    "challenge": 979
   },
   {
    "id": 657,
    "name": "Mob l'Éponge (Versatile)",
    "desc": "Vaincre Mob l'Éponge dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 120
   }
  ]
 },
 {
  "id": 8,
  "name": "Grange du Tournesol Affamé",
  "level": 20,
  "difficulty": 2,
  "boss": {
   "id": 799,
   "name": "Tournesol Affamé",
   "img": "assets/img/bosses/799.png"
  },
  "achievements": [
   {
    "id": 40,
    "name": "Grange du Tournesol Affamé",
    "desc": "Vaincre le Tournesol Affamé dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 488,
    "name": "Tournesol Affamé (Duo)",
    "desc": "Vaincre le Tournesol Affamé dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 103
   },
   {
    "id": 6149,
    "name": "Tournesol Affamé (Spécial)",
    "desc": "Vaincre Tournesol Affamé dans son donjon en validant le challenge « Mauvaise graine ».",
    "pts": 10,
    "challenge": 978
   },
   {
    "id": 575,
    "name": "Tournesol Affamé (Collant)",
    "desc": "Vaincre le Tournesol Affamé en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 116
   },
   {
    "id": 576,
    "name": "Tournesol Affamé (Premier)",
    "desc": "Vaincre le Tournesol Affamé dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 118
   }
  ]
 },
 {
  "id": 1,
  "name": "Cour du Bouftou Royal",
  "level": 30,
  "difficulty": 2,
  "boss": {
   "id": 147,
   "name": "Bouftou Royal",
   "img": "assets/img/bosses/147.png"
  },
  "achievements": [
   {
    "id": 37,
    "name": "Cour du Bouftou Royal",
    "desc": "Vaincre le Bouftou Royal dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 490,
    "name": "Bouftou Royal (Duo)",
    "desc": "Vaincre le Bouftou Royal dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 52
   },
   {
    "id": 658,
    "name": "Bouftou Royal (Prudent)",
    "desc": "Vaincre le Bouftou Royal dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 121
   },
   {
    "id": 6151,
    "name": "Bouftou Royal (Spécial)",
    "desc": "Vaincre Bouftou Royal dans son donjon en validant le challenge « Un Mulou dans la Bergerie ».",
    "pts": 10,
    "challenge": 980
   },
   {
    "id": 659,
    "name": "Bouftou Royal (Blitzkrieg)",
    "desc": "Vaincre le Bouftou Royal dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 122
   }
  ]
 },
 {
  "id": 138,
  "name": "Akadémie des Gobs",
  "level": 40,
  "difficulty": 2,
  "boss": {
   "id": 6903,
   "name": "Directeur Grunob",
   "img": "assets/img/bosses/6903.png"
  },
  "achievements": [
   {
    "id": 5213,
    "name": "Akadémie des Gobs",
    "desc": "Vaincre le Directeur Grunob dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5215,
    "name": "Directeur Grunob (Premier)",
    "desc": "Vaincre le Directeur Grunob dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 592
   },
   {
    "id": 5216,
    "name": "Directeur Grunob (Duo)",
    "desc": "Vaincre le Directeur Grunob dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 591
   },
   {
    "id": 6157,
    "name": "Directeur Grunob (Spécial)",
    "desc": "Vaincre Directeur Grunob dans son donjon en validant le challenge « Dirige mais mal rédige ».",
    "pts": 10,
    "challenge": 986
   },
   {
    "id": 5214,
    "name": "Directeur Grunob (Nomade)",
    "desc": "Vaincre le Directeur Grunob dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 593
   },
   {
    "id": 5987,
    "name": "Directeur Grunob (Compagnon)",
    "desc": "Vaincre Directeur Grunob dans son donjon en validant le challenge « Les crados »",
    "pts": 5,
    "challenge": 1272
   }
  ]
 },
 {
  "id": 88,
  "name": "Cache de Kankreblath",
  "level": 40,
  "difficulty": 3,
  "boss": {
   "id": 3945,
   "name": "Kankreblath",
   "img": "assets/img/bosses/3945.png"
  },
  "achievements": [
   {
    "id": 1184,
    "name": "Cache de Kankreblath",
    "desc": "Vaincre Kankreblath dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6156,
    "name": "Kankreblath (Spécial)",
    "desc": "Vaincre Kankreblath dans son donjon en validant le challenge « La ligne interdite ».",
    "pts": 10,
    "challenge": 985
   },
   {
    "id": 1180,
    "name": "Kankreblath (Duo)",
    "desc": "Vaincre Kankreblath dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 341
   },
   {
    "id": 1181,
    "name": "Kankreblath (Collant)",
    "desc": "Vaincre Kankreblath en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 342
   },
   {
    "id": 1182,
    "name": "Kankreblath (Dernier)",
    "desc": "Vaincre Kankreblath dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 343
   },
   {
    "id": 5973,
    "name": "Kankreblath (Compagnon)",
    "desc": "Vaincre Kankreblath dans son donjon en validant le challenge « Bandits du Magik Riktus »",
    "pts": 5,
    "challenge": 1270
   }
  ]
 },
 {
  "id": 45,
  "name": "Donjon des Scarafeuilles",
  "level": 40,
  "difficulty": 2,
  "boss": {
   "id": 797,
   "name": "Scarabosse Doré",
   "img": "assets/img/bosses/797.png"
  },
  "achievements": [
   {
    "id": 48,
    "name": "Donjon des Scarafeuilles",
    "desc": "Vaincre le Scarabosse Doré dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 491,
    "name": "Scarabosse Doré (Duo)",
    "desc": "Vaincre le Scarabosse Doré dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 105
   },
   {
    "id": 660,
    "name": "Scarabosse Doré (Zombie)",
    "desc": "Vaincre le Scarabosse Doré dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 123
   },
   {
    "id": 6153,
    "name": "Scarabosse Doré (Spécial)",
    "desc": "Vaincre Scarabosse Doré dans son donjon en validant le challenge « Dorée, mi fa sol ».",
    "pts": 10,
    "challenge": 982
   },
   {
    "id": 661,
    "name": "Scarabosse Doré (Mains propres)",
    "desc": "Vaincre le Scarabosse Doré dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 124
   }
  ]
 },
 {
  "id": 47,
  "name": "Donjon des Squelettes",
  "level": 40,
  "difficulty": 1,
  "boss": {
   "id": 3238,
   "name": "Chafer Rōnin",
   "img": "assets/img/bosses/3238.png"
  },
  "achievements": [
   {
    "id": 49,
    "name": "Donjon des Squelettes",
    "desc": "Vaincre le Chafer Rōnin dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 494,
    "name": "Chafer Rōnin (Duo)",
    "desc": "Vaincre le Chafer Rōnin dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 108
   },
   {
    "id": 6154,
    "name": "Chafer Rōnin (Spécial)",
    "desc": "Vaincre le Chafer Rōnin dans son donjon en validant le challenge « Désillusion ».",
    "pts": 10,
    "challenge": 983
   },
   {
    "id": 667,
    "name": "Chafer Rōnin (Premier)",
    "desc": "Vaincre le Chafer Rōnin dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 130
   },
   {
    "id": 666,
    "name": "Chafer Rōnin (Nomade)",
    "desc": "Vaincre le Chafer Rōnin dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 129
   },
   {
    "id": 5994,
    "name": "Chafer Rōnin (Compagnon)",
    "desc": "Vaincre le Chafer Rōnin dans son donjon en validant le challenge « Revenus d'outre-tombe »",
    "pts": 5,
    "challenge": 1273
   }
  ]
 },
 {
  "id": 48,
  "name": "Donjon des Tofus",
  "level": 40,
  "difficulty": 2,
  "boss": {
   "id": 800,
   "name": "Batofu",
   "img": "assets/img/bosses/800.png"
  },
  "achievements": [
   {
    "id": 50,
    "name": "Donjon des Tofus",
    "desc": "Vaincre Batofu dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 662,
    "name": "Batofu (Statue)",
    "desc": "Vaincre Batofu dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 125
   },
   {
    "id": 492,
    "name": "Batofu (Duo)",
    "desc": "Vaincre Batofu dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 106
   },
   {
    "id": 663,
    "name": "Batofu (Versatile)",
    "desc": "Vaincre Batofu dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 126
   },
   {
    "id": 6155,
    "name": "Batofu (Spécial)",
    "desc": "Vaincre Batofu dans son donjon en validant le challenge « Bécotam ».",
    "pts": 10,
    "challenge": 984
   },
   {
    "id": 5980,
    "name": "Batofu (Compagnon)",
    "desc": "Vaincre Batofu dans son donjon en validant le challenge « Rats... au sens propre ou au figuré »",
    "pts": 5,
    "challenge": 1271
   }
  ]
 },
 {
  "id": 34,
  "name": "Maison Fantôme",
  "level": 40,
  "difficulty": 2,
  "boss": {
   "id": 2975,
   "name": "Boostache",
   "img": "assets/img/bosses/2975.png"
  },
  "achievements": [
   {
    "id": 66,
    "name": "Maison Fantôme",
    "desc": "Vaincre Boostache dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 493,
    "name": "Boostache (Duo)",
    "desc": "Vaincre Boostache dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 107
   },
   {
    "id": 665,
    "name": "Boostache (Dernier)",
    "desc": "Vaincre Boostache dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 128
   },
   {
    "id": 664,
    "name": "Boostache (Misanthrope)",
    "desc": "Vaincre Boostache en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 127
   },
   {
    "id": 6152,
    "name": "Boostache (Spécial)",
    "desc": "Vaincre Boostache dans son donjon en validant le challenge « Empêtrement d'esprit entêtant ».",
    "pts": 10,
    "challenge": 981
   },
   {
    "id": 5959,
    "name": "Boostache (Compagnon)",
    "desc": "Vaincre Boostache dans son donjon en validant le challenge « Les héros »",
    "pts": 5,
    "challenge": 1268
   }
  ]
 },
 {
  "id": 36,
  "name": "Donjon de Nowel",
  "level": 50,
  "difficulty": 2,
  "boss": {
   "id": 1179,
   "name": "Sapik",
   "img": "assets/img/bosses/1179.png"
  },
  "achievements": [
   {
    "id": 430,
    "name": "Donjon de Nowel",
    "desc": "Vaincre le Sapik dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 434,
    "name": "Sapik (Duo)",
    "desc": "Vaincre le Sapik dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 243
   },
   {
    "id": 431,
    "name": "Sapik (Chrono)",
    "desc": "Vaincre le Sapik dans son donjon en validant le challenge « Chrono ».",
    "pts": 10,
    "challenge": 250
   },
   {
    "id": 432,
    "name": "Sapik (Hardi)",
    "desc": "Vaincre le Sapik dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 241
   },
   {
    "id": 433,
    "name": "Sapik (Blitzkrieg)",
    "desc": "Vaincre le Sapik dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 242
   },
   {
    "id": 6271,
    "name": "Sapik (Spécial)",
    "desc": "Vaincre le Sapik dans son donjon en validant le challenge « Ça pique le Kipik ».",
    "pts": 10,
    "challenge": 1278
   }
  ]
 },
 {
  "id": 13,
  "name": "Donjon des Bworks",
  "level": 50,
  "difficulty": 2,
  "boss": {
   "id": 792,
   "name": "Bworkette",
   "img": "assets/img/bosses/792.png"
  },
  "achievements": [
   {
    "id": 38,
    "name": "Donjon des Bworks",
    "desc": "Vaincre la Bworkette dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 668,
    "name": "Bworkette (Misanthrope)",
    "desc": "Vaincre la Bworkette en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 131
   },
   {
    "id": 495,
    "name": "Bworkette (Duo)",
    "desc": "Vaincre la Bworkette dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 91
   },
   {
    "id": 6158,
    "name": "Bworkette (Spécial)",
    "desc": "Vaincre Bworkette dans son donjon en validant le challenge « Tombés sous le charme ».",
    "pts": 10,
    "challenge": 987
   },
   {
    "id": 669,
    "name": "Bworkette (Premier)",
    "desc": "Vaincre la Bworkette dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 132
   },
   {
    "id": 6015,
    "name": "Bworkette (Compagnon)",
    "desc": "Vaincre Bworkette dans son donjon en validant le challenge « Les pandaliens »",
    "pts": 5,
    "challenge": 1276
   }
  ]
 },
 {
  "id": 21,
  "name": "Donjon des Forgerons",
  "level": 50,
  "difficulty": 2,
  "boss": {
   "id": 252,
   "name": "Coffre des Forgerons",
   "img": "assets/img/bosses/252.png"
  },
  "achievements": [
   {
    "id": 43,
    "name": "Donjon des Forgerons",
    "desc": "Vaincre le Coffre des Forgerons dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 496,
    "name": "Coffre des Forgerons (Duo)",
    "desc": "Vaincre le Coffre des Forgerons dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 90
   },
   {
    "id": 671,
    "name": "Coffre des Forgerons (Premier)",
    "desc": "Vaincre le Coffre des Forgerons dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 134
   },
   {
    "id": 6159,
    "name": "Coffre des Forgerons (Spécial)",
    "desc": "Vaincre Coffre des Forgerons dans son donjon en validant le challenge « Ouverture facile ».",
    "pts": 10,
    "challenge": 988
   },
   {
    "id": 670,
    "name": "Coffre des Forgerons (Nomade)",
    "desc": "Vaincre le Coffre des Forgerons dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 133
   },
   {
    "id": 6008,
    "name": "Coffre des forgerons (Compagnon)",
    "desc": "Vaincre Coffre des forgerons dans son donjon en validant le challenge « Compagnons, quel est votre métier ? »",
    "pts": 5,
    "challenge": 1275
   }
  ]
 },
 {
  "id": 33,
  "name": "Donjon des Larves",
  "level": 50,
  "difficulty": 1,
  "boss": {
   "id": 457,
   "name": "Shin Larve",
   "img": "assets/img/bosses/457.png"
  },
  "achievements": [
   {
    "id": 34,
    "name": "Donjon des Larves",
    "desc": "Vaincre la Shin Larve dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 497,
    "name": "Shin Larve (Duo)",
    "desc": "Vaincre la Shin Larve dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 109
   },
   {
    "id": 6162,
    "name": "Shin Larve (Spécial)",
    "desc": "Vaincre Shin Larve dans son donjon en validant le challenge « Enlisement larvaire ».",
    "pts": 10,
    "challenge": 991
   },
   {
    "id": 672,
    "name": "Shin Larve (Prudent)",
    "desc": "Vaincre la Shin Larve dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 135
   },
   {
    "id": 673,
    "name": "Shin Larve (Versatile)",
    "desc": "Vaincre la Shin Larve dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 136
   }
  ]
 },
 {
  "id": 25,
  "name": "Grotte Hesque",
  "level": 50,
  "difficulty": 2,
  "boss": {
   "id": 1027,
   "name": "Corailleur Magistral",
   "img": "assets/img/bosses/1027.png"
  },
  "achievements": [
   {
    "id": 62,
    "name": "Grotte Hesque",
    "desc": "Vaincre le Corailleur Magistral dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 498,
    "name": "Corailleur Magistral (Duo)",
    "desc": "Vaincre le Corailleur Magistral dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 63
   },
   {
    "id": 674,
    "name": "Corailleur Magistral (Hardi)",
    "desc": "Vaincre le Corailleur Magistral dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 137
   },
   {
    "id": 675,
    "name": "Corailleur Magistral (Blitzkrieg)",
    "desc": "Vaincre le Corailleur Magistral dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 138
   },
   {
    "id": 6160,
    "name": "Corailleur Magistral (Spécial)",
    "desc": "Vaincre Corailleur Magistral dans son donjon en validant le challenge « Collé-serré ».",
    "pts": 10,
    "challenge": 989
   },
   {
    "id": 6001,
    "name": "Corailleur Magistral (Compagnon)",
    "desc": "Vaincre Corailleur Magistral dans son donjon en validant le challenge « Les z'autres »",
    "pts": 5,
    "challenge": 1274
   }
  ]
 },
 {
  "id": 32,
  "name": "Nid du Kwakwa",
  "level": 50,
  "difficulty": 3,
  "boss": {
   "id": 2995,
   "name": "Kwakwa",
   "img": "assets/img/bosses/2995.png"
  },
  "achievements": [
   {
    "id": 67,
    "name": "Nid du Kwakwa",
    "desc": "Vaincre le Kwakwa dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 676,
    "name": "Kwakwa (Zombie)",
    "desc": "Vaincre le Kwakwa dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 139
   },
   {
    "id": 499,
    "name": "Kwakwa (Duo)",
    "desc": "Vaincre le Kwakwa dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 92
   },
   {
    "id": 6161,
    "name": "Kwakwa (Spécial)",
    "desc": "Vaincre Kwakwa dans son donjon en validant le challenge « Kwakwa ? Kwapoussée ! ».",
    "pts": 10,
    "challenge": 990
   },
   {
    "id": 677,
    "name": "Kwakwa (Mains propres)",
    "desc": "Vaincre le Kwakwa dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 140
   },
   {
    "id": 5966,
    "name": "Kwakwa (Compagnon)",
    "desc": "Vaincre Kwakwa dans son donjon en validant le challenge « Chevaliers tourmentés »",
    "pts": 5,
    "challenge": 1269
   }
  ]
 },
 {
  "id": 142,
  "name": "Refuge sylvestre",
  "level": 50,
  "difficulty": 2,
  "boss": {
   "id": 7197,
   "name": "Rakoopeur",
   "img": "assets/img/bosses/7197.png"
  },
  "achievements": [
   {
    "id": 5911,
    "name": "Refuge Sylvestre",
    "desc": "Vaincre le Rakoopeur dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6163,
    "name": "Rakoopeur (Spécial)",
    "desc": "Vaincre Rakoopeur dans son donjon en validant le challenge « Vigilance forestière ».",
    "pts": 10,
    "challenge": 992
   },
   {
    "id": 5912,
    "name": "Rakoopeur (Dernier)",
    "desc": "Vaincre le Rakoopeur dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 868
   },
   {
    "id": 5914,
    "name": "Rakoopeur (Duo)",
    "desc": "Vaincre le Rakoopeur dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 870
   },
   {
    "id": 5913,
    "name": "Rakoopeur (Prudent)",
    "desc": "Vaincre le Rakoopeur dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 869
   },
   {
    "id": 6022,
    "name": "Rakoopeur (Compagnon)",
    "desc": "Vaincre Rakoopeur dans son donjon en validant le challenge « Mini Nuits' »",
    "pts": 5,
    "challenge": 1277
   }
  ]
 },
 {
  "id": 52,
  "name": "Château du Wa Wabbit",
  "level": 60,
  "difficulty": 3,
  "boss": {
   "id": 180,
   "name": "Wa Wabbit",
   "img": "assets/img/bosses/180.png"
  },
  "achievements": [
   {
    "id": 57,
    "name": "Château du Wa Wabbit",
    "desc": "Vaincre le Wa Wabbit dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 680,
    "name": "Wa Wabbit (Hardi)",
    "desc": "Vaincre le Wa Wabbit dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 143
   },
   {
    "id": 501,
    "name": "Wa Wabbit (Duo)",
    "desc": "Vaincre le Wa Wabbit dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 110
   },
   {
    "id": 6167,
    "name": "Wa Wabbit (Spécial)",
    "desc": "Vaincre Wa Wabbit dans son donjon en validant le challenge « Mené à la cawotte ».",
    "pts": 10,
    "challenge": 1002
   },
   {
    "id": 681,
    "name": "Wa Wabbit (Blitzkrieg)",
    "desc": "Vaincre le Wa Wabbit dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 144
   }
  ]
 },
 {
  "id": 11,
  "name": "Clos des Blops",
  "level": 60,
  "difficulty": 1,
  "boss": {
   "id": 1184,
   "name": "Blop Coco Royal",
   "img": "assets/img/bosses/1184.png"
  },
  "achievements": [
   {
    "id": 36,
    "name": "Clos des Blops",
    "desc": "Vaincre les 4 Blops Royaux dans leur donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 503,
    "name": "Blops Royaux (Duo)",
    "desc": "Vaincre les 4 Blops Royaux dans leur donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 96
   },
   {
    "id": 6164,
    "name": "Blops Royaux (Spécial)",
    "desc": "Vaincre Blops Royaux dans son donjon en validant le challenge « Touche pas à mon blop ».",
    "pts": 10,
    "challenge": 996
   },
   {
    "id": 685,
    "name": "Blops Royaux (Prudent)",
    "desc": "Vaincre les 4 Blops Royaux dans leur donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 154
   },
   {
    "id": 684,
    "name": "Blops Royaux (Duel)",
    "desc": "Vaincre les 4 Blops Royaux en équipe dans leur donjon en validant le challenge « Duel ».",
    "pts": 10,
    "challenge": 153
   }
  ]
 },
 {
  "id": 113,
  "name": "Fonderie des Waddicts",
  "level": 60,
  "difficulty": 1,
  "boss": {
   "id": 5653,
   "name": "Mawabouaino",
   "img": "assets/img/bosses/5653.png"
  },
  "achievements": [
   {
    "id": 2072,
    "name": "Fonderie des Waddicts",
    "desc": "Vaincre le Mawabouaino dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2068,
    "name": "Mawabouaino (Duo)",
    "desc": "Vaincre le Mawabouaino dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 401
   },
   {
    "id": 2092,
    "name": "Mawabouaino (Chrono)",
    "desc": "Vaincre le Mawabouaino dans son donjon en validant le challenge « Chrono ».",
    "pts": 10,
    "challenge": 410
   },
   {
    "id": 2066,
    "name": "Mawabouaino (Collant)",
    "desc": "Vaincre le Mawabouaino en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 402
   },
   {
    "id": 2067,
    "name": "Mawabouaino (Versatile)",
    "desc": "Vaincre le Mawabouaino dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 403
   },
   {
    "id": 6280,
    "name": "Mawabouaino (Spécial)",
    "desc": "Vaincre le Mawabouaino dans son donjon en validant le challenge « Fou de choco ».",
    "pts": 10,
    "challenge": 1405
   }
  ]
 },
 {
  "id": 24,
  "name": "Gelaxième Dimension",
  "level": 60,
  "difficulty": 2,
  "boss": {
   "id": 58,
   "name": "Gelée Royale Bleuet",
   "img": "assets/img/bosses/58.png"
  },
  "achievements": [
   {
    "id": 60,
    "name": "Gelaxième Dimension",
    "desc": "Vaincre les Gelées Royales dans leur donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 507,
    "name": "Gelées Royales (Duo)",
    "desc": "Vaincre les Gelées Royales dans leur donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 111
   },
   {
    "id": 693,
    "name": "Gelées Royales (Collant)",
    "desc": "Vaincre les Gelées Royales en équipe dans leur donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 162
   },
   {
    "id": 692,
    "name": "Gelées Royales (Duel)",
    "desc": "Vaincre les Gelées Royales en équipe dans leur donjon en validant le challenge « Duel ».",
    "pts": 10,
    "challenge": 161
   },
   {
    "id": 6166,
    "name": "Gelées Royales (Spécial)",
    "desc": "Vaincre Gelées Royales dans son donjon en validant le challenge « Privé de dessert ».",
    "pts": 10,
    "challenge": 1001
   }
  ]
 },
 {
  "id": 27,
  "name": "Village Kanniboul",
  "level": 60,
  "difficulty": 1,
  "boss": {
   "id": 2960,
   "name": "Kanniboul Ebil",
   "img": "assets/img/bosses/2960.png"
  },
  "achievements": [
   {
    "id": 56,
    "name": "Village Kanniboul",
    "desc": "Vaincre le Kanniboul Ebil dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 502,
    "name": "Kanniboul Ebil (Duo)",
    "desc": "Vaincre le Kanniboul Ebil dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 97
   },
   {
    "id": 6165,
    "name": "Kanniboul Ebil (Spécial)",
    "desc": "Vaincre Kanniboul Ebil dans son donjon en validant le challenge « Rituel de survie ».",
    "pts": 10,
    "challenge": 997
   },
   {
    "id": 683,
    "name": "Kanniboul Ebil (Premier)",
    "desc": "Vaincre le Kanniboul Ebil dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 146
   },
   {
    "id": 682,
    "name": "Kanniboul Ebil (Zombie)",
    "desc": "Vaincre le Kanniboul Ebil dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 145
   }
  ]
 },
 {
  "id": 39,
  "name": "Cale de l'Arche d'Otomaï",
  "level": 70,
  "difficulty": 3,
  "boss": {
   "id": 1051,
   "name": "Gourlo le Terrible",
   "img": "assets/img/bosses/1051.png"
  },
  "achievements": [
   {
    "id": 26,
    "name": "Cale de l'Arche d'Otomaï",
    "desc": "Vaincre Gourlo le Terrible dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 505,
    "name": "Gourlo le Terrible (Duo)",
    "desc": "Vaincre Gourlo le Terrible dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 64
   },
   {
    "id": 689,
    "name": "Gourlo le Terrible (Économe)",
    "desc": "Vaincre Gourlo le Terrible dans son donjon en validant le challenge « Econome ».",
    "pts": 10,
    "challenge": 158
   },
   {
    "id": 688,
    "name": "Gourlo le Terrible (Premier)",
    "desc": "Vaincre Gourlo le Terrible dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 157
   },
   {
    "id": 6169,
    "name": "Gourlo le Terrible (Spécial)",
    "desc": "Vaincre Gourlo le Terrible dans son donjon en validant le challenge « Tonneaux truands ».",
    "pts": 10,
    "challenge": 1004
   },
   {
    "id": 5995,
    "name": "Gourlo le terrible (Compagnon)",
    "desc": "Vaincre Gourlo le terrible dans son donjon en validant le challenge « Revenus d'outre-tombe »",
    "pts": 5,
    "challenge": 1273
   }
  ]
 },
 {
  "id": 116,
  "name": "Épreuve de Draegnerys",
  "level": 70,
  "difficulty": 2,
  "boss": {
   "id": 5823,
   "name": "Draegnerys",
   "img": "assets/img/bosses/5823.png"
  },
  "achievements": [
   {
    "id": 2128,
    "name": "Épreuve de Draegnerys",
    "desc": "Vaincre Draegnerys dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2125,
    "name": "Draegnerys (Duo)",
    "desc": "Vaincre Draegnerys dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 421
   },
   {
    "id": 2126,
    "name": "Draegnerys (Hardi)",
    "desc": "Vaincre Draegnerys dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 420
   },
   {
    "id": 2127,
    "name": "Draegnerys (Focus)",
    "desc": "Vaincre Draegnerys dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 419
   },
   {
    "id": 6171,
    "name": "Draegnerys (Spécial)",
    "desc": "Vaincre Draegnerys dans son donjon en validant le challenge « Sortir de sa coquille ».",
    "pts": 10,
    "challenge": 1006
   },
   {
    "id": 5960,
    "name": "Draegnerys (Compagnon)",
    "desc": "Vaincre Draegnerys dans son donjon en validant le challenge « Les héros »",
    "pts": 5,
    "challenge": 1268
   }
  ]
 },
 {
  "id": 35,
  "name": "Laboratoire de Brumen Tinctorias",
  "level": 70,
  "difficulty": 1,
  "boss": {
   "id": 3100,
   "name": "Nelween",
   "img": "assets/img/bosses/3100.png"
  },
  "achievements": [
   {
    "id": 64,
    "name": "Laboratoire de Brumen Tinctorias",
    "desc": "Vaincre Nelween dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 504,
    "name": "Nelween (Duo)",
    "desc": "Vaincre Nelween dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 99
   },
   {
    "id": 687,
    "name": "Nelween (Misanthrope)",
    "desc": "Vaincre Nelween en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 156
   },
   {
    "id": 686,
    "name": "Nelween (Dernier)",
    "desc": "Vaincre Nelween dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 155
   },
   {
    "id": 6170,
    "name": "Nelween (Spécial)",
    "desc": "Vaincre Nelween dans son donjon en validant le challenge « Laboratoire de curiosité ».",
    "pts": 10,
    "challenge": 1005
   },
   {
    "id": 6009,
    "name": "Nelween (Compagnon)",
    "desc": "Vaincre Nelween dans son donjon en validant le challenge « Compagnons, quel est votre métier ? »",
    "pts": 5,
    "challenge": 1275
   }
  ]
 },
 {
  "id": 18,
  "name": "Pitons Rocheux des Craqueleurs",
  "level": 70,
  "difficulty": 3,
  "boss": {
   "id": 669,
   "name": "Craqueleur Légendaire",
   "img": "assets/img/bosses/669.png"
  },
  "achievements": [
   {
    "id": 41,
    "name": "Pitons Rocheux des Craqueleurs",
    "desc": "Vaincre le Craqueleur Légendaire dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 506,
    "name": "Craqueleur Légendaire (Duo)",
    "desc": "Vaincre le Craqueleur Légendaire dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 98
   },
   {
    "id": 690,
    "name": "Craqueleur Légendaire (Prudent)",
    "desc": "Vaincre le Craqueleur Légendaire dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 159
   },
   {
    "id": 6168,
    "name": "Craqueleur Légendaire (Spécial)",
    "desc": "Vaincre Craqueleur Légendaire dans son donjon en validant le challenge « De véritables craqu' ».",
    "pts": 10,
    "challenge": 1003
   },
   {
    "id": 691,
    "name": "Craqueleur Légendaire (Premier)",
    "desc": "Vaincre le Craqueleur Légendaire dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 160
   }
  ]
 },
 {
  "id": 100,
  "name": "Cimetière des Mastodontes",
  "level": 80,
  "difficulty": 2,
  "boss": {
   "id": 4621,
   "name": "Mantiscore",
   "img": "assets/img/bosses/4621.png"
  },
  "achievements": [
   {
    "id": 1529,
    "name": "Cimetière des Mastodontes",
    "desc": "Vaincre le Mantiscore dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1532,
    "name": "Mantiscore (Duo)",
    "desc": "Vaincre le Mantiscore dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 370
   },
   {
    "id": 1531,
    "name": "Mantiscore (Zombie)",
    "desc": "Vaincre le Mantiscore dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 369
   },
   {
    "id": 1530,
    "name": "Mantiscore (Mains Propres)",
    "desc": "Vaincre le Mantiscore dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 368
   },
   {
    "id": 6172,
    "name": "Mantiscore (Spécial)",
    "desc": "Vaincre le Mantiscore dans son donjon en validant le challenge « À portée de dard ».",
    "pts": 10,
    "challenge": 1007
   }
  ]
 },
 {
  "id": 17,
  "name": "Terrier du Wa Wabbit",
  "level": 80,
  "difficulty": 2,
  "boss": {
   "id": 3460,
   "name": "Wa Wobot",
   "img": "assets/img/bosses/3460.png"
  },
  "achievements": [
   {
    "id": 1003,
    "name": "Terrier du Wa Wabbit",
    "desc": "Vaincre le Wa Wobot dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1006,
    "name": "Wa Wobot (Duo)",
    "desc": "Vaincre le Wa Wobot dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 290
   },
   {
    "id": 1004,
    "name": "Wa Wobot (Mains Propres)",
    "desc": "Vaincre le Wa Wobot dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 288
   },
   {
    "id": 1005,
    "name": "Wa Wobot (Blitzkrieg)",
    "desc": "Vaincre le Wa Wobot dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 289
   },
   {
    "id": 6173,
    "name": "Wa Wobot (Spécial)",
    "desc": "Vaincre Wa Wobot dans son donjon en validant le challenge « À fond les boulons ».",
    "pts": 10,
    "challenge": 1008
   }
  ]
 },
 {
  "id": 89,
  "name": "Antre de la Reine Nyée",
  "level": 90,
  "difficulty": 4,
  "boss": {
   "id": 3996,
   "name": "Reine Nyée",
   "img": "assets/img/bosses/3996.png"
  },
  "achievements": [
   {
    "id": 1195,
    "name": "Antre de la Reine Nyée",
    "desc": "Vaincre la Reine Nyée dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1191,
    "name": "Reine Nyée (Duo)",
    "desc": "Vaincre la Reine Nyée dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 344
   },
   {
    "id": 1193,
    "name": "Reine Nyée (Hardi)",
    "desc": "Vaincre la Reine Nyée dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 346
   },
   {
    "id": 6177,
    "name": "Reine Nyée (Spécial)",
    "desc": "Vaincre Reine Nyée dans son donjon en validant le challenge « On ne peut la Nyée ».",
    "pts": 10,
    "challenge": 1012
   },
   {
    "id": 1192,
    "name": "Reine Nyée (Premier)",
    "desc": "Vaincre la Reine Nyée dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 345
   },
   {
    "id": 5967,
    "name": "Reine Nyée (Compagnon)",
    "desc": "Vaincre Reine Nyée dans son donjon en validant le challenge « Chevaliers tourmentés »",
    "pts": 5,
    "challenge": 1269
   }
  ]
 },
 {
  "id": 91,
  "name": "Bateau du Chouque",
  "level": 90,
  "difficulty": 2,
  "boss": {
   "id": 230,
   "name": "Le Chouque",
   "img": "assets/img/bosses/230.png"
  },
  "achievements": [
   {
    "id": 1398,
    "name": "Bateau du Chouque",
    "desc": "Vaincre le Chouque dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1399,
    "name": "Le Chouque (Duo)",
    "desc": "Vaincre le Chouque dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 347
   },
   {
    "id": 1402,
    "name": "Le Chouque (Dernier)",
    "desc": "Vaincre Le Chouque dans son donjon  en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 348
   },
   {
    "id": 1403,
    "name": "Le Chouque (Nomade)",
    "desc": "Vaincre Le Chouque dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 349
   },
   {
    "id": 6174,
    "name": "Le Chouque (Spécial)",
    "desc": "Vaincre Le Chouque dans son donjon en validant le challenge « Saute-pirate ».",
    "pts": 10,
    "challenge": 1009
   }
  ]
 },
 {
  "id": 105,
  "name": "Chapiteau des Magik Riktus",
  "level": 90,
  "difficulty": 3,
  "boss": {
   "id": 4860,
   "name": "Choudini",
   "img": "assets/img/bosses/4860.png"
  },
  "achievements": [
   {
    "id": 1593,
    "name": "Chapiteau des Magik Riktus",
    "desc": "Vaincre Choudini dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1596,
    "name": "Choudini (Duo)",
    "desc": "Vaincre Choudini dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 385
   },
   {
    "id": 1594,
    "name": "Choudini (Collant)",
    "desc": "Vaincre Choudini en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 383
   },
   {
    "id": 1595,
    "name": "Choudini (Hardi)",
    "desc": "Vaincre Choudini dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 384
   },
   {
    "id": 6176,
    "name": "Choudini (Spécial)",
    "desc": "Vaincre Choudini dans son donjon en validant le challenge « Chacun son tour de magie ».",
    "pts": 10,
    "challenge": 1011
   },
   {
    "id": 5974,
    "name": "Choudini (Compagnon)",
    "desc": "Vaincre Choudini dans son donjon en validant le challenge « Bandits du Magik Riktus »",
    "pts": 5,
    "challenge": 1270
   }
  ]
 },
 {
  "id": 9,
  "name": "Domaine Ancestral",
  "level": 90,
  "difficulty": 3,
  "boss": {
   "id": 173,
   "name": "Abraknyde Ancestral",
   "img": "assets/img/bosses/173.png"
  },
  "achievements": [
   {
    "id": 35,
    "name": "Domaine Ancestral",
    "desc": "Vaincre l'Abraknyde Ancestral dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 509,
    "name": "Abraknyde Ancestral (Duo)",
    "desc": "Vaincre l'Abraknyde Ancestral dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 101
   },
   {
    "id": 697,
    "name": "Abraknyde Ancestral (Premier)",
    "desc": "Vaincre l'Abraknyde Ancestral dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 172
   },
   {
    "id": 696,
    "name": "Abraknyde Ancestral (Nomade)",
    "desc": "Vaincre l'Abraknyde Ancestral dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 171
   },
   {
    "id": 6175,
    "name": "Abraknyde Ancestral (Spécial)",
    "desc": "Vaincre Abraknyde Ancestral dans son donjon en validant le challenge « Distance respectueuse ».",
    "pts": 10,
    "challenge": 1010
   }
  ]
 },
 {
  "id": 6,
  "name": "Antre du Dragon Cochon",
  "level": 100,
  "difficulty": 2,
  "boss": {
   "id": 113,
   "name": "Dragon Cochon",
   "img": "assets/img/bosses/113.png"
  },
  "achievements": [
   {
    "id": 22,
    "name": "Antre du Dragon Cochon",
    "desc": "Vaincre le Dragon Cochon dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 510,
    "name": "Dragon Cochon (Duo)",
    "desc": "Vaincre le Dragon Cochon dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 84
   },
   {
    "id": 698,
    "name": "Dragon Cochon (Hardi)",
    "desc": "Vaincre le Dragon Cochon dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 173
   },
   {
    "id": 6178,
    "name": "Dragon Cochon (Spécial)",
    "desc": "Vaincre Dragon Cochon dans son donjon en validant le challenge « Faut pas pousser les cochons dans la confiture d'orties ».",
    "pts": 10,
    "challenge": 1013
   },
   {
    "id": 699,
    "name": "Dragon Cochon (Versatile)",
    "desc": "Vaincre le Dragon Cochon dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 174
   },
   {
    "id": 5988,
    "name": "Dragon Cochon (Compagnon)",
    "desc": "Vaincre Dragon Cochon dans son donjon en validant le challenge « Les crados »",
    "pts": 5,
    "challenge": 1272
   }
  ]
 },
 {
  "id": 92,
  "name": "Arbre de Moon",
  "level": 100,
  "difficulty": 3,
  "boss": {
   "id": 226,
   "name": "Moon",
   "img": "assets/img/bosses/226.png"
  },
  "achievements": [
   {
    "id": 485,
    "name": "Arbre de Moon",
    "desc": "Vaincre le Moon dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 513,
    "name": "Moon (Duo)",
    "desc": "Vaincre le Moon dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 83
   },
   {
    "id": 6183,
    "name": "Moon (Spécial)",
    "desc": "Vaincre Moon dans son donjon en validant le challenge « Animal totem ».",
    "pts": 10,
    "challenge": 1018
   },
   {
    "id": 705,
    "name": "Moon (Statue)",
    "desc": "Vaincre le Moon dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 180
   },
   {
    "id": 704,
    "name": "Moon (Versatile)",
    "desc": "Vaincre le Moon dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 179
   },
   {
    "id": 6016,
    "name": "Moon (Compagnon)",
    "desc": "Vaincre Moon dans son donjon en validant le challenge « Les pandaliens »",
    "pts": 5,
    "challenge": 1276
   }
  ]
 },
 {
  "id": 30,
  "name": "Caverne du Koulosse",
  "level": 100,
  "difficulty": 3,
  "boss": {
   "id": 670,
   "name": "Koulosse",
   "img": "assets/img/bosses/670.png"
  },
  "achievements": [
   {
    "id": 29,
    "name": "Caverne du Koulosse",
    "desc": "Vaincre le Koulosse dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 511,
    "name": "Koulosse (Duo)",
    "desc": "Vaincre le Koulosse dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 85
   },
   {
    "id": 701,
    "name": "Koulosse (Mains propres)",
    "desc": "Vaincre le Koulosse dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 176
   },
   {
    "id": 700,
    "name": "Koulosse (Zombie)",
    "desc": "Vaincre le Koulosse dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 175
   },
   {
    "id": 6179,
    "name": "Koulosse (Spécial)",
    "desc": "Vaincre Koulosse dans son donjon en validant le challenge « À la cool ».",
    "pts": 10,
    "challenge": 1014
   }
  ]
 },
 {
  "id": 77,
  "name": "Fabrique de Malléfisk",
  "level": 100,
  "difficulty": 2,
  "boss": {
   "id": 3652,
   "name": "Malléfisk",
   "img": "assets/img/bosses/3652.png"
  },
  "achievements": [
   {
    "id": 1088,
    "name": "Fabrique de Malléfisk",
    "desc": "Vaincre Malléfisk dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1091,
    "name": "Malléfisk (Duo)",
    "desc": "Vaincre Malléfisk dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 314
   },
   {
    "id": 6182,
    "name": "Malléfisk (Spécial)",
    "desc": "Vaincre Malléfisk dans son donjon en validant le challenge « Échapper au fisk ».",
    "pts": 10,
    "challenge": 1017
   },
   {
    "id": 1089,
    "name": "Malléfisk (Circulez)",
    "desc": "Vaincre Malléfisk dans son donjon en validant le challenge « Circulez ! ».",
    "pts": 10,
    "challenge": 312
   },
   {
    "id": 1090,
    "name": "Malléfisk (Blitzkrieg)",
    "desc": "Vaincre Malléfisk dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 313
   },
   {
    "id": 5981,
    "name": "Malléfisk (Compagnon)",
    "desc": "Vaincre Malléfisk dans son donjon en validant le challenge « Rats... au sens propre ou au figuré »",
    "pts": 5,
    "challenge": 1271
   }
  ]
 },
 {
  "id": 66,
  "name": "Potager d'Halouine",
  "level": 100,
  "difficulty": 1,
  "boss": {
   "id": 3306,
   "name": "Halouine",
   "img": "assets/img/bosses/3306.png"
  },
  "achievements": [
   {
    "id": 1148,
    "name": "Potager d'Halouine",
    "desc": "Vaincre Halouine dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6270,
    "name": "Halouine (Spécial)",
    "desc": "Vaincre Halouine dans son donjon en validant le challenge « Rester planté là ».",
    "pts": 10,
    "challenge": 1267
   },
   {
    "id": 1149,
    "name": "Halouine (Chrono)",
    "desc": "Vaincre Halouine dans son donjon en validant le challenge « Chrono ».",
    "pts": 10,
    "challenge": 328
   },
   {
    "id": 1152,
    "name": "Halouine (Duo)",
    "desc": "Vaincre Halouine dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 331
   },
   {
    "id": 1150,
    "name": "Halouine (Hardi)",
    "desc": "Vaincre Halouine dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 329
   },
   {
    "id": 1151,
    "name": "Halouine (Dernier)",
    "desc": "Vaincre Halouine dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 330
   }
  ]
 },
 {
  "id": 115,
  "name": "Repaire du Kharnozor",
  "level": 100,
  "difficulty": 2,
  "boss": {
   "id": 5819,
   "name": "Kharnozor",
   "img": "assets/img/bosses/5819.png"
  },
  "achievements": [
   {
    "id": 2115,
    "name": "Repaire du Kharnozor",
    "desc": "Vaincre le Kharnozor dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2118,
    "name": "Kharnozor (Duo)",
    "desc": "Vaincre le Kharnozor dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 418
   },
   {
    "id": 6181,
    "name": "Kharnozor (Spécial)",
    "desc": "Vaincre Kharnozor dans son donjon en validant le challenge « Les yeux aussi gros que le ventre ».",
    "pts": 10,
    "challenge": 1016
   },
   {
    "id": 2116,
    "name": "Kharnozor (Dernier)",
    "desc": "Vaincre le Kharnozor dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 416
   },
   {
    "id": 2117,
    "name": "Kharnozor (Circulez)",
    "desc": "Vaincre le Kharnozor dans son donjon en validant le challenge « Circulez ! ».",
    "pts": 10,
    "challenge": 417
   }
  ]
 },
 {
  "id": 15,
  "name": "Tanière du Meulou",
  "level": 100,
  "difficulty": 4,
  "boss": {
   "id": 232,
   "name": "Meulou",
   "img": "assets/img/bosses/232.png"
  },
  "achievements": [
   {
    "id": 39,
    "name": "Tanière du Meulou",
    "desc": "Vaincre le Meulou dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 512,
    "name": "Meulou (Duo)",
    "desc": "Vaincre le Meulou dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 86
   },
   {
    "id": 703,
    "name": "Meulou (Hardi)",
    "desc": "Vaincre le Meulou dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 178
   },
   {
    "id": 702,
    "name": "Meulou (Premier)",
    "desc": "Vaincre le Meulou dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 177
   },
   {
    "id": 6180,
    "name": "Meulou (Spécial)",
    "desc": "Vaincre Meulou dans son donjon en validant le challenge « Meulou y es-tu ? ».",
    "pts": 10,
    "challenge": 1015
   },
   {
    "id": 6023,
    "name": "Meulou (Compagnon)",
    "desc": "Vaincre Meulou dans son donjon en validant le challenge « Mini Nuits' »",
    "pts": 5,
    "challenge": 1277
   }
  ]
 },
 {
  "id": 72,
  "name": "Théâtre de Dramak",
  "level": 100,
  "difficulty": 5,
  "boss": {
   "id": 3476,
   "name": "Maître des Pantins",
   "img": "assets/img/bosses/3476.png"
  },
  "achievements": [
   {
    "id": 1013,
    "name": "Théâtre de Dramak",
    "desc": "Vaincre le Maître des Pantins dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1016,
    "name": "Maître des Pantins (Duo)",
    "desc": "Vaincre le Maître des Pantins dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 293
   },
   {
    "id": 1014,
    "name": "Maître des Pantins (Statue)",
    "desc": "Vaincre le Maître des Pantins dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 291
   },
   {
    "id": 6184,
    "name": "Maître des Pantins (Spécial)",
    "desc": "Vaincre Maître des Pantins dans son donjon en validant le challenge « Spectacle de marionnettes ».",
    "pts": 10,
    "challenge": 1019
   },
   {
    "id": 1015,
    "name": "Maître des Pantins (Mains propres)",
    "desc": "Vaincre le Maître des Pantins dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 292
   },
   {
    "id": 6002,
    "name": "Maître des pantins (Compagnon)",
    "desc": "Vaincre Maître des pantins dans son donjon en validant le challenge « Les z'autres »",
    "pts": 5,
    "challenge": 1274
   }
  ]
 },
 {
  "id": 125,
  "name": "Bambusaie de Damadrya",
  "level": 110,
  "difficulty": 2,
  "boss": {
   "id": 6326,
   "name": "Damadrya",
   "img": "assets/img/bosses/6326.png"
  },
  "achievements": [
   {
    "id": 3037,
    "name": "Bambusaie de Damadrya",
    "desc": "Vaincre Damadrya dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 3039,
    "name": "Damadrya (Hardi)",
    "desc": "Vaincre Damadrya dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 466
   },
   {
    "id": 3040,
    "name": "Damadrya (Duo)",
    "desc": "Vaincre Damadrya dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 464
   },
   {
    "id": 6189,
    "name": "Damadrya (Spécial)",
    "desc": "Vaincre Damadrya dans son donjon en validant le challenge « On lui pèlera le bourgeon ».",
    "pts": 10,
    "challenge": 1024
   },
   {
    "id": 3038,
    "name": "Damadrya (Premier)",
    "desc": "Vaincre Damadrya dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 465
   }
  ]
 },
 {
  "id": 3,
  "name": "Bibliothèque du Maître Corbac",
  "level": 110,
  "difficulty": 3,
  "boss": {
   "id": 289,
   "name": "Maître Corbac",
   "img": "assets/img/bosses/289.png"
  },
  "achievements": [
   {
    "id": 25,
    "name": "Bibliothèque du Maître Corbac",
    "desc": "Vaincre le Maître Corbac dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 515,
    "name": "Maître Corbac (Duo)",
    "desc": "Vaincre le Maître Corbac dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 89
   },
   {
    "id": 708,
    "name": "Maître Corbac (Collant)",
    "desc": "Vaincre le Maître Corbac en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 183
   },
   {
    "id": 709,
    "name": "Maître Corbac (Premier)",
    "desc": "Vaincre le Maître Corbac dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 184
   },
   {
    "id": 6188,
    "name": "Maître Corbac (Spécial)",
    "desc": "Vaincre Maître Corbac dans son donjon en validant le challenge « Maître Corbac sur un arbre perché ».",
    "pts": 10,
    "challenge": 1023
   }
  ]
 },
 {
  "id": 37,
  "name": "Caverne de Nowel",
  "level": 110,
  "difficulty": 2,
  "boss": {
   "id": 872,
   "name": "Papa Nowel",
   "img": "assets/img/bosses/872.png"
  },
  "achievements": [
   {
    "id": 435,
    "name": "Caverne de Nowel",
    "desc": "Vaincre le Papa Nowel dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 439,
    "name": "Papa Nowel (Duo)",
    "desc": "Vaincre le Papa Nowel dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 246
   },
   {
    "id": 436,
    "name": "Papa Nowel (Chrono)",
    "desc": "Vaincre le Papa Nowel dans son donjon en validant le challenge « Chrono ».",
    "pts": 10,
    "challenge": 251
   },
   {
    "id": 438,
    "name": "Papa Nowel (Statue)",
    "desc": "Vaincre le Papa Nowel dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 245
   },
   {
    "id": 437,
    "name": "Papa Nowel (Premier)",
    "desc": "Vaincre le Papa Nowel dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 244
   },
   {
    "id": 6272,
    "name": "Papa Nowel (Spécial)",
    "desc": "Vaincre le Papa Nowel dans son donjon en validant le challenge « Un Nowel presque parfait ».",
    "pts": 10,
    "challenge": 1279
   }
  ]
 },
 {
  "id": 42,
  "name": "Garde-manger du Rat Blanc",
  "level": 110,
  "difficulty": 1,
  "boss": {
   "id": 940,
   "name": "Rat Blanc",
   "img": "assets/img/bosses/940.png"
  },
  "achievements": [
   {
    "id": 5188,
    "name": "Garde-manger du Rat Blanc",
    "desc": "Vaincre le Rat Blanc dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5191,
    "name": "Rat Blanc (Duo)",
    "desc": "Vaincre le Rat Blanc dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 88
   },
   {
    "id": 5190,
    "name": "Rat Blanc (Hardi)",
    "desc": "Vaincre le Rat Blanc dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 186
   },
   {
    "id": 6186,
    "name": "Rat Blanc (Spécial)",
    "desc": "Vaincre Rat Blanc dans son donjon en validant le challenge « La taille du rat ».",
    "pts": 10,
    "challenge": 1021
   },
   {
    "id": 5189,
    "name": "Rat Blanc (Premier)",
    "desc": "Vaincre le Rat Blanc dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 185
   }
  ]
 },
 {
  "id": 41,
  "name": "Goulet du Rasboul",
  "level": 110,
  "difficulty": 3,
  "boss": {
   "id": 1071,
   "name": "Silf le Rasboul Majeur",
   "img": "assets/img/bosses/1071.png"
  },
  "achievements": [
   {
    "id": 61,
    "name": "Goulet du Rasboul",
    "desc": "Vaincre Silf le Rasboul Majeur dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 514,
    "name": "Silf le Rasboul Majeur (Duo)",
    "desc": "Vaincre Silf le Rasboul Majeur dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 65
   },
   {
    "id": 6185,
    "name": "Silf le Rasboul Majeur (Spécial)",
    "desc": "Vaincre Silf le Rasboul Majeur dans son donjon en validant le challenge « Ras le boule ».",
    "pts": 10,
    "challenge": 1020
   },
   {
    "id": 706,
    "name": "Silf le Rasboul Majeur (Premier)",
    "desc": "Vaincre Silf le Rasboul Majeur dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 181
   },
   {
    "id": 707,
    "name": "Silf le Rasboul Majeur (Temps qui court)",
    "desc": "Vaincre Silf le Rasboul Majeur dans son donjon en validant le challenge « Temps qui court ».",
    "pts": 10,
    "challenge": 182
   }
  ]
 },
 {
  "id": 93,
  "name": "Miausolée du Pounicheur",
  "level": 110,
  "difficulty": 3,
  "boss": {
   "id": 4278,
   "name": "Pounicheur",
   "img": "assets/img/bosses/4278.png"
  },
  "achievements": [
   {
    "id": 1409,
    "name": "Miausolée du Pounicheur",
    "desc": "Vaincre le Pounicheur dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1410,
    "name": "Pounicheur (Duo)",
    "desc": "Vaincre le Pounicheur dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 350
   },
   {
    "id": 6190,
    "name": "Pounicheur (Spécial)",
    "desc": "Vaincre Pounicheur dans son donjon en validant le challenge « Sac à pupuces ».",
    "pts": 10,
    "challenge": 1025
   },
   {
    "id": 1413,
    "name": "Pounicheur (Statue)",
    "desc": "Vaincre le Pounicheur dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 352
   },
   {
    "id": 1414,
    "name": "Pounicheur (Blitzkrieg)",
    "desc": "Vaincre le Pounicheur dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 351
   }
  ]
 },
 {
  "id": 43,
  "name": "Sousouricière du Rat Noir",
  "level": 110,
  "difficulty": 2,
  "boss": {
   "id": 939,
   "name": "Rat Noir",
   "img": "assets/img/bosses/939.png"
  },
  "achievements": [
   {
    "id": 5194,
    "name": "Sousouricière du Rat Noir",
    "desc": "Vaincre le Rat Noir dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5197,
    "name": "Rat Noir (Duo)",
    "desc": "Vaincre le Rat Noir dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 87
   },
   {
    "id": 5196,
    "name": "Rat Noir (Hardi)",
    "desc": "Vaincre le Rat Noir dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 187
   },
   {
    "id": 6187,
    "name": "Rat Noir (Spécial)",
    "desc": "Vaincre Rat Noir dans son donjon en validant le challenge « Rat-trapage ».",
    "pts": 10,
    "challenge": 1022
   },
   {
    "id": 5195,
    "name": "Rat Noir (Blitzkrieg)",
    "desc": "Vaincre le Rat Noir dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 188
   },
   {
    "id": 5982,
    "name": "Rat Noir (Compagnon)",
    "desc": "Vaincre Rat Noir dans son donjon en validant le challenge « Rats... au sens propre ou au figuré »",
    "pts": 5,
    "challenge": 1271
   }
  ]
 },
 {
  "id": 7,
  "name": "Antre de Crocabulia",
  "level": 120,
  "difficulty": 2,
  "boss": {
   "id": 854,
   "name": "Crocabulia",
   "img": "assets/img/bosses/854.png"
  },
  "achievements": [
   {
    "id": 51,
    "name": "Antre de Crocabulia",
    "desc": "Vaincre Crocabulia dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 526,
    "name": "Crocabulia (Duo)",
    "desc": "Vaincre Crocabulia dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 80
   },
   {
    "id": 6196,
    "name": "Crocabulia (Spécial)",
    "desc": "Vaincre Crocabulia dans son donjon en validant le challenge « En cassant des œufs ».",
    "pts": 10,
    "challenge": 1031
   },
   {
    "id": 724,
    "name": "Crocabulia (Statue)",
    "desc": "Vaincre Crocabulia dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 199
   },
   {
    "id": 725,
    "name": "Crocabulia (Versatile)",
    "desc": "Vaincre Crocabulia dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 200
   }
  ]
 },
 {
  "id": 49,
  "name": "Antre du Blop Multicolore Royal",
  "level": 120,
  "difficulty": 3,
  "boss": {
   "id": 1188,
   "name": "Blop Multicolore Royal",
   "img": "assets/img/bosses/1188.png"
  },
  "achievements": [
   {
    "id": 21,
    "name": "Antre du Blop Multicolore Royal",
    "desc": "Vaincre le Blop Multicolore Royal dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 520,
    "name": "Blop Multicolore Royal (Duo)",
    "desc": "Vaincre le Blop Multicolore Royal dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 78
   },
   {
    "id": 714,
    "name": "Blop Multicolore Royal (Hardi)",
    "desc": "Vaincre le Blop Multicolore Royal dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 189
   },
   {
    "id": 715,
    "name": "Blop Multicolore Royal (Duel)",
    "desc": "Vaincre le Blop Multicolore Royal en équipe dans son donjon en validant le challenge « Duel ».",
    "pts": 10,
    "challenge": 190
   },
   {
    "id": 6195,
    "name": "Blop Multicolore Royal (Spécial)",
    "desc": "Vaincre Blop Multicolore Royal dans son donjon en validant le challenge « Touche pas à mes blops ».",
    "pts": 10,
    "challenge": 1030
   },
   {
    "id": 6003,
    "name": "Blop Multicolore (Compagnon)",
    "desc": "Vaincre Blop Multicolore dans son donjon en validant le challenge « Les z'autres »",
    "pts": 5,
    "challenge": 1274
   }
  ]
 },
 {
  "id": 4,
  "name": "Centre du Labyrinthe du Minotoror",
  "level": 120,
  "difficulty": 2,
  "boss": {
   "id": 121,
   "name": "Minotoror",
   "img": "assets/img/bosses/121.png"
  },
  "achievements": [
   {
    "id": 32,
    "name": "Centre du Labyrinthe du Minotoror",
    "desc": "Vaincre le Minotoror dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 522,
    "name": "Minotoror (Duo)",
    "desc": "Vaincre le Minotoror dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 82
   },
   {
    "id": 716,
    "name": "Minotoror (Misanthrope)",
    "desc": "Vaincre le Minotoror en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 191
   },
   {
    "id": 717,
    "name": "Minotoror (Mains propres)",
    "desc": "Vaincre le Minotoror dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 192
   },
   {
    "id": 6193,
    "name": "Minotoror (Spécial)",
    "desc": "Vaincre Minotoror dans son donjon en validant le challenge « Garde emplumée ».",
    "pts": 10,
    "challenge": 1028
   }
  ]
 },
 {
  "id": 85,
  "name": "Mégalithe de Fraktale",
  "level": 120,
  "difficulty": 4,
  "boss": {
   "id": 3852,
   "name": "Fraktale",
   "img": "assets/img/bosses/3852.png"
  },
  "achievements": [
   {
    "id": 1166,
    "name": "Mégalithe de Fraktale",
    "desc": "Vaincre Fraktale dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1167,
    "name": "Fraktale (Misanthrope)",
    "desc": "Vaincre Fraktale en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 338
   },
   {
    "id": 1169,
    "name": "Fraktale (Duo)",
    "desc": "Vaincre Fraktale dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 340
   },
   {
    "id": 6194,
    "name": "Fraktale (Spécial)",
    "desc": "Vaincre Fraktale dans son donjon en validant le challenge « L'heure tourne ».",
    "pts": 10,
    "challenge": 1029
   },
   {
    "id": 1168,
    "name": "Fraktale (Blitzkrieg)",
    "desc": "Vaincre Fraktale dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 339
   }
  ]
 },
 {
  "id": 46,
  "name": "Repaire de Skeunk",
  "level": 120,
  "difficulty": 3,
  "boss": {
   "id": 780,
   "name": "Skeunk",
   "img": "assets/img/bosses/780.png"
  },
  "achievements": [
   {
    "id": 69,
    "name": "Repaire de Skeunk",
    "desc": "Vaincre Skeunk dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 527,
    "name": "Skeunk (Duo)",
    "desc": "Vaincre Skeunk dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 79
   },
   {
    "id": 6192,
    "name": "Skeunk (Spécial)",
    "desc": "Vaincre Skeunk dans son donjon en validant le challenge « Les fans et les enfants d'abord ».",
    "pts": 10,
    "challenge": 1027
   },
   {
    "id": 726,
    "name": "Skeunk (Statue)",
    "desc": "Vaincre Skeunk dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 201
   },
   {
    "id": 727,
    "name": "Skeunk (Blitzkrieg)",
    "desc": "Vaincre Skeunk dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 202
   }
  ]
 },
 {
  "id": 54,
  "name": "Serre du Royalmouth",
  "level": 120,
  "difficulty": 2,
  "boss": {
   "id": 2854,
   "name": "Royalmouth",
   "img": "assets/img/bosses/2854.png"
  },
  "achievements": [
   {
    "id": 72,
    "name": "Serre du Royalmouth",
    "desc": "Vaincre le Royalmouth dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 523,
    "name": "Royalmouth (Duo)",
    "desc": "Vaincre le Royalmouth dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 53
   },
   {
    "id": 719,
    "name": "Royalmouth (Premier)",
    "desc": "Vaincre le Royalmouth dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 194
   },
   {
    "id": 6197,
    "name": "Royalmouth (Spécial)",
    "desc": "Vaincre Royalmouth dans son donjon en validant le challenge « Parcimonie royale ».",
    "pts": 10,
    "challenge": 1032
   },
   {
    "id": 718,
    "name": "Royalmouth (Mains propres)",
    "desc": "Vaincre le Royalmouth dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 193
   }
  ]
 },
 {
  "id": 50,
  "name": "Tofulailler Royal",
  "level": 120,
  "difficulty": 2,
  "boss": {
   "id": 382,
   "name": "Tofu Royal",
   "img": "assets/img/bosses/382.png"
  },
  "achievements": [
   {
    "id": 73,
    "name": "Tofulailler Royal",
    "desc": "Vaincre le Tofu Royal dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 525,
    "name": "Tofu Royal (Duo)",
    "desc": "Vaincre le Tofu Royal dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 81
   },
   {
    "id": 6191,
    "name": "Tofu Royal (Spécial)",
    "desc": "Vaincre Tofu Royal dans son donjon en validant le challenge « Poursuite royale ».",
    "pts": 10,
    "challenge": 1026
   },
   {
    "id": 723,
    "name": "Tofu Royal (Statue)",
    "desc": "Vaincre le Tofu Royal dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 198
   },
   {
    "id": 722,
    "name": "Tofu Royal (Dernier)",
    "desc": "Vaincre le Tofu Royal dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 197
   },
   {
    "id": 5968,
    "name": "Tofu Royal (Compagnon)",
    "desc": "Vaincre Tofu Royal dans son donjon en validant le challenge « Chevaliers tourmentés »",
    "pts": 5,
    "challenge": 1269
   }
  ]
 },
 {
  "id": 126,
  "name": "Atelier du Tanukouï San",
  "level": 130,
  "difficulty": 3,
  "boss": {
   "id": 6218,
   "name": "Tanukouï San",
   "img": "assets/img/bosses/6218.png"
  },
  "achievements": [
   {
    "id": 3004,
    "name": "Atelier du Tanukouï San",
    "desc": "Vaincre le Tanukouï San dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 3007,
    "name": "Tanukouï San (Duo)",
    "desc": "Vaincre le Tanukouï San dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 444
   },
   {
    "id": 6203,
    "name": "Tanukouï San (Spécial)",
    "desc": "Vaincre Tanukouï San dans son donjon en validant le challenge « Se faire des kouïs en or ».",
    "pts": 10,
    "challenge": 1038
   },
   {
    "id": 3005,
    "name": "Tanukouï San (Statue)",
    "desc": "Vaincre le Tanukouï San dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 442
   },
   {
    "id": 3006,
    "name": "Tanukouï San (Versatile)",
    "desc": "Vaincre le Tanukouï San dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 443
   },
   {
    "id": 6010,
    "name": "Tanukouï San (Compagnon)",
    "desc": "Vaincre Tanukouï San dans son donjon en validant le challenge « Compagnons, quel est votre métier ? »",
    "pts": 5,
    "challenge": 1275
   }
  ]
 },
 {
  "id": 101,
  "name": "Caverne d'El Piko",
  "level": 130,
  "difficulty": 1,
  "boss": {
   "id": 4609,
   "name": "El Piko",
   "img": "assets/img/bosses/4609.png"
  },
  "achievements": [
   {
    "id": 1536,
    "name": "Caverne d'El Piko",
    "desc": "Vaincre El Piko dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1539,
    "name": "El Piko (Duo)",
    "desc": "Vaincre El Piko dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 373
   },
   {
    "id": 1538,
    "name": "El Piko (Duel)",
    "desc": "Vaincre El Piko en équipe dans son donjon en validant le challenge « Duel ».",
    "pts": 10,
    "challenge": 372
   },
   {
    "id": 6199,
    "name": "El Piko (Spécial)",
    "desc": "Vaincre El Piko dans son donjon en validant le challenge « Guerilla ».",
    "pts": 10,
    "challenge": 1034
   },
   {
    "id": 1537,
    "name": "El Piko (Blitzkrieg)",
    "desc": "Vaincre El Piko dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 371
   }
  ]
 },
 {
  "id": 112,
  "name": "Croquanterie",
  "level": 130,
  "difficulty": 4,
  "boss": {
   "id": 5664,
   "name": "Croqueleur",
   "img": "assets/img/bosses/5664.png"
  },
  "achievements": [
   {
    "id": 2075,
    "name": "Croquanterie",
    "desc": "Vaincre le Croqueleur dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2093,
    "name": "Croqueleur (Chrono)",
    "desc": "Vaincre le Croqueleur dans son donjon en validant le challenge « Chrono ».",
    "pts": 10,
    "challenge": 411
   },
   {
    "id": 2077,
    "name": "Croqueleur (Duo)",
    "desc": "Vaincre le Croqueleur dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 404
   },
   {
    "id": 2076,
    "name": "Croqueleur (Circulez)",
    "desc": "Vaincre le Croqueleur dans son donjon en validant le challenge « Circulez ! ».",
    "pts": 10,
    "challenge": 405
   },
   {
    "id": 2081,
    "name": "Croqueleur (Blitzkrieg)",
    "desc": "Vaincre le Croqueleur dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 406
   },
   {
    "id": 6281,
    "name": "Croqueleur (Spécial)",
    "desc": "Vaincre le Croqueleur dans son donjon en validant le challenge « J'accours, les croquants ! ».",
    "pts": 10,
    "challenge": 1404
   }
  ]
 },
 {
  "id": 81,
  "name": "Ring du Capitaine Ekarlatte",
  "level": 130,
  "difficulty": 2,
  "boss": {
   "id": 3753,
   "name": "Capitaine Ekarlatte",
   "img": "assets/img/bosses/3753.png"
  },
  "achievements": [
   {
    "id": 1123,
    "name": "Ring du Capitaine Ekarlatte",
    "desc": "Vaincre le Capitaine Ekarlatte dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1126,
    "name": "Capitaine Ekarlatte (Duo)",
    "desc": "Vaincre le Capitaine Ekarlatte dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 323
   },
   {
    "id": 6198,
    "name": "Capitaine Ekarlatte (Spécial)",
    "desc": "Vaincre Capitaine Ekarlatte dans son donjon en validant le challenge « Sortie de ring ».",
    "pts": 10,
    "challenge": 1033
   },
   {
    "id": 1125,
    "name": "Capitaine Ekarlatte (Statue)",
    "desc": "Vaincre Capitaine Ekarlatte dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 321
   },
   {
    "id": 1124,
    "name": "Capitaine Ekarlatte (Focus)",
    "desc": "Vaincre le Capitaine Ekarlatte dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 322
   },
   {
    "id": 5975,
    "name": "Capitaine Ekarlatte (Compagnon)",
    "desc": "Vaincre Capitaine Ekarlatte dans son donjon en validant le challenge « Bandits du Magik Riktus »",
    "pts": 5,
    "challenge": 1270
   }
  ]
 },
 {
  "id": 123,
  "name": "Vallée de la Dame des eaux",
  "level": 130,
  "difficulty": 2,
  "boss": {
   "id": 6256,
   "name": "Nagate",
   "img": "assets/img/bosses/6256.png"
  },
  "achievements": [
   {
    "id": 3020,
    "name": "Vallée de la Dame des eaux",
    "desc": "Vaincre Nagate la Dame des eaux dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 3023,
    "name": "Nagate la Dame des eaux (Duo)",
    "desc": "Vaincre Nagate la Dame des eaux dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 450
   },
   {
    "id": 3022,
    "name": "Nagate la Dame des eaux (Prudent)",
    "desc": "Vaincre Nagate la Dame des eaux dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 448
   },
   {
    "id": 6201,
    "name": "Nagate la Dame des eaux (Spécial)",
    "desc": "Vaincre Nagate la Dame des eaux dans son donjon en validant le challenge « Le jeu de la Dame ».",
    "pts": 10,
    "challenge": 1036
   },
   {
    "id": 3021,
    "name": "Nagate la Dame des eaux (Nomade)",
    "desc": "Vaincre Nagate la Dame des eaux dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 449
   },
   {
    "id": 5989,
    "name": "Nagate la Dame des eaux (Compagnon)",
    "desc": "Vaincre Nagate la Dame des eaux dans son donjon en validant le challenge « Les crados »",
    "pts": 5,
    "challenge": 1272
   }
  ]
 },
 {
  "id": 80,
  "name": "Volière de la Haute Truche",
  "level": 130,
  "difficulty": 4,
  "boss": {
   "id": 3618,
   "name": "Haute Truche",
   "img": "assets/img/bosses/3618.png"
  },
  "achievements": [
   {
    "id": 1061,
    "name": "Volière de la Haute Truche",
    "desc": "Vaincre la Haute Truche dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1063,
    "name": "Haute Truche (Barbare)",
    "desc": "Vaincre la Haute Truche dans son donjon en validant le challenge « Barbare ».",
    "pts": 10,
    "challenge": 304
   },
   {
    "id": 1064,
    "name": "Haute Truche (Duo)",
    "desc": "Vaincre la Haute Truche dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 305
   },
   {
    "id": 6200,
    "name": "Haute Truche (Spécial)",
    "desc": "Vaincre Haute Truche dans son donjon en validant le challenge « Truchement ».",
    "pts": 10,
    "challenge": 1035
   },
   {
    "id": 1062,
    "name": "Haute Truche (Premier)",
    "desc": "Vaincre la Haute Truche dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 303
   }
  ]
 },
 {
  "id": 10,
  "name": "Clairière du Chêne Mou",
  "level": 140,
  "difficulty": 3,
  "boss": {
   "id": 257,
   "name": "Chêne Mou",
   "img": "assets/img/bosses/257.png"
  },
  "achievements": [
   {
    "id": 53,
    "name": "Clairière du Chêne Mou",
    "desc": "Vaincre le Chêne Mou dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 530,
    "name": "Chêne Mou (Duo)",
    "desc": "Vaincre le Chêne Mou dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 76
   },
   {
    "id": 732,
    "name": "Chêne Mou (Liberté)",
    "desc": "Vaincre le Chêne Mou dans son donjon en validant le challenge « Liberté ».",
    "pts": 10,
    "challenge": 207
   },
   {
    "id": 6202,
    "name": "Chêne Mou (Spécial)",
    "desc": "Vaincre Chêne Mou dans son donjon en validant le challenge « Enchaînemou ».",
    "pts": 10,
    "challenge": 1037
   },
   {
    "id": 733,
    "name": "Chêne Mou (Premier)",
    "desc": "Vaincre le Chêne Mou dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 208
   }
  ]
 },
 {
  "id": 122,
  "name": "Dojo du Vent",
  "level": 140,
  "difficulty": 2,
  "boss": {
   "id": 6204,
   "name": "Shihan",
   "img": "assets/img/bosses/6204.png"
  },
  "achievements": [
   {
    "id": 3011,
    "name": "Dojo du Vent",
    "desc": "Vaincre Hanshi et Shihan ensemble dans leur donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6206,
    "name": "Hanshi et Shihan (Spécial)",
    "desc": "Vaincre Hanshi et Shihan dans son donjon en validant le challenge « Vents contraires ».",
    "pts": 10,
    "challenge": 1041
   },
   {
    "id": 3014,
    "name": "Hanshi et Shihan (Duo)",
    "desc": "Vaincre Hanshi et Shihan dans leur donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 447
   },
   {
    "id": 3013,
    "name": "Hanshi et Shihan (Dernier)",
    "desc": "Vaincre Hanshi et Shihan dans leur donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 446
   },
   {
    "id": 3012,
    "name": "Hanshi et Shihan (Prudent)",
    "desc": "Vaincre Hanshi et Shihan dans leur donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 445
   },
   {
    "id": 6017,
    "name": "Hanshi et Shihan (Compagnon)",
    "desc": "Vaincre Hanshi et Shihan dans son donjon en validant le challenge « Les pandaliens »",
    "pts": 5,
    "challenge": 1276
   }
  ]
 },
 {
  "id": 55,
  "name": "Excavation du Mansot Royal",
  "level": 140,
  "difficulty": 1,
  "boss": {
   "id": 2848,
   "name": "Mansot Royal",
   "img": "assets/img/bosses/2848.png"
  },
  "achievements": [
   {
    "id": 59,
    "name": "Excavation du Mansot Royal",
    "desc": "Vaincre le Mansot Royal dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 532,
    "name": "Mansot Royal (Duo)",
    "desc": "Vaincre le Mansot Royal dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 54
   },
   {
    "id": 737,
    "name": "Mansot Royal (Collant)",
    "desc": "Vaincre le Mansot Royal en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 212
   },
   {
    "id": 6205,
    "name": "Mansot Royal (Spécial)",
    "desc": "Vaincre Mansot Royal dans son donjon en validant le challenge « Privilège royal ».",
    "pts": 10,
    "challenge": 1040
   },
   {
    "id": 736,
    "name": "Mansot Royal (Dernier)",
    "desc": "Vaincre le Mansot Royal dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 211
   },
   {
    "id": 6024,
    "name": "Mansot Royal (Compagnon)",
    "desc": "Vaincre Mansot Royal dans son donjon en validant le challenge « Mini Nuits' »",
    "pts": 5,
    "challenge": 1277
   }
  ]
 },
 {
  "id": 124,
  "name": "Fabrique de foux d'artifice",
  "level": 140,
  "difficulty": 5,
  "boss": {
   "id": 6249,
   "name": "Founoroshi",
   "img": "assets/img/bosses/6249.png"
  },
  "achievements": [
   {
    "id": 3027,
    "name": "Fabrique de foux d'artifice",
    "desc": "Vaincre Founoroshi dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6207,
    "name": "Founoroshi (Spécial)",
    "desc": "Vaincre Founoroshi dans son donjon en validant le challenge « Raviver la flamme ».",
    "pts": 10,
    "challenge": 1042
   },
   {
    "id": 3029,
    "name": "Founoroshi (Collant)",
    "desc": "Vaincre Founoroshi en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 455
   },
   {
    "id": 3030,
    "name": "Founoroshi (Duo)",
    "desc": "Vaincre Founoroshi dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 456
   },
   {
    "id": 3028,
    "name": "Founoroshi (Prudent)",
    "desc": "Vaincre Founoroshi dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 454
   }
  ]
 },
 {
  "id": 51,
  "name": "Laboratoire du Tynril",
  "level": 140,
  "difficulty": 3,
  "boss": {
   "id": 1087,
   "name": "Tynril Ahuri",
   "img": "assets/img/bosses/1087.png"
  },
  "achievements": [
   {
    "id": 531,
    "name": "Tynrils (Duo)",
    "desc": "Vaincre les Tynrils dans leur donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 66
   },
   {
    "id": 735,
    "name": "Tynrils (Zombie)",
    "desc": "Vaincre les Tynrils dans leur donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 210
   },
   {
    "id": 734,
    "name": "Tynrils (Intouchable)",
    "desc": "Vaincre les Tynrils dans leur donjon en validant le challenge « Intouchable ».",
    "pts": 10,
    "challenge": 209
   },
   {
    "id": 6204,
    "name": "Tynrils (Spécial)",
    "desc": "Vaincre Tynrils dans son donjon en validant le challenge « Prendre racine ».",
    "pts": 10,
    "challenge": 1039
   },
   {
    "id": 65,
    "name": "Laboratoire du Tynril",
    "desc": "Vaincre les Tynrils dans leur donjon.",
    "pts": 10,
    "challenge": null
   }
  ]
 },
 {
  "id": 56,
  "name": "Épave du Grolandais violent",
  "level": 150,
  "difficulty": 1,
  "boss": {
   "id": 2877,
   "name": "Ben le Ripate",
   "img": "assets/img/bosses/2877.png"
  },
  "achievements": [
   {
    "id": 58,
    "name": "Épave du Grolandais violent",
    "desc": "Vaincre  Ben le Ripate dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 533,
    "name": "Ben le Ripate (Duo)",
    "desc": "Vaincre Ben le Ripate dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 55
   },
   {
    "id": 6209,
    "name": "Ben le Ripate (Spécial)",
    "desc": "Vaincre Ben le Ripate dans son donjon en validant le challenge « Hamrack'n roll ».",
    "pts": 10,
    "challenge": 1044
   },
   {
    "id": 739,
    "name": "Ben le Ripate (Statue)",
    "desc": "Vaincre Ben le Ripate dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 214
   },
   {
    "id": 738,
    "name": "Ben le Ripate (Circulez)",
    "desc": "Vaincre Ben le Ripate dans son donjon en validant le challenge « Circulez ! ».",
    "pts": 10,
    "challenge": 213
   },
   {
    "id": 5996,
    "name": "Ben le Ripate (Compagnon)",
    "desc": "Vaincre Ben le Ripate dans son donjon en validant le challenge « Revenus d'outre-tombe »",
    "pts": 5,
    "challenge": 1273
   }
  ]
 },
 {
  "id": 79,
  "name": "Galerie du Phossile",
  "level": 150,
  "difficulty": 2,
  "boss": {
   "id": 3651,
   "name": "Phossile",
   "img": "assets/img/bosses/3651.png"
  },
  "achievements": [
   {
    "id": 1083,
    "name": "Galerie du Phossile",
    "desc": "Vaincre Phossile dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1086,
    "name": "Phossile (Duo)",
    "desc": "Vaincre le Phossile dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 311
   },
   {
    "id": 6210,
    "name": "Phossile (Spécial)",
    "desc": "Vaincre Phossile dans son donjon en validant le challenge « Diagonale du vide ».",
    "pts": 10,
    "challenge": 1045
   },
   {
    "id": 1085,
    "name": "Phossile (Liberté)",
    "desc": "Vaincre le Phossile dans son donjon en validant le challenge « Liberté ».",
    "pts": 10,
    "challenge": 310
   },
   {
    "id": 1084,
    "name": "Phossile (Hardi)",
    "desc": "Vaincre le Phossile dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 309
   }
  ]
 },
 {
  "id": 44,
  "name": "Repaire de Sphincter Cell",
  "level": 150,
  "difficulty": 3,
  "boss": {
   "id": 943,
   "name": "Sphincter Cell",
   "img": "assets/img/bosses/943.png"
  },
  "achievements": [
   {
    "id": 47,
    "name": "Repaire de Sphincter Cell",
    "desc": "Vaincre Sphincter Cell dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 534,
    "name": "Sphincter Cell (Duo)",
    "desc": "Vaincre Sphincter Cell dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 75
   },
   {
    "id": 6208,
    "name": "Sphincter Cell (Spécial)",
    "desc": "Vaincre Sphincter Cell dans son donjon en validant le challenge « Pizwa quatre couleurs ».",
    "pts": 10,
    "challenge": 1043
   },
   {
    "id": 740,
    "name": "Sphincter Cell (Hardi)",
    "desc": "Vaincre Sphincter Cell dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 215
   },
   {
    "id": 741,
    "name": "Sphincter Cell (Dernier)",
    "desc": "Vaincre Sphincter Cell dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 216
   }
  ]
 },
 {
  "id": 139,
  "name": "Tertre du long sommeil",
  "level": 150,
  "difficulty": 4,
  "boss": {
   "id": 107,
   "name": "Hell Mina",
   "img": "assets/img/bosses/107.png"
  },
  "achievements": [
   {
    "id": 5211,
    "name": "Tertre du long sommeil",
    "desc": "Vaincre Hell Mina dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6211,
    "name": "Hell Mina (Spécial)",
    "desc": "Vaincre Hell Mina dans son donjon en validant le challenge « Hellémentaire ».",
    "pts": 10,
    "challenge": 1046
   },
   {
    "id": 5205,
    "name": "Hell Mina (Dernier)",
    "desc": "Vaincre Hell Mina dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 590
   },
   {
    "id": 5206,
    "name": "Hell Mina (Statue)",
    "desc": "Vaincre Hell Mina dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 589
   },
   {
    "id": 5207,
    "name": "Hell Mina (Duo)",
    "desc": "Vaincre Hell Mina dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 587
   },
   {
    "id": 5961,
    "name": "Hell Mina (Compagnon)",
    "desc": "Vaincre Hell Mina dans son donjon en validant le challenge « Les héros »",
    "pts": 5,
    "challenge": 1268
   }
  ]
 },
 {
  "id": 28,
  "name": "Canopée du Kimbo",
  "level": 160,
  "difficulty": 4,
  "boss": {
   "id": 1045,
   "name": "Kimbo",
   "img": "assets/img/bosses/1045.png"
  },
  "achievements": [
   {
    "id": 27,
    "name": "Canopée du Kimbo",
    "desc": "Vaincre le Kimbo dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 535,
    "name": "Kimbo (Duo)",
    "desc": "Vaincre le Kimbo dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 67
   },
   {
    "id": 6212,
    "name": "Kimbo (Spécial)",
    "desc": "Vaincre Kimbo dans son donjon en validant le challenge « Une paire d'impairs ».",
    "pts": 10,
    "challenge": 1047
   },
   {
    "id": 743,
    "name": "Kimbo (Premier)",
    "desc": "Vaincre le Kimbo dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 218
   },
   {
    "id": 742,
    "name": "Kimbo (Statue)",
    "desc": "Vaincre le Kimbo dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 217
   }
  ]
 },
 {
  "id": 75,
  "name": "Grotte de Kanigroula",
  "level": 160,
  "difficulty": 4,
  "boss": {
   "id": 3556,
   "name": "Kanigroula",
   "img": "assets/img/bosses/3556.png"
  },
  "achievements": [
   {
    "id": 1055,
    "name": "Grotte de Kanigroula",
    "desc": "Vaincre Kanigroula dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6215,
    "name": "Kanigroula (Spécial)",
    "desc": "Vaincre Kanigroula dans son donjon en validant le challenge « Crocs à crocs ».",
    "pts": 10,
    "challenge": 1050
   },
   {
    "id": 1058,
    "name": "Kanigroula (Duo)",
    "desc": "Vaincre Kanigroula dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 302
   },
   {
    "id": 1057,
    "name": "Kanigroula (Hardi)",
    "desc": "Vaincre Kanigroula dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 301
   },
   {
    "id": 1056,
    "name": "Kanigroula (Premier)",
    "desc": "Vaincre Kanigroula dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 300
   },
   {
    "id": 5976,
    "name": "Kanigroula (Compagnon)",
    "desc": "Vaincre Kanigroula dans son donjon en validant le challenge « Bandits du Magik Riktus »",
    "pts": 5,
    "challenge": 1270
   }
  ]
 },
 {
  "id": 57,
  "name": "Hypogée de l'Obsidiantre",
  "level": 160,
  "difficulty": 2,
  "boss": {
   "id": 2924,
   "name": "Obsidiantre",
   "img": "assets/img/bosses/2924.png"
  },
  "achievements": [
   {
    "id": 63,
    "name": "Hypogée de l'Obsidiantre",
    "desc": "Vaincre l'Obsidiantre dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 537,
    "name": "Obsidiantre (Duo)",
    "desc": "Vaincre l'Obsidiantre dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 56
   },
   {
    "id": 6214,
    "name": "Obsidiantre (Spécial)",
    "desc": "Vaincre Obsidiantre dans son donjon en validant le challenge « À son hypogée ».",
    "pts": 10,
    "challenge": 1049
   },
   {
    "id": 746,
    "name": "Obsidiantre (Premier)",
    "desc": "Vaincre l'Obsidiantre dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 221
   },
   {
    "id": 747,
    "name": "Obsidiantre (Statue)",
    "desc": "Vaincre l'Obsidiantre dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 222
   }
  ]
 },
 {
  "id": 94,
  "name": "Plateau de Ush",
  "level": 160,
  "difficulty": 3,
  "boss": {
   "id": 4264,
   "name": "Ush Galesh",
   "img": "assets/img/bosses/4264.png"
  },
  "achievements": [
   {
    "id": 1416,
    "name": "Plateau de Ush",
    "desc": "Vaincre Ush Galesh dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6216,
    "name": "Ush Galesh (Spécial)",
    "desc": "Vaincre Ush Galesh dans son donjon en validant le challenge « Duel et pique ».",
    "pts": 10,
    "challenge": 1051
   },
   {
    "id": 1419,
    "name": "Ush Galesh (Duo)",
    "desc": "Vaincre Ush Galesh dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 353
   },
   {
    "id": 1420,
    "name": "Ush Galesh (Zombie)",
    "desc": "Vaincre Ush Galesh dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 354
   },
   {
    "id": 1421,
    "name": "Ush Galesh (Premier)",
    "desc": "Vaincre Ush Galesh dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 355
   }
  ]
 },
 {
  "id": 53,
  "name": "Salle du Minotot",
  "level": 160,
  "difficulty": 2,
  "boss": {
   "id": 827,
   "name": "Minotot",
   "img": "assets/img/bosses/827.png"
  },
  "achievements": [
   {
    "id": 71,
    "name": "Salle du Minotot",
    "desc": "Vaincre le Minotot dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 744,
    "name": "Minotot (Circulez)",
    "desc": "Vaincre le Minotot dans son donjon en validant le challenge « Circulez ! ».",
    "pts": 10,
    "challenge": 219
   },
   {
    "id": 6213,
    "name": "Minotot (Spécial)",
    "desc": "Vaincre Minotot dans son donjon en validant le challenge « Tofu-phobie ».",
    "pts": 10,
    "challenge": 1048
   },
   {
    "id": 536,
    "name": "Minotot (Duo)",
    "desc": "Vaincre le Minotot dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 77
   },
   {
    "id": 745,
    "name": "Minotot (Premier)",
    "desc": "Vaincre le Minotot dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 220
   }
  ]
 },
 {
  "id": 132,
  "name": "Tombe du Shogun Tofugawa",
  "level": 160,
  "difficulty": 4,
  "boss": {
   "id": 6388,
   "name": "Shogun Tofugawa",
   "img": "assets/img/bosses/6388.png"
  },
  "achievements": [
   {
    "id": 3071,
    "name": "Tombe du Shogun Tofugawa",
    "desc": "Vaincre le Shogun Tofugawa dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6217,
    "name": "Shogun Tofugawa (Spécial)",
    "desc": "Vaincre Shogun Tofugawa dans son donjon en validant le challenge « Une lanterne dans la nuit ».",
    "pts": 10,
    "challenge": 1052
   },
   {
    "id": 3073,
    "name": "Shogun Tofugawa (Hardi)",
    "desc": "Vaincre le Shogun Tofugawa dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 509
   },
   {
    "id": 3074,
    "name": "Shogun Tofugawa (Duo)",
    "desc": "Vaincre le Shogun Tofugawa dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 510
   },
   {
    "id": 3072,
    "name": "Shogun Tofugawa (Premier)",
    "desc": "Vaincre le Shogun Tofugawa dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 508
   },
   {
    "id": 6018,
    "name": "Shogun Tofugawa (Compagnon)",
    "desc": "Vaincre Shogun Tofugawa dans son donjon en validant le challenge « Les pandaliens »",
    "pts": 5,
    "challenge": 1276
   }
  ]
 },
 {
  "id": 102,
  "name": "Boyau du Père Ver",
  "level": 170,
  "difficulty": 5,
  "boss": {
   "id": 4726,
   "name": "Père Ver",
   "img": "assets/img/bosses/4726.png"
  },
  "achievements": [
   {
    "id": 1555,
    "name": "Boyau du Père Ver",
    "desc": "Vaincre le Père Ver dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1558,
    "name": "Père Ver (Duo)",
    "desc": "Vaincre le Père Ver dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 376
   },
   {
    "id": 6221,
    "name": "Père Ver (Spécial)",
    "desc": "Vaincre Père Ver dans son donjon en validant le challenge « On ne touche pas ».",
    "pts": 10,
    "challenge": 1056
   },
   {
    "id": 1557,
    "name": "Père Ver (Zombie)",
    "desc": "Vaincre le Père Ver dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 375
   },
   {
    "id": 1556,
    "name": "Père Ver (Premier)",
    "desc": "Vaincre le Père Ver dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 374
   }
  ]
 },
 {
  "id": 131,
  "name": "Demeure des Esprits",
  "level": 170,
  "difficulty": 4,
  "boss": {
   "id": 6394,
   "name": "Koumiho",
   "img": "assets/img/bosses/6394.png"
  },
  "achievements": [
   {
    "id": 3062,
    "name": "Demeure des esprits",
    "desc": "Vaincre Koumiho dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 3065,
    "name": "Koumiho (Duo)",
    "desc": "Vaincre Koumiho dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 494
   },
   {
    "id": 6222,
    "name": "Koumiho (Spécial)",
    "desc": "Vaincre Koumiho dans son donjon en validant le challenge « La lumière ne fut jamais ».",
    "pts": 10,
    "challenge": 1057
   },
   {
    "id": 3064,
    "name": "Koumiho (Premier)",
    "desc": "Vaincre Koumiho dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 495
   },
   {
    "id": 3063,
    "name": "Koumiho (Focus)",
    "desc": "Vaincre Koumiho dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 496
   },
   {
    "id": 5997,
    "name": "Koumiho (Compagnon)",
    "desc": "Vaincre Koumiho dans son donjon en validant le challenge « Revenus d'outre-tombe »",
    "pts": 5,
    "challenge": 1273
   }
  ]
 },
 {
  "id": 86,
  "name": "Horologium de XLII",
  "level": 170,
  "difficulty": 2,
  "boss": {
   "id": 3849,
   "name": "XLII",
   "img": "assets/img/bosses/3849.png"
  },
  "achievements": [
   {
    "id": 1161,
    "name": "Horologium de XLII",
    "desc": "Vaincre XLII dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1164,
    "name": "XLII (Duo)",
    "desc": "Vaincre XLII dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 337
   },
   {
    "id": 1163,
    "name": "XLII (Collant)",
    "desc": "Vaincre XLII en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 336
   },
   {
    "id": 1162,
    "name": "XLII (Barbare)",
    "desc": "Vaincre XLII dans son donjon en validant le challenge « Barbare ».",
    "pts": 10,
    "challenge": 335
   },
   {
    "id": 6220,
    "name": "XLII (Spécial)",
    "desc": "Vaincre XLII dans son donjon en validant le challenge « C'est très vague ! ».",
    "pts": 10,
    "challenge": 1055
   }
  ]
 },
 {
  "id": 163,
  "name": "Poste de contrôle du Supervizœuf",
  "level": 170,
  "difficulty": 3,
  "boss": {
   "id": 8052,
   "name": "Supervizœuf",
   "img": "assets/img/bosses/8052.png"
  },
  "achievements": [
   {
    "id": 8839,
    "name": "Poste de contrôle du Supervizœuf",
    "desc": "Vaincre le Supervizœuf  dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 8840,
    "name": "Supervizœuf (Conquérant)",
    "desc": "Vaincre le Supervizœuf dans son donjon en validant le challenge « Conquérant ».",
    "pts": 10,
    "challenge": 2087
   },
   {
    "id": 8841,
    "name": "Supervizœuf (Collant)",
    "desc": "Vaincre le Supervizœuf en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 2088
   },
   {
    "id": 8842,
    "name": "Supervizœuf (Duo)",
    "desc": "Vaincre le Supervizœuf dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 2089
   },
   {
    "id": 8843,
    "name": "Supervizœuf (Spécial)",
    "desc": "Vaincre le Supervizœuf dans son donjon en validant le challenge « Bombzerman ».",
    "pts": 10,
    "challenge": 2090
   }
  ]
 },
 {
  "id": 58,
  "name": "Tanière Givrefoux",
  "level": 170,
  "difficulty": 2,
  "boss": {
   "id": 2967,
   "name": "Tengu Givrefoux",
   "img": "assets/img/bosses/2967.png"
  },
  "achievements": [
   {
    "id": 31,
    "name": "Cavernes Givrefoux",
    "desc": "Vaincre Tengu Givrefoux dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 748,
    "name": "Tengu Givrefoux (Premier)",
    "desc": "Vaincre Tengu Givrefoux dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 223
   },
   {
    "id": 538,
    "name": "Tengu Givrefoux (Duo)",
    "desc": "Vaincre Tengu Givrefoux dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 57
   },
   {
    "id": 6218,
    "name": "Tengu Givrefoux (Spécial)",
    "desc": "Vaincre Tengu Givrefoux dans son donjon en validant le challenge « Autonomie givrée ».",
    "pts": 10,
    "challenge": 1053
   },
   {
    "id": 749,
    "name": "Tengu Givrefoux (Statue)",
    "desc": "Vaincre Tengu Givrefoux dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 224
   },
   {
    "id": 134,
    "name": "Cavernes Nourricières",
    "desc": "Vaincre la Fuji Givrefoux Nourricière dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 544,
    "name": "Fuji Givrefoux Nourricière (Duo)",
    "desc": "Vaincre Fuji Givrefoux Nourricière dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 58
   },
   {
    "id": 6219,
    "name": "Fuji Givrefoux Nourricière (Spécial)",
    "desc": "Vaincre Fuji Givrefoux Nourricière dans son donjon en validant le challenge « Émancipation maternelle ».",
    "pts": 10,
    "challenge": 1054
   },
   {
    "id": 761,
    "name": "Fuji Givrefoux Nourricière (Statue)",
    "desc": "Vaincre Fuji Givrefoux Nourricière dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 236
   },
   {
    "id": 760,
    "name": "Fuji Givrefoux Nourricière (Dernier)",
    "desc": "Vaincre Fuji Givrefoux Nourricière dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 235
   },
   {
    "id": 5983,
    "name": "Fuji Givrefoux Nourricière (Compagnon)",
    "desc": "Vaincre Fuji Givrefoux Nourricière dans son donjon en validant le challenge « Rats... au sens propre ou au figuré »",
    "pts": 5,
    "challenge": 1271
   }
  ]
 },
 {
  "id": 59,
  "name": "Antre du Korriandre",
  "level": 180,
  "difficulty": 3,
  "boss": {
   "id": 2968,
   "name": "Korriandre",
   "img": "assets/img/bosses/2968.png"
  },
  "achievements": [
   {
    "id": 23,
    "name": "Antre du Korriandre",
    "desc": "Vaincre le Korriandre dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 750,
    "name": "Korriandre (Mystique)",
    "desc": "Vaincre le Korriandre dans son donjon en validant le challenge « Mystique ».",
    "pts": 10,
    "challenge": 225
   },
   {
    "id": 539,
    "name": "Korriandre (Duo)",
    "desc": "Vaincre le Korriandre dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 59
   },
   {
    "id": 6226,
    "name": "Korriandre (Spécial)",
    "desc": "Vaincre Korriandre dans son donjon en validant le challenge « Pas dans mes pattes ».",
    "pts": 10,
    "challenge": 1061
   },
   {
    "id": 751,
    "name": "Korriandre (Zombie)",
    "desc": "Vaincre le Korriandre dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 226
   }
  ]
 },
 {
  "id": 31,
  "name": "Antre du Kralamoure Géant",
  "level": 180,
  "difficulty": 4,
  "boss": {
   "id": 423,
   "name": "Kralamoure Géant",
   "img": "assets/img/bosses/423.png"
  },
  "achievements": [
   {
    "id": 24,
    "name": "Antre du Kralamoure Géant",
    "desc": "Vaincre le Kralamoure Géant dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 540,
    "name": "Kralamoure Géant (Duo)",
    "desc": "Vaincre le Kralamoure Géant dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 68
   },
   {
    "id": 6225,
    "name": "Kralamoure Géant (Spécial)",
    "desc": "Vaincre Kralamoure Géant dans son donjon en validant le challenge « Un projet tentaculaire ».",
    "pts": 10,
    "challenge": 1060
   },
   {
    "id": 752,
    "name": "Kralamoure Géant (Nomade)",
    "desc": "Vaincre le Kralamoure Géant dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 227
   },
   {
    "id": 753,
    "name": "Kralamoure Géant (Blitzkrieg)",
    "desc": "Vaincre le Kralamoure Géant dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 228
   },
   {
    "id": 5962,
    "name": "Kralamoure Géant (Compagnon)",
    "desc": "Vaincre Kralamoure Géant dans son donjon en validant le challenge « Les héros »",
    "pts": 5,
    "challenge": 1268
   }
  ]
 },
 {
  "id": 82,
  "name": "Cave du Toxoliath",
  "level": 180,
  "difficulty": 3,
  "boss": {
   "id": 3752,
   "name": "Toxoliath",
   "img": "assets/img/bosses/3752.png"
  },
  "achievements": [
   {
    "id": 1118,
    "name": "Cave du Toxoliath",
    "desc": "Vaincre le Toxoliath dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1120,
    "name": "Toxoliath (Misanthrope)",
    "desc": "Vaincre le Toxoliath en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 319
   },
   {
    "id": 1121,
    "name": "Toxoliath (Duo)",
    "desc": "Vaincre le Toxoliath dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 320
   },
   {
    "id": 1119,
    "name": "Toxoliath (Circulez)",
    "desc": "Vaincre le Toxoliath dans son donjon en validant le challenge « Circulez ! ».",
    "pts": 10,
    "challenge": 324
   },
   {
    "id": 6227,
    "name": "Toxoliath (Spécial)",
    "desc": "Vaincre Toxoliath dans son donjon en validant le challenge « Relation toxique ».",
    "pts": 10,
    "challenge": 1062
   }
  ]
 },
 {
  "id": 14,
  "name": "Grotte du Bworker",
  "level": 180,
  "difficulty": 2,
  "boss": {
   "id": 478,
   "name": "Bworker",
   "img": "assets/img/bosses/478.png"
  },
  "achievements": [
   {
    "id": 52,
    "name": "Grotte du Bworker",
    "desc": "Vaincre le Bworker dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 541,
    "name": "Bworker (Duo)",
    "desc": "Vaincre le Bworker dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 74
   },
   {
    "id": 754,
    "name": "Bworker (Hardi)",
    "desc": "Vaincre le Bworker dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 229
   },
   {
    "id": 755,
    "name": "Bworker (Blitzkrieg)",
    "desc": "Vaincre le Bworker dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 230
   },
   {
    "id": 6223,
    "name": "Bworker (Spécial)",
    "desc": "Vaincre Bworker dans son donjon en validant le challenge « Baston équitable ».",
    "pts": 10,
    "challenge": 1058
   }
  ]
 },
 {
  "id": 38,
  "name": "Maison du Papa Nowel",
  "level": 180,
  "difficulty": 3,
  "boss": {
   "id": 1194,
   "name": "Père Fwetar",
   "img": "assets/img/bosses/1194.png"
  },
  "achievements": [
   {
    "id": 440,
    "name": "Maison du Papa Nowel",
    "desc": "Vaincre le Père Fwetar dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 444,
    "name": "Père Fwetar (Duo)",
    "desc": "Vaincre le Père Fwetar dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 249
   },
   {
    "id": 441,
    "name": "Père Fwetar (Chrono)",
    "desc": "Vaincre le Père Fwetar dans son donjon en validant le challenge « Chrono ».",
    "pts": 10,
    "challenge": 252
   },
   {
    "id": 443,
    "name": "Père Fwetar (Hardi)",
    "desc": "Vaincre le Père Fwetar dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 248
   },
   {
    "id": 6273,
    "name": "Père Fwetar (Spécial)",
    "desc": "Vaincre le Père Fwetar dans son donjon en validant le challenge « Sale gosse ! ».",
    "pts": 10,
    "challenge": 1280
   },
   {
    "id": 442,
    "name": "Père Fwetar (Nomade)",
    "desc": "Vaincre le Père Fwetar dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 247
   }
  ]
 },
 {
  "id": 22,
  "name": "Temple du Grand Ougah",
  "level": 180,
  "difficulty": 3,
  "boss": {
   "id": 1159,
   "name": "Ougah",
   "img": "assets/img/bosses/1159.png"
  },
  "achievements": [
   {
    "id": 55,
    "name": "Temple du Grand Ougah",
    "desc": "Vaincre Ougah dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 542,
    "name": "Ougah (Duo)",
    "desc": "Vaincre Ougah dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 73
   },
   {
    "id": 756,
    "name": "Ougah (Collant)",
    "desc": "Vaincre Ougah en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 231
   },
   {
    "id": 6224,
    "name": "Ougah (Spécial)",
    "desc": "Vaincre Ougah dans son donjon en validant le challenge « Mycologie ».",
    "pts": 10,
    "challenge": 1059
   },
   {
    "id": 757,
    "name": "Ougah (Dernier)",
    "desc": "Vaincre Ougah dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 232
   },
   {
    "id": 6011,
    "name": "Ougah (Compagnon)",
    "desc": "Vaincre Ougah dans son donjon en validant le challenge « Compagnons, quel est votre métier ? »",
    "pts": 5,
    "challenge": 1275
   }
  ]
 },
 {
  "id": 61,
  "name": "Antichambre des Gloursons",
  "level": 190,
  "difficulty": 3,
  "boss": {
   "id": 2864,
   "name": "Glourséleste",
   "img": "assets/img/bosses/2864.png"
  },
  "achievements": [
   {
    "id": 20,
    "name": "Antichambre du Glourséleste",
    "desc": "Vaincre le Glourséleste dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 764,
    "name": "Glourséleste (Premier)",
    "desc": "Vaincre le Glourséleste dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 239
   },
   {
    "id": 546,
    "name": "Glourséleste (Duo)",
    "desc": "Vaincre le Glourséleste dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 61
   },
   {
    "id": 6229,
    "name": "Glourséleste (Spécial)",
    "desc": "Vaincre Glourséleste dans son donjon en validant le challenge « Complaisance gloursonne ».",
    "pts": 10,
    "challenge": 1064
   },
   {
    "id": 765,
    "name": "Glourséleste (Collant)",
    "desc": "Vaincre le Glourséleste en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 240
   },
   {
    "id": 6025,
    "name": "Glourséleste (Compagnon)",
    "desc": "Vaincre Glourséleste dans son donjon en validant le challenge « Mini Nuits' »",
    "pts": 5,
    "challenge": 1277
   }
  ]
 },
 {
  "id": 141,
  "name": "Bastion des Marteaux-Aigris",
  "level": 190,
  "difficulty": 5,
  "boss": {
   "id": 7219,
   "name": "Barbéryl Clochecuivre",
   "img": "assets/img/bosses/7219.png"
  },
  "achievements": [
   {
    "id": 5821,
    "name": "Bastion des Marteaux-Aigris",
    "desc": "Vaincre le Barbéryl Clochecuivre dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5825,
    "name": "Barbéryl Clochecuivre (Duo)",
    "desc": "Vaincre Barbéryl Clochecuivre dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 823
   },
   {
    "id": 5822,
    "name": "Barbéryl Clochecuivre (Dernier)",
    "desc": "Vaincre Barbéryl Clochecuivre dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 824
   },
   {
    "id": 6233,
    "name": "Barbéryl Clochecuivre (Spécial)",
    "desc": "Vaincre Barbéryl Clochecuivre dans son donjon en validant le challenge « Antioxydant ».",
    "pts": 10,
    "challenge": 1068
   },
   {
    "id": 5823,
    "name": "Barbéryl Clochecuivre (Versatile)",
    "desc": "Vaincre Barbéryl Clochecuivre dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 822
   },
   {
    "id": 6004,
    "name": "Barbéryl Clochecuivre (Compagnon)",
    "desc": "Vaincre Barbéryl Clochecuivre dans son donjon en validant le challenge « Les z'autres »",
    "pts": 5,
    "challenge": 1274
   }
  ]
 },
 {
  "id": 104,
  "name": "Camp du Comte Razof",
  "level": 190,
  "difficulty": 4,
  "boss": {
   "id": 4803,
   "name": "Comte Razof",
   "img": "assets/img/bosses/4803.png"
  },
  "achievements": [
   {
    "id": 1582,
    "name": "Camp du Comte Razof",
    "desc": "Vaincre le Comte Razof dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1583,
    "name": "Comte Razof (Liberté)",
    "desc": "Vaincre le Comte Razof dans son donjon en validant le challenge « Liberté ».",
    "pts": 10,
    "challenge": 380
   },
   {
    "id": 1585,
    "name": "Comte Razof (Duo)",
    "desc": "Vaincre le Comte Razof dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 382
   },
   {
    "id": 6232,
    "name": "Comte Razof (Spécial)",
    "desc": "Vaincre Comte Razof dans son donjon en validant le challenge « Nos amies les bêtes ».",
    "pts": 10,
    "challenge": 1067
   },
   {
    "id": 1584,
    "name": "Comte Razof (Premier)",
    "desc": "Vaincre le Comte Razof dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 381
   }
  ]
 },
 {
  "id": 60,
  "name": "Cavernes du Kolosso",
  "level": 190,
  "difficulty": 1,
  "boss": {
   "id": 2986,
   "name": "Kolosso",
   "img": "assets/img/bosses/2986.png"
  },
  "achievements": [
   {
    "id": 30,
    "name": "Cavernes du Kolosso",
    "desc": "Vaincre le Kolosso dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 543,
    "name": "Kolosso (Duo)",
    "desc": "Vaincre le Kolosso dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 60
   },
   {
    "id": 6228,
    "name": "Kolosso (Spécial)",
    "desc": "Vaincre Kolosso dans son donjon en validant le challenge « Alliés passés au futur ».",
    "pts": 10,
    "challenge": 1063
   },
   {
    "id": 759,
    "name": "Kolosso (Premier)",
    "desc": "Vaincre le Kolosso dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 234
   }
  ]
 },
 {
  "id": 62,
  "name": "Donjon de la mine de Sakaï",
  "level": 190,
  "difficulty": 2,
  "boss": {
   "id": 2942,
   "name": "Grolloum",
   "img": "assets/img/bosses/2942.png"
  },
  "achievements": [
   {
    "id": 486,
    "name": "Mine de Sakaï",
    "desc": "Vaincre Grolloum dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 545,
    "name": "Grolloum (Duo)",
    "desc": "Vaincre Grolloum dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 62
   },
   {
    "id": 762,
    "name": "Grolloum (Versatile)",
    "desc": "Vaincre Grolloum dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 237
   },
   {
    "id": 6230,
    "name": "Grolloum (Spécial)",
    "desc": "Vaincre Grolloum dans son donjon en validant le challenge « On voulait l'autre ».",
    "pts": 10,
    "challenge": 1065
   },
   {
    "id": 763,
    "name": "Grolloum (Blitzkrieg)",
    "desc": "Vaincre Grolloum dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 238
   },
   {
    "id": 5990,
    "name": "Grolloum (Compagnon)",
    "desc": "Vaincre Grolloum dans son donjon en validant le challenge « Les crados »",
    "pts": 5,
    "challenge": 1272
   }
  ]
 },
 {
  "id": 74,
  "name": "Pyramide d'Ombre",
  "level": 190,
  "difficulty": 2,
  "boss": {
   "id": 3564,
   "name": "Ombre",
   "img": "assets/img/bosses/3564.png"
  },
  "achievements": [
   {
    "id": 1040,
    "name": "Pyramide d'Ombre",
    "desc": "Vaincre Ombre dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1043,
    "name": "Ombre (Duo)",
    "desc": "Vaincre Ombre dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 299
   },
   {
    "id": 1042,
    "name": "Ombre (Collant)",
    "desc": "Vaincre Ombre en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 298
   },
   {
    "id": 6231,
    "name": "Ombre (Spécial)",
    "desc": "Vaincre Ombre dans son donjon en validant le challenge « Jeux d'ombres ».",
    "pts": 10,
    "challenge": 1066
   },
   {
    "id": 1041,
    "name": "Ombre (Premier)",
    "desc": "Vaincre Ombre dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 297
   },
   {
    "id": 5969,
    "name": "Ombre (Compagnon)",
    "desc": "Vaincre Ombre dans son donjon en validant le challenge « Chevaliers tourmentés »",
    "pts": 5,
    "challenge": 1269
   }
  ]
 },
 {
  "id": 73,
  "name": "Aquadôme de Merkator",
  "level": 200,
  "difficulty": 1,
  "boss": {
   "id": 3534,
   "name": "Merkator",
   "img": "assets/img/bosses/3534.png"
  },
  "achievements": [
   {
    "id": 1019,
    "name": "Aquadôme de Merkator",
    "desc": "Vaincre Merkator dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1024,
    "name": "Merkator (Duo)",
    "desc": "Vaincre Merkator dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 294
   },
   {
    "id": 1023,
    "name": "Merkator (Mystique)",
    "desc": "Vaincre Merkator dans son donjon en validant le challenge « Mystique ».",
    "pts": 10,
    "challenge": 296
   },
   {
    "id": 6239,
    "name": "Merkator (Spécial)",
    "desc": "Vaincre Merkator dans son donjon en validant le challenge « Voyez, il y a du monde ».",
    "pts": 10,
    "challenge": 1074
   },
   {
    "id": 1022,
    "name": "Merkator (Dernier)",
    "desc": "Vaincre Merkator dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 295
   },
   {
    "id": 5991,
    "name": "Merkator (Compagnon)",
    "desc": "Vaincre Merkator dans son donjon en validant le challenge « Les crados »",
    "pts": 5,
    "challenge": 1272
   }
  ]
 },
 {
  "id": 117,
  "name": "Arbre de Mort",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 6026,
   "name": "Corruption",
   "img": "assets/img/bosses/6026.png"
  },
  "achievements": [
   {
    "id": 2257,
    "name": "Arbre de mort",
    "desc": "Vaincre Corruption dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2260,
    "name": "Corruption (Duo)",
    "desc": "Vaincre Corruption dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 424
   },
   {
    "id": 2258,
    "name": "Corruption (Collant)",
    "desc": "Vaincre Corruption en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 422
   },
   {
    "id": 6255,
    "name": "Corruption (Spécial)",
    "desc": "Vaincre Corruption dans son donjon en validant le challenge « Immunité collective ».",
    "pts": 10,
    "challenge": 1090
   },
   {
    "id": 2259,
    "name": "Corruption (Mains Propres)",
    "desc": "Vaincre Corruption dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 423
   }
  ]
 },
 {
  "id": 165,
  "name": "Autel de la Déchireuse",
  "level": 200,
  "difficulty": 5,
  "boss": {
   "id": 8037,
   "name": "Déchireuse",
   "img": "assets/img/bosses/8037.png"
  },
  "achievements": [
   {
    "id": 8833,
    "name": "Autel de la Déchireuse",
    "desc": "Vaincre La Déchireuse dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 8834,
    "name": "La Déchireuse (Nomade)",
    "desc": "Vaincre La Déchireuse dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 2083
   },
   {
    "id": 8836,
    "name": "La Déchireuse (En ligne de mire)",
    "desc": "Vaincre La Déchireuse dans son donjon en validant le challenge « En ligne de mire ».",
    "pts": 10,
    "challenge": 2084
   },
   {
    "id": 8837,
    "name": "La Déchireuse (Spécial)",
    "desc": "Vaincre La Déchireuse dans son donjon en validant le challenge « Autelière ».",
    "pts": 10,
    "challenge": 2086
   },
   {
    "id": 8835,
    "name": "La Déchireuse (Trio)",
    "desc": "Vaincre La Déchireuse dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 2085
   }
  ]
 },
 {
  "id": 136,
  "name": "Bataille de l'Aurore Pourpre",
  "level": 200,
  "difficulty": 5,
  "boss": {
   "id": 6792,
   "name": "L'Éternel Conflit",
   "img": "assets/img/bosses/6792.png"
  },
  "achievements": [
   {
    "id": 5166,
    "name": "Bataille de l'Aurore Pourpre",
    "desc": "Vaincre L'Éternel Conflit dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5168,
    "name": "L'Éternel Conflit (Premier)",
    "desc": "Vaincre L'Éternel Conflit dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 585
   },
   {
    "id": 5169,
    "name": "L'Éternel Conflit (Duo)",
    "desc": "Vaincre L'Éternel Conflit dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 586
   },
   {
    "id": 6262,
    "name": "L'Éternel Conflit (Spécial)",
    "desc": "Vaincre L'Éternel Conflit dans son donjon en validant le challenge « Jusqu'à l'Aurore ».",
    "pts": 10,
    "challenge": 1097
   },
   {
    "id": 5167,
    "name": "L'Éternel Conflit (Zombie)",
    "desc": "Vaincre L'Éternel Conflit dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 584
   }
  ]
 },
 {
  "id": 107,
  "name": "Belvédère d'Ilyzaelle",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 4967,
   "name": "Ilyzaelle",
   "img": "assets/img/bosses/4967.png"
  },
  "achievements": [
   {
    "id": 1623,
    "name": "Belvédère d'Ilyzaelle",
    "desc": "Vaincre Ilyzaelle dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1626,
    "name": "Ilyzaelle (Duo)",
    "desc": "Vaincre Ilyzaelle dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 391
   },
   {
    "id": 1625,
    "name": "Ilyzaelle (Focus)",
    "desc": "Vaincre Ilyzaelle dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 390
   },
   {
    "id": 1624,
    "name": "Ilyzaelle (Liberté)",
    "desc": "Vaincre Ilyzaelle dans son donjon en validant le challenge « Liberté ».",
    "pts": 10,
    "challenge": 389
   },
   {
    "id": 6250,
    "name": "Ilyzaelle (Spécial)",
    "desc": "Vaincre Ilyzaelle dans son donjon en validant le challenge « Aux portes d'Externam ».",
    "pts": 10,
    "challenge": 1085
   },
   {
    "id": 5978,
    "name": "Ilyzaelle (Compagnon)",
    "desc": "Vaincre Ilyzaelle dans son donjon en validant le challenge « Bandits du Magik Riktus »",
    "pts": 5,
    "challenge": 1270
   }
  ]
 },
 {
  "id": 110,
  "name": "Brasserie du roi Dazak",
  "level": 200,
  "difficulty": 2,
  "boss": {
   "id": 5319,
   "name": "Dazak Martegel",
   "img": "assets/img/bosses/5319.png"
  },
  "achievements": [
   {
    "id": 1695,
    "name": "Brasserie du roi Dazak",
    "desc": "Vaincre Dazak Martegel dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1697,
    "name": "Dazak Martegel (Liberté)",
    "desc": "Vaincre Dazak Martegel dans son donjon en validant le challenge « Liberté ».",
    "pts": 10,
    "challenge": 399
   },
   {
    "id": 1698,
    "name": "Dazak Martegel (Duo)",
    "desc": "Vaincre Dazak Martegel dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 400
   },
   {
    "id": 6253,
    "name": "Dazak Martegel (Spécial)",
    "desc": "Vaincre Dazak Martegel dans son donjon en validant le challenge « Manque de nimpatience ».",
    "pts": 10,
    "challenge": 1088
   },
   {
    "id": 5970,
    "name": "Dazak Martegel (Compagnon)",
    "desc": "Vaincre Dazak Martegel dans son donjon en validant le challenge « Chevaliers tourmentés »",
    "pts": 5,
    "challenge": 1269
   },
   {
    "id": 1696,
    "name": "Dazak Martegel (Premier)",
    "desc": "Vaincre Dazak Martegel dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 398
   }
  ]
 },
 {
  "id": 164,
  "name": "Breuil du Vénérable",
  "level": 200,
  "difficulty": 2,
  "boss": {
   "id": 8047,
   "name": "Vénérable Endormi",
   "img": "assets/img/bosses/8047.png"
  },
  "achievements": [
   {
    "id": 8849,
    "name": "Breuil du Vénérable",
    "desc": "Vaincre Le Vénérable Endormi dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 8850,
    "name": "Le Vénérable Endormi (Premier)",
    "desc": "Vaincre Le Vénérable Endormi dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 2091
   },
   {
    "id": 8851,
    "name": "Le Vénérable Endormi (Hardi)",
    "desc": "Vaincre Le Vénérable Endormi dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 2092
   },
   {
    "id": 8852,
    "name": "Le Vénérable Endormi (Trio)",
    "desc": "Vaincre Le Vénérable Endormi dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 2094
   },
   {
    "id": 8853,
    "name": "Le Vénérable Endormi (Spécial)",
    "desc": "Vaincre Le Vénérable Endormi dans son donjon en validant le challenge « Ça ronfle fort ».",
    "pts": 10,
    "challenge": 2093
   }
  ]
 },
 {
  "id": 103,
  "name": "Chambre de Tal Kasha",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 4744,
   "name": "Tal Kasha",
   "img": "assets/img/bosses/4744.png"
  },
  "achievements": [
   {
    "id": 1562,
    "name": "Chambre de Tal Kasha",
    "desc": "Vaincre Tal Kasha dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1565,
    "name": "Tal Kasha (Duo)",
    "desc": "Vaincre Tal Kasha dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 379
   },
   {
    "id": 6248,
    "name": "Tal Kasha (Spécial)",
    "desc": "Vaincre Tal Kasha dans son donjon en validant le challenge « Système pyramidal ».",
    "pts": 10,
    "challenge": 1083
   },
   {
    "id": 1564,
    "name": "Tal Kasha (Statue)",
    "desc": "Vaincre Tal Kasha dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 378
   },
   {
    "id": 1563,
    "name": "Tal Kasha (Focus)",
    "desc": "Vaincre Tal Kasha dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 377
   }
  ]
 },
 {
  "id": 140,
  "name": "Chambre des maléfices",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 7210,
   "name": "Belladone",
   "img": "assets/img/bosses/7210.png"
  },
  "achievements": [
   {
    "id": 5809,
    "name": "Chambre des maléfices",
    "desc": "Vaincre Belladone dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5810,
    "name": "Belladone (Collant)",
    "desc": "Vaincre Belladone en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 819
   },
   {
    "id": 6263,
    "name": "Belladone (Spécial)",
    "desc": "Vaincre Belladone dans son donjon en validant le challenge « Cible facile ».",
    "pts": 10,
    "challenge": 1098
   },
   {
    "id": 5812,
    "name": "Belladone (Duo)",
    "desc": "Vaincre Belladone dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 820
   },
   {
    "id": 5811,
    "name": "Belladone (Mains Propres)",
    "desc": "Vaincre Belladone dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 821
   },
   {
    "id": 6005,
    "name": "Belladone (Compagnon)",
    "desc": "Vaincre Belladone dans son donjon en validant le challenge « Les z'autres »",
    "pts": 5,
    "challenge": 1274
   }
  ]
 },
 {
  "id": 95,
  "name": "Défi du Chalœil",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 4263,
   "name": "Chalœil",
   "img": "assets/img/bosses/4263.png"
  },
  "achievements": [
   {
    "id": 1437,
    "name": "Défi du Chalœil",
    "desc": "Vaincre le Chalœil dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1438,
    "name": "Chalœil (Liberté)",
    "desc": "Vaincre le Chalœil dans son donjon en validant le challenge « Liberté ».",
    "pts": 10,
    "challenge": 356
   },
   {
    "id": 1439,
    "name": "Chalœil (Prudent)",
    "desc": "Vaincre le Chalœil dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 357
   },
   {
    "id": 1440,
    "name": "Chalœil (Trio)",
    "desc": "Vaincre le Chalœil dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 358
   },
   {
    "id": 6244,
    "name": "Chalœil (Spécial)",
    "desc": "Vaincre le Chalœil dans son donjon en validant le challenge « Les bons comptes font les bons ennemis ».",
    "pts": 10,
    "challenge": 1079
   },
   {
    "id": 6013,
    "name": "Chalœil (Compagnon)",
    "desc": "Vaincre Chalœil dans son donjon en validant le challenge « Compagnons, quel est votre métier ? »",
    "pts": 5,
    "challenge": 1275
   }
  ]
 },
 {
  "id": 71,
  "name": "Donjon du Comte Harebourg",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 3416,
   "name": "Comte Harebourg",
   "img": "assets/img/bosses/3416.png"
  },
  "achievements": [
   {
    "id": 892,
    "name": "Donjon du Comte",
    "desc": "Vaincre le Comte Harebourg dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6027,
    "name": "Comte Harebourg (Compagnon)",
    "desc": "Vaincre Comte Harebourg dans son donjon en validant le challenge « Mini Nuits' »",
    "pts": 5,
    "challenge": 1277
   },
   {
    "id": 895,
    "name": "Comte Harebourg (Duo)",
    "desc": "Vaincre le Comte Harebourg dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 257
   },
   {
    "id": 6238,
    "name": "Comte Harebourg (Spécial)",
    "desc": "Vaincre Comte Harebourg dans son donjon en validant le challenge « L'échec n'est pas une option ».",
    "pts": 10,
    "challenge": 1073
   },
   {
    "id": 894,
    "name": "Comte Harebourg (Statue)",
    "desc": "Vaincre le Comte Harebourg dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 267
   },
   {
    "id": 893,
    "name": "Comte Harebourg (Versatile)",
    "desc": "Vaincre le Comte Harebourg dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 263
   }
  ]
 },
 {
  "id": 118,
  "name": "Fers de la Tyrannie",
  "level": 200,
  "difficulty": 5,
  "boss": {
   "id": 5955,
   "name": "Servitude",
   "img": "assets/img/bosses/5955.png"
  },
  "achievements": [
   {
    "id": 2271,
    "name": "Fers de la Tyrannie",
    "desc": "Vaincre Servitude dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2274,
    "name": "Servitude (Duo)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 430
   },
   {
    "id": 6256,
    "name": "Servitude (Spécial)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Bain de foule ».",
    "pts": 10,
    "challenge": 1091
   },
   {
    "id": 2273,
    "name": "Servitude (Versatile)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 429
   },
   {
    "id": 2272,
    "name": "Servitude (Focus)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 428
   }
  ]
 },
 {
  "id": 69,
  "name": "Forgefroide de Missiz Frizz",
  "level": 200,
  "difficulty": 2,
  "boss": {
   "id": 3391,
   "name": "Missiz Frizz",
   "img": "assets/img/bosses/3391.png"
  },
  "achievements": [
   {
    "id": 872,
    "name": "Forgefroide de Missiz Frizz",
    "desc": "Vaincre Missiz Frizz dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 875,
    "name": "Missiz Frizz (Duo)",
    "desc": "Vaincre Missiz Frizz dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 254
   },
   {
    "id": 874,
    "name": "Missiz Frizz (Collant)",
    "desc": "Vaincre Missiz Frizz en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 265
   },
   {
    "id": 6236,
    "name": "Missiz Frizz (Spécial)",
    "desc": "Vaincre Missiz Frizz dans son donjon en validant le challenge « Attention, sol glissant ».",
    "pts": 10,
    "challenge": 1071
   },
   {
    "id": 873,
    "name": "Missiz Frizz (Nomade)",
    "desc": "Vaincre Missiz Frizz dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 260
   },
   {
    "id": 5985,
    "name": "Missiz Frizz (Compagnon)",
    "desc": "Vaincre Missiz Frizz dans son donjon en validant le challenge « Rats... au sens propre ou au figuré »",
    "pts": 5,
    "challenge": 1271
   }
  ]
 },
 {
  "id": 70,
  "name": "Laboratoire de Nileza",
  "level": 200,
  "difficulty": 2,
  "boss": {
   "id": 3397,
   "name": "Nileza",
   "img": "assets/img/bosses/3397.png"
  },
  "achievements": [
   {
    "id": 887,
    "name": "Laboratoire de Nileza",
    "desc": "Vaincre Nileza dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 888,
    "name": "Nileza (Prudent)",
    "desc": "Vaincre Nileza dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 258
   },
   {
    "id": 891,
    "name": "Nileza (Duo)",
    "desc": "Vaincre Nileza dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 253
   },
   {
    "id": 6237,
    "name": "Nileza (Spécial)",
    "desc": "Vaincre Nileza dans son donjon en validant le challenge « Alchi-pludent ».",
    "pts": 10,
    "challenge": 1072
   },
   {
    "id": 889,
    "name": "Nileza (Dernier)",
    "desc": "Vaincre Nileza dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 264
   },
   {
    "id": 6019,
    "name": "Nileza (Compagnon)",
    "desc": "Vaincre Nileza dans son donjon en validant le challenge « Les pandaliens »",
    "pts": 5,
    "challenge": 1276
   }
  ]
 },
 {
  "id": 106,
  "name": "Manoir des Katrepat",
  "level": 200,
  "difficulty": 2,
  "boss": {
   "id": 4882,
   "name": "Anerice la Shushess",
   "img": "assets/img/bosses/4882.png"
  },
  "achievements": [
   {
    "id": 1605,
    "name": "Manoir des Katrepat",
    "desc": "Vaincre Anerice la Shushess dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1608,
    "name": "Anerice la Shushess (Duo)",
    "desc": "Vaincre Anerice la Shushess dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 386
   },
   {
    "id": 1606,
    "name": "Anerice la Shushess (Prudent)",
    "desc": "Vaincre Anerice la Shushess dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 387
   },
   {
    "id": 6249,
    "name": "Anerice la Shushess (Spécial)",
    "desc": "Vaincre Anerice la Shushess dans son donjon en validant le challenge « Qu'est-ce qu'elle a ma goule ? ».",
    "pts": 10,
    "challenge": 1084
   },
   {
    "id": 1607,
    "name": "Anerice la Shushess (Premier)",
    "desc": "Vaincre Anerice la Shushess dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 388
   },
   {
    "id": 5963,
    "name": "Anerice la Shushess (Compagnon)",
    "desc": "Vaincre Anerice la Shushess dans son donjon en validant le challenge « Les héros »",
    "pts": 5,
    "challenge": 1268
   }
  ]
 },
 {
  "id": 133,
  "name": "Mémoire d'Orukam",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 6472,
   "name": "Roi Imagami",
   "img": "assets/img/bosses/6472.png"
  },
  "achievements": [
   {
    "id": 3083,
    "name": "Mémoire d'Orukam",
    "desc": "Vaincre le Roi Imagami dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 3084,
    "name": "Roi Imagami (Hardi)",
    "desc": "Vaincre Roi Imagami dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 516
   },
   {
    "id": 6259,
    "name": "Roi Imagami (Spécial)",
    "desc": "Vaincre Roi Imagami dans son donjon en validant le challenge « Régence d'encre ».",
    "pts": 10,
    "challenge": 1094
   },
   {
    "id": 3086,
    "name": "Roi Imagami (Trio)",
    "desc": "Vaincre Roi Imagami dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 518
   },
   {
    "id": 3085,
    "name": "Roi Imagami (Mains propres)",
    "desc": "Vaincre Roi Imagami dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 517
   }
  ]
 },
 {
  "id": 87,
  "name": "Œil de Vortex",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 3835,
   "name": "Vortex",
   "img": "assets/img/bosses/3835.png"
  },
  "achievements": [
   {
    "id": 1156,
    "name": "Œil de Vortex",
    "desc": "Vaincre Vortex dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1159,
    "name": "Vortex (Trio)",
    "desc": "Vaincre Vortex dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 334
   },
   {
    "id": 1158,
    "name": "Vortex (Hardi)",
    "desc": "Vaincre Vortex dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 333
   },
   {
    "id": 6243,
    "name": "Vortex (Spécial)",
    "desc": "Vaincre Vortex dans son donjon en validant le challenge « Heure de la mort ».",
    "pts": 10,
    "challenge": 1078
   },
   {
    "id": 1157,
    "name": "Vortex (Focus)",
    "desc": "Vaincre Vortex dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 332
   }
  ]
 },
 {
  "id": 99,
  "name": "Palais de Dantinéa",
  "level": 200,
  "difficulty": 1,
  "boss": {
   "id": 4444,
   "name": "Dantinéa",
   "img": "assets/img/bosses/4444.png"
  },
  "achievements": [
   {
    "id": 1478,
    "name": "Palais de Dantinéa",
    "desc": "Vaincre Dantinéa dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1480,
    "name": "Dantinéa (Statue)",
    "desc": "Vaincre Dantinéa dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 365
   },
   {
    "id": 1481,
    "name": "Dantinéa (Duo)",
    "desc": "Vaincre Dantinéa dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 366
   },
   {
    "id": 6247,
    "name": "Dantinéa (Spécial)",
    "desc": "Vaincre Dantinéa dans son donjon en validant le challenge « Chasse aux coquillages ».",
    "pts": 10,
    "challenge": 1082
   },
   {
    "id": 1479,
    "name": "Dantinéa (Dernier)",
    "desc": "Vaincre Dantinéa dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 364
   },
   {
    "id": 5964,
    "name": "Dantinéa (Compagnon)",
    "desc": "Vaincre Dantinéa dans son donjon en validant le challenge « Les héros »",
    "pts": 5,
    "challenge": 1268
   }
  ]
 },
 {
  "id": 76,
  "name": "Palais du roi Nidas",
  "level": 200,
  "difficulty": 1,
  "boss": {
   "id": 3648,
   "name": "Roi Nidas",
   "img": "assets/img/bosses/3648.png"
  },
  "achievements": [
   {
    "id": 1078,
    "name": "Palais du roi Nidas",
    "desc": "Vaincre le roi Nidas dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1081,
    "name": "Roi Nidas (Trio)",
    "desc": "Vaincre le roi Nidas dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 308
   },
   {
    "id": 6240,
    "name": "Roi Nidas (Spécial)",
    "desc": "Vaincre Roi Nidas dans son donjon en validant le challenge « Pingrerie ».",
    "pts": 10,
    "challenge": 1075
   },
   {
    "id": 1080,
    "name": "Roi Nidas (Statue)",
    "desc": "Vaincre le roi Nidas dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 307
   },
   {
    "id": 1079,
    "name": "Roi Nidas (Premier)",
    "desc": "Vaincre le roi Nidas dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 306
   },
   {
    "id": 5984,
    "name": "Roi Nidas (Compagnon)",
    "desc": "Vaincre Roi Nidas dans son donjon en validant le challenge « Rats... au sens propre ou au figuré »",
    "pts": 5,
    "challenge": 1271
   }
  ]
 },
 {
  "id": 135,
  "name": "Rituel de Kabahal",
  "level": 200,
  "difficulty": 5,
  "boss": {
   "id": 6654,
   "name": "Kabahal",
   "img": "assets/img/bosses/6654.png"
  },
  "achievements": [
   {
    "id": 5069,
    "name": "Rituel de Kabahal",
    "desc": "Vaincre Kabahal dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5070,
    "name": "Kabahal (Hardi)",
    "desc": "Vaincre Kabahal dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 530
   },
   {
    "id": 6261,
    "name": "Kabahal (Spécial)",
    "desc": "Vaincre Kabahal dans son donjon en validant le challenge « Gros Bras ».",
    "pts": 10,
    "challenge": 1096
   },
   {
    "id": 5072,
    "name": "Kabahal (Duo)",
    "desc": "Vaincre Kabahal dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 532
   },
   {
    "id": 5071,
    "name": "Kabahal (Mains Propres)",
    "desc": "Vaincre Kabahal dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 531
   }
  ]
 },
 {
  "id": 68,
  "name": "Salons privés de Klime",
  "level": 200,
  "difficulty": 1,
  "boss": {
   "id": 3384,
   "name": "Klime",
   "img": "assets/img/bosses/3384.png"
  },
  "achievements": [
   {
    "id": 882,
    "name": "Salons privés de Klime",
    "desc": "Vaincre Klime dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6012,
    "name": "Klime (Compagnon)",
    "desc": "Vaincre Klime dans son donjon en validant le challenge « Compagnons, quel est votre métier ? »",
    "pts": 5,
    "challenge": 1275
   },
   {
    "id": 885,
    "name": "Klime (Duo)",
    "desc": "Vaincre Klime dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 256
   },
   {
    "id": 883,
    "name": "Klime (Prudent)",
    "desc": "Vaincre Klime dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 259
   },
   {
    "id": 6235,
    "name": "Klime (Spécial)",
    "desc": "Vaincre Klime dans son donjon en validant le challenge « Dur à cuir ».",
    "pts": 10,
    "challenge": 1070
   },
   {
    "id": 884,
    "name": "Klime (Nomade)",
    "desc": "Vaincre Klime dans son donjon en validant le challenge « Nomade ».",
    "pts": 10,
    "challenge": 261
   }
  ]
 },
 {
  "id": 114,
  "name": "Sanctuaire de Torkélonia",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 5806,
   "name": "Torkélonia",
   "img": "assets/img/bosses/5806.png"
  },
  "achievements": [
   {
    "id": 2106,
    "name": "Sanctuaire de Torkélonia",
    "desc": "Vaincre Torkélonia dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2109,
    "name": "Torkélonia (Duo)",
    "desc": "Vaincre Torkélonia dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 415
   },
   {
    "id": 2108,
    "name": "Torkélonia (Statue)",
    "desc": "Vaincre Torkélonia dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 413
   },
   {
    "id": 6254,
    "name": "Torkélonia (Spécial)",
    "desc": "Vaincre Torkélonia dans son donjon en validant le challenge « Lunatique ».",
    "pts": 10,
    "challenge": 1089
   },
   {
    "id": 2107,
    "name": "Torkélonia (Dernier)",
    "desc": "Vaincre Torkélonia dans son donjon en validant le challenge « Dernier ».",
    "pts": 10,
    "challenge": 414
   },
   {
    "id": 5971,
    "name": "Torkélonia (Compagnon)",
    "desc": "Vaincre Torkélonia dans son donjon en validant le challenge « Chevaliers tourmentés »",
    "pts": 5,
    "challenge": 1269
   }
  ]
 },
 {
  "id": 119,
  "name": "Sentence de la Balance",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 5990,
   "name": "Misère",
   "img": "assets/img/bosses/5990.png"
  },
  "achievements": [
   {
    "id": 2278,
    "name": "Sentence de la Balance",
    "desc": "Vaincre Misère dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2279,
    "name": "Misère (Hardi)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 431
   },
   {
    "id": 2281,
    "name": "Misère (Duo)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 433
   },
   {
    "id": 6257,
    "name": "Misère (Spécial)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Abjecte opulence ».",
    "pts": 10,
    "challenge": 1092
   },
   {
    "id": 2280,
    "name": "Misère (Mains Propres)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 432
   }
  ]
 },
 {
  "id": 134,
  "name": "Souvenir d'Imagiro",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 6478,
   "name": "Reine Amirukam",
   "img": "assets/img/bosses/6478.png"
  },
  "achievements": [
   {
    "id": 3090,
    "name": "Souvenir d'Imagiro",
    "desc": "Vaincre la Reine Amirukam dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 3091,
    "name": "Reine Amirukam (Prudent)",
    "desc": "Vaincre la Reine Amirukam dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 519
   },
   {
    "id": 6260,
    "name": "Reine Amirukam (Spécial)",
    "desc": "Vaincre Reine Amirukam dans son donjon en validant le challenge « Régence de papier ».",
    "pts": 10,
    "challenge": 1095
   },
   {
    "id": 3093,
    "name": "Reine Amirukam (Trio)",
    "desc": "Vaincre la Reine Amirukam dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 521
   },
   {
    "id": 3092,
    "name": "Reine Amirukam (Mains propres)",
    "desc": "Vaincre la Reine Amirukam dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 520
   },
   {
    "id": 6020,
    "name": "Reine Amirukam (Compagnon)",
    "desc": "Vaincre Reine Amirukam dans son donjon en validant le challenge « Les pandaliens »",
    "pts": 5,
    "challenge": 1276
   }
  ]
 },
 {
  "id": 121,
  "name": "Tempête de l'Eliocalypse",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 6014,
   "name": "Guerre",
   "img": "assets/img/bosses/6014.png"
  },
  "achievements": [
   {
    "id": 2264,
    "name": "Trône de sang",
    "desc": "Vaincre Guerre dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2267,
    "name": "Guerre (Duo)",
    "desc": "Vaincre Guerre dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 427
   },
   {
    "id": 2265,
    "name": "Guerre (Zombie)",
    "desc": "Vaincre Guerre dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 425
   },
   {
    "id": 2266,
    "name": "Guerre (Misanthrope)",
    "desc": "Vaincre Guerre en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 426
   },
   {
    "id": 6258,
    "name": "Guerre (Spécial)",
    "desc": "Vaincre Guerre dans son donjon en validant le challenge « Arsenal total ».",
    "pts": 10,
    "challenge": 1093
   },
   {
    "id": 2271,
    "name": "Fers de la Tyrannie",
    "desc": "Vaincre Servitude dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2274,
    "name": "Servitude (Duo)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 430
   },
   {
    "id": 6256,
    "name": "Servitude (Spécial)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Bain de foule ».",
    "pts": 10,
    "challenge": 1091
   },
   {
    "id": 2273,
    "name": "Servitude (Versatile)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 429
   },
   {
    "id": 2272,
    "name": "Servitude (Focus)",
    "desc": "Vaincre Servitude dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 428
   },
   {
    "id": 2278,
    "name": "Sentence de la Balance",
    "desc": "Vaincre Misère dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2279,
    "name": "Misère (Hardi)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 431
   },
   {
    "id": 2281,
    "name": "Misère (Duo)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 433
   },
   {
    "id": 6257,
    "name": "Misère (Spécial)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Abjecte opulence ».",
    "pts": 10,
    "challenge": 1092
   },
   {
    "id": 2280,
    "name": "Misère (Mains Propres)",
    "desc": "Vaincre Misère dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 432
   },
   {
    "id": 2257,
    "name": "Arbre de mort",
    "desc": "Vaincre Corruption dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2260,
    "name": "Corruption (Duo)",
    "desc": "Vaincre Corruption dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 424
   },
   {
    "id": 2258,
    "name": "Corruption (Collant)",
    "desc": "Vaincre Corruption en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 422
   },
   {
    "id": 6255,
    "name": "Corruption (Spécial)",
    "desc": "Vaincre Corruption dans son donjon en validant le challenge « Immunité collective ».",
    "pts": 10,
    "challenge": 1090
   },
   {
    "id": 2259,
    "name": "Corruption (Mains Propres)",
    "desc": "Vaincre Corruption dans son donjon en validant le challenge « Mains propres ».",
    "pts": 10,
    "challenge": 423
   }
  ]
 },
 {
  "id": 98,
  "name": "Temple de Koutoulou",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 4453,
   "name": "Larve de Koutoulou",
   "img": "assets/img/bosses/4453.png"
  },
  "achievements": [
   {
    "id": 1471,
    "name": "Temple de Koutoulou",
    "desc": "Vaincre la Larve de Koutoulou dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 6026,
    "name": "Larve de Koutoulou (Compagnon)",
    "desc": "Vaincre Larve de Koutoulou dans son donjon en validant le challenge « Mini Nuits' »",
    "pts": 5,
    "challenge": 1277
   },
   {
    "id": 1472,
    "name": "Larve de Koutoulou (Prudent)",
    "desc": "Vaincre la Larve de Koutoulou dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 361
   },
   {
    "id": 1474,
    "name": "Larve de Koutoulou (Duo)",
    "desc": "Vaincre la Larve de Koutoulou dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 363
   },
   {
    "id": 1473,
    "name": "Larve de Koutoulou (Hardi)",
    "desc": "Vaincre la Larve de Koutoulou dans son donjon en validant le challenge « Hardi ».",
    "pts": 10,
    "challenge": 362
   },
   {
    "id": 6246,
    "name": "Larve de Koutoulou (Spécial)",
    "desc": "Vaincre Larve de Koutoulou dans son donjon en validant le challenge « Chaises musicales ».",
    "pts": 10,
    "challenge": 1081
   }
  ]
 },
 {
  "id": 111,
  "name": "Temple du dieu Kao",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 5666,
   "name": "Prêtresse de Kao",
   "img": "assets/img/bosses/5666.png"
  },
  "achievements": [
   {
    "id": 2082,
    "name": "Temple du dieu Kao",
    "desc": "Vaincre la Prêtresse de Kao dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2084,
    "name": "Prêtresse de Kao (Liberté)",
    "desc": "Vaincre la Prêtresse de Kao dans son donjon en validant le challenge « Liberté ».",
    "pts": 10,
    "challenge": 408
   },
   {
    "id": 2094,
    "name": "Prêtresse de Kao (Chrono)",
    "desc": "Vaincre la Prêtresse de Kao dans son donjon en validant le challenge « Chrono ».",
    "pts": 10,
    "challenge": 412
   },
   {
    "id": 2085,
    "name": "Prêtresse de Kao (Duo)",
    "desc": "Vaincre la Prêtresse de Kao dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 409
   },
   {
    "id": 2083,
    "name": "Prêtresse de Kao (Premier)",
    "desc": "Vaincre la Prêtresse de Kao dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 407
   },
   {
    "id": 6282,
    "name": "Prêtresse de Kao (Spécial)",
    "desc": "Vaincre la Prêtresse de Kao dans son donjon en validant le challenge « Charier la chocolaterie ».",
    "pts": 10,
    "challenge": 1406
   }
  ]
 },
 {
  "id": 108,
  "name": "Tour de Bethel",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 5110,
   "name": "Bethel Akarna",
   "img": "assets/img/bosses/5110.png"
  },
  "achievements": [
   {
    "id": 1641,
    "name": "Tour de Bethel",
    "desc": "Vaincre Bethel Akarna dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1644,
    "name": "Bethel Akarna (Duo)",
    "desc": "Vaincre Bethel Akarna dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 397
   },
   {
    "id": 1643,
    "name": "Bethel Akarna (Zombie)",
    "desc": "Vaincre Bethel Akarna dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 396
   },
   {
    "id": 6251,
    "name": "Bethel Akarna (Spécial)",
    "desc": "Vaincre Bethel Akarna dans son donjon en validant le challenge « La mort sait attendre ».",
    "pts": 10,
    "challenge": 1086
   },
   {
    "id": 1642,
    "name": "Bethel Akarna (Mystique)",
    "desc": "Vaincre Bethel Akarna dans son donjon en validant le challenge « Mystique ».",
    "pts": 10,
    "challenge": 395
   },
   {
    "id": 5998,
    "name": "Bethel Akarna (Compagnon)",
    "desc": "Vaincre Bethel Akarna dans son donjon en validant le challenge « Revenus d'outre-tombe »",
    "pts": 5,
    "challenge": 1273
   }
  ]
 },
 {
  "id": 109,
  "name": "Tour de Solar",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 5100,
   "name": "Solar",
   "img": "assets/img/bosses/5100.png"
  },
  "achievements": [
   {
    "id": 1634,
    "name": "Tour de Solar",
    "desc": "Vaincre Solar dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1635,
    "name": "Solar (Versatile)",
    "desc": "Vaincre Solar dans son donjon en validant le challenge « Versatile ».",
    "pts": 10,
    "challenge": 392
   },
   {
    "id": 1637,
    "name": "Solar (Duo)",
    "desc": "Vaincre Solar dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 394
   },
   {
    "id": 6252,
    "name": "Solar (Spécial)",
    "desc": "Vaincre Solar dans son donjon en validant le challenge « La mort sait attendre ».",
    "pts": 10,
    "challenge": 1087
   },
   {
    "id": 1636,
    "name": "Solar (Focus)",
    "desc": "Vaincre Solar dans son donjon en validant le challenge « Focus ».",
    "pts": 10,
    "challenge": 393
   },
   {
    "id": 5999,
    "name": "Solar (Compagnon)",
    "desc": "Vaincre Solar dans son donjon en validant le challenge « Revenus d'outre-tombe »",
    "pts": 5,
    "challenge": 1273
   }
  ]
 },
 {
  "id": 67,
  "name": "Transporteur de Sylargh",
  "level": 200,
  "difficulty": 1,
  "boss": {
   "id": 3409,
   "name": "Sylargh",
   "img": "assets/img/bosses/3409.png"
  },
  "achievements": [
   {
    "id": 877,
    "name": "Transporteur de Sylargh",
    "desc": "Vaincre Sylargh dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 880,
    "name": "Sylargh (Duo)",
    "desc": "Vaincre Sylargh dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 255
   },
   {
    "id": 878,
    "name": "Sylargh (Misanthrope)",
    "desc": "Vaincre Sylargh en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 262
   },
   {
    "id": 6006,
    "name": "Sylargh (Compagnon)",
    "desc": "Vaincre Sylargh dans son donjon en validant le challenge « Les z'autres »",
    "pts": 5,
    "challenge": 1274
   },
   {
    "id": 6234,
    "name": "Sylargh (Spécial)",
    "desc": "Vaincre Sylargh dans son donjon en validant le challenge « Brikolère ».",
    "pts": 10,
    "challenge": 1069
   },
   {
    "id": 879,
    "name": "Sylargh (Barbare)",
    "desc": "Vaincre Sylargh dans son donjon en validant le challenge « Barbare ».",
    "pts": 10,
    "challenge": 266
   }
  ]
 },
 {
  "id": 83,
  "name": "Trône de la Cour Sombre",
  "level": 200,
  "difficulty": 3,
  "boss": {
   "id": 3726,
   "name": "Reine des Voleurs",
   "img": "assets/img/bosses/3726.png"
  },
  "achievements": [
   {
    "id": 1108,
    "name": "Trône de la Cour Sombre",
    "desc": "Vaincre la Reine des Voleurs dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1116,
    "name": "Reine des Voleurs (Trio)",
    "desc": "Vaincre la Reine des Voleurs dans son donjon en validant le challenge « Trio ».",
    "pts": 20,
    "challenge": 317
   },
   {
    "id": 6241,
    "name": "Reine des Voleurs (Spécial)",
    "desc": "Vaincre Reine des Voleurs dans son donjon en validant le challenge « La vie est une chausse-trappe ».",
    "pts": 10,
    "challenge": 1076
   },
   {
    "id": 1115,
    "name": "Reine des Voleurs (Collant)",
    "desc": "Vaincre la Reine des Voleurs en équipe dans son donjon en validant le challenge « Collant ».",
    "pts": 10,
    "challenge": 316
   },
   {
    "id": 1114,
    "name": "Reine des Voleurs (Premier)",
    "desc": "Vaincre la Reine des Voleurs dans son donjon en validant le challenge « Premier ».",
    "pts": 10,
    "challenge": 315
   },
   {
    "id": 5992,
    "name": "Reine des Voleurs (Compagnon)",
    "desc": "Vaincre Reine des Voleurs dans son donjon en validant le challenge « Les crados »",
    "pts": 5,
    "challenge": 1272
   }
  ]
 },
 {
  "id": 120,
  "name": "Trône de Sang",
  "level": 200,
  "difficulty": 2,
  "boss": {
   "id": 6014,
   "name": "Guerre",
   "img": "assets/img/bosses/6014.png"
  },
  "achievements": [
   {
    "id": 2264,
    "name": "Trône de sang",
    "desc": "Vaincre Guerre dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 2267,
    "name": "Guerre (Duo)",
    "desc": "Vaincre Guerre dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 427
   },
   {
    "id": 2265,
    "name": "Guerre (Zombie)",
    "desc": "Vaincre Guerre dans son donjon en validant le challenge « Zombie ».",
    "pts": 10,
    "challenge": 425
   },
   {
    "id": 2266,
    "name": "Guerre (Misanthrope)",
    "desc": "Vaincre Guerre en équipe dans son donjon en validant le challenge « Misanthrope ».",
    "pts": 10,
    "challenge": 426
   },
   {
    "id": 6258,
    "name": "Guerre (Spécial)",
    "desc": "Vaincre Guerre dans son donjon en validant le challenge « Arsenal total ».",
    "pts": 10,
    "challenge": 1093
   }
  ]
 },
 {
  "id": 97,
  "name": "Vaisseau du Capitaine Meno",
  "level": 200,
  "difficulty": 2,
  "boss": {
   "id": 4460,
   "name": "Capitaine Meno",
   "img": "assets/img/bosses/4460.png"
  },
  "achievements": [
   {
    "id": 1464,
    "name": "Vaisseau du Capitaine Meno",
    "desc": "Vaincre le Capitaine Meno dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 5977,
    "name": "Capitaine Meno (Compagnon)",
    "desc": "Vaincre Capitaine Meno dans son donjon en validant le challenge « Bandits du Magik Riktus »",
    "pts": 5,
    "challenge": 1270
   },
   {
    "id": 1465,
    "name": "Capitaine Meno (Blitzkrieg)",
    "desc": "Vaincre le Capitaine Meno dans son donjon en validant le challenge « Blitzkrieg ».",
    "pts": 10,
    "challenge": 359
   },
   {
    "id": 1466,
    "name": "Capitaine Meno (Prudent)",
    "desc": "Vaincre le Capitaine Meno dans son donjon en validant le challenge « Prudent ».",
    "pts": 10,
    "challenge": 360
   },
   {
    "id": 1467,
    "name": "Capitaine Meno (Duo)",
    "desc": "Vaincre le Capitaine Meno dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 367
   },
   {
    "id": 6245,
    "name": "Capitaine Meno (Spécial)",
    "desc": "Vaincre Capitaine Meno dans son donjon en validant le challenge « Parfum de mutinerie ».",
    "pts": 10,
    "challenge": 1080
   }
  ]
 },
 {
  "id": 84,
  "name": "Ventre de la Baleine",
  "level": 200,
  "difficulty": 4,
  "boss": {
   "id": 3828,
   "name": "Protozorreur",
   "img": "assets/img/bosses/3828.png"
  },
  "achievements": [
   {
    "id": 1136,
    "name": "Ventre de la baleine",
    "desc": "Vaincre le Protozorreur dans son donjon.",
    "pts": 10,
    "challenge": null
   },
   {
    "id": 1137,
    "name": "Protozorreur (Barbare)",
    "desc": "Vaincre le Protozorreur dans son donjon en validant le challenge « Barbare ».",
    "pts": 10,
    "challenge": 325
   },
   {
    "id": 1139,
    "name": "Protozorreur (Duo)",
    "desc": "Vaincre le Protozorreur dans son donjon en validant le challenge « Duo ».",
    "pts": 20,
    "challenge": 327
   },
   {
    "id": 6242,
    "name": "Protozorreur (Spécial)",
    "desc": "Vaincre Protozorreur dans son donjon en validant le challenge « Qui dit boum ? ».",
    "pts": 10,
    "challenge": 1077
   },
   {
    "id": 1138,
    "name": "Protozorreur (Statue)",
    "desc": "Vaincre le Protozorreur dans son donjon en validant le challenge « Statue ».",
    "pts": 10,
    "challenge": 326
   }
  ]
 }
];

const CHALLENGES = {
 "52": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "53": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "54": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "55": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "56": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "57": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "58": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "59": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "60": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "61": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "62": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "63": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "64": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "65": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "66": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "67": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "68": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "73": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "74": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "75": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "76": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "77": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "78": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "79": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "80": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "81": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "82": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "83": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "84": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "85": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "86": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "87": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "88": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "89": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "90": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "91": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "92": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "96": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "97": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "98": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "99": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "101": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "102": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "103": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "104": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "105": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "106": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "107": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "108": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "109": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "110": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "111": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "115": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "116": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "117": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "118": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "119": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "120": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "121": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "122": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "123": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "124": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "125": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "126": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "127": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "128": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "129": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "130": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "131": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "132": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "133": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "134": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "135": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "136": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "137": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "138": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "139": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "140": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "143": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "144": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "145": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "146": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "153": {
  "name": "Duel",
  "desc": "Lorsqu'un combattant allié attaque un ennemi, aucun autre combattant allié ne doit attaquer cet ennemi pendant toute la durée du combat.",
  "icon": "assets/img/challenges/45.png"
 },
 "154": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "155": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "156": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "157": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "158": {
  "name": "Econome",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois la même action durant toute la durée du combat.",
  "icon": "assets/img/challenges/5.png"
 },
 "159": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "160": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "161": {
  "name": "Duel",
  "desc": "Lorsqu'un combattant allié attaque un ennemi, aucun autre combattant allié ne doit attaquer cet ennemi pendant toute la durée du combat.",
  "icon": "assets/img/challenges/45.png"
 },
 "162": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "171": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "172": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "173": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "174": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "175": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "176": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "177": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "178": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "179": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "180": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "181": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "182": {
  "name": "Temps qui court",
  "desc": "Vaincre Silf le Rasboul Majeur dans son donjon. Les personnages ne doivent pas retirer de PA aux adversaires.",
  "icon": "assets/img/challenges/22.png"
 },
 "183": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "184": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "185": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "186": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "187": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "188": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "189": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "190": {
  "name": "Duel",
  "desc": "Lorsqu'un combattant allié attaque un ennemi, aucun autre combattant allié ne doit attaquer cet ennemi pendant toute la durée du combat.",
  "icon": "assets/img/challenges/45.png"
 },
 "191": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "192": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "193": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "194": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "197": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "198": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "199": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "200": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "201": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "202": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "207": {
  "name": "Liberté",
  "desc": "Ne pas tenter de retirer de PM ou de PO aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/10014.png"
 },
 "208": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "209": {
  "name": "Intouchable",
  "desc": "Les combattants alliés ne doivent pas perdre de points de vie.",
  "icon": "assets/img/challenges/17.png"
 },
 "210": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "211": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "212": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "213": {
  "name": "Circulez !",
  "desc": "Ne pas tenter de retirer de PM aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/21.png"
 },
 "214": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "215": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "216": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "217": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "218": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "219": {
  "name": "Circulez !",
  "desc": "Ne pas tenter de retirer de PM aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/21.png"
 },
 "220": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "221": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "222": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "223": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "224": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "225": {
  "name": "Mystique",
  "desc": "Les combattants alliés ne doivent infliger que des dégâts et soins de sorts durant leurs tours de jeu.",
  "icon": "assets/img/challenges/11.png"
 },
 "226": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "227": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "228": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un combattant ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "229": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "230": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "231": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "232": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "234": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "235": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "236": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "237": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "238": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "239": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "240": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "241": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "242": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "243": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "244": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "245": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "246": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "247": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "248": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "249": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "250": {
  "name": "Chrono",
  "desc": "Vaincre tous les monstres en moins de X tours.",
  "icon": "assets/img/challenges/10004.png"
 },
 "251": {
  "name": "Chrono",
  "desc": "Vaincre tous les monstres en moins de X tours.",
  "icon": "assets/img/challenges/10004.png"
 },
 "252": {
  "name": "Chrono",
  "desc": "Vaincre tous les monstres en moins de X tours.",
  "icon": "assets/img/challenges/10004.png"
 },
 "253": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "254": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "255": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "256": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "257": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "258": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "259": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "260": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "261": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "262": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "263": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "264": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "265": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "266": {
  "name": "Barbare",
  "desc": "Les personnages alliés doivent achever les ennemis avec une arme.",
  "icon": "assets/img/challenges/9.png"
 },
 "267": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "288": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "289": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "290": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "291": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "292": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "293": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "294": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "295": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "296": {
  "name": "Mystique",
  "desc": "Les combattants alliés ne doivent infliger que des dégâts et soins de sorts durant leurs tours de jeu.",
  "icon": "assets/img/challenges/11.png"
 },
 "297": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "298": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "299": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "300": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "301": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "302": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "303": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "304": {
  "name": "Barbare",
  "desc": "Les personnages alliés doivent achever les ennemis avec une arme.",
  "icon": "assets/img/challenges/9.png"
 },
 "305": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "306": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "307": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "308": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 },
 "309": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "310": {
  "name": "Liberté",
  "desc": "Ne pas tenter de retirer de PM ou de PO aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/10014.png"
 },
 "311": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "312": {
  "name": "Circulez !",
  "desc": "Ne pas tenter de retirer de PM aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/21.png"
 },
 "313": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "314": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "315": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "316": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "317": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 },
 "319": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "320": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "321": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "322": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "323": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "324": {
  "name": "Circulez !",
  "desc": "Ne pas tenter de retirer de PM aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/21.png"
 },
 "325": {
  "name": "Barbare",
  "desc": "Les personnages alliés doivent achever les ennemis avec une arme.",
  "icon": "assets/img/challenges/9.png"
 },
 "326": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "327": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "328": {
  "name": "Chrono",
  "desc": "Vaincre tous les monstres en moins de X tours.",
  "icon": "assets/img/challenges/10004.png"
 },
 "329": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "330": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "331": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "332": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "333": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "334": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 },
 "335": {
  "name": "Barbare",
  "desc": "Les personnages alliés doivent achever les ennemis avec une arme.",
  "icon": "assets/img/challenges/9.png"
 },
 "336": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "337": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "338": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "339": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "340": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "341": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "342": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "343": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "344": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "345": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "346": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "347": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "348": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "349": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "350": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "351": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un combattant ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "352": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "353": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "354": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "355": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "356": {
  "name": "Liberté",
  "desc": "Ne pas tenter de retirer de PM ou de PO aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/10014.png"
 },
 "357": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "358": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 },
 "359": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "360": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "361": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "362": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "363": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "364": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "365": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "366": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "367": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "368": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "369": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "370": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "371": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "372": {
  "name": "Duel",
  "desc": "Lorsqu'un combattant allié attaque un ennemi, aucun autre combattant allié ne doit attaquer cet ennemi pendant toute la durée du combat.",
  "icon": "assets/img/challenges/45.png"
 },
 "373": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "374": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "375": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "376": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "377": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "378": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "379": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "380": {
  "name": "Liberté",
  "desc": "Ne pas tenter de retirer de PM ou de PO aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/10014.png"
 },
 "381": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "382": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "383": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "384": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "385": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "386": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "387": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "388": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "389": {
  "name": "Liberté",
  "desc": "Ne pas tenter de retirer de PM ou de PO aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/10014.png"
 },
 "390": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "391": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "392": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "393": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "394": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "395": {
  "name": "Mystique",
  "desc": "Les combattants alliés ne doivent infliger que des dégâts et soins de sorts durant leurs tours de jeu.",
  "icon": "assets/img/challenges/11.png"
 },
 "396": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "397": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "398": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "399": {
  "name": "Liberté",
  "desc": "Ne pas tenter de retirer de PM ou de PO aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/10014.png"
 },
 "400": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "401": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "402": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "403": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "404": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "405": {
  "name": "Circulez !",
  "desc": "Ne pas tenter de retirer de PM aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/21.png"
 },
 "406": {
  "name": "Blitzkrieg",
  "desc": "Lorsqu'un ennemi est attaqué, il doit être achevé avant le début de son tour de jeu.",
  "icon": "assets/img/challenges/38.png"
 },
 "407": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "408": {
  "name": "Liberté",
  "desc": "Ne pas tenter de retirer de PM ou de PO aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/10014.png"
 },
 "409": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "410": {
  "name": "Chrono",
  "desc": "Vaincre tous les monstres en moins de X tours.",
  "icon": "assets/img/challenges/10004.png"
 },
 "411": {
  "name": "Chrono",
  "desc": "Vaincre tous les monstres en moins de X tours.",
  "icon": "assets/img/challenges/10004.png"
 },
 "412": {
  "name": "Chrono",
  "desc": "Vaincre tous les monstres en moins de X tours.",
  "icon": "assets/img/challenges/10004.png"
 },
 "413": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "414": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "415": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "416": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "417": {
  "name": "Circulez !",
  "desc": "Ne pas tenter de retirer de PM aux adversaires pendant toute la durée du combat.",
  "icon": "assets/img/challenges/21.png"
 },
 "418": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "419": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "420": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "421": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "422": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "423": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "424": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "425": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "426": {
  "name": "Misanthrope",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/39.png"
 },
 "427": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "428": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "429": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "430": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "431": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "432": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "433": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "442": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "443": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "444": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "445": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "446": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "447": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "448": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "449": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "450": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "454": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "455": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "456": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "464": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "465": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "466": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "494": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "495": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "496": {
  "name": "Focus",
  "desc": "Lorsqu'un ennemi est attaqué par un allié, il doit être achevé avant qu'un autre ennemi ne soit attaqué.",
  "icon": "assets/img/challenges/31.png"
 },
 "508": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "509": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "510": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "516": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "517": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "518": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 },
 "519": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "520": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "521": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 },
 "530": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "531": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "532": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "584": {
  "name": "Zombie",
  "desc": "Les combattants alliés doivent utiliser exactement un point de mouvement par tour de jeu.",
  "icon": "assets/img/challenges/1.png"
 },
 "585": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "586": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "587": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "589": {
  "name": "Statue",
  "desc": "Les combattants alliés doivent finir leur tour sur la même case que celle où ils l'ont commencé, pendant toute la durée du combat.",
  "icon": "assets/img/challenges/2.png"
 },
 "590": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "591": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "592": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "593": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "819": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "820": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "821": {
  "name": "Mains propres",
  "desc": "Les personnages alliés doivent achever les ennemis en utilisant un des éléments suivants : • des poisons, • des dommages à retardement, • des dommages de poussée, • des renvois de dommages, • des pièges, • des glyphes, • des runes, • des invocations.",
  "icon": "assets/img/challenges/19.png"
 },
 "822": {
  "name": "Versatile",
  "desc": "Les combattants alliés ne doivent utiliser qu'une seule fois une même action pendant leurs tours de jeu.",
  "icon": "assets/img/challenges/6.png"
 },
 "823": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "824": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "868": {
  "name": "Dernier",
  "desc": "Le monstre désigné doit être achevé en dernier.",
  "icon": "assets/img/challenges/4.png"
 },
 "869": {
  "name": "Prudent",
  "desc": "Les combattants alliés ne doivent jamais finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/40.png"
 },
 "870": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "977": {
  "name": "Lâche mes côtes",
  "desc": "Kardorim ne doit jamais terminer son tour au contact d'un combattant. Les Kardoribs ne doivent pas subir de dommages, ni être poussés.",
  "icon": "assets/img/challenges/977.png"
 },
 "978": {
  "name": "Mauvaise graine",
  "desc": "Les invocations du Tournesol Affamé doivent systématiquement être achevées avant le début de leur deuxième tour de jeu.",
  "icon": "assets/img/challenges/977.png"
 },
 "979": {
  "name": "Passer l'éponge",
  "desc": "À partir du tour 2, Mob l'éponge doit être poussé ou attiré au moins une fois à chaque tour global.",
  "icon": "assets/img/challenges/977.png"
 },
 "980": {
  "name": "Un Mulou dans la Bergerie",
  "desc": "Les ennemis ne doivent pas recevoir de soin.",
  "icon": "assets/img/challenges/977.png"
 },
 "981": {
  "name": "Empêtrement d'esprit entêtant",
  "desc": "Aucun Ashi-magari ne doit être achevé pendant toute la durée du combat.",
  "icon": "assets/img/challenges/977.png"
 },
 "982": {
  "name": "Dorée, mi fa sol",
  "desc": "Les invocations ennemies ne doivent subir aucun dommage.",
  "icon": "assets/img/challenges/977.png"
 },
 "983": {
  "name": "Désillusion",
  "desc": "Aucune illusion du Chafer Rōnin ne doit être présente au début de son tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "984": {
  "name": "Bécotam",
  "desc": "Lorsque les combattants alliés infligent des dommages aux ennemis, ils doivent être en ligne de ces derniers.",
  "icon": "assets/img/challenges/977.png"
 },
 "985": {
  "name": "La ligne interdite",
  "desc": "Les alliés (hors invocations statiques) ne doivent terminer leur tour ni en ligne d'un ennemi, ni en ligne d'un autre allié.",
  "icon": "assets/img/challenges/977.png"
 },
 "986": {
  "name": "Dirige mais mal rédige",
  "desc": "À partir du tour 2, les combattants ennemis doivent commencer leur tour sur une cellule adjacente à celle d'un allié ou d'un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "987": {
  "name": "Tombés sous le charme",
  "desc": "Les ennemis ne doivent être achevés que par des combattants dans l'état insoignable.",
  "icon": "assets/img/challenges/977.png"
 },
 "988": {
  "name": "Ouverture facile",
  "desc": "Les ennemis doivent être achevés uniquement lorsque le Coffre des Forgerons possède moins de 50 % de sa vie. Le challenge échoue si le Coffre des Forgerons n'est pas achevé en dernier.",
  "icon": "assets/img/challenges/977.png"
 },
 "989": {
  "name": "Collé-serré",
  "desc": "À partir du tour global 2, les combattants alliés doivent commencer leur tour au contact du Corailleur Magistral. Le challenge échoue si le Corailleur Magistral n'est pas achevé en dernier.",
  "icon": "assets/img/challenges/977.png"
 },
 "990": {
  "name": "Kwakwa ? Kwapoussée !",
  "desc": "Les ennemis ne doivent pas subir de dommages de poussée.",
  "icon": "assets/img/challenges/977.png"
 },
 "991": {
  "name": "Enlisement larvaire",
  "desc": "Les alliés ne doivent infliger des dégats qu'au Shin Larve lorsqu'ils sont sous l'effet du sort Enlisement.",
  "icon": "assets/img/challenges/977.png"
 },
 "992": {
  "name": "Vigilance forestière",
  "desc": "Les alliés ne doivent pas cumuler plus de deux faiblesses élémentaires différentes au début de leur tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "996": {
  "name": "Touche pas à mon blop",
  "desc": "Les invocations ennemies ne doivent subir aucun dommage.",
  "icon": "assets/img/challenges/977.png"
 },
 "997": {
  "name": "Rituel de survie",
  "desc": "Lorsqu'un combattant ennemi subit des dommages, il doit être sur une cellule adjacente à celle d'au moins une entité, qu'elle soit alliée ou ennemie.",
  "icon": "assets/img/challenges/977.png"
 },
 "1001": {
  "name": "Privé de dessert",
  "desc": "Les invocations ennemies ne doivent subir aucun dommage.",
  "icon": "assets/img/challenges/977.png"
 },
 "1002": {
  "name": "Mené à la cawotte",
  "desc": "Lorsqu'une Cawotte Woyale est présente, seul le Wa Wabbit doit recevoir des dommages.",
  "icon": "assets/img/challenges/977.png"
 },
 "1003": {
  "name": "De véritables craqu'",
  "desc": "Aucun combattant ennemi ne doit subir de dommages lorsque des invocations ennemies sont en vie.",
  "icon": "assets/img/challenges/977.png"
 },
 "1004": {
  "name": "Tonneaux truands",
  "desc": "Tous les combattants ennemis doivent subir au moins une fois les effets d'un tonneau de pirate.",
  "icon": "assets/img/challenges/977.png"
 },
 "1005": {
  "name": "Laboratoire de curiosité",
  "desc": "Les combattants alliés ne doivent avoir aucun allié situé à 3 cases ou moins d'eux lorsqu'ils infligent des dommages à un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1006": {
  "name": "Sortir de sa coquille",
  "desc": "Les ennemis ne doivent être achevés que lorsqu'au moins l'un d'eux se trouve dans l'état Intrépide (évolution maximale).",
  "icon": "assets/img/challenges/977.png"
 },
 "1007": {
  "name": "À portée de dard",
  "desc": "Le Mantiscore ne doit pas recevoir de dommages à distance.",
  "icon": "assets/img/challenges/977.png"
 },
 "1008": {
  "name": "À fond les boulons",
  "desc": "Les alliés ne doivent pas recevoir de dommages de poussée.",
  "icon": "assets/img/challenges/977.png"
 },
 "1009": {
  "name": "Saute-pirate",
  "desc": "Lorsque le Chouque échange de place avec un de ses alliés, ce dernier doit être achevé en moins de deux tours.",
  "icon": "assets/img/challenges/977.png"
 },
 "1010": {
  "name": "Distance respectueuse",
  "desc": "Les combattants alliés ne doivent avoir aucun ennemi situé à 3 cases ou moins d'eux lorsqu'ils occasionnent des dommages à un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1011": {
  "name": "Chacun son tour de magie",
  "desc": "Lorsqu'un ennemi déplace un allié, cet ennemi doit être lui-même déplacé par un allié avant le début de son prochain tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1012": {
  "name": "On ne peut la Nyée",
  "desc": "Lorsque la Reine Nyée invoque un Oeuf de Trégénaire, celui-ci doit être achevé avant le début de son prochain tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1013": {
  "name": "Faut pas pousser les cochons dans la confiture d'orties",
  "desc": "Les alliés ne doivent pas recevoir de dommages de poussée.",
  "icon": "assets/img/challenges/977.png"
 },
 "1014": {
  "name": "À la cool",
  "desc": "Aucun allié ne doit être transformé en Boufcool.",
  "icon": "assets/img/challenges/977.png"
 },
 "1015": {
  "name": "Meulou y es-tu ?",
  "desc": "Les ennemis ne doivent pas subir plus de trois attaques par tour de la part du même allié.",
  "icon": "assets/img/challenges/977.png"
 },
 "1016": {
  "name": "Les yeux aussi gros que le ventre",
  "desc": "À partir du deuxième tour, tous les ennemis doivent avoir au moins un allié en ligne de vue au début de leur tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1017": {
  "name": "Échapper au fisk",
  "desc": "Tuer le monstre désigné en dernier.",
  "icon": "assets/img/challenges/977.png"
 },
 "1018": {
  "name": "Animal totem",
  "desc": "Les totems de Darkli Moon ne doivent jamais perdre de vie.",
  "icon": "assets/img/challenges/977.png"
 },
 "1019": {
  "name": "Spectacle de marionnettes",
  "desc": "Les marionnettes doivent être achevées dans l'ordre dans lequel elles ont été invoquées.",
  "icon": "assets/img/challenges/977.png"
 },
 "1020": {
  "name": "Ras le boule",
  "desc": "Il ne doit jamais y avoir plus de 2 Rasbouls mineurs sur le terrain au début du tour de Silf le Rasboul Majeur.",
  "icon": "assets/img/challenges/977.png"
 },
 "1021": {
  "name": "La taille du rat",
  "desc": "Chaque ennemi doit subir des dégâts au moins une fois entre chacun de ses tours.",
  "icon": "assets/img/challenges/977.png"
 },
 "1022": {
  "name": "Rat-trapage",
  "desc": "Le Rat Noir ne doit pas subir de dommages avant que tous les autres ennemis soient achevés.",
  "icon": "assets/img/challenges/977.png"
 },
 "1023": {
  "name": "Maître Corbac sur un arbre perché",
  "desc": "Les combattants alliés doivent terminer leur tour à 5 cases ou moins d'un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1024": {
  "name": "On lui pèlera le bourgeon",
  "desc": "Un allié ne doit pas subir plus d'une fois l'explosion d'un Bourgeon de Damadrya.",
  "icon": "assets/img/challenges/977.png"
 },
 "1025": {
  "name": "Sac à pupuces",
  "desc": "Chaque pupuce invoquée par le Pounicheur ne doit pas changer d'état plus d'une fois par tour. Cette limitation se réinitialise au début du tour du Pounicheur.",
  "icon": "assets/img/challenges/977.png"
 },
 "1026": {
  "name": "Poursuite royale",
  "desc": "Chaque combattant ennemi doit jouer au moins un tour de jeu sans utiliser de PM avant d'être achevé.",
  "icon": "assets/img/challenges/977.png"
 },
 "1027": {
  "name": "Les fans et les enfants d'abord",
  "desc": "Les poupées doivent être achevées dans l'ordre défini. Au début du combat, l'une d'elles est choisie, puis détermine la prochaine à sa mort. Toutes les poupées doivent être achevées avant que Skeunk ne puisse subir de dégâts.",
  "icon": "assets/img/challenges/977.png"
 },
 "1028": {
  "name": "Garde emplumée",
  "desc": "Le Minotoror ne doit pas subir de dommages si au moins un de ses tofus est présent sur le terrain.",
  "icon": "assets/img/challenges/977.png"
 },
 "1029": {
  "name": "L'heure tourne",
  "desc": "Les ennemis ne doivent pas infliger de dommages aux autres ennemis.",
  "icon": "assets/img/challenges/977.png"
 },
 "1030": {
  "name": "Touche pas à mes blops",
  "desc": "Toutes les attaques doivent être concentrées sur le Blop Multicolore Royal jusqu'à ce qu'il meure.",
  "icon": "assets/img/challenges/977.png"
 },
 "1031": {
  "name": "En cassant des œufs",
  "desc": "Les coquilles invoquées doivent être achevées avant le début de leur troisième tour et aucun allié ne doit subir de dommages causés par leur explosion.",
  "icon": "assets/img/challenges/977.png"
 },
 "1032": {
  "name": "Parcimonie royale",
  "desc": "Durant son tour de jeu, si un allié déplace un ennemi, il ne doit plus occasionner de dommages à cet ennemi pendant le reste de son tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1033": {
  "name": "Sortie de ring",
  "desc": "Les combattants alliés doivent terminer leur tour sur leur cellule de début de combat.",
  "icon": "assets/img/challenges/977.png"
 },
 "1034": {
  "name": "Guerilla",
  "desc": "Les alliés ne doivent pas infliger de dommages à un autre allié par le biais du sort Guerillero.",
  "icon": "assets/img/challenges/977.png"
 },
 "1035": {
  "name": "Truchement",
  "desc": "Les ennemis doivent être déplacés avant de subir des dommages. Un ennemi déplacé est considéré comme tel jusqu'au début de son prochain tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1036": {
  "name": "Le jeu de la Dame",
  "desc": "Les Bombombres ne doivent subir aucun dommage.",
  "icon": "assets/img/challenges/977.png"
 },
 "1037": {
  "name": "Enchaînemou",
  "desc": "Les alliés (hors invocations statiques) doivent terminer leur tour en ligne d'un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1038": {
  "name": "Se faire des kouïs en or",
  "desc": "Un ennemi ne doit pas être déplacé plus d'une fois entre chacun de ses tours.",
  "icon": "assets/img/challenges/977.png"
 },
 "1039": {
  "name": "Prendre racine",
  "desc": "Les ennemis ne doivent ni être déplacés, ni subir de tentative de retrait PM par les alliés.",
  "icon": "assets/img/challenges/977.png"
 },
 "1040": {
  "name": "Privilège royal",
  "desc": "Chaque début de tour, le Mansot Royal désigne un combattant allié. Seul le combattant désigné peut recevoir des soins.",
  "icon": "assets/img/challenges/977.png"
 },
 "1041": {
  "name": "Vents contraires",
  "desc": "Les ennemis qui maitrisent le souffle du Wukin ne doivent subir que des dommages en mêlée et les ennemis qui maitrisent le souffle du Wukang ne doivent subir que des dommages à distance.",
  "icon": "assets/img/challenges/977.png"
 },
 "1042": {
  "name": "Raviver la flamme",
  "desc": "Aucun feu ne doit se rallumer, une fois éteint.",
  "icon": "assets/img/challenges/977.png"
 },
 "1043": {
  "name": "Pizwa quatre couleurs",
  "desc": "Aucun allié ne doit subir les effets du sort Kawabunga.",
  "icon": "assets/img/challenges/977.png"
 },
 "1044": {
  "name": "Hamrack'n roll",
  "desc": "Les alliés ne doivent pas subir de dommages provenant d'un Hamrack.",
  "icon": "assets/img/challenges/977.png"
 },
 "1045": {
  "name": "Diagonale du vide",
  "desc": "Les alliés (hors invocations statiques) ne doivent pas terminer leur tour en étant placés en diagonale d'un ennemi ou d'un allié.",
  "icon": "assets/img/challenges/977.png"
 },
 "1046": {
  "name": "Hellémentaire",
  "desc": "Les alliés doivent obligatoirement occasionner des dommages à Hell Mina correspondant à l'état élémentaire qu'elle attribue à chaque tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1047": {
  "name": "Une paire d'impairs",
  "desc": "Chaque combattant ennemi doit être sous les effets d'un des glyphes du Disciple du Kimbo avant de recevoir des dégâts.",
  "icon": "assets/img/challenges/977.png"
 },
 "1048": {
  "name": "Tofu-phobie",
  "desc": "Aucun combattant allié ne doit subir l'effet du sort Destinos.",
  "icon": "assets/img/challenges/977.png"
 },
 "1049": {
  "name": "À son hypogée",
  "desc": "Les ennemis ne doivent être ni attirés, ni poussés.",
  "icon": "assets/img/challenges/977.png"
 },
 "1050": {
  "name": "Crocs à crocs",
  "desc": "Les combattants ennemis ne doivent subir aucune tentative de dommages à distance.",
  "icon": "assets/img/challenges/977.png"
 },
 "1051": {
  "name": "Duel et pique",
  "desc": "Les alliés ne doivent pas attaquer plusieurs fois dans le même tour un même ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1052": {
  "name": "Une lanterne dans la nuit",
  "desc": "Aucun ennemi ne doit subir les effets du sort Lanterne des Spiritueurs à l'exception du Shogun Tofugawa.",
  "icon": "assets/img/challenges/977.png"
 },
 "1053": {
  "name": "Autonomie givrée",
  "desc": "Les alliés (hors invocations statiques) doivent terminer leur tour à plus de 4 cases de tous les autres alliés.",
  "icon": "assets/img/challenges/977.png"
 },
 "1054": {
  "name": "Émancipation maternelle",
  "desc": "Les combattants alliés ne doivent jamais terminer leur tour en ligne d'un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1055": {
  "name": "C'est très vague !",
  "desc": "Tous les ennemis d'une vague doivent être achevés avant l'arrivée d'une nouvelle vague.",
  "icon": "assets/img/challenges/977.png"
 },
 "1056": {
  "name": "On ne touche pas",
  "desc": "Les combattants alliés doivent terminer leur tour en diagonale d'un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1057": {
  "name": "La lumière ne fut jamais",
  "desc": "Aucun allié ne doit utiliser le sort Lanterne des Spiritueurs.",
  "icon": "assets/img/challenges/977.png"
 },
 "1058": {
  "name": "Baston équitable",
  "desc": "Les ennemis ne doivent subir ni retrait PM, ni retrait PA, ni retrait PO, ni tentative de déplacement.",
  "icon": "assets/img/challenges/977.png"
 },
 "1059": {
  "name": "Mycologie",
  "desc": "Les combattants alliés ne doivent pas terminer leur tour en ligne ou en diagonale d'un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1060": {
  "name": "Un projet tentaculaire",
  "desc": "Les combattants ne doivent pas terminer leur tour en ligne d'un allié.",
  "icon": "assets/img/challenges/977.png"
 },
 "1061": {
  "name": "Pas dans mes pattes",
  "desc": "Les combattants alliés doivent terminer leur tour à plus de 3 cases d'un allié.",
  "icon": "assets/img/challenges/977.png"
 },
 "1062": {
  "name": "Relation toxique",
  "desc": "Tuer le monstre désigné en dernier.",
  "icon": "assets/img/challenges/977.png"
 },
 "1063": {
  "name": "Alliés passés au futur",
  "desc": "Les alliés ne doivent pas recevoir de soin.",
  "icon": "assets/img/challenges/977.png"
 },
 "1064": {
  "name": "Complaisance gloursonne",
  "desc": "Les ennemis ne doivent subir aucune tentative de retrait de PM, de PA, de PO, ou de déplacement par les alliés.",
  "icon": "assets/img/challenges/977.png"
 },
 "1065": {
  "name": "On voulait l'autre",
  "desc": "Les ennemis dans l'état Zombi ne doivent pas être déplacés par les alliés.",
  "icon": "assets/img/challenges/977.png"
 },
 "1066": {
  "name": "Jeux d'ombres",
  "desc": "Les combattants ennemis ne doivent subir aucune tentative de dommages à distance.",
  "icon": "assets/img/challenges/977.png"
 },
 "1067": {
  "name": "Nos amies les bêtes",
  "desc": "Aucune invocation alliée ne doit être achevée par un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1068": {
  "name": "Antioxydant",
  "desc": "Aucun ennemi ne doit entrer dans l'état Nimpatience V.",
  "icon": "assets/img/challenges/977.png"
 },
 "1069": {
  "name": "Brikolère",
  "desc": "Les ennemis dans l'état Zombi ne doivent pas être achevés à 5 cases ou moins d'un allié ou d'un autre ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1070": {
  "name": "Dur à cuir",
  "desc": "Aucun allié ne doit entrer dans l'état Pacifiste.",
  "icon": "assets/img/challenges/977.png"
 },
 "1071": {
  "name": "Attention, sol glissant",
  "desc": "Aucun allié ne doit subir de dommages de poussée.",
  "icon": "assets/img/challenges/977.png"
 },
 "1072": {
  "name": "Alchi-pludent",
  "desc": "Aucun allié ne doit entrer dans l'état Pacifiste.",
  "icon": "assets/img/challenges/977.png"
 },
 "1073": {
  "name": "L'échec n'est pas une option",
  "desc": "Les ennemis ne doivent pas subir de dommages de mêlée.",
  "icon": "assets/img/challenges/977.png"
 },
 "1074": {
  "name": "Voyez, il y a du monde",
  "desc": "Chaque combattant allié doit commencer ou terminer son tour en ligne d'un ennemi.",
  "icon": "assets/img/challenges/977.png"
 },
 "1075": {
  "name": "Pingrerie",
  "desc": "Lorsqu'un allié occasionne des dommages, il doit se situer en ligne ou en diagonale de sa cible.",
  "icon": "assets/img/challenges/977.png"
 },
 "1076": {
  "name": "La vie est une chausse-trappe",
  "desc": "Les alliés ne doivent pas être soignés par le biais des Bonbombes bleues.",
  "icon": "assets/img/challenges/977.png"
 },
 "1077": {
  "name": "Qui dit boum ?",
  "desc": "La Malamibe doit toujours être achevée avant le début de son prochain tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1078": {
  "name": "Heure de la mort",
  "desc": "Tous les ennemis doivent être achevés à la même heure.",
  "icon": "assets/img/challenges/977.png"
 },
 "1079": {
  "name": "Les bons comptes font les bons ennemis",
  "desc": "Les combattants alliés doivent toujours terminer leur tour sur une cellule correspondant au numéro de leur cellule de début de combat.",
  "icon": "assets/img/challenges/977.png"
 },
 "1080": {
  "name": "Parfum de mutinerie",
  "desc": "Les combattants alliés doivent terminer leur tour en ligne d'un combattant allié.",
  "icon": "assets/img/challenges/977.png"
 },
 "1081": {
  "name": "Chaises musicales",
  "desc": "Après son premier tour, un ennemi doit échanger de place avec un allié au moins une fois entre chacun de ses tours.",
  "icon": "assets/img/challenges/977.png"
 },
 "1082": {
  "name": "Chasse aux coquillages",
  "desc": "Un Grokillage ne doit subir des dommages que de la part du combattant auquel il est lié.",
  "icon": "assets/img/challenges/977.png"
 },
 "1083": {
  "name": "Système pyramidal",
  "desc": "Un ennemi ne doit pas être ressuscité plus de deux fois.",
  "icon": "assets/img/challenges/977.png"
 },
 "1084": {
  "name": "Qu'est-ce qu'elle a ma goule ?",
  "desc": "Chaque combattant allié doit être goulifié au moins une fois au cours du combat.",
  "icon": "assets/img/challenges/977.png"
 },
 "1085": {
  "name": "Aux portes d'Externam",
  "desc": "Ilyzaelle doit être achevée avant l'apparition de la troisième vague de monstres.",
  "icon": "assets/img/challenges/977.png"
 },
 "1086": {
  "name": "La mort sait attendre",
  "desc": "Aucun ennemi ne doit entrer dans l'état Nécronyx avant la mort de Bethel.",
  "icon": "assets/img/challenges/977.png"
 },
 "1087": {
  "name": "La mort sait attendre",
  "desc": "Aucun ennemi (à l'exception de Solar) ne doit entrer dans l'état Necronyx avant la mort de Solar.",
  "icon": "assets/img/challenges/977.png"
 },
 "1088": {
  "name": "Manque de nimpatience",
  "desc": "Les ennemis ne doivent être achevés que lorsqu'ils se trouvent dans l'état Nimpatience III.",
  "icon": "assets/img/challenges/977.png"
 },
 "1089": {
  "name": "Lunatique",
  "desc": "Chaque ennemi doit être achevé soit durant la phase de Nouvelle Lune, soit durant la phase de Pleine Lune. La Lunorbe ne doit jamais être utilisée pour accélérer le rythme du cycle lunaire.",
  "icon": "assets/img/challenges/977.png"
 },
 "1090": {
  "name": "Immunité collective",
  "desc": "Seuls les alliés sans aucune maladie peuvent occasionner des dommages aux ennemis.",
  "icon": "assets/img/challenges/977.png"
 },
 "1091": {
  "name": "Bain de foule",
  "desc": "Les alliés ne doivent pas achever les Armécréantes invoquées.",
  "icon": "assets/img/challenges/977.png"
 },
 "1092": {
  "name": "Abjecte opulence",
  "desc": "Misère doit être achevée en premier, elle doit également rentrer dans l'état Collecte au moins une fois par tour.",
  "icon": "assets/img/challenges/977.png"
 },
 "1093": {
  "name": "Arsenal total",
  "desc": "Aucune arme de Guerre ne doit être achevée ou déplacée par un allié.",
  "icon": "assets/img/challenges/977.png"
 },
 "1094": {
  "name": "Régence d'encre",
  "desc": "L'invocation \"Reine Amirukam\" doit être achevée par un allié avant que le Roi Imagami ne sorte de sa phase Lotus.",
  "icon": "assets/img/challenges/977.png"
 },
 "1095": {
  "name": "Régence de papier",
  "desc": "L'invocation \"Roi Imagami\" doit être achevée par un allié avant que la Reine Amirukam ne sorte de sa phase Lotus.",
  "icon": "assets/img/challenges/977.png"
 },
 "1096": {
  "name": "Gros Bras",
  "desc": "Les ennemis doivent être achevés uniquement à l'aide des bras démoniaques.",
  "icon": "assets/img/challenges/977.png"
 },
 "1097": {
  "name": "Jusqu'à l'Aurore",
  "desc": "Les alliés ne doivent pas achever le Bonraphin et le Brâklotin.",
  "icon": "assets/img/challenges/977.png"
 },
 "1098": {
  "name": "Cible facile",
  "desc": "À la fin de son tour, Belladone désigne un combattant allié. Ce combattant doit se trouver en ligne de vue de Belladone au début du prochain tour de cette dernière. Si l'allié meurt alors qu'il est désigné, le challenge échoue.",
  "icon": "assets/img/challenges/977.png"
 },
 "1267": {
  "name": "Rester planté là",
  "desc": "Les combattants alliés ne doivent pas être déplacés.",
  "icon": "assets/img/challenges/977.png"
 },
 "1268": {
  "name": "Les héros",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Krosmoglob • Korbax • Masse • Chevalier d'Astrub",
  "icon": "assets/img/challenges/10025.png"
 },
 "1269": {
  "name": "Chevaliers tourmentés",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Flamme • Goutte • Nuage • Feuille • Ténèbre",
  "icon": "assets/img/challenges/10025.png"
 },
 "1270": {
  "name": "Bandits du Magik Riktus",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Riktus fine-lame • Riktus archer • Riktus baroudeur • Riktus ensorceleuse",
  "icon": "assets/img/challenges/10025.png"
 },
 "1271": {
  "name": "Rats... au sens propre ou au figuré",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Rapiat • Rapine • Ougicle • Hulkrap",
  "icon": "assets/img/challenges/10025.png"
 },
 "1272": {
  "name": "Les crados",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Grüt • Gobeuf • Turyé • Piggy Paupe",
  "icon": "assets/img/challenges/10025.png"
 },
 "1273": {
  "name": "Revenus d'outre-tombe",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Kocksis • Kubitus • Kalkanéus • Hectaupe • Hichète",
  "icon": "assets/img/challenges/10025.png"
 },
 "1274": {
  "name": "Les z'autres",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Haku • Manitou Zoth • Karotz • Grouillot • Phong Huss",
  "icon": "assets/img/challenges/10025.png"
 },
 "1275": {
  "name": "Compagnons, quel est votre métier ?",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Kloug • Klüme • Grizou • Laikteur",
  "icon": "assets/img/challenges/10025.png"
 },
 "1276": {
  "name": "Les pandaliens",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Mirh • Rekto Topi • Traçon • Logram",
  "icon": "assets/img/challenges/10025.png"
 },
 "1277": {
  "name": "Mini Nuits'",
  "desc": "Vaincre tous les monstres avec 4 personnages minimum, dont au moins un des compagnons éligibles à la réalisation de ce succès : • Inferno • Styx • Mandrin • Will Killson",
  "icon": "assets/img/challenges/10025.png"
 },
 "1278": {
  "name": "Ça pique le Kipik",
  "desc": "À la fin du tour du Sapik, il ne doit pas y avoir plus d'un Kipik.",
  "icon": "assets/img/challenges/977.png"
 },
 "1279": {
  "name": "Un Nowel presque parfait",
  "desc": "Les alliés doivent achever le Demi Papa Nowel sans occasionner de dommages au Papa Nowel une fois qu'il entre dans l'état Séparé. Le challenge échoue si le Papa Nowel est achevé avant d'entrer dans cet état.",
  "icon": "assets/img/challenges/977.png"
 },
 "1280": {
  "name": "Sale gosse !",
  "desc": "Les alliés doivent achever au moins une marionnette du Père Fwetar avant d'achever ce dernier.",
  "icon": "assets/img/challenges/977.png"
 },
 "1404": {
  "name": "J'accours, les croquants !",
  "desc": "Les combattants ennemis ne doivent subir aucune tentative de dommages à distance.",
  "icon": "assets/img/challenges/977.png"
 },
 "1405": {
  "name": "Fou de choco",
  "desc": "Tous les combattants alliés doivent entrer dans l'état Chocomatose au moins une fois au cours du combat.",
  "icon": "assets/img/challenges/977.png"
 },
 "1406": {
  "name": "Charier la chocolaterie",
  "desc": "Aucun Éclats du Kao ne doit être sur le terrain lorsqu'un combattant ennemi est achevé.",
  "icon": "assets/img/challenges/977.png"
 },
 "2083": {
  "name": "Nomade",
  "desc": "Les combattants alliés doivent utiliser tous leurs points de mouvement à chaque tour pendant toute la durée du combat. La fuite partielle fait échouer le challenge.",
  "icon": "assets/img/challenges/8.png"
 },
 "2084": {
  "name": "En ligne de mire",
  "desc": "Les combattants alliés doivent terminer leurs tours en ligne de vue d'au moins un ennemi.",
  "icon": "assets/img/challenges/969.png"
 },
 "2085": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 },
 "2086": {
  "name": "Autelière",
  "desc": "Aucun ennemi autre que la Déchireuse ne doit subir les effets de l'Autel de la Chasse",
  "icon": "assets/img/challenges/977.png"
 },
 "2087": {
  "name": "Conquérant",
  "desc": "Lorsqu'un combattant allié tue un ou plusieurs ennemis, il doit finir son tour sur la case qu'occupait l'un de ce ou ces ennemis.",
  "icon": "assets/img/challenges/973.png"
 },
 "2088": {
  "name": "Collant",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un autre combattant allié.",
  "icon": "assets/img/challenges/37.png"
 },
 "2089": {
  "name": "Duo",
  "desc": "Vaincre tous les monstres avec 2 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10023.png"
 },
 "2090": {
  "name": "Bombzerman",
  "desc": "Le Supervizœuf ne doit plus être invulnérable à l'arrivée de la deuxième vague.",
  "icon": "assets/img/challenges/977.png"
 },
 "2091": {
  "name": "Premier",
  "desc": "Le monstre désigné doit être achevé en premier.",
  "icon": "assets/img/challenges/3.png"
 },
 "2092": {
  "name": "Hardi",
  "desc": "Les combattants alliés doivent finir leur tour sur une cellule adjacente à celle d'un ennemi.",
  "icon": "assets/img/challenges/36.png"
 },
 "2093": {
  "name": "Ça ronfle fort",
  "desc": "Tuer le monstre désigné en dernier.",
  "icon": "assets/img/challenges/977.png"
 },
 "2094": {
  "name": "Trio",
  "desc": "Vaincre tous les monstres avec 3 personnages maximum et en moins de X tours.",
  "icon": "assets/img/challenges/10024.png"
 }
};
