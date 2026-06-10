/**
 * Fichier de contenu textuel pour le portfolio de Aboubacar SYLLA.
 * Contient tous les textes utilisés dans les différentes pages du site.
 * Permet une gestion centralisée du contenu et facilite les modifications futures.
 */

import {
  BookOpen,
  Bot,
  Briefcase,
  Code2,
  Command,
  FolderGit2,
  Frame,
  GraduationCap,
  LifeBuoy,
  Mail,
  Map,
  PieChart,
  Send,
  Settings2,
  Sparkles,
  SquareTerminal,
  User,
} from "lucide-react"

export const DataText = {
    home: {
        myName: "Aboubacar SYLLA",
        myLocation: "Liège, Belgique",
        myAvailability: "Disponible pour un stage à partir de février 2027",

        aboutMe: `
            Étudiant en développement d'applications, passionné par la conception de logiciels modernes et les technologies web.
            J’aime concevoir des applications robustes, performantes et centrées sur l’expérience utilisateur.
            Curieux et rigoureux, je cherche constamment à approfondir mes compétences à travers des projets concrets et collaboratifs.
        `,

        intention:
            "Je recherche un stage de 4 à 6 mois à partir de février 2027, en Belgique (Liège/Bruxelles) ou en France. Mon objectif est d’intégrer une équipe de développement afin de contribuer à des projets concrets et d’évoluer dans un environnement professionnel stimulant.",

        stackTitle: "Technologies principales",

        experiences: {
            title: "Expérience",
            content: "Projets académiques, personnels et expériences professionnelles"
        },

        education: {
            title: "Formation",
            content: "Bachelier en développement d'applications — HELMo"
        },

        passions: {
            title: "Centres d’intérêt",
            content: "Développement logiciel, architecture applicative et musique (guitare)"
        },

        citation:
            "« Concevoir des applications utiles, modernes et durables. »",

        action: "Discutons ensemble",
    },

    skills: {
        title: "Compétences",
        content:
            "Technologies, frameworks et outils utilisés dans mes différents projets."
    },

    projects: {
        title: "Projets",
        content:
            "Une sélection de projets personnels, académiques et collaboratifs.",

        actions: {
            demo: "Démo",
            code: "Code source",

            repos: {
                frontend: "Dépôt github Frontend",
                backend: "Dépôt github Backend",
                mono: "Dépôt github"
            }
        },

        noProjects:
            "Aucun projet disponible pour le moment.",

        projectTypes: {
            personal: "Projet personnel",
            team: "Projet en équipe",
            academic: "Projet académique"
        },

        slug: {}
    },

    experiences: {
        title: "Expériences",
        content:
            "Parcours professionnel, responsabilités et expériences techniques."
    },

    contact: {
        title: "Contact",
        content:
            "N’hésitez pas à me contacter pour toute opportunité de stage, collaboration ou échange professionnel.",

        email: {
            title: "Email",
            mail: "aboubacar.sylla54@gmail.com",
            description:
                "Ouvrir votre client de messagerie"
        },

        linkedin: {
            title: "LinkedIn",
            profile: "Kolomou Simplice",
            description:
                "Profil professionnel et réseau"
        },

        github: {
            title: "GitHub",
            profile: "simplicekolomou",
            description:
                "Projets et contributions"
        },

        facebook: {
            title: "Facebook",
            profile: "Aboubacar SYLLA",
            description:
                "Profil personnel"
        },

        location: {
            title: "Localisation",
            content: "Liège, Belgique",
            description:
                "Mobile en Belgique et en France"
        },

        phone: {
            title: "Téléphone",
            content: "+32 484 755 406",
            description:
                "Disponible pour un échange professionnel"
        },

        conclusion:
            "Au plaisir d’échanger avec vous."
    },

    navItems: {
        profilName: "Aboubacar SYLLA",
        multiLang: "Changer de langue",
        themeChange: "Changer de thème",
        avaibility: "Disponible",
        downloadCv: "Télécharger le CV",
        
    },

    sideItems: {
        title: "Menu",
        about: {label:"À propos", href:"/"},
        contact: {label:"Contact", href:"/contacts"},
        experiences: {label:"Expériences", href:"/Experiences"},
        capacity: {label:"Compétences", href:"/Competences"},
        skills: {label:"Skills", href:"/Skills"},
        projects: {label:"Projets", href:"/Projects"},
        school: {label:"Études", href:"/Projects"}
    },

    footer: {
        me: "Aboubacar SYLLA", 

        aboutMe: "aboutMe",


        followMe: "followMe",

        copyright:
            `© ${new Date().getFullYear()} Aboubacar SYLLA. `,
        
        copyrightLaw:"copyrightLaw",

        comment: "comment"
    }
}




