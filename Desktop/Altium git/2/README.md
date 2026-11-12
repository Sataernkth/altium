# ALTIUM — Site éditorial

Site statique HTML/CSS/JavaScript pour ALTIUM.

## Contenu

- `dist/index.html` — page complète et interactions JavaScript
- `dist/styles.css` — design responsive, animations et responsive layout
- `dist/assets/altium-logo.webp` — logo ALTIUM transparent utilisé sur le site
- `dist/assets/altium-logo.png` — source PNG du logo extrait
- `.openai/hosting.json` — configuration de publication Sites

## Lancer en local

Depuis ce dossier :

```bash
python3 -m http.server 8080 --directory dist
```

Puis ouvrir `http://localhost:8080`.

Le site ne nécessite ni framework ni étape de build : le dossier `dist/` est directement publiable sur un hébergement statique.

## Déploiement GitHub Pages / Netlify / Vercel

Utiliser `dist/` comme dossier de publication. Le site utilise uniquement des fichiers statiques et des images distantes pour les photographies éditoriales.

## Marque

Le logo `dist/assets/altium-logo.webp` est l’asset extrait de l’image fournie par le client. Ne pas le redessiner ni le remplacer par un symbole texte.
