// Toutes les données du portfolio sont centralisées ici : modifie ce fichier pour mettre le site à jour.

export const profile = {
  firstName: 'Valentin Delbrique',
  lastName: 'BIYONG',
  title: 'Ingénieur IA, Big Data & Développeur Full-Stack',
  roles: ['Ingénieur IA', 'Deep Learning', 'Big Data', 'Développeur Full-Stack', 'Automatisation'],
  tagline:
    "Je conçois des systèmes intelligents qui fonctionnent sur le terrain : des modèles de vision explicables qui tournent hors ligne sur un téléphone d'entrée de gamme, des pipelines de données et des applications web et mobiles soignées.",
  location: 'Yaoundé, Cameroun',
  email: 'valentinbiyong2@gmail.com',
  github: 'https://github.com/Delbrique',
  githubHandle: 'Delbrique',
  linkedin: 'https://www.linkedin.com/in/valentin-biyong-32667b292/',
  cv: '/CV_BIYONG-VALENTIN-DELBRIQUE.pdf',
  availability: 'Ouvert aux opportunités : CDI, stage, alternance, freelance',
}

export const stats = [
  { value: '95,9 %', label: 'Exactitude du classifieur AgriCam' },
  { value: '0,65 s', label: "Diagnostic complet dans le navigateur, sans serveur" },
  { value: '18+', label: 'Dépôts GitHub' },
  { value: '5', label: 'Domaines : IA, data, web, mobile, DevOps' },
]

export const expertise = [
  {
    icon: 'brain',
    title: 'Intelligence Artificielle',
    text: "Problèmes concrets formulés en tâches d'apprentissage : préparation des données, modélisation, évaluation honnête, seuils de confiance et refus de trancher.",
  },
  {
    icon: 'layers',
    title: 'Deep Learning & Vision',
    text: 'CNN (EfficientNet), détection d\'objets (YOLOv8), explicabilité par cartes d\'activation, export TensorFlow.js et ONNX pour une inférence embarquée.',
  },
  {
    icon: 'code',
    title: 'Développement Full-Stack',
    text: 'React / TypeScript, PWA hors ligne, React Native, FastAPI et Flask, Firebase et Supabase, fonctions serverless.',
  },
  {
    icon: 'workflow',
    title: 'Data & Automatisation',
    text: 'Entrepôts de données (SSIS, SQL Server), tableaux de bord Streamlit et Power BI, workflows n8n, conteneurisation Docker.',
  },
]

export type TimelineItem = { period: string; title: string; org: string; text: string; kind: 'edu' | 'work' }

export const timeline: TimelineItem[] = [
  {
    period: '2025 – 2026',
    title: 'Licence en Génie Informatique, option IA & Big Data',
    org: 'Keyce Informatique & IA · ENSPY (Université de Yaoundé I)',
    text: "Mémoire soutenu le 18 septembre 2026 : « Conception d'un modèle de détection explicable des maladies des cultures maraîchères : cas de la filière maraîchère camerounaise ».",
    kind: 'edu',
  },
  {
    period: '07/2026 – 09/2026',
    title: 'Stage de fin d\'études, IA appliquée',
    org: 'Global Technology & Associates (GTA)',
    text: 'Conception et livraison d\'AgriCam, une application de diagnostic phytosanitaire par vision artificielle, de la collecte des données au déploiement.',
    kind: 'work',
  },
  {
    period: '2025 – 2026',
    title: 'Bachelor 3 · Intelligence Artificielle & Big Data',
    org: 'Keyce Informatique & Intelligence Artificielle',
    text: 'Deep Learning, ML supervisé et non supervisé, data mining, NoSQL & Big Data, data warehouse & BI, séries temporelles, cloud, DevOps, éthique et gouvernance des données.',
    kind: 'edu',
  },
  {
    period: '2024 – 2025',
    title: 'Bachelor 2 · Informatique & Intelligence Artificielle',
    org: 'Keyce Informatique & Intelligence Artificielle',
    text: 'Développement web et mobile, bases de données, initiation au machine learning.',
    kind: 'edu',
  },
  {
    period: '07/2024 – 09/2024',
    title: 'Stage académique',
    org: 'Reax DigiTech · Tradex Awae Escalier',
    text: 'Design graphique, apprentissage du développement web et du marketing digital.',
    kind: 'work',
  },
  {
    period: '2023 – 2024',
    title: 'Licence 1 · Génie Logiciel et Systèmes & Réseaux',
    org: "Institut Africain d'Informatique (IAI)",
    text: 'Fondations en algorithmique, développement logiciel, systèmes et réseaux.',
    kind: 'edu',
  },
  {
    period: '2022 – 2023',
    title: 'Baccalauréat A4 Allemand',
    org: 'Collège Catholique Bilingue Saint Benoît, Mvolyé',
    text: 'Langues : français, anglais, allemand.',
    kind: 'edu',
  },
]

