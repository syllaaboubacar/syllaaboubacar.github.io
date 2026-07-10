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
    slug: "portfolios",
    title: "titleFolio",
    description: "descriptionFolio",
    longDescription: "longDescriptionFolio",
    images: ["/images/projects/project1/folio1.png", "/images/projects/project1/folio.png","/images/projects/project1/folio2.png","/images/projects/project1/folio3.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "React","Next-themes"],
    link: "https://syllaaboubacar.github.io",
    github: "https://github.com/syllaaboubacar/syllaaboubacar.github.io",
    year: 2026,
    type: "personnel",
    presentation: "presentationFolio",
    architecture: "architectureFolio",
    defis: "defisFolio",
    resultats: "resultatsFolio",
    etatActuel: "etatActuelFolio"
  },
   {
    slug: "tickets",
    title: "titleTicket",
    description: "descriptionTicket",
    longDescription:"longDescriptionTicket",
    images: ["/images/projects/project2/ticketing-presentation.png","/images/projects/project2/ticketing-notifications.png","/images/projects/project2/ticketing-monitoring.png","/images/projects/project2/ticketing-support.png","/images/projects/project2/ticketing-inbox.png","/images/projects/project2/ticketing-customer.png","/images/projects/project2/ticketing-create-ticket.png","/images/projects/project2/ticketing-team.png","/images/projects/project2/ticketing-user-ticket.png"], // pour le slider
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "next-intl", "Shadcn/ui", "Spring Boot","React","RTK-query","Hibernate","PostgreSQL","Zod","React-hook-form", "Git"],
    link: "https://syasko-tickecting.vercel.app",
    github: "https://github.com/simplicekolomou/syasko-tickecting-front",
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
    slug: "searchs",
    title: "titleSearch",
    description: "descriptionSearch",
    longDescription: "longDescriptionSearch",
    images: ["/images/projects/project4/aproch.PNG","/images/projects/project4/ok.png", "/images/projects/project4/archi.png", "/images/projects/project4/ASST.PNG", "/images/projects/project4/AST.PNG", "/images/projects/project4/ORMM.PNG", "/images/projects/project4/random.png", "/images/projects/project4/shema.PNG", "/images/projects/project4/tace.PNG"], // pour le slider
    technologies: ["Java", "Python", "Spring Boot", "AspectJ", "JavaScript", "MongoDB","SQL","Antlr","NoSql"],
    link: "#",
    github: "https://github.com/syllaaboubacar/Hybrid_system_monitoring_and_queries_extraction",
    year: 2021,
    type: "personnel",
    presentation: "presentationSearch",
    architecture: "architectureSearch",
    defis: "defisSearch",
    resultats: "resultatsSearch",
    etatActuel: "etatActuelSearch"
  },
   {
    slug: "genomes",
    title: "titleTpe",
    description: "descriptionTpe",
    longDescription: "longDescriptionTpe",
    images: ["/images/projects/project3/areaF.png","/images/projects/project3/gigwa.png","/images/projects/project3/chrom.png","/images/projects/project3/Jbrows.png","/images/projects/project3/lineF.png","/images/projects/project3/outils.png","/images/projects/project3/pieF.png","/images/projects/project3/sniplay.png"], // pour le slider
    technologies: ["Python", "Flask", "Jquery", "Javascript", "3D.js", "HighCharts", "Java","Spring Boot"],
    link: "#",
    github: "https://github.com/syllaaboubacar/D3_Data_visualization_live",
    year: 2017,
    type: "personnel",
    presentation: "presentationTpe",
    architecture: "architectureTpe",
    defis: "defisTpe",
    resultats: "resultatsTpe",
    etatActuel: "etatActuelTpe"
  }
];