# How2Train

Les programmes d'entraînement à suivre, phase par phase. Rien d'autre : pas de
suivi, pas de charges, pas de stats, pas de calendrier. On sélectionne un
training, on lit les séances de la semaine type.

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
  group: 'Hors-Spartan',                // titre de section dans le catalogue
  name: 'Nom affiché',
  meta: '6 semaines · 3 séances/sem',   // ligne grise sous le nom
  start: '2027-01-01',                  // optionnel : ISO AAAA-MM-JJ
  end: '2027-02-15',                    // les deux ou aucun des deux
  focus: 'À quoi sert ce bloc, en deux phrases.',
  sessions: [
    { day: 'lundi', type: 'muscu A', title: 'Titre de la séance',
      detail: 'Le contenu détaillé, visible au tap sur la carte.',
      targets: [                          // optionnel : repères Lui / Elle
        { ex: 'Squat 4×8', lui: '70-85 kg', elle: '40-50 kg' }
      ] }
  ],
  rules: ['Règle transverse affichée en bas de page.']
}
```

Deux détails :

- `start`/`end` servent au badge **en cours** du catalogue. Un programme sans
  dates n'est jamais marqué en cours — c'est voulu pour les blocs hors-Spartan.
- `targets` affiche un petit tableau Lui / Elle sous le détail : charges, temps
  ou objectifs de fin de phase, uniquement là où les deux diffèrent. Les
  valeurs sont des points de départ à calibrer (2 reps en réserve).
- La couleur d'accent de la carte vient du `type` : « hybride » → rouge,
  « muscu » ou « portés » → ambre, « repos » → gris, tout le reste → bleu
  (course). Ajouter un mot-clé = éditer `accent()` dans `index.html`.

Après édition : `node check.js` (ids uniques, champs présents, phases
contiguës, couleurs existantes).

## Source du contenu

Les 5 phases Spartan viennent de
`SpartanTrack v2/docs/plan-spartan-2027.md`. Les trois blocs hors-Spartan
(entretien, mobilité, reprise) sont propres à ce site.