export type Category = 'IA' | 'Full-Stack' | 'Data' | 'DevOps'

export type Project = {
  name: string
  tagline: string
  period?: string
  description: string
  highlights?: string[]
  stack: string[]
  categories: Category[]
  repo?: string
  demo?: string
  featured?: boolean
  accent: string // dégradé tailwind
}

export const projects: Project[] = [
  {
    name: 'AgriCam',
    period: '07/2026 – 09/2026',
    tagline: 'Diagnostic phytosanitaire explicable, 100 % hors ligne',
    description:
      "Projet de fin d'études. Le producteur photographie un fruit (tomate, piment, oignon) : un détecteur YOLOv8n isole chaque fruit, puis un classifieur EfficientNetB3 diagnostique 9 états sanitaires. Une carte d'activation montre la zone qui motive la décision, calculée sans gradient. Aucune photo ne quitte le téléphone.",
    highlights: [
      '95,89 % d\'exactitude en test · mAP50 de 0,72 (détecteur)',
      'Inférence dans le navigateur : TF.js + ONNX Runtime Web (WASM SIMD)',
      'Refus de trancher sous le seuil de confiance et détection des images hors sujet',
      'PWA installable, carte des foyers (Leaflet), conseil détaillé via LLM (Groq), export PDF',
    ],
    stack: ['TensorFlow / Keras', 'YOLOv8', 'TensorFlow.js', 'ONNX', 'React', 'TypeScript', 'Tailwind', 'PWA', 'Supabase', 'Vercel'],
    categories: ['IA', 'Full-Stack'],
    repo: 'https://github.com/Delbrique/AgriCam',
    demo: 'https://agricam-iota.vercel.app',
    featured: true,
    accent: 'from-lime-400/30 via-emerald-500/10 to-transparent',
  },
  {
    name: 'Cuisine Africaine',
    period: '05/2025 – 06/2025',
    tagline: 'PWA familiale de recettes, planning et courses, avec assistant IA',
    description:
      "Application React pour organiser la cuisine en famille : recettes, favoris, planning des repas, liste de courses générée automatiquement, chat et assistant culinaire propulsé par Gemini. Refonte complète de l'UI/UX : design system, mode sombre, PWA hors ligne.",
    highlights: [
      'Assistant culinaire IA (Google Gemini)',
      'Firebase : authentification, base de données, Cloud Functions',
      'Service worker Workbox, application installable, export PDF',
    ],
    stack: ['React 19', 'Material UI', 'Firebase', 'Gemini API', 'Workbox', 'PWA'],
    categories: ['Full-Stack', 'IA'],
    repo: 'https://github.com/Delbrique/cuisine-africaine-app',
    demo: 'https://cuisineafricaineapp.web.app',
    featured: true,
    accent: 'from-orange-400/30 via-amber-500/10 to-transparent',
  },
  {
    name: 'IA-Lingala',
    tagline: 'Traduction poétique français → lingala qui respecte la métrique',
    description:
      "Moteur de traduction de cantiques qui préserve le nombre de syllabes pour que le texte traduit reste chantable : analyse des paroles, comptage syllabique, appariement métrique, lexique d'expressions et évaluation automatique.",
    stack: ['Python', 'NLP', 'SQLite', 'API REST'],
    categories: ['IA'],
    repo: 'https://github.com/Delbrique/IA-Traduction',
    accent: 'from-violet-400/30 via-fuchsia-500/10 to-transparent',
  },
  {
    name: 'Orientation IA',
    tagline: 'Recommandation de filières par moteur de règles et d\'intentions',
    description:
      'Application web qui oriente les élèves vers les filières adaptées : profils, moteur de règles, détection d\'intentions, historique des recommandations et authentification.',
    stack: ['FastAPI', 'SQLAlchemy', 'Jinja2', 'SQLite', 'Python'],
    categories: ['IA', 'Full-Stack'],
    repo: 'https://github.com/Delbrique/orientation_ia',
    accent: 'from-cyan-400/30 via-sky-500/10 to-transparent',
  },
  {
    name: 'LanguesPlus',
    period: '06/2025 – 07/2025',
    tagline: 'Apprendre le douala sur mobile',
    description:
      "Application mobile pour apprendre les langues camerounaises, centrée sur le douala : leçons, quiz, dictionnaire bilingue extrait automatiquement d'un PDF (script Python) et prononciation audio.",
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Python'],
    categories: ['Full-Stack'],
    repo: 'https://github.com/Delbrique/languesplus',
    accent: 'from-pink-400/30 via-rose-500/10 to-transparent',
  },
  {
    name: 'LFC Analytics',
    tagline: 'Plateforme d\'analyse de performances du Liverpool FC',
    description:
      'Application Flask : import de fichiers CSV/Excel, calcul des KPI et des séries temporelles avec pandas, historique SQLite et rapports HTML/PDF (versions domicile/extérieur et thème sombre).',
    stack: ['Flask', 'pandas', 'SQLite', 'ReportLab', 'JavaScript'],
    categories: ['Data', 'Full-Stack'],
    repo: 'https://github.com/Delbrique/lfc_dashboard',
    accent: 'from-red-400/30 via-red-500/10 to-transparent',
  },
  {
    name: 'Dashboards Streamlit',
    tagline: 'Visualisation interactive : données bancaires et Inde par État',
    description:
      'Deux tableaux de bord interactifs : analyse en temps réel d\'un jeu de données bancaire, et exploration géographique des indicateurs de l\'Inde par État avec des paramètres croisés.',
    stack: ['Streamlit', 'pandas', 'Plotly', 'Seaborn'],
    categories: ['Data'],
    repo: 'https://github.com/Delbrique/dashboard2105',
    accent: 'from-yellow-400/30 via-amber-500/10 to-transparent',
  },
  {
    name: 'n8n sur Render',
    tagline: 'Plateforme d\'automatisation auto-hébergée',
    description:
      'Déploiement conteneurisé de n8n sur Render (infrastructure as code avec render.yaml) pour orchestrer des workflows d\'automatisation et des agents.',
    stack: ['n8n', 'Docker', 'Render', 'IaC'],
    categories: ['DevOps'],
    repo: 'https://github.com/Delbrique/n8n-render',
    accent: 'from-teal-400/30 via-emerald-500/10 to-transparent',
  },
  {
    name: 'Docker × Flask',
    tagline: 'Conteneurisation d\'une API Python',
    description: 'API Flask conteneurisée : Dockerfile optimisé, gestion des dépendances, exécution reproductible.',
    stack: ['Docker', 'Flask', 'Python'],
    categories: ['DevOps'],
    repo: 'https://github.com/Delbrique/tp-docker-flask',
    accent: 'from-blue-400/30 via-indigo-500/10 to-transparent',
  },
  {
    name: 'Gestion scolaire',
    tagline: 'Application web de gestion d\'établissement',
    description: 'Application PHP/MySQL de gestion d\'école : élèves, classes, tables relationnelles et interface d\'administration.',
    stack: ['PHP', 'MySQL', 'HTML/CSS'],
    categories: ['Full-Stack'],
    repo: 'https://github.com/Delbrique/ecole2',
    accent: 'from-slate-300/20 via-slate-500/10 to-transparent',
  },
]

