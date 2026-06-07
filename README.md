# mapleline-design

Système de design Boréal de MapleLine Ventures. Source unique de vérité pour le CSS, le JS de navigation mobile et le validateur de contraste, partagés entre tous les sites et sous-sites.

## Contenu
- `mapleline.css` — jetons et composants Boréal (servi à `/css/mapleline.css`).
- `mapleline.js` — menu hamburger mobile injecté (servi à `/js/mapleline.js`).
- `contrast.js` — validateur de contraste WCAG (fonction pure, pour les tests).
- `sync.js` — copie `mapleline.css` et `mapleline.js` dans `public/css` et `public/js` du site consommateur.

## Consommer dans un site

1. Ajoute la dépendance (par tag de version) dans le `package.json` du site :

```json
"dependencies": {
  "mapleline-design": "github:devosland/mapleline-design#v1.0.0"
}
```

2. Ajoute un script `postinstall` qui synchronise les fichiers :

```json
"scripts": {
  "postinstall": "node node_modules/mapleline-design/sync.js"
}
```

3. `npm install`. Les fichiers sont copiés dans `public/css/` et `public/js/`. Commite-les : la page rend même si une installation échoue (robustesse au déploiement).

Pour le validateur de contraste dans les tests : `require('mapleline-design/contrast')`.

## Mettre à jour le design

1. Édite `mapleline.css` ou `mapleline.js` ici.
2. Bump la version dans `package.json` et commite.
3. Tag : `git tag v1.1.0 && git push --tags`.
4. Dans chaque site : `npm update mapleline-design`, puis commite les fichiers copiés. Le rollout se fait par site, à ton rythme.
