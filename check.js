// Vérif minimale du contenu et de la logique de dates : `node check.js`
const assert = require('assert');
const fs = require('fs');
const path = require('path');

global.window = {};
require('./data.js');
const P = window.PROGRAMS;
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Contenu : forme de chaque programme, ids uniques.
const ids = new Set();
for (const p of P) {
  for (const k of ['id', 'group', 'name', 'meta', 'focus']) {
    assert(typeof p[k] === 'string' && p[k], `${p.id}: champ ${k} manquant`);
  }
  assert(!ids.has(p.id), `id dupliqué : ${p.id}`);
  ids.add(p.id);
  // Un programme a des séances, sauf les fiches outil (calculateur de diète).
  if (p.tool) {
    assert(p.tool === 'diete', `${p.id}: outil inconnu « ${p.tool} »`);
    assert(html.includes(`p.tool === '${p.tool}'`), `${p.id}: outil non branché dans index.html`);
  } else {
    assert(p.sessions.length, `${p.id}: aucune séance`);
  }
  for (const s of p.sessions) {
    for (const k of ['day', 'type', 'title', 'detail']) {
      assert(typeof s[k] === 'string' && s[k], `${p.id}/${s.day}: champ ${k} manquant`);
    }
    // Séances d'un bloc : optionnelles, mais toujours un intitulé et un contenu.
    for (const i of s.items || []) {
      for (const k of ['label', 'text']) {
        assert(typeof i[k] === 'string' && i[k], `${p.id}/${s.day}: item sans ${k}`);
      }
    }
    // Une séance décrit son contenu d'une façon ou d'une autre.
    assert(
      s.detail || (s.items || []).length || (s.exercises || []).length,
      `${p.id}/${s.day}: séance vide`
    );
    // Exercices : optionnels, mais chaque ligne complète (nom, séries, reps, repos).
    for (const x of s.exercises || []) {
      for (const k of ['name', 'sets', 'reps', 'rest']) {
        assert(typeof x[k] === 'string' && x[k], `${p.id}/${s.day}: exercice sans ${k}`);
      }
    }
    // Repères Lui / Elle : optionnels, mais jamais à moitié remplis.
    for (const t of s.targets || []) {
      for (const k of ['ex', 'lui', 'elle']) {
        assert(typeof t[k] === 'string' && t[k], `${p.id}/${s.day}: repère sans ${k}`);
      }
      assert(t.lui !== t.elle, `${p.id}/${s.day} — ${t.ex}: repère identique, autant le mettre dans le détail`);
    }
  }
  // Un programme de musculation décrit ses exercices, pas juste un paragraphe.
  if (p.group === 'Musculation') {
    for (const s of p.sessions) {
      assert((s.exercises || []).length, `${p.id}/${s.day}: séance de muscu sans exercices`);
    }
  }
  // Toute séance de muscu Spartan porte des repères chiffrés.
  if (p.group === 'Prépa Spartan 2027') {
    for (const s of p.sessions.filter((s) => s.type.includes('muscu') || s.type.includes('porté'))) {
      assert((s.targets || []).length, `${p.id}/${s.day}: séance de muscu sans repères Lui/Elle`);
    }
  }
  // Une phase datée a les deux bornes, au format ISO, dans le bon ordre.
  assert(!!p.start === !!p.end, `${p.id}: start sans end (ou l'inverse)`);
  if (p.start) {
    assert(/^\d{4}-\d{2}-\d{2}$/.test(p.start) && /^\d{4}-\d{2}-\d{2}$/.test(p.end), `${p.id}: date non ISO`);
    assert(p.start < p.end, `${p.id}: start après end`);
  }
}

// Les phases Spartan se suivent sans trou ni chevauchement.
const phases = P.filter((p) => p.start).sort((a, b) => (a.start < b.start ? -1 : 1));
for (let i = 1; i < phases.length; i++) {
  const veille = new Date(phases[i].start);
  veille.setUTCDate(veille.getUTCDate() - 1);
  assert.strictEqual(
    phases[i - 1].end,
    veille.toISOString().slice(0, 10),
    `trou ou chevauchement entre ${phases[i - 1].id} et ${phases[i].id}`
  );
}

