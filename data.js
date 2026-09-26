// How2Train — contenu des programmes.
// Un programme = { id, group, name, meta, focus, start?, end?, sessions[], rules[] }
// Pour ajouter un programme : copier un bloc, changer l'id. Voir README.md.

window.PROGRAMS = [
  // Musculation — programmes de Lucas Gouiffes (PDF « Programmes Gratuits »).
  // Fourchette de répétitions large pour simplifier la progression : une fois la
  // technique maîtrisée, on augmente charges et répétitions au fil des séances.
  {
    id: 'full-body',
    group: 'Musculation',
    name: 'Full body',
    meta: '3 séances/sem ou moins · 2 séances qui alternent',
    focus: 'Composé majoritairement de mouvements de base, accessible à tous les niveaux. Adapté à une fréquence de une à trois séances par semaine. On alterne séance 1 et séance 2.',
    sessions: [
      {
        day: 'séance 1',
        type: 'full body',
        title: 'Full body — variante 1',
        detail: 'Six mouvements, du plus lourd au plus léger. Augmenter charges ou répétitions d’une séance à l’autre.',
        exercises: [
          { name: 'Squat', sets: '4', reps: '8 à 15', rest: '2’30 à 3’' },
          { name: 'Développé couché', sets: '4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Tirage horizontal', sets: '4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Legs curl', sets: '4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Élévation latérale', sets: '3 à 5', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Crunch à la poulie', sets: '3 à 5', reps: '8 à 15', rest: '1’ à 1’30' }
        ]
      },
      {
        day: 'séance 2',
        type: 'full body',
        title: 'Full body — variante 2',
        detail: 'Même structure, mouvements alternés. À faire en alternance avec la variante 1.',
        exercises: [
          { name: 'Hack squat', sets: '4', reps: '8 à 15', rest: '2’30 à 3’' },
          { name: 'Développé incliné', sets: '4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Tirage vertical', sets: '4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Extension mollets', sets: '4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Tirage menton', sets: '3 à 5', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Enroulement de bassin', sets: '3 à 5', reps: '8 à 15', rest: '1’ à 1’30' }
        ]
      }
    ],
    rules: [
      'La fourchette de répétitions est large pour simplifier la progression : viser le haut de la fourchette, puis monter la charge.',
      'Une fois la technique parfaitement maîtrisée, chercher à augmenter charges et répétitions sur tous les exercices au fil des séances.',
      'Le meilleur programme est celui qui donne envie d’aller s’entraîner — les mouvements se substituent selon les préférences.'
    ]
  },
  {
    id: 'upper-lower',
    group: 'Musculation',
    name: 'Upper / Lower',
    meta: '4 séances/sem · haut et bas en alternance',
    focus: 'Mélange de mouvements polyarticulaires et d’isolation, adapté à tous les niveaux et particulièrement à quatre entraînements par semaine. Deux hauts et deux bas, en variantes 1 et 2.',
    sessions: [
      {
        day: 'upper 1',
        type: 'upper',
        title: 'Haut du corps — variante 1',
        detail: 'Poussée horizontale, tirages, puis isolation épaules et bras.',
        exercises: [
          { name: 'Développé horizontal', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Tirage horizontal', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Développé vertical', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Écarté', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Flexion biceps', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' }
        ]
      },
      {
        day: 'lower 1',
        type: 'lower',
        title: 'Bas du corps — variante 1',
        detail: 'Squat en ouverture, puis unilatéral, isolation et chaîne postérieure.',
        exercises: [
          { name: 'Squat', sets: '3 à 4', reps: '8 à 15', rest: '2’30 à 3’' },
          { name: 'Fentes', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Legs extension', sets: '3 à 4', reps: '8 à 15', rest: '1’30' },
          { name: 'Ext. mollets debout', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Soulevé de terre roumain', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' }
        ]
      },
      {
        day: 'upper 2',
        type: 'upper',
        title: 'Haut du corps — variante 2',
        detail: 'Même schéma, angles et prises alternés.',
        exercises: [
          { name: 'Développé incliné', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Tirage vertical', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Tirage horizontal', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Élévation latérale', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Extension triceps', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' }
        ]
      },
      {
        day: 'lower 2',
        type: 'lower',
        title: 'Bas du corps — variante 2',
        detail: 'Squat conservé les deux séances, le reste alterne.',
        exercises: [
          { name: 'Squat', sets: '3 à 4', reps: '8 à 15', rest: '2’30 à 3’' },
          { name: 'Hack squat ou leg press', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Legs curl', sets: '3 à 4', reps: '8 à 15', rest: '1’30' },
          { name: 'Ext. mollets assis', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Goodmorning', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' }
        ]
      }
    ],
    rules: [
      'La fourchette de répétitions est large pour simplifier la progression.',
      'Le squat ouvre les deux séances de bas du corps : c’est le mouvement à faire frais.',
      'Semaine type : upper 1, lower 1, upper 2, lower 2.'
    ]
  },
  {
    id: 'ppl',
    group: 'Musculation',
    name: 'Push / Pull / Legs',
    meta: '5 séances/sem et plus · 3 séances qui tournent',
    focus: 'Mélange de polyarticulaires et d’isolation, adapté à tous les niveaux et particulièrement à une fréquence haute (cinq entraînements par semaine et plus). Les trois séances tournent en boucle.',
    sessions: [
      {
        day: 'push',
        type: 'push',
        title: 'Push — pectoraux, épaules, triceps',
        detail: 'Deux développés lourds, puis isolation.',
        exercises: [
          { name: 'Développé horizontal', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Développé vertical', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Écarté + élévation latérale', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Extension triceps', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Élévation latérale (unilatérale)', sets: '3', reps: '8 à 15', rest: '1’30' }
        ]
      },
      {
        day: 'pull',
        type: 'pull',
        title: 'Pull — dos, arrière d’épaules, biceps',
        detail: 'Deux tirages lourds, puis isolation dos et bras.',
        exercises: [
          { name: 'Tirage horizontal', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Tirage vertical', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Pull over + face pulls', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Biceps curl', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Élévation postérieure (unilatérale)', sets: '3', reps: '8 à 15', rest: '1’30' }
        ]
      },
      {
        day: 'legs',
        type: 'legs',
        title: 'Legs — jambes complètes',
        detail: 'Squat frais en ouverture, puis quadriceps, chaîne postérieure et mollets.',
        exercises: [
          { name: 'Squat', sets: '3 à 4', reps: '8 à 15', rest: '2’30 à 3’' },
          { name: 'Hack squat', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'SdT roumain', sets: '3 à 4', reps: '8 à 15', rest: '2’ à 2’30' },
          { name: 'Legs curl + legs extension', sets: '3 à 4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Extension mollets', sets: '3 à 5', reps: '8 à 15', rest: '1’30 à 2’' }
        ]
      }
    ],
    rules: [
      'La fourchette de répétitions est large pour simplifier la progression.',
      'Fréquence haute : la boucle push, pull, legs se répète, un jour de repos quand la fatigue s’accumule.',
      'Les mouvements « A + B » s’enchaînent en superset.'
    ]
  },

  // Course à pied — plans construits sur les principes classiques de l'endurance :
  // 80 % du volume en allure facile, une seule variable qui monte à la fois,
  // +10 % de volume par semaine au maximum.
  {
    id: 'course-debut',
    group: 'Course à pied',
    name: 'Débuter la course — 0 à 30 min',
    meta: '8 semaines · 3 séances/sem',
    focus: 'Passer de zéro à 30 minutes de course continue, sans casse. L’alternance marche/course laisse aux tendons et aux articulations le temps de s’adapter — c’est elle qui fait la différence entre une reprise qui tient et une blessure au bout d’un mois.',
    sessions: [
      {
        day: 'semaines 1-2',
        type: 'marche/course',
        title: '8 × 1 min de course',
        detail: 'Trois séances par semaine, jamais deux jours de suite.',
        items: [
          { label: 'Les 3 séances', text: '5 min de marche rapide · 8 × [1 min de course lente / 2 min de marche] · 5 min de marche. 34 min en tout.' },
          { label: 'Si c’est trop dur', text: 'Descendre à 45 s de course et garder 2 min de marche. Refaire le bloc une semaine de plus plutôt que de forcer le passage.' }
        ]
      },
      {
        day: 'semaines 3-4',
        type: 'marche/course',
        title: '6 × 2 min de course',
        detail: 'La course s’allonge, la marche reste à 2 min.',
        items: [
          { label: 'Les 3 séances', text: '5 min de marche · 6 × [2 min de course / 2 min de marche] · 5 min de marche.' },
          { label: 'Si c’est facile', text: 'Passer à 7 répétitions la deuxième semaine. Ne pas accélérer : allonger, c’est tout.' }
        ]
      },
      {
        day: 'semaines 5-6',
        type: 'marche/course',
        title: '5 × 4 min de course',
        detail: 'La marche se raccourcit — c’est là que le cardio bascule.',
        items: [
          { label: 'Les 3 séances', text: '5 min de marche · 5 × [4 min de course / 90 s de marche] · 5 min de marche.' },
          { label: 'Variante', text: 'Une des trois séances peut se faire sur tapis, pente 1 %, si le terrain est dur ou le temps mauvais.' }
        ]
      },
      {
        day: 'semaines 7-8',
        type: 'course Z2',
        title: 'Vers les 30 min continus',
        detail: 'Dernier bloc : les coupures de marche disparaissent.',
        items: [
          { label: 'Séances 1 et 2', text: '5 min de marche · 3 × [8 min de course / 2 min de marche] · 5 min de marche.' },
          { label: 'Séance 3', text: '5 min de marche · 2 × [12 min de course / 2 min de marche] · 5 min de marche.' },
          { label: 'Test de fin de bloc', text: 'Dernière séance de la semaine 8 : 30 min de course continue, à l’allure la plus lente possible. C’est l’objectif, pas un chrono.' }
        ]
      }
    ],
    rules: [
      'Allure conversation : si tu ne peux pas parler en courant, tu vas trop vite. C’est la seule règle d’allure de ce plan.',
      '48 h entre deux séances : les tendons s’adaptent plus lentement que le cardio.',
      'Douleur articulaire (genou, tibia, cheville) : 3 jours de repos, puis reprise au bloc précédent. Une douleur qui revient trois fois = avis médical.',
      'Un bloc peut durer trois semaines au lieu de deux. Personne ne le saura, et le plan tiendra mieux.'
    ]
  },
  {
    id: 'course-5k',
    group: 'Course à pied',
    name: '5 km',
    meta: '8 semaines · 3 séances/sem',
    focus: 'Construire un 5 km puis le chronométrer. Suppose de tenir déjà 30 min de course continue. Trois séances : une facile, une dure, une longue — jamais deux dures dans la même semaine.',
    sessions: [
      {
        day: 'semaines 1-2',
        type: 'course Z2',
        title: 'Mise en route',
        detail: 'On installe le volume avant l’intensité.',
        items: [
          { label: 'Séance 1 · endurance', text: '35 min en Z2, allure conversation.' },
          { label: 'Séance 2 · fractionné', text: '15 min d’échauffement · 6 × [400 m rapides / 200 m trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · sortie longue', text: '35 min en Z2, terrain plat. C’est à peine plus que les 30 min du prérequis : on part de ce que tu tiens déjà.' }
        ]
      },
      {
        day: 'semaines 3-4',
        type: 'fractionné',
        title: 'Le volume monte',
        detail: 'Deux répétitions de plus, dix minutes de longue en plus.',
        items: [
          { label: 'Séance 1 · endurance', text: '40 min en Z2.' },
          { label: 'Séance 2 · fractionné', text: '15 min d’échauffement · 8 × [400 m / 200 m trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · sortie longue', text: '42 min en Z2, quelques faux plats.' }
        ]
      },
      {
        day: 'semaines 5-6',
        type: 'fractionné',
        title: 'Répétitions longues',
        detail: 'Les 800 m apprennent à tenir l’allure, pas à sprinter.',
        items: [
          { label: 'Séance 1 · endurance', text: '40 min en Z2.' },
          { label: 'Séance 2 · fractionné', text: '15 min d’échauffement · 5 × [800 m à allure 5 km / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · sortie longue', text: '50 min en Z2, dont 3 × 3 min à allure 5 km en milieu de sortie.' }
        ]
      },
      {
        day: 'semaines 7-8',
        type: 'course Z2',
        title: 'Affûtage et test',
        detail: 'Le volume baisse, la vitesse reste. On arrive frais.',
        items: [
          { label: 'Séance 1 · endurance', text: '30 min en Z2 + 4 lignes droites de 20 s en fin de séance.' },
          { label: 'Séance 2 · rappel', text: '15 min d’échauffement · 4 × [400 m à allure 5 km / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · test', text: 'Dernière séance de la semaine 8 : 5 km chronométrés. 15 min d’échauffement, départ prudent, accélération sur le dernier kilomètre.' }
        ]
      }
    ],
    rules: [
      '80 % du temps de course en Z2. Seule la séance de fractionné est dure — la longue reste facile.',
      'Les 400 m se courent à allure 5 km moins 10-15 s/km, pas à fond : tu dois pouvoir faire la dernière comme la première.',
      '15 min d’échauffement progressif avant tout fractionné, sans exception.',
      'Une semaine ratée ne se rattrape pas : reprendre au bloc en cours, pas au suivant.'
    ]
  },
  {
    id: 'course-10k',
    group: 'Course à pied',
    name: '10 km',
    meta: '10 semaines · 3 à 4 séances/sem',
    focus: 'Suppose de tenir 45 min de course continue. Le travail au seuil (allure que tu tiendrais 1 h en course) est le cœur du plan : c’est lui qui déplace l’allure sur 10 km.',
    sessions: [
      {
        day: 'semaines 1-2',
        type: 'seuil',
        title: 'Installation du seuil',
        detail: '3 séances, une 4e facile en option.',
        items: [
          { label: 'Séance 1 · endurance', text: '45 min en Z2.' },
          { label: 'Séance 2 · seuil', text: '15 min d’échauffement · 2 × [8 min à allure 10 km / 3 min de trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · sortie longue', text: '50 min en Z2 — cinq minutes de plus que ce que tu tiens déjà, pas davantage.' },
          { label: 'Séance 4 (option)', text: '30 min en Z2 très facile, ou 45 min de vélo.' }
        ]
      },
      {
        day: 'semaines 3-4',
        type: 'seuil',
        title: 'Le seuil s’allonge',
        detail: 'Trois blocs au lieu de deux.',
        items: [
          { label: 'Séance 1 · endurance', text: '50 min en Z2.' },
          { label: 'Séance 2 · seuil', text: '15 min d’échauffement · 3 × [8 min à allure 10 km / 3 min de trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · sortie longue', text: '60 min en Z2, terrain vallonné en marchant les raidillons.' }
        ]
      },
      {
        day: 'semaines 5-6',
        type: 'fractionné',
        title: 'Vitesse pure',
        detail: 'Un bloc de VMA pour élargir le plafond.',
        items: [
          { label: 'Séance 1 · endurance', text: '50 min en Z2.' },
          { label: 'Séance 2 · VMA', text: '15 min d’échauffement · 8 × [400 m vite / 1 min 30 de trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · sortie longue', text: '70 min en Z2.' },
          { label: 'Séance 4 (option)', text: '30 min très facile, jambes lourdes autorisées.' }
        ]
      },
      {
        day: 'semaines 7-8',
        type: 'seuil',
        title: 'Bloc le plus dur',
        detail: 'Volume et intensité au maximum du plan.',
        items: [
          { label: 'Séance 1 · endurance', text: '50 min en Z2.' },
          { label: 'Séance 2 · seuil', text: '15 min d’échauffement · 2 × [12 min à allure 10 km / 3 min de trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · fractionné', text: '15 min d’échauffement · 6 × [600 m / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Séance 4 · sortie longue', text: '80 min en Z2.' }
        ]
      },
      {
        day: 'semaines 9-10',
        type: 'course Z2',
        title: 'Affûtage et test',
        detail: 'Volume réduit de 40 %, intensité courte conservée.',
        items: [
          { label: 'Séance 1 · endurance', text: '35 min en Z2 + 4 lignes droites.' },
          { label: 'Séance 2 · rappel', text: '15 min d’échauffement · 3 × [5 min à allure 10 km / 3 min de trot] · 10 min de retour au calme.' },
          { label: 'Séance 3 · test', text: '10 km chronométrés en fin de semaine 10. Partir 5 s/km plus lentement que l’allure visée, accélérer après le 5e kilomètre.' }
        ]
      }
    ],
    rules: [
      'Allure seuil = celle que tu tiendrais environ une heure en course : difficile mais régulière, pas asphyxiante.',
      'Jamais deux séances dures d’affilée. La 4e séance optionnelle est toujours facile, sinon elle ne sert à rien.',
      'Volume hebdomadaire : +10 % maximum d’une semaine à l’autre.',
      'Semaine 6 allégée : volume −30 %, on garde la séance de seuil mais réduite de moitié.',
      'Fatigue persistante après trois nuits de sommeil correctes : sauter la séance de seuil de la semaine, garder les faciles.'
    ]
  },
  {
    id: 'course-semi',
    group: 'Course à pied',
    name: 'Semi-marathon',
    meta: '12 semaines · 4 séances/sem',
    focus: 'Suppose un 10 km déjà en jambes. Le plan construit la sortie longue jusqu’à 1 h 45 et installe l’allure semi, celle que tu devras tenir 21 km le jour J.',
    sessions: [
      {
        day: 'semaines 1-2',
        type: 'course Z2',
        title: 'Base',
        detail: '4 séances : 2 faciles, 1 seuil, 1 longue.',
        items: [
          { label: 'Séances faciles (×2)', text: '40 min et 45 min en Z2.' },
          { label: 'Séance de seuil', text: '15 min d’échauffement · 3 × [8 min à allure 10 km / 3 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '1 h 05 en Z2.' }
        ]
      },
      {
        day: 'semaines 3-4',
        type: 'seuil',
        title: 'Allure semi',
        detail: 'Premier contact avec l’allure de course.',
        items: [
          { label: 'Séances faciles (×2)', text: '40 min et 50 min en Z2.' },
          { label: 'Séance spécifique', text: '15 min d’échauffement · 3 × [2 km à allure semi / 3 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '1 h 15 en Z2.' }
        ]
      },
      {
        day: 'semaines 5-6',
        type: 'sortie longue',
        title: 'Le volume monte',
        detail: 'La semaine 6 est allégée de 30 % — c’est prévu.',
        items: [
          { label: 'Séances faciles (×2)', text: '45 min et 50 min en Z2.' },
          { label: 'Séance de seuil', text: '15 min d’échauffement · 4 × [8 min à allure 10 km / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '1 h 25 en Z2 la semaine 5. Semaine 6 : 1 h seulement, tout allégé.' }
        ]
      },
      {
        day: 'semaines 7-8',
        type: 'seuil',
        title: 'Spécifique',
        detail: 'Les blocs à allure semi s’allongent.',
        items: [
          { label: 'Séances faciles (×2)', text: '45 min et 50 min en Z2.' },
          { label: 'Séance spécifique', text: '15 min d’échauffement · 2 × [5 km à allure semi / 5 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '1 h 35 en Z2, dont les 20 dernières minutes à allure semi.' }
        ]
      },
      {
        day: 'semaines 9-10',
        type: 'sortie longue',
        title: 'Point haut',
        detail: 'La plus grosse charge du plan, puis on redescend.',
        items: [
          { label: 'Séances faciles (×2)', text: '45 min et 55 min en Z2.' },
          { label: 'Séance de seuil', text: '15 min d’échauffement · 5 × [6 min à allure 10 km / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '1 h 45 en Z2 la semaine 9, avec ravitaillement testé (boisson et gel). Semaine 10 : 1 h 15, tout allégé — l’affûtage commence là.' }
        ]
      },
      {
        day: 'semaines 11-12',
        type: 'course Z2',
        title: 'Affûtage et course',
        detail: 'Volume −50 %, dernière séance dure à J-8.',
        items: [
          { label: 'Séances faciles', text: '30 à 40 min en Z2, avec 4 lignes droites de 20 s.' },
          { label: 'Rappel d’allure', text: '15 min d’échauffement · 3 × [1,5 km à allure semi / 3 min de trot]. À faire au plus tard à J-8.' },
          { label: 'Sortie longue', text: '1 h en semaine 11, 40 min en semaine 12. Course le week-end de la semaine 12.' }
        ]
      }
    ],
    rules: [
      'Allure semi = allure 10 km + 15 à 20 s/km. Sur la sortie longue, si tu ne peux plus parler, tu es trop vite.',
      'Ravitaillement : boire toutes les 20 min et tester les gels sur les sorties de plus de 1 h 15. Rien de nouveau le jour J.',
      'Semaine allégée toutes les 4 semaines (volume −30 %), non négociable.',
      'Chaussures de course : rodées sur au moins 60 km avant la course, jamais neuves le jour J.'
    ]
  },
  {
    id: 'course-marathon',
    group: 'Course à pied',
    name: 'Marathon',
    meta: '16 semaines · 4 à 5 séances/sem',
    focus: 'Suppose un semi déjà couru. La sortie longue monte jusqu’à 3 h ou 32 km — jamais au-delà : le gain devient plus faible que le coût en récupération. L’affûtage dure trois semaines.',
    sessions: [
      {
        day: 'semaines 1-2',
        type: 'course Z2',
        title: 'Base foncière',
        detail: '4 séances, tout en aisance.',
        items: [
          { label: 'Séances faciles (×2)', text: '45 min et 50 min en Z2.' },
          { label: 'Séance de seuil', text: '15 min d’échauffement · 3 × [8 min à allure 10 km / 3 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '1 h 30 en Z2.' }
        ]
      },
      {
        day: 'semaines 3-4',
        type: 'sortie longue',
        title: 'Le long s’installe',
        detail: 'Une 5e séance facile peut apparaître ici.',
        items: [
          { label: 'Séances faciles (×2 ou ×3)', text: '45 min, 50 min et 35 min en Z2.' },
          { label: 'Séance de seuil', text: '15 min d’échauffement · 4 × [8 min à allure 10 km / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '1 h 45 en Z2, ravitaillement toutes les 45 min.' }
        ]
      },
      {
        day: 'semaines 5-6',
        type: 'seuil',
        title: 'Allure marathon',
        detail: 'Premier travail spécifique. Semaine 6 allégée de 30 %.',
        items: [
          { label: 'Séances faciles (×3)', text: '45 min, 50 min, 35 min en Z2.' },
          { label: 'Séance spécifique', text: '15 min d’échauffement · 2 × [6 km à allure marathon / 5 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '2 h en Z2 la semaine 5. Semaine 6 : 1 h 15, tout allégé.' }
        ]
      },
      {
        day: 'semaines 7-8',
        type: 'sortie longue',
        title: 'Montée en charge',
        detail: 'Le plan devient exigeant. Le sommeil compte autant que les séances.',
        items: [
          { label: 'Séances faciles (×3)', text: '50 min, 50 min, 40 min en Z2.' },
          { label: 'Séance de seuil', text: '15 min d’échauffement · 5 × [6 min à allure 10 km / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '2 h 15 en Z2, dont les 30 dernières minutes à allure marathon.' }
        ]
      },
      {
        day: 'semaines 9-10',
        type: 'sortie longue',
        title: 'Endurance spécifique',
        detail: 'La longue passe la barre des deux heures et demie.',
        items: [
          { label: 'Séances faciles (×3)', text: '50 min, 55 min, 40 min en Z2.' },
          { label: 'Séance spécifique', text: '15 min d’échauffement · 3 × [5 km à allure marathon / 4 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '2 h 30 ou 28 km en Z2 la semaine 9, ravitaillement complet testé. Semaine 10 : 1 h 30, tout allégé avant le point haut.' }
        ]
      },
      {
        day: 'semaines 11-12',
        type: 'sortie longue',
        title: 'Point haut du plan',
        detail: 'La plus longue sortie, puis tout redescend.',
        items: [
          { label: 'Séances faciles (×3)', text: '50 min, 55 min, 40 min en Z2.' },
          { label: 'Séance de seuil', text: '15 min d’échauffement · 4 × [8 min à allure 10 km / 2 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '2 h 45 à 3 h, ou 32 km — le plafond du plan. Jamais plus long.' }
        ]
      },
      {
        day: 'semaines 13-14',
        type: 'seuil',
        title: 'Dernier bloc spécifique',
        detail: 'Volume qui baisse, allure marathon qui reste.',
        items: [
          { label: 'Séances faciles (×2)', text: '45 min et 50 min en Z2.' },
          { label: 'Séance spécifique', text: '15 min d’échauffement · 2 × [8 km à allure marathon / 5 min de trot] · 10 min de retour au calme.' },
          { label: 'Sortie longue', text: '2 h en Z2, puis 1 h 30 la semaine suivante.' }
        ]
      },
      {
        day: 'semaines 15-16',
        type: 'course Z2',
        title: 'Affûtage et course',
        detail: 'Volume divisé par deux, puis par trois. Dernière séance dure à J-10.',
        items: [
          { label: 'Séances faciles', text: '30 à 40 min en Z2, avec 4 lignes droites de 20 s pour garder du tonus.' },
          { label: 'Rappel d’allure', text: '15 min d’échauffement · 3 × [2 km à allure marathon / 3 min de trot], au plus tard à J-10.' },
          { label: 'Sortie longue', text: '1 h 15 en semaine 15, 40 min en semaine 16. Course le week-end de la semaine 16.' }
        ]
      }
    ],
    rules: [
      'Allure marathon = allure semi + 10 à 15 s/km. Elle doit sembler trop facile pendant les 25 premiers kilomètres.',
      'Sortie longue plafonnée à 3 h ou 32 km : au-delà, le coût en récupération dépasse le gain.',
      'Ravitaillement : 30 à 60 g de glucides par heure, testés à l’entraînement. Le jour J ne s’improvise pas.',
      'Semaine allégée toutes les 4 semaines. Un plan marathon se rate plus souvent par excès que par manque.',
      'Douleur qui modifie la foulée : arrêt immédiat de la séance. Courir blessé coûte des semaines, pas des jours.'
    ]
  },

  {
    id: 'spartan-p0',
    group: 'Prépa Spartan 2027',
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
          { ex: 'Soulevé de terre roumain haltères 3×10', lui: '2×18-22 kg', elle: '2×10-14 kg' },
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
    group: 'Prépa Spartan 2027',
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
          { ex: 'Soulevé de terre roumain 3×8', lui: '60-70 kg', elle: '35-45 kg' },
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
    group: 'Prépa Spartan 2027',
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
          { ex: 'Tractions strictes 5 séries', lui: '3-5 reps, lestées +5 kg', elle: '2-3 reps, élastique léger si besoin' },
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
          { ex: 'Soulevé de terre roumain 3×8', lui: '70-80 kg', elle: '40-50 kg' },
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
    group: 'Prépa Spartan 2027',
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
          { ex: 'Porté de sac 50 m (sac de course ≈ 27/18 kg)', lui: '20-25 kg', elle: '12-16 kg' },
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
      'Sauts sur box : on descend en marchant, jamais en sautant. La réception en contrebas est ce qui casse les genoux, et le genou droit (lui) est déjà sensible. Box trop haute = step-up.',
      'Glucides +10 % les jours de grosse séance (sortie longue, circuit hybride, ≥ 75 min).',
      'Lundi circuit puis mardi côtes = deux séances dures d’affilée. Si les temps de côtes se dégradent semaine après semaine, échanger mardi et mercredi : footing le mardi, côtes le mercredi.',
      'Jalon 2027-06-13 : acheter les chaussures de trail et les tester en sortie longue.',
      'Jalon 2027-07-25 : Spartan Sprint test ou course à obstacles de préparation.',
      'Tests fin de phase (2027-09-12) : 5 km en 25:00 / 30:00 · tractions · bilan.'
    ]
  },
  {
    id: 'spartan-p4',
    group: 'Prépa Spartan 2027',
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
    id: 'poids-du-corps',
    group: 'Autres sports',
    name: 'Poids du corps — sans matériel',
    meta: '3 séances/sem · 2 séances qui alternent',
    focus: 'Full body sans salle ni charges : vacances, déplacement, salle fermée. La progression ne se fait pas en kilos mais en variantes — quand une variante devient facile, on passe à la suivante, pas à plus de répétitions.',
    sessions: [
      {
        day: 'séance A',
        type: 'poids du corps',
        title: 'Poussée et gainage',
        detail: 'Tempo lent : 2 s à la descente, pas de rebond. C’est ce qui remplace la charge.',
        exercises: [
          { name: 'Pompes (ou inclinées sur table)', sets: '4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Squats (ou bulgares sur chaise)', sets: '4', reps: '12 à 20', rest: '1’30 à 2’' },
          { name: 'Dips sur chaise', sets: '3', reps: '8 à 15', rest: '1’30' },
          { name: 'Fentes arrière', sets: '3', reps: '10 à 12 /jambe', rest: '1’30' },
          { name: 'Gainage planche', sets: '3', reps: '30 à 60 s', rest: '1’' },
          { name: 'Hollow hold', sets: '3', reps: '20 à 40 s', rest: '1’' }
        ]
      },
      {
        day: 'séance B',
        type: 'poids du corps',
        title: 'Tirage et chaîne postérieure',
        detail: 'Le tirage demande une barre, une table solide ou un jeu d’anneaux. À défaut, élastique.',
        exercises: [
          { name: 'Tractions australiennes (sous une table)', sets: '4', reps: '8 à 15', rest: '1’30 à 2’' },
          { name: 'Tractions négatives (descente 5 s)', sets: '3', reps: '3 à 6', rest: '2’' },
          { name: 'Pont fessier une jambe', sets: '3', reps: '10 à 15 /jambe', rest: '1’30' },
          { name: 'Nordic curl assisté (ou good morning, sac à dos lesté)', sets: '3', reps: '5 à 10', rest: '2’' },
          { name: 'Mollets sur une marche', sets: '3', reps: '15 à 25', rest: '1’' },
          { name: 'Gainage latéral', sets: '3', reps: '30 à 45 s /côté', rest: '1’' }
        ]
      }
    ],
    rules: [
      'Progression par variante : quand tu tiens le haut de la fourchette sur toutes les séries, passe à la version plus dure (pompes inclinées → au sol → pieds surélevés → une main assistée).',
      'Tempo 2 s à la descente, 1 s de pause en bas : sans charge, c’est le temps sous tension qui fait le travail.',
      'Trois séances par semaine en alternant A et B : A, B, A une semaine, B, A, B la suivante.',
      'Garder 2 répétitions en réserve sur chaque série, sauf la dernière du dernier exercice.'
    ]
  },
  {
    id: 'hybride',
    group: 'Autres sports',
    name: 'Hybride force + cardio',
    meta: '4 séances/sem · style HYROX',
    focus: 'Courir vite avec des jambes fatiguées et porter lourd avec un cardio saturé : c’est une qualité à part, qui ne s’obtient ni en salle de muscu seule, ni en courant seul. Le plan alterne une séance lourde, une de course, un circuit, une longue. Le format de référence est celui d’HYROX : 8 × [1 km de course + une station], dans l’ordre SkiErg, sled push, sled pull, burpees saut en longueur, rameur, farmer walk, fentes sandbag, wall balls.',
    sessions: [
      {
        day: 'séance 1',
        type: 'force',
        title: 'Force — lourd et court',
        detail: 'Charges franches, récupération complète. C’est la seule séance où on cherche la charge.',
        exercises: [
          { name: 'Squat ou presse', sets: '5', reps: '5', rest: '2’30 à 3’' },
          { name: 'Soulevé de terre', sets: '4', reps: '5', rest: '2’30 à 3’' },
          { name: 'Développé militaire', sets: '4', reps: '6 à 8', rest: '2’' },
          { name: 'Tractions (lestées si 10+)', sets: '4', reps: '5 à 8', rest: '2’' },
          { name: 'Farmer walk lourd', sets: '4', reps: '40 m', rest: '2’' }
        ]
      },
      {
        day: 'séance 2',
        type: 'fractionné',
        title: 'Course — intervalles longs',
        detail: 'L’allure cible est celle que tu tiendrais sur 10 km, pas un sprint.',
        items: [
          { label: 'Échauffement', text: '15 min progressives + 4 lignes droites de 20 s.' },
          { label: 'Corps de séance', text: '4 × [1 km à allure 10 km / 90 s de marche]. Ajouter un kilomètre quand les temps restent stables du premier au dernier — la cible est 8 × 1 km, le volume de course d’une épreuve.' },
          { label: 'Retour au calme', text: '10 min de trot très facile.' }
        ]
      },
      {
        day: 'séance 3',
        type: 'circuit hybride',
        title: 'Circuit — stations de course',
        detail: 'Quatre blocs [1 km de course + une station], enchaînés sans pause, comme en course. Les charges ci-dessous sont celles de la catégorie open (homme / femme) : commencer à la moitié et monter quand les temps de course tiennent.',
        exercises: [
          { name: '1 km course → SkiErg ou rameur 1000 m', sets: 'bloc 1', reps: '1 km + 1000 m', rest: 'enchaîné' },
          { name: '1 km course → sled push 50 m (152/102 kg chargé)', sets: 'bloc 2', reps: '1 km + 50 m', rest: 'enchaîné' },
          { name: '1 km course → burpees saut en longueur 80 m', sets: 'bloc 3', reps: '1 km + 80 m', rest: 'enchaîné' },
          { name: '1 km course → farmer walk 200 m (2×24 / 2×16 kg)', sets: 'bloc 4', reps: '1 km + 200 m', rest: 'enchaîné' },
          { name: 'Finish — wall balls (6/4 kg, cible 3 m / 2,70 m)', sets: '1', reps: '50 à 100', rest: 'fin de séance' }
        ]
      },
      {
        day: 'séance 4',
        type: 'sortie longue',
        title: 'Longue + portés',
        detail: 'La séance qui construit le fond. Terrain vallonné si possible.',
        items: [
          { label: 'Course', text: '60 à 80 min en Z2, allure conversation.' },
          { label: 'Portés en fin de sortie', text: 'Fentes avec sandbag 4 × 25 m (20/10 kg) ou sled push 4 × 50 m, récupération 2 min. Sur jambes fatiguées, c’est le but.' },
          { label: 'Étirements', text: '10 min : mollets, fléchisseurs de hanche, ischios.' }
        ]
      }
    ],
    rules: [
      'Une seule séance lourde par semaine. Empiler force et circuits mène à la stagnation des deux.',
      'Ordre dans la semaine : force, course, repos, circuit, repos, longue. Ne jamais coller circuit et longue.',
      'Le circuit se juge au chrono, pas à la charge : si les tours s’effondrent, réduire les charges et garder la vitesse.',
      'Technique avant charge sur les mouvements portés : un dos rond sous fatigue est la blessure classique de ce format.'
    ]
  },
  {
    id: 'crossfit',
    group: 'Autres sports',
    name: 'CrossFit',
    meta: '4 à 5 séances/sem · structure type',
    focus: 'Une séance type CrossFit tient en quatre temps : échauffement, travail de force ou de technique, WOD, accessoires. Ce programme donne la structure et quatre séances de référence — à adapter au matériel disponible et à scaler systématiquement.',
    sessions: [
      {
        day: 'séance 1',
        type: 'force',
        title: 'Haltérophilie + WOD court',
        detail: 'La technique passe avant la charge : un mouvement mal fait à l’échauffement le sera dix fois pire sous chrono.',
        items: [
          { label: 'Échauffement · 10 min', text: 'Rameur ou corde à sauter 3 min · mobilité épaules et hanches · 2 séries à vide du mouvement du jour.' },
          { label: 'Force · 20 min', text: 'Back squat 5 × 5, en montant à 80 % du max. Repos 2 à 3 min entre les séries.' },
          { label: 'WOD · 3 à 12 min', text: '« Fran » : 21-15-9 thrusters et tractions, pour le temps. Rx = 43 kg (homme) / 30 kg (femme). Version débutant : 15-12-9, barre à vide ou 20 kg, tractions australiennes.' },
          { label: 'Accessoires · 8 min', text: 'Gainage 3 × 45 s · face pulls 3 × 15.' }
        ]
      },
      {
        day: 'séance 2',
        type: 'gymnastique',
        title: 'Gymnastique + AMRAP',
        detail: 'AMRAP = le plus de tours possible dans le temps imparti, à rythme tenable.',
        items: [
          { label: 'Échauffement · 10 min', text: 'Corde à sauter 3 min · rotations d’épaules · 3 × 5 tractions australiennes.' },
          { label: 'Skill · 15 min', text: 'Travail de traction stricte ou de handstand contre un mur, par séries courtes et non fatigantes.' },
          { label: 'WOD · 20 min', text: '« Cindy » : AMRAP 20 min de [5 tractions · 10 pompes · 15 squats au poids de corps]. Aucune charge prescrite. Scaler les tractions en australiennes, les pompes sur les genoux. Un tour toutes les 80 à 90 s est un bon rythme de départ.' },
          { label: 'Accessoires · 8 min', text: 'Hollow hold 3 × 30 s · extensions dos 3 × 12.' }
        ]
      },
      {
        day: 'séance 3',
        type: 'hybride',
        title: 'EMOM — puissance et régularité',
        detail: 'EMOM = un bloc de travail au début de chaque minute, le temps restant sert de repos. Si tu ne finis plus le bloc, réduis les répétitions.',
        items: [
          { label: 'Échauffement · 10 min', text: 'Rameur 500 m facile · mobilité hanches · 2 séries légères des mouvements du jour.' },
          { label: 'WOD · 24 min', text: 'EMOM 24 min, en tournant : minute 1 — 12 kettlebell swings · minute 2 — 10 box jumps · minute 3 — 12 calories au rameur.' },
          { label: 'Force · 10 min', text: 'Soulevé de terre 4 × 6 à charge modérée, technique impeccable.' },
          { label: 'Accessoires · 5 min', text: 'Gainage latéral 3 × 30 s par côté.' }
        ]
      },
      {
        day: 'séance 4',
        type: 'hybride',
        title: 'WOD long — filière longue',
        detail: 'Séance longue, charges légères, rythme régulier. L’erreur classique est de partir trop vite dans les cinq premières minutes.',
        items: [
          { label: 'Échauffement · 12 min', text: 'Course 800 m facile · mobilité complète · 2 tours légers du circuit.' },
          { label: 'WOD · 25 à 35 min', text: '« Helen » : 3 tours de [400 m de course · 21 kettlebell swings (Rx 24/16 kg) · 12 tractions], pour le temps. Version longue : 5 tours de [500 m rameur · 20 wall balls · 15 burpees].' },
          { label: 'Retour au calme · 10 min', text: 'Marche 5 min + étirements mollets, quadriceps, épaules.' }
        ]
      }
    ],
    rules: [
      'Scaler est la règle, pas l’exception : un WOD se fait à intensité relative. Un débutant qui fait Fran prescrite apprend surtout à mal bouger vite.',
      'Technique avant charge, charge avant chrono. Dans cet ordre, toujours.',
      'Les mouvements d’haltérophilie (arraché, épaulé-jeté) s’apprennent avec un coach, pas avec une vidéo : ce sont les plus techniques de tout l’entraînement.',
      'Quatre séances par semaine suffisent largement. À cinq et plus, prévoir un jour complet de repos et une semaine allégée par mois.',
      'Douleur vive, dos qui s’arrondit ou technique qui se dégrade : la série s’arrête, même en plein chrono.'
    ]
  },
  {
    id: 'diete',
    group: 'Annexes',
    name: 'Calcul de la diète',
    meta: 'métabolisme de base · maintenance · masse · sèche',
    focus: 'Calcule ton métabolisme de base avec l’équation de Mifflin-St Jeor, ta dépense totale selon ton activité, puis les calories et les macros pour maintenir, prendre de la masse ou sécher.',
    tool: 'diete',
    sessions: [],
    rules: [
      'Un calcul reste une estimation : l’équation tombe à ±10 % de la dépense réelle. Le vrai réglage se fait à la balance, sur la moyenne des 7 derniers jours, après deux à trois semaines.',
      'Prise de masse : +10 à 15 % suffisent. Au-delà, le surplus part en gras, pas en muscle. Viser +0,25 à 0,5 % de poids de corps par semaine.',
      'Sèche : −15 à 20 %, pas plus. Perte visée 0,5 à 1 % du poids de corps par semaine — plus vite, c’est du muscle qui part.',
      'Protéines 1,8 à 2,2 g/kg, plutôt le haut de la fourchette en déficit : c’est ce qui protège la masse musculaire.',
      'Lipides jamais sous 0,8 g/kg : en dessous, hormones et récupération trinquent. Les glucides prennent le reste, et ce sont eux qui alimentent les séances dures.',
      'Le poids ne descend pas en ligne droite : sel, hydratation, cycle et glycogène font varier de 1 à 2 kg d’un jour à l’autre. Seule la tendance sur deux semaines compte.'
    ]
  },
  {
    id: 'mobilite',
    group: 'Annexes',
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
    group: 'Annexes',
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
