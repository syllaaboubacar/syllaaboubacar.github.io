export interface Skill {
  name: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "frontend",
    icon: "🎨",
    color: "from-blue-50/60 to-sky-50/40",
    skills: [
      { name: "Oracle Forms", level: "Avancé" },
      { name: "Oracle Report Builder", level: "Avancé" },
      { name: "React.js", level: "Avancé" },
      { name: "Next.js", level: "Avancé" },
      { name: "TypeScript", level: "Avancé" },
      { name: "Tailwind CSS", level: "Avancé" },
      { name: "Shadcn/ui", level: "Avancé" },
    ],
  },
  {
    category: "backend",
    icon: "⚙️",
    color: "from-blue-50/60 to-sky-50/40",
    skills: [
      { name: "Java Sprint Boot", level: "Avancé" },
      { name: "Oracle PL/SQL", level: "Avancé" },
      { name: "API REST", level: "Avancé" },
      { name: "API SOAP", level: "Avancé" },
      { name: "PHP", level: "Intermédiaire" },
      { name: "Python", level: "Avancé" },
    ],
  },
  {
    category: "db",
    icon: "🗄️",
    color: "from-blue-50/60 to-sky-50/40",
    skills: [
      { name: "Oracle", level: "Avancé" },
      { name: "PostgreSQL", level: "Avancé" },
      { name: "MySQL", level: "Avancé" },
      { name: "MongoDB", level: "Intermédiaire" },
      { name: "Cassandra", level: "Intermédiaire" },
    ],
  },
  {
    category: "tool",
    icon: "🔧",
    color: "from-blue-50/60 to-sky-50/40",
    skills: [
      { name: "Sql developer", level: "Avancé" },
      { name: "VS Code", level: "Avancé" },
      { name: "IntelliJ", level: "Avancé" },
      { name: "Maven", level: "Avancé" },
      { name: "Git/GitHub", level: "Avancé" },
      { name: "Docker", level: "Intermédiaire" },
      { name: "Postman", level: "Avancé" },
    ],
  },
];