export const skillGroups = [
  {
    title: 'IA & Data Science',
    icon: 'brain',
    color: 'text-neon-lime',
    skills: ['Python', 'TensorFlow / Keras', 'YOLOv8 (Ultralytics)', 'scikit-learn', 'pandas / NumPy', 'NLP', 'Vision par ordinateur', 'XAI (CAM)', 'TensorFlow.js', 'ONNX Runtime', 'LLM APIs (Groq, Gemini)', 'Séries temporelles', 'Data mining'],
  },
  {
    title: 'Frontend & Mobile',
    icon: 'monitor',
    color: 'text-neon-cyan',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Vite', 'PWA / Workbox', 'React Native', 'Expo', 'Leaflet', 'UI/UX Design', 'Photoshop'],
  },
  {
    title: 'Backend & Bases de données',
    icon: 'database',
    color: 'text-neon-violet',
    skills: ['FastAPI', 'Flask', 'Node.js', 'PHP', 'SQLAlchemy', 'SQL Server', 'MySQL', 'PostgreSQL / Supabase', 'SQLite', 'Firebase', 'NoSQL', 'IndexedDB', 'C#'],
  },
  {
    title: 'DevOps, BI & Automatisation',
    icon: 'workflow',
    color: 'text-amber-300',
    skills: ['Docker', 'Git / GitHub', 'GitHub Actions', 'Vercel', 'Render', 'n8n', 'SSIS / Data Warehouse', 'Power BI', 'Streamlit', 'Cloud computing', 'Méthodes agiles'],
  },
]
