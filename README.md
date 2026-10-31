# Amaterasu — maquette

Maquette de la nouvelle interface du portail de guilde. Données 100 % fictives.

**Ouvrir :** lancer un serveur dans ce dossier puis aller sur http://localhost:8766/

```bash
python -m http.server 8766
```

Le serveur est nécessaire pour l'éditeur d'apparence (Skinoskope), qui doit être servi à la même adresse
que la maquette pour qu'on puisse lire le personnage créé. Le reste marche aussi en double-cliquant `index.html`.

## Pages

| Adresse | Page |
|---|---|
| `#accueil` | Prochain événement (soleil), Pour toi, rang, fil, atelier, records |
| `#agenda` | Semaine + événements, inscription / liste d'attente |
| `#guilde` | Podium + annuaire classé (Général / Vocal / Messages) |
| `#defis` | Top 10 solotage + catalogue de donjons |
| `#atelier` | Forgemagie en 3 colonnes |
| `#succes` | Succès de guilde : progression, tampons, raretés |
| `#profil/<id>` | Profil façon Steam : bannière, vitrine, perso principal, mur de commentaires |
| `#profil/<id>/mur` | Même page, curseur dans le mur (lien des anniversaires) |
| `#perso` | Création de personnage : classe (DofusDB), apparence (Skinoskope), nom |
| `#messages` | Taverne (chat général, épinglé) + messages privés |
| `#admin/<section>` | Panneau admin : solotages à valider, membres et rôles, demandes d'accès, événements, modération, succès, réglages, journal |

Sur son propre profil, **Personnaliser** permet de changer la bannière, la devise, la vitrine de succès
et le personnage principal.

## Arborescence

```
index.html              page unique, charge tout dans l'ordre
skinoskope/             LIEN (jonction) vers Tnul.Songes-main/Tnul.Songes-main/palette — rien n'est copié
css/
  tokens.css            VARIABLES : couleurs, polices, tailles, rayons, espacements
  base.css              reset, typo de base, focus
  layout.css            rail de navigation, barre du haut, version mobile
  components.css        boutons, puces, panneaux, avatars, tampons de succès, aperçu Skinoskope…
  pages/                un fichier par page
js/
  core/
    config.js           réglages : date "maintenant", catégories, URLs DofusDB, bannières…
    icons.js            icônes SVG + logo
    utils.js            fonctions partagées (avatars, classes, encodage ?s= Skinoskope, succès)
    state.js            filtres en cours + registre des pages
    actions.js          tout ce que l'utilisateur peut faire (inscription, mur, MP, profil, création de perso)
  data/                 FAUSSES DONNÉES : membres, événements, FM, donjons, fil, succès, commentaires, MP
                        + classes.js (19 classes : rôle/complexité DofusDB, têtes/couleurs Skinoskope)
  components/           panneau latéral (donjon, succès), palette Ctrl+K, notification
  pages/                une page = un fichier, s'enregistre dans `pages.<nom>`
  app.js                routeur (#page/argument) et rendu
assets/img/             images importées de DofusDB (bosses/, challenges/)
tools/                  import-dofusdb.mjs : script d'import des donjons
archives/               anciennes versions en fichier unique (v1 copie du site, v2)
```

## Sources externes

- **DofusDB** (`api.dofusdb.fr`) : symboles et petites têtes des classes (en ligne), et le catalogue
  des donjons importé en local par `tools/import-dofusdb.mjs` :
  126 donjons avec succès, leurs succès (base + challenges), les boss et 520 challenges.
  Les images (boss, icônes de challenge) sont téléchargées dans `assets/img/`.
  Pour mettre à jour : `node tools/import-dofusdb.mjs` (régénère `js/data/dofusdb-dungeons.js`).
- **DofusDB en direct** (`js/core/dofusdb.js`) : recherche des objets forgemageables pour le formulaire
  « Demander une FM » (image, type, jets). Le métier est déduit du type d'objet (`FM_TYPES`).
- **Skinoskope** (Tnul.Songes) : rendu et édition de l'apparence. Le lien `?s=` est du JSON compressé
  avec lz-string : `{ b: classe, s: 0|1 (sexe), h: tête, c: "couleurs.séparées.par.des.points", p, bd }`.

## Modifier

- **Couleurs, polices, arrondis :** `css/tokens.css`.
- **Membres :** `js/data/members.js`. L'utilisateur connecté est `ME_ID`.
- **Ajouter une page :** créer `js/pages/mapage.js` avec `pages.mapage = { label, icon, title, render(arg) }`
  (`hidden: true` pour la garder hors du menu), son CSS dans `css/pages/`, puis les deux balises dans `index.html`.
- Après une modification, si Chrome affiche l'ancienne version : Ctrl+Maj+R.