// Chaque type de séance tombe sur une couleur d'accent définie dans le CSS.
const accent = (type) => {
  const t = type.toLowerCase();
  if (t.includes('hybride')) return '--hybride';
  if (t.includes('muscu') || t.includes('porté')) return '--force';
  if (t.includes('repos')) return '--repos';
  return '--course';
};
for (const p of P) {
  for (const s of p.sessions) {
    assert(html.includes(accent(s.type) + ':'), `couleur ${accent(s.type)} absente du CSS (type "${s.type}")`);
  }
}

// Minuteur de repos : le parseur de durée, repris tel quel depuis index.html.
const secondes = (repos) => {
  const m = /(\d+)\s*[’']\s*(\d+)?/.exec(repos);
  return m ? parseInt(m[1], 10) * 60 + (m[2] ? parseInt(m[2], 10) : 0) : 0;
};
assert.strictEqual(secondes('2’30 à 3’'), 150, 'fourchette : on prend la borne basse');
assert.strictEqual(secondes('2’ à 2’30'), 120, 'minutes pleines');
assert.strictEqual(secondes('1’30'), 90, 'valeur unique');
assert.strictEqual(secondes('1’'), 60, 'minute seule');
assert.strictEqual(secondes('enchaîné'), 0, 'pas de durée = pas de minuteur');
assert.strictEqual(secondes('fin de séance'), 0, 'pas de durée = pas de minuteur');
// Tout repos affiché tombe soit sur une durée sensée, soit sur zéro.
for (const p of P) {
  for (const s of p.sessions) {
    for (const x of s.exercises || []) {
      const sec = secondes(x.rest);
      assert(sec === 0 || (sec >= 30 && sec <= 300), `${p.id}/${s.day} — ${x.name}: repos aberrant (${sec} s)`);
    }
  }
}

// Diète : équation de Mifflin-St Jeor, reprise telle quelle depuis index.html.
const mifflin = (sexe, poids, taille, age) =>
  10 * poids + 6.25 * taille - 5 * age + (sexe === 'h' ? 5 : -161);
assert.strictEqual(mifflin('h', 80, 180, 30), 1780, 'homme 80 kg / 180 cm / 30 ans');
assert.strictEqual(mifflin('f', 60, 165, 30), 1320.25, 'femme 60 kg / 165 cm / 30 ans');
assert(mifflin('h', 80, 180, 30) > mifflin('f', 80, 180, 30), 'la constante homme est plus haute');
const katch = (poids, mg) => 370 + 21.6 * poids * (1 - mg / 100);
assert.strictEqual(Math.round(katch(80, 15)), 1839, '80 kg à 15 % = 68 kg de masse maigre');
assert(html.includes('370 + 21.6 * poids * (1 - mg / 100)'), 'Katch-McArdle a divergé de index.html');

// Hors-ligne : les fichiers de l'app installable existent et se tiennent.
const manifeste = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.webmanifest'), 'utf8'));
const sw = fs.readFileSync(path.join(__dirname, 'sw.js'), 'utf8');
for (const i of manifeste.icons) {
  assert(fs.existsSync(path.join(__dirname, i.src)), `icône manquante : ${i.src}`);
}
assert(html.includes('manifest.webmanifest'), 'index.html ne référence pas le manifeste');
assert(html.includes("register('sw.js')"), 'index.html n’enregistre pas le service worker');
for (const f of ['index.html', 'data.js', 'manifest.webmanifest']) {
  assert(sw.includes(f), `${f} absent du cache hors-ligne`);
}

console.log(`OK — ${P.length} programmes, ${P.reduce((n, p) => n + p.sessions.length, 0)} séances.`);
