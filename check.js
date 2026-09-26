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
    // Repères Lui / Elle : optionnels, mais jamais à moitié remplis.
    for (const t of s.targets || []) {
      for (const k of ['ex', 'lui', 'elle']) {
        assert(typeof t[k] === 'string' && t[k], `${p.id}/${s.day}: repère sans ${k}`);
      }
      assert(t.lui !== t.elle, `${p.id}/${s.day} — ${t.ex}: repère identique, autant le mettre dans le détail`);
    }
  }
  // Toute séance de muscu Spartan porte des repères chiffrés.
  if (p.group === 'Spartan 2027') {
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

// Logique "phase en cours" : reprise telle quelle depuis index.html.
const isNow = (p, today) => !!p.start && !!p.end && today >= p.start && today <= p.end;
const p1 = P.find((p) => p.id === 'spartan-p1');
assert(isNow(p1, '2026-09-28'), 'premier jour inclus');
assert(isNow(p1, '2027-01-31'), 'dernier jour inclus');
assert(!isNow(p1, '2026-09-27'), 'veille exclue');
assert(!isNow(p1, '2027-02-01'), 'lendemain exclu');
assert(!isNow(P.find((p) => p.id === 'entretien'), '2026-09-28'), 'programme sans dates : jamais en cours');
// Au plus une phase en cours à une date donnée (découle du non-chevauchement).
for (const d of ['2026-08-03', '2026-12-01', '2027-05-30', '2027-10-15']) {
  assert.strictEqual(P.filter((p) => isNow(p, d)).length, 1, `${d}: devrait être dans une seule phase`);
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
