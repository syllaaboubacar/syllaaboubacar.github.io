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
    slug: "Portfolio-project",
    title: "titleFolio",
    description: "descriptionFolio",
    longDescription: "longDescriptionFolio",
    images: ["/images/projects/project1/ticketing-create-ticket.png", "/images/projects/project1/ticketing-customer.png","/images/projects/project1/ticketing-inbox.png","/images/projects/project1/ticketing-notifications.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "React","Next-themes"],
    link: "https://aboubacar.dev",
    github: "https://github.com/syllaaboubacar/portfolio",
    year: 2026,
    type: "personnel",
    presentation: "presentationFolio",
    architecture: "architectureFolio",
    defis: "defisFolio",
    resultats: "resultatsFolio",
    etatActuel: "etatActuelFolio"
  },
   {
    slug: "Ticketing-project",
    title: "titleTicket",
    description: "descriptionTicket",
    longDescription:"longDescriptionTicket",
    images: ["/images/projects/project2/portfolio2.png","/images/projects/project2/ticketing-create-ticket.png","/images/projects/project2/ticketing-customer.png","/images/projects/project2/ticketing-inbox.png","/images/projects/project2/ticketing-notifications.png","/images/projects/project2/ticketing-presentation.png","/images/projects/project2/ticketing-team.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "Spring-boot","React","RTK-query","Hibernate","Postgresql","Zod","React-hook-form", "Git"],
    link: "https://aboubacar.dev",
    github: "https://github.com/syllaaboubacar/portfolio",
    year: 2026,
    type: "equipe",
    participants: ["Aboubacar Sylla","Simplice kolomou"],
    presentation: "presentationTicket",
    architecture: "architectureTicket",
    defis: "defisTicket",
    resultats: "resultatsTicket",
    etatActuel: "etatActuelTicket"
  },
   {
    slug: "Genome-project",
    title: "titleTpe",
    description: "descriptionTpe",
    longDescription: "longDescriptionTpe",
    images: ["/images/projects/project3/areaF.png","/images/projects/project3/gigwa.png","chrom.png","/images/projects/project3/Jbrows.png","/images/projects/project3/lineF.png","/images/projects/project3/outils.png","/images/projects/project3/pieF.png","/images/projects/project3/sniplay.png"], // pour le slider
    technologies: ["Python", "Flask", "Jquery", "Javascript", "3D.js", "HighCharts"],
    link: "https://aboubacar.dev",
    github: "https://github.com/syllaaboubacar/portfolio",
    year: 2017,
    type: "personnel",
    presentation: "presentationTpe",
    architecture: "architectureTpe",
    defis: "defisTpe",
    resultats: "resultatsTpe",
    etatActuel: "etatActuelTpe"
  },
   {
    slug: "Task-project",
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