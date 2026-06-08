# mapleline-design

Source unique de vérité du design system **Boréal** de MapleLine Ventures (CSS, JS de nav mobile, validateur de contraste). Consommé par tous les sites et sous-sites via un paquet partagé. Voir `README.md` pour les détails de consommation et de mise à jour.

## Contenu
- `mapleline.css` — jetons et composants Boréal (servi à `/css/mapleline.css` chez les consommateurs).
- `mapleline.js` — menu hamburger mobile injecté.
- `contrast.js` — validateur de contraste WCAG (fonction pure).
- `sync.js` — copie `mapleline.css` et `mapleline.js` dans `public/css` et `public/js` du site consommateur.

## Règles clés
- C'est ICI qu'on édite le design. Les sites consommateurs reçoivent une COPIE synchronisée; ne jamais éditer le design directement chez eux.
- Pour publier un changement : bump la version dans `package.json`, commit, `git tag vX.Y.Z && git push --tags`. Puis chaque site fait `npm update mapleline-design` et committe les fichiers synchronisés (rollout par site, à son rythme).
- Le repo est PUBLIC et installé via `git+https://github.com/devosland/mapleline-design.git#vX.Y.Z` (jamais le raccourci `github:` qui tente un clone SSH et casse en CI).
- Pas de dépendances : ce paquet doit rester sans `dependencies`.
