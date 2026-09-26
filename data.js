// How2Train — contenu des programmes.
// Un programme = { id, group, name, meta, focus, start?, end?, sessions[], rules[] }
// Pour ajouter un programme : copier un bloc, changer l'id. Voir README.md.

window.PROGRAMS = [
  {
    id: 'spartan-p0',
    group: 'Spartan 2027',
    name: 'Phase 0 — Fondations',
    meta: '8 semaines · ~8 km/sem',
    start: '2026-08-03',
    end: '2026-09-27',
    focus: 'Reprise en douceur : alternance marche/course pour construire genoux, tendons et cardio sans casse ; maintien muscu ; mobilité. Le VTT sert de volume aérobie sans impact.',
    sessions: [
      {
        day: 'lundi',
        type: 'muscu A',
        title: 'Muscu A — haut du corps',
        detail: 'Échauffement épaules 5 min (élastique). Développé haltères 3×10 · Rowing barre ou machine 3×10 · Développé militaire haltères 3×10 · Tirage vertical poulie 3×12 · Planche 3×45 s · Dead hang 3× max (noter le meilleur temps).',
        targets: [
          { ex: 'Développé haltères 3×10', lui: '2×20-24 kg', elle: '2×10-12 kg' },
          { ex: 'Rowing 3×10', lui: '40-50 kg', elle: '25-30 kg' },
          { ex: 'Développé militaire 3×10', lui: '2×12-16 kg', elle: '2×6-8 kg' },
          { ex: 'Tirage vertical 3×12', lui: '45-55 kg', elle: '27-32 kg' },
          { ex: 'Dead hang — objectif fin de phase', lui: '45 s', elle: '35 s' }
        ]
      },
      {
        day: 'mercredi',
        type: 'course Z2',
        title: 'Marche/course — 30 min',
        detail: '10 min de marche rapide (échauffement genou obligatoire), puis 7 × [2 min course lente / 1 min marche], 5 min de marche pour finir. Étirements mollets et quadriceps. Tapis ok.'
      },
      {
        day: 'vendredi',
        type: 'muscu B',
        title: 'Muscu B — jambes + grip',
        detail: 'Échauffement : vélo 5 min + abductions élastique 2×15. Goblet squat 3×10 · Fentes arrière 3×8/jambe (légères, amplitude sans douleur au genou) · Soulevé de terre roumain haltères 3×10 · Mollets debout 3×15 · Farmer walk 3×30 m · Suspension active 3× max.',
        targets: [
          { ex: 'Goblet squat 3×10', lui: '24-28 kg', elle: '14-18 kg' },
          { ex: 'SDT roumain haltères 3×10', lui: '2×18-22 kg', elle: '2×10-14 kg' },
          { ex: 'Farmer walk 30 m', lui: '2×22-26 kg', elle: '2×14-18 kg' },
          { ex: 'Suspension active', lui: '3×30 s', elle: '3×25 s' }
        ]
      },
      {
        day: 'dimanche',
        type: 'repos actif',
        title: 'Marche ou VTT — 45-60 min',
        detail: 'Allure aisée, on doit pouvoir discuter. Objectif : bouger, pas performer.'
      }
    ],
    rules: [
      'Deload : 1 semaine sur 4 — volume −40 %, charges −20 %, intensité conservée sur peu de répétitions.',
      'Genou droit (lui) : jamais de course sans 10 min d’échauffement progressif. Douleur qui persiste après séance → la course suivante devient du VTT.',
      'Pôle dance (elle) : 1 séance/sem conservée, compte comme du tirage. Semaine chargée → alléger le Muscu A (garder les tractions) plutôt qu’empiler.',
      'Une séance manquée ne se rattrape pas, on reprend le fil.',
      'Tests fin de phase (2026-09-27) : dead hang 45 s (lui) / 35 s (elle) + 20 min de course continue.'
    ]
  },
  {
    id: 'spartan-p1',
    group: 'Spartan 2027',
    name: 'Phase 1 — Force & base aérobie',
    meta: '18 semaines · ~18 km/sem',
    start: '2026-09-28',
    end: '2027-01-31',
    focus: 'Passer à 3 courses/sem en continu ; travail tractions prioritaire (assistées, négatives, grip). Le poids descend, les tractions montent.',
    sessions: [
      {
        day: 'lundi',
        type: 'muscu A',
        title: 'Muscu A — force haut du corps',
        detail: 'Tractions 5 séries : négatives 5 s ou assistées élastique, garder 2 reps en réserve (à faire en premier) · Développé couché 4×6-8 · Développé militaire 3×8 · Rowing barre 4×8 · Face pull 3×15 · Planche 3×60 s.',
        targets: [
          { ex: 'Tractions — objectif fin de phase', lui: '10 strictes', elle: '5 strictes' },
          { ex: 'Développé couché 4×6-8', lui: '60-70 kg', elle: '30-35 kg' },
          { ex: 'Développé militaire 3×8', lui: '35-40 kg', elle: '20-24 kg' },
          { ex: 'Rowing barre 4×8', lui: '50-60 kg', elle: '30-35 kg' }
        ]
      },
      {
        day: 'mardi',
        type: 'course Z2',
        title: 'Course Z2 — 30-40 min',
        detail: 'En continu, allure conversation. Si essoufflé : ralentir, marcher est autorisé. Ajouter ~5 min toutes les 2 semaines.',
        targets: [
          { ex: 'Allure Z2 indicative', lui: '6:45-7:15 /km', elle: '7:30-8:00 /km' }
        ]
      },
      {
        day: 'jeudi',
        type: 'muscu B',
        title: 'Muscu B — jambes + grip',
        detail: 'Squat ou presse 4×8 · Soulevé de terre roumain 3×8 · Fentes arrière ou split squat 3×8/jambe · Dead hang 4× max (viser 2 min cumulées) · Farmer walk lourd 4×30 m · Mollets 3×15.',
        targets: [
          { ex: 'Squat ou presse 4×8', lui: '70-85 kg', elle: '40-50 kg' },
          { ex: 'SDT roumain 3×8', lui: '60-70 kg', elle: '35-45 kg' },
          { ex: 'Dead hang — objectif fin de phase', lui: '75 s', elle: '60 s' },
          { ex: 'Farmer walk lourd 30 m', lui: '2×30-34 kg', elle: '2×20-24 kg' }
        ]
      },
      {
        day: 'samedi',
        type: 'sortie longue',
        title: 'Sortie longue — 45-60 min',
        detail: 'Z2 strict, l’allure la plus lente. Passer par le vallonné en marchant les montées.'
      },
      {
        day: 'dimanche',
        type: 'repos actif',
        title: 'VTT ou marche — 1 h',
        detail: 'Optionnelle, seulement si les jambes sont fraîches.'
      }
    ],
    rules: [
      'Deload : 1 semaine sur 4 — volume −40 %, charges −20 %.',
      'Genou droit (lui) : échauffement 10 min systématique avant toute course.',
      'Pôle dance (elle) : conservée, compte comme du tirage.',
      'Tests fin de phase (2027-01-31) : tractions 10 (lui) / 5 (elle) · dead hang 75 s / 60 s.'
    ]
  },
  {
    id: 'spartan-p2',
    group: 'Spartan 2027',
    name: 'Phase 2 — Développement',
    meta: '17 semaines · ~28 km/sem',
    start: '2027-02-01',
    end: '2027-05-30',
    focus: 'Introduction de l’intensité (fractionné, premières côtes courues) et force appliquée. Une course locale 5-10 km au printemps pour apprendre à courir en dossard.',
    sessions: [
      {
        day: 'lundi',
        type: 'muscu A',
        title: 'Muscu A — force',
        detail: 'Tractions strictes 5×3-5 (lestées si 10+) · Développé couché 5×5 · Développé militaire 4×6 · Rowing Pendlay 4×6 · Gainage lesté 3×45 s.',
        targets: [
          { ex: 'Tractions strictes 5×3-5', lui: 'lestées +5 kg', elle: 'poids de corps' },
          { ex: 'Tractions — objectif fin de phase', lui: '12', elle: '7' },
          { ex: 'Développé couché 5×5', lui: '70-80 kg', elle: '35-42 kg' },
          { ex: 'Rowing Pendlay 4×6', lui: '55-65 kg', elle: '32-38 kg' }
        ]
      },
      {
        day: 'mardi',
        type: 'fractionné',
        title: 'Fractionné — 6×2-3 min',
        detail: '15 min d’échauffement progressif · 6 × [2-3 min allure 5 km / 90 s trot] · 10 min retour au calme. Tapis ok.',
        targets: [
          { ex: 'Allure 5 km visée', lui: '5:24 /km', elle: '6:24 /km' },
          { ex: 'Objectif 5 km fin de phase', lui: '27:00', elle: '32:00' }
        ]
      },
      {
        day: 'mercredi',
        type: 'course Z2',
        title: 'Footing Z2 — 40 min',
        detail: 'Allure facile, travail de cadence (petits pas rapides).'
      },
      {
        day: 'jeudi',
        type: 'muscu B',
        title: 'Muscu B — jambes + tirage + grip',
        detail: 'Squat ou presse 4×6 · Soulevé de terre roumain 3×8 · Tirage vertical prise large 4×8 · Suspensions 5× max · Farmer walk lourd 4×40 m · Mollets 3×15.',
        targets: [
          { ex: 'Squat ou presse 4×6', lui: '85-100 kg', elle: '50-60 kg' },
          { ex: 'SDT roumain 3×8', lui: '70-80 kg', elle: '40-50 kg' },
          { ex: 'Tirage vertical prise large 4×8', lui: '60-70 kg', elle: '35-42 kg' },
          { ex: 'Farmer walk lourd 40 m', lui: '2×34-38 kg', elle: '2×22-26 kg' },
          { ex: 'Suspensions', lui: '5×45 s', elle: '5×40 s' }
        ]
      },
      {
        day: 'samedi',
        type: 'sortie longue',
        title: 'Sortie longue — 60-75 min',
        detail: 'Secteur vallonné : courir les côtes douces, marcher les raides. Tester l’hydratation et les gels en vue de la course.'
      },
      {
        day: 'dimanche',
        type: 'repos actif',
        title: 'Repos actif',
        detail: 'Marche, VTT tranquille ou 20 min de mobilité complète.'
      }
    ],
    rules: [
      'Deload : 1 semaine sur 4.',
      'Jalon 2027-03-01 : réserver la Spartan Sprint dès ouverture du calendrier 2027.',
      'Jalon 2027-04-18 : course locale 5-10 km (route ou trail court).',
      'Tests fin de phase (2027-05-30) : tractions 12 / 7 · 5 km en 27:00 / 32:00.'
    ]
  },
  {
    id: 'spartan-p3',
    group: 'Spartan 2027',
    name: 'Phase 3 — Spécifique Spartan',
    meta: '15 semaines · ~34 km/sem',
    start: '2027-05-31',
    end: '2027-09-12',
    focus: 'Tout devient spécifique : D+, portés, grip en fatigue, enchaînements course + effort. Spartan Sprint « test » en été si le calendrier le permet.',
    sessions: [
      {
        day: 'lundi',
        type: 'circuit hybride',
        title: 'Circuit hybride',
        detail: '4 à 6 tours, récup 2 min entre les tours. Course 4×400 m (400 à 800 m par tour) · Burpees 4×10 · Tractions 4×3-5 · Farmer walk 4×30 m · Sauts sur box 4×10.',
        targets: [
          { ex: 'Tractions par tour', lui: '5', elle: '3' },
          { ex: 'Farmer walk 30 m', lui: '2×32-36 kg', elle: '2×22-26 kg' },
          { ex: 'Hauteur de box', lui: '50-60 cm', elle: '40-50 cm' }
        ]
      },
      {
        day: 'mardi',
        type: 'côtes',
        title: 'Côtes — 8-10 répétitions',
        detail: '15 min d’échauffement · 8-10 × [45-60 s de montée rapide / descente marchée (genou)] · retour au calme. Tapis incliné 8-12 % en repli.',
        targets: [
          { ex: 'Objectif 5 km fin de phase', lui: '25:00', elle: '30:00' }
        ]
      },
      {
        day: 'mercredi',
        type: 'course Z2',
        title: 'Footing Z2 — 40 min',
        detail: 'Très facile — c’est de la récupération entre les grosses séances.'
      },
      {
        day: 'jeudi',
        type: 'portés',
        title: 'Portés + grip',
        detail: 'Step-up lesté sur box 3×8/jambe · Porté de sac lesté 4×50 m · Farmer walk lourd 4×40 m · Suspension bras fatigués 4×30 s (jusqu’à 45 s si possible) · Gainage 3×45 s.',
        targets: [
          { ex: 'Step-up lesté 3×8/jambe', lui: '2×16-20 kg', elle: '2×8-12 kg' },
          { ex: 'Porté de sac lesté 50 m', lui: '18-22 kg', elle: '10-14 kg' },
          { ex: 'Farmer walk lourd 40 m', lui: '2×36-40 kg', elle: '2×24-28 kg' },
          { ex: 'Suspension bras fatigués', lui: '4×45 s', elle: '4×40 s' }
        ]
      },
      {
        day: 'samedi',
        type: 'sortie longue',
        title: 'Sortie longue D+ — 75-90 min',
        detail: 'Maximum de dénivelé, en chaussures de trail. Monter les côtes raides en marchant, mains sur les cuisses (technique OCR).'
      },
      {
        day: 'dimanche',
        type: 'repos actif',
        title: 'Repos actif',
        detail: 'Marche légère uniquement. Non négociable : le corps encaisse la plus grosse charge du plan.'
      }
    ],
    rules: [
      'Deload : 1 semaine sur 4 — la phase la plus lourde, ne pas sauter le deload.',
      'Glucides +10 % les jours de grosse séance (sortie longue, circuit hybride, ≥ 75 min).',
      'Jalon 2027-06-13 : acheter les chaussures de trail et les tester en sortie longue.',
      'Jalon 2027-07-25 : Spartan Sprint test ou course à obstacles de préparation.',
      'Tests fin de phase (2027-09-12) : 5 km en 25:00 / 30:00 · tractions · bilan.'
    ]
  },
  {
    id: 'spartan-p4',
    group: 'Spartan 2027',
    name: 'Phase 4 — Affûtage',
    meta: '~5 semaines · ~20 km/sem',
    start: '2027-09-13',
    end: '2027-10-15',
    focus: 'Volume réduit de moitié, intensité courte conservée, dernière séance dure à J-7. Arriver frais le 15 octobre.',
    sessions: [
      {
        day: 'lundi',
        type: 'muscu B',
        title: 'Muscu B — entretien',
        detail: 'Tractions 3 séries à 60 % du max · Rowing léger 3×10 · Dead hang 3×30 s (jusqu’à 45 s si possible) · Gainage. Aucune recherche de progression.',
        targets: [
          { ex: 'Tractions 3 séries à 60 % du max', lui: '6-7 reps', elle: '3-4 reps' },
          { ex: 'Rowing léger 3×10', lui: '40-45 kg', elle: '24-28 kg' },
          { ex: 'Dead hang 3×', lui: '45 s', elle: '40 s' }
        ]
      },
      {
        day: 'mercredi',
        type: 'course Z2',
        title: 'Footing — 30 min + lignes droites',
        detail: 'Footing très facile + 4-6 accélérations progressives de 20 s en fin de séance.'
      },
      {
        day: 'samedi',
        type: 'circuit hybride',
        title: 'Circuit hybride léger',
        detail: '2 à 3 tours courts, technique, sans fatigue — le circuit de la Phase 3 à volume réduit de moitié. Course 2×400 m · Burpees 2×5 · Tractions 2×3 · Farmer walk 2×30 m · Sauts sur box 2×5.',
        targets: [
          { ex: 'Farmer walk 30 m', lui: '2×28-32 kg', elle: '2×18-22 kg' },
          { ex: 'Hauteur de box', lui: '40-50 cm', elle: '30-40 cm' }
        ]
      },
      {
        day: 'dimanche',
        type: 'repos actif',
        title: 'Marche',
        detail: 'Détente, sommeil, hydratation. La forme se construit au repos.'
      }
    ],
    rules: [
      'Dernière séance dure à J-7 ; ensuite footing uniquement.',
      'Déficit calorique suspendu (elle) pour arriver bien alimentée le jour J.',
      'Jalon 2027-10-09 : logistique jour J — sac, tenue, trajet, dossards.',
      'Jour J : 2027-10-15, Spartan Sprint.'
    ]
  },

  {
    id: 'entretien',
    group: 'Hors-Spartan',
    name: 'Muscu entretien',
    meta: '2 séances/sem · durée libre',
    focus: 'Bloc de maintien quand la prépa est en pause : vacances, semaine chargée, plateau, intersaison. On garde la force et le grip, on arrête de chercher la progression. Deux séances full body suffisent à ne rien perdre.',
    sessions: [
      {
        day: 'séance 1',
        type: 'muscu A',
        title: 'Full body — dominante tirage',
        detail: 'Échauffement épaules 5 min. Tractions ou tirage vertical 4×6-8 (2 reps en réserve) · Développé couché ou haltères 3×8 · Rowing 3×8 · Goblet squat 3×10 · Dead hang 3×30 s · Planche 3×45 s.'
      },
      {
        day: 'séance 2',
        type: 'muscu B',
        title: 'Full body — dominante jambes',
        detail: 'Échauffement vélo 5 min. Squat ou presse 3×8 · Soulevé de terre roumain 3×8 · Développé militaire 3×8 · Tirage horizontal 3×10 · Farmer walk 3×30 m · Mollets 3×15.'
      },
      {
        day: 'optionnel',
        type: 'repos actif',
        title: 'VTT, marche ou tapis — 30-45 min',
        detail: 'Une sortie facile par semaine suffit à garder la base aérobie. Allure conversation.'
      }
    ],
    rules: [
      'Charges à ~80 % de ce que tu faisais en prépa, jamais d’échec. Maintenir, pas progresser.',
      'Ordre libre, 48 h entre les deux séances.',
      'Si le bloc dure plus de 6 semaines, repasser par « Reprise après pause » avant de reprendre une phase.'
    ]
  },
  {
    id: 'mobilite',
    group: 'Hors-Spartan',
    name: 'Mobilité & préventif genou',
    meta: '20 min · jours de repos',
    focus: 'Séance courte à glisser sur un jour de repos actif ou après une séance. Cible le genou droit sensible, les chevilles (impact course) et les hanches (côtes, portés). Pas de fatigue, pas de charge.',
    sessions: [
      {
        day: 'bloc 1',
        type: 'repos actif',
        title: 'Activation — 5 min',
        detail: 'Vélo ou marche 3 min · Cercles de chevilles 10/côté · Abductions élastique 2×15 · Ponts fessiers 2×12.'
      },
      {
        day: 'bloc 2',
        type: 'repos actif',
        title: 'Renfort genou — 8 min',
        detail: 'Extensions terminales de genou à l’élastique 3×15 · Step-down lent sur marche basse 3×8/jambe (descente 3 s, sans douleur) · Mollets excentriques 3×12 · Squat statique au mur 3×30 s à amplitude confortable.'
      },
      {
        day: 'bloc 3',
        type: 'repos actif',
        title: 'Mobilité — 7 min',
        detail: 'Fente avec rotation 8/côté · Étirement fléchisseurs de hanche 2×30 s/côté · Chevilles genou au mur 2×30 s/côté · Ischios en appui 2×30 s/côté · Chaîne latérale 30 s/côté.'
      }
    ],
    rules: [
      'Jamais de douleur pendant : réduire l’amplitude avant de réduire la série.',
      'Le step-down se juge à la descente : si le genou tremble ou rentre vers l’intérieur, baisser la marche.',
      'Douleur de genou qui persiste plus de 2 semaines malgré ce bloc : consulter.'
    ]
  },
  {
    id: 'reprise',
    group: 'Hors-Spartan',
    name: 'Reprise après pause',
    meta: '2 semaines · réamorçage',
    focus: 'À faire après une pause de 2 semaines ou plus (vacances, maladie, blessure guérie) avant de rejoindre la phase en cours. Objectif : réhabituer tendons et genoux avant de remettre du volume.',
    sessions: [
      {
        day: 'semaine 1 · séance A',
        type: 'muscu A',
        title: 'Muscu légère — haut du corps',
        detail: 'Échauffement 8 min. Tirage vertical 3×12 · Développé haltères 3×12 · Rowing machine 3×12 · Dead hang 3×20 s · Planche 3×30 s. Charges à 50-60 % du max, aucune série difficile.'
      },
      {
        day: 'semaine 1 · séance B',
        type: 'course Z2',
        title: 'Marche/course — 25 min',
        detail: '10 min de marche rapide, puis 5 × [1 min course très lente / 2 min marche]. Tapis conseillé (surface régulière).'
      },
      {
        day: 'semaine 1 · séance C',
        type: 'muscu B',
        title: 'Muscu légère — jambes',
        detail: 'Vélo 5 min. Goblet squat 3×12 · Soulevé de terre roumain haltères légers 3×12 · Fentes arrière 2×8/jambe · Mollets 3×15 · Farmer walk 3×20 m.'
      },
      {
        day: 'semaine 2',
        type: 'course Z2',
        title: 'Semaine 2 — on remonte',
        detail: 'Mêmes trois séances, charges +10-15 %, et la course passe à 30 min avec 7 × [2 min course / 1 min marche]. Si tout passe sans douleur, la semaine suivante reprend la phase en cours à volume normal.'
      },
      {
        day: 'entre les séances',
        type: 'repos actif',
        title: 'Mobilité',
        detail: 'Le bloc « Mobilité & préventif genou » les jours creux, surtout si la pause venait d’une blessure.'
      }
    ],
    rules: [
      'Courbatures fortes à J+2 = le volume était trop haut, refaire la même semaine avant de monter.',
      'Aucune séance de fractionné, de côtes ni de circuit pendant ces deux semaines.',
      'Reprise après blessure : valider l’absence de douleur sur trois séances de course avant de rejoindre la phase.'
    ]
  }
];
