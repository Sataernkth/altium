# Vérification finale — LiquidEther

À contrôler après le push GitHub et avant la mise en production :

- [ ] Ouvrir la page d’accueil en navigation privée.
- [ ] Vérifier que `dist/liquid-ether.js` est chargé sans erreur JavaScript.
- [ ] Vérifier qu’un élément `<canvas class="liquid-ether__canvas">` apparaît dans `#liquid-root`.
- [ ] Vérifier que le fluide est visible sur toute la fenêtre derrière le contenu de la hero.
- [ ] Déplacer le curseur : le fluide doit réagir avec `mouseForce=20` et `cursorSize=100`.
- [ ] Vérifier l’auto-animation avec `autoDemo=true`, `autoSpeed=0.5` et `autoIntensity=2.2`.
- [ ] Vérifier les couleurs : `#0c3848`, `#69797c`, `#c7ad9b`.
- [ ] Tester Chrome, Safari et Firefox, ainsi qu’un écran mobile.
- [ ] Vérifier la console : aucune erreur WebGL, React ou module ne doit apparaître.

Le composant source est dans `src/LiquidEther.jsx`, son point de montage dans `src/main.jsx`, et le bundle publié est `dist/liquid-ether.js`.