export const data = {
  user: {
    name: "Aboubacar Sylla",
    email: "aboubacar.sylla54@gmail.com",
    avatar: "/avatars/shadcn.jpeg",
  },
  navbarItems: {
    avaibility: "availability",
    downloadCv: "downloadCv",        
  },
  navMain: [
    {
      title: "menu",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "about",
          url: "/",
          icon: User,
          isActive: true,
        },
        {
          title: "experience",
          url: "/experiences",
          icon: Briefcase,
        },
        {
          title: "competence",
          url: "/competences",
          icon: Sparkles,
        },
        {
          title: "project",
          url: "/projects",
          icon: FolderGit2,
        },
        {
          title: "skill",
          url: "/skills",
          icon: Code2,
        },
        {
          title: "school",
          url: "/schools",
          icon: GraduationCap,
        },
        {
          title: "contact",
          url: "/contacts",
          icon: Mail,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "support",
      url: "/competences",
      icon: LifeBuoy,
    },
    {
      title: "feedback",
      url: "/competences",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "designEngineering",
      url: "/competences",
      icon: Frame,
    },
    {
      name: "salesMarketing",
      url: "/competences",
      icon: PieChart,
    },
    {
      name: "travel",
      url: "/competences",
      icon: Map,
    },
  ],
}


//-------------------------------------------------------




export const dataduplicate = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "menu",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "about",
          url: "/",
          icon: User,
          isActive: true,
        },
        {
          title: "experience",
          url: "/experiences",
          icon: Briefcase,
        },
        {
          title: "competence",
          url: "/competences",
          icon: Sparkles,
        },
        {
          title: "project",
          url: "/projects",
          icon: FolderGit2,
        },
        {
          title: "skill",
          url: "/skills",
          icon: Code2,
        },
        {
          title: "school",
          url: "/studies",
          icon: GraduationCap,
        },
        {
          title: "contact",
          url: "/contacts",
          icon: Mail,
        },
      ],
    },
    {
      title: "models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "genesis",
          url: "/competences",
        },
        {
          title: "explorer",
          url: "/competences",
          icon: Bot,
        },
        {
          title: "quantum",
          url: "/competences",
          icon: Bot,
        },
      ],
    },
    {
      title: "documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "introduction",
          url: "/competences",
          icon: BookOpen,
        },
        {
          title: "getStarted",
          url: "/competences",
          icon: BookOpen,
        },
        {
          title: "cutorials",
          url: "/competences",
          icon: BookOpen,
        },
        {
          title: "changelog",
          url: "/competences",
          icon: BookOpen,
        },
      ],
    },
    {
      title: "settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "general",
          url: "/competences",
          icon: Settings2,
        },
        {
          title: "team",
          url: "/competences",
          icon: Settings2,
        },
        {
          title: "billing",
          url: "/competences",
          icon: Settings2,
        },
        {
          title: "limits",
          url: "/competences",
          icon: Settings2,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "support",
      url: "/competences",
      icon: LifeBuoy,
    },
    {
      title: "feedback",
      url: "/competences",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "designEngineering",
      url: "/competences",
      icon: Frame,
    },
    {
      name: "salesMarketing",
      url: "/competences",
      icon: PieChart,
    },
    {
      name: "travel",
      url: "/competences",
      icon: Map,
    },
  ],
}