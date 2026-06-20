export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Competence {
  category: string;
  items: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  longDescription?: string;
  link?: string;
  github?: string;
}

export interface Etude {
  degree: string;
  school: string;
  year: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: 'Développeur Full Stack',
    company: 'TechCorp',
    period: '2022 - Présent',
    description: 'Développement d’applications React/Next.js, API Node.js, optimisation des performances.',
  },
  {
    title: 'Stagiaire Développeur',
    company: 'Startup Innov',
    period: '2021 - 2022',
    description: 'Intégration de maquettes, création de composants réutilisables, mise en place de tests unitaires.',
  },
];

export const competences: Competence[] = [
  { category: 'Langages', items: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Outils', items: ['Git', 'Docker', 'Vercel', 'GitHub Actions'] },
];

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX Design', level: 70 },
];

export const projects: Project[] = [
  {
    slug: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif avec graphiques en temps réel.',
    technologies: ['React', 'Chart.js', 'Tailwind'],
    longDescription: 'Application complète de visualisation de données avec filtres dynamiques et export PDF.',
    link: 'https://exemple.com/demo',
    github: 'https://github.com/username/dashboard',
  },
  {
    slug: 'ecommerce-next',
    title: 'Boutique E-commerce',
    description: 'Site e-commerce complet avec panier et paiement Stripe.',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    longDescription: 'Intégration de Stripe, gestion de stock, authentification et pages produits dynamiques.',
    github: 'https://github.com/username/ecommerce',
  },
];

export const etudes: Etude[] = [
  {
    degree: 'Master en Informatique',
    school: 'Université Paris-Saclay',
    year: '2020 - 2022',
    description: 'Spécialisation en développement web et cloud computing.',
  },
  {
    degree: 'Licence Informatique',
    school: 'Université de Lyon',
    year: '2017 - 2020',
    description: 'Fondamentaux de l’algorithmique, base de données et génie logiciel.',
  },
];