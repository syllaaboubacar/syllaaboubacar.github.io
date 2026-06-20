export interface Skill {
  name: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Avancé" },
      { name: "TypeScript", level: "Avancé" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Shadcn/ui", level: "Avancé" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "Avancé" },
      { name: "Express", level: "Intermédiaire" },
      { name: "Python", level: "Intermédiaire" },
      { name: "Django", level: "Débutant" },
    ],
  },
  {
    category: "Base de données",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: "Avancé" },
      { name: "MongoDB", level: "Intermédiaire" },
      { name: "MySQL", level: "Intermédiaire" },
    ],
  },
  {
    category: "DevOps & Outils",
    icon: "🔧",
    skills: [
      { name: "Git", level: "Avancé" },
      { name: "Docker", level: "Intermédiaire" },
      { name: "GitHub Actions", level: "Débutant" },
    ],
  },
];