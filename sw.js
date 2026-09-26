// Service worker : le site s'ouvre sans réseau (salle en sous-sol).
// Stratégie « cache d'abord, mise à jour en fond » : l'affichage est immédiat et
// hors-ligne, et la version fraîche est récupérée en tâche de fond pour la fois
// suivante. Pas de numéro de version à incrémenter à chaque déploiement.
const CACHE = 'how2train-v1';
const SHELL = [
  './',
  'index.html',
  'data.js',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((noms) => Promise.all(noms.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Toutes les vues (?p=…, ?g=…) sont la même page : une seule entrée en cache,
  // sinon chaque programme visité en ajouterait une copie.
  const cle = req.mode === 'navigate' ? new Request('index.html') : req;

  e.respondWith(
    caches.match(cle).then((cached) => {
      const frais = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copie = res.clone();
            caches.open(CACHE).then((c) => c.put(cle, copie));
          }
          return res;
        })
        // Hors-ligne et rien en cache : l'erreur remonte au navigateur.
        .catch(() => cached);
      return cached || frais;
    })
  );
});
