#!/usr/bin/env node
// Copie les fichiers du design system Boreal dans le site consommateur.
// A lancer depuis la racine d'un site (ex. via "postinstall":
//   "node node_modules/mapleline-design/sync.js").
// Les fichiers copies sont destines a etre commits dans le site consommateur,
// pour qu'une page ne soit jamais nue meme si une installation echoue.
const fs = require('fs');
const path = require('path');

const src = __dirname;
const dest = process.cwd();

const COPIES = [
  ['mapleline.css', 'public/css/mapleline.css'],
  ['mapleline.js', 'public/js/mapleline.js'],
];

let version = 'inconnue';
try {
  version = require(path.join(src, 'package.json')).version;
} catch (e) { /* ignore */ }

for (const [from, to] of COPIES) {
  const target = path.join(dest, to);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(path.join(src, from), target);
  console.log('mapleline-design@' + version + ': synced ' + to);
}
