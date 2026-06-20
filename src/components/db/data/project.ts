export interface Projectdata {
  slug: string;
  title: string;
  description: string; // courte description pour la carte
  longDescription?: string; // description détaillée (peut être utilisée pour la présentation)
  images: string[]; // au moins une image
  technologies: string[];
  link?: string;
  github?: string;
  year: number;
  type: 'personnel' | 'equipe';
  participants?: string[]; // si équipe, liste des noms
  presentation?: string;
  architecture?: string;
  defis?: string;
  resultats?: string;
  etatActuel?: string;
}

export const projects: Projectdata[] = [
  {
    slug: "portfolio",
    title: "Portfolio Next.js",
    description: "Un portfolio professionnel avec Next.js, Tailwind et i18n.",
    images: ["/images/projects/project1/ticketing-create-ticket.png", "/images/projects/project1/ticketing-customer.png","/images/projects/project1/ticketing-inbox.png","/images/projects/project1/ticketing-notifications.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "Framer Motion"],
    link: "https://aboubacar.dev",
    github: "https://github.com/syllaaboubacar/portfolio",
    year: 2024,
    type: "personnel",
    presentation: "Ce projet est un portfolio complet avec gestion multilingue...",
    architecture: "L'application utilise l'App Router de Next.js 15, des composants serveur, ...",
    defis: "Le principal défi était de gérer le contenu multilingue et le mode sombre/clair...",
    resultats: "Le portfolio est déployé et sert de vitrine professionnelle.",
    etatActuel: "Le projet est en maintenance évolutive."
  },
   {
    slug: "ticketing",
    title: "Portfolio Next.js",
    description: "Un portfolio professionnel avec Next.js, Tailwind et i18n.",
    images: ["/images/projects/project2/portfolio1.png", "/images/projects/project2/portfolio2.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "Framer Motion"],
    link: "https://aboubacar.dev",
    github: "https://github.com/syllaaboubacar/portfolio",
    year: 2024,
    type: "equipe",
    participants: ["Simplice","Cheick","Bourhane","Yalikha"],
    presentation: "Ce projet est un portfolio complet avec gestion multilingue...",
    architecture: "L'application utilise l'App Router de Next.js 15, des composants serveur, ...",
    defis: "Le principal défi était de gérer le contenu multilingue et le mode sombre/clair...",
    resultats: "Le portfolio est déployé et sert de vitrine professionnelle.",
    etatActuel: "Le projet est en maintenance évolutive."
  },
   {
    slug: "genome",
    title: "Portfolio Next.js",
    description: "Un portfolio professionnel avec Next.js, Tailwind et i18n.",
    images: ["/images/projects/project3/portfolio1.png", "/images/projects/project3/portfolio2.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "Framer Motion"],
    link: "https://aboubacar.dev",
    github: "https://github.com/syllaaboubacar/portfolio",
    year: 2024,
    type: "personnel",
    presentation: "Ce projet est un portfolio complet avec gestion multilingue...",
    architecture: "L'application utilise l'App Router de Next.js 15, des composants serveur, ...",
    defis: "Le principal défi était de gérer le contenu multilingue et le mode sombre/clair...",
    resultats: "Le portfolio est déployé et sert de vitrine professionnelle.",
    etatActuel: "Le projet est en maintenance évolutive."
  },
   {
    slug: "task",
    title: "Portfolio Next.js",
    description: "Un portfolio professionnel avec Next.js, Tailwind et i18n.",
    images: ["/images/projects/project4/portfolio1.png", "/images/projects/project4/portfolio2.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "Framer Motion"],
    link: "https://aboubacar.dev",
    github: "https://github.com/syllaaboubacar/portfolio",
    year: 2024,
    type: "equipe",
    participants: ["Ben","Ken","Miche","Benja"],
    presentation: "Ce projet est un portfolio complet avec gestion multilingue...",
    architecture: "L'application utilise l'App Router de Next.js 15, des composants serveur, ...",
    defis: "Le principal défi était de gérer le contenu multilingue et le mode sombre/clair...",
    resultats: "Le portfolio est déployé et sert de vitrine professionnelle.",
    etatActuel: "Le projet est en maintenance évolutive."
  },
];