# How2Train

Les programmes d'entraînement à suivre. Rien d'autre : pas de suivi, pas de
stats, pas de calendrier. On choisit un training sur l'accueil, on lit ses
séances.

Cinq sections : **Musculation** (full body, upper/lower, push-pull-legs),
**Course à pied** (débutant, 5 km, 10 km, semi, marathon), **Prépa Spartan
2027** (les 5 phases), **Autres sports** (poids du corps, hybride, CrossFit) et
**Annexes** (mobilité, reprise).

## Ouvrir

Double-clic sur `index.html`. Pas de build, pas de `npm`, pas de serveur.

En ligne (accès téléphone) : pousser le dossier sur un dépôt GitHub, puis
*Settings → Pages → Deploy from branch → main / root*.

## Fichiers

| Fichier      | Rôle |
| ------------ | ---- |
| `index.html` | Structure, style et affichage (les deux écrans) |
| `data.js`    | Tout le contenu des programmes |
| `check.js`   | Vérif du contenu : `node check.js` |

## Ajouter ou modifier un programme

Tout se passe dans `data.js`. Copier un bloc, changer l'`id` :

```js
{
  id: 'mon-bloc',                       // unique, sert aussi d'URL (?p=mon-bloc)
  group: 'Musculation',                 // titre de section sur l'accueil
  name: 'Nom affiché',
  meta: '6 semaines · 3 séances/sem',   // ligne grise sous le nom
  start: '2027-01-01',                  // optionnel : ISO AAAA-MM-JJ
  end: '2027-02-15',                    // les deux ou aucun des deux
  focus: 'À quoi sert ce bloc, en deux phrases.',
  sessions: [
    { day: 'lundi', type: 'push', title: 'Titre de la séance',
      detail: 'Le contenu détaillé, visible au tap sur la carte.',
      exercises: [                        // optionnel : liste d'exercices
        { name: 'Squat', sets: '3 à 4', reps: '8 à 15', rest: '2’30 à 3’' }
      ],
      items: [                            // optionnel : séances d'un bloc
        { label: 'Sortie longue', text: '1 h 30 en Z2.' }
      ],
      targets: [                          // optionnel : repères Lui / Elle
        { ex: 'Squat 4×8', lui: '70-85 kg', elle: '40-50 kg' }
      ] }
  ],
  rules: ['Règle transverse affichée en bas de page.']
}
```

Deux détails :

- `start`/`end` sont optionnels : quand ils sont là, la période s'affiche à côté
  de `meta`. Les programmes de musculation n'en ont pas.
- `exercises` affiche la liste des mouvements avec séries × répétitions et
  temps de repos. « 3 à 4 » est raccourci en « 3-4 » à l'écran.
- `items` sert aux programmes qui progressent dans le temps : une carte par
  bloc de deux semaines, et dans la carte, une ligne par séance du bloc.
- `targets` affiche un petit tableau Lui / Elle sous le détail : charges, temps
  ou objectifs de fin de phase, uniquement là où les deux diffèrent. Les
  valeurs sont des points de départ à calibrer (2 reps en réserve).
- La couleur d'accent de la carte vient du `type` : « hybride » → rouge,
  « muscu » ou « portés » → ambre, « repos » → gris, tout le reste → bleu
  (course). Ajouter un mot-clé = éditer `accent()` dans `index.html`.

Après édition : `node check.js` (ids uniques, champs présents, phases
contiguës, couleurs existantes).

## Source du contenu

- **Musculation** : PDF « Programmes Gratuits » de Lucas Gouiffes, recopié tel
  quel (séries, répétitions, repos, variantes de séance).
- **Prépa Spartan 2027** : `SpartanTrack v2/docs/plan-spartan-2027.md`.
- **Course à pied**, **Autres sports**, **Annexes** : écrits pour ce site, sur
  les principes classiques de l'entraînement (80 % du volume en allure facile,
  +10 % de volume par semaine au maximum, une seule variable qui monte à la
  fois). Ce ne sont pas des plans d'un coach nommé.
