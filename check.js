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
  assert(p.sessions.length, `${p.id}: aucune séance`);
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

console.log(`OK — ${P.length} programmes, ${P.reduce((n, p) => n + p.sessions.length, 0)} séances.`);
