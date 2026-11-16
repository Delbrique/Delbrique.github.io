# Portfolio · Valentin Delbrique BIYONG

Ingénieur IA, Big Data & développeur Full-Stack

- https://delbrique-portfolio.vercel.app (Vercel, accessible depuis les réseaux camerounais)
- https://delbrique.github.io (GitHub Pages, redéployé automatiquement à chaque push)

Pour mettre à jour la version Vercel : `npx vercel deploy --prod`.

## Stack

- **React 18 + TypeScript**, bundlé par **Vite**
- **Tailwind CSS** (mode sombre, glassmorphism)
- **Framer Motion** (animations au défilement, micro-interactions, transitions de filtres)
- **lucide-react** (icônes)
- Déploiement continu sur **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)

## Développement

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # vérification TypeScript + build dans dist/
npm run preview
```

## Mettre à jour le contenu

Tout le contenu (profil, parcours, projets, compétences, contacts) se trouve dans
[`src/data/profile.ts`](src/data/profile.ts). Modifie-le, puis pousse sur `main` :
le site se redéploie automatiquement.

Le CV est servi depuis `public/CV_BIYONG-VALENTIN-DELBRIQUE.pdf`.
