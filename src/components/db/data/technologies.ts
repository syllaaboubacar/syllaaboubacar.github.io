export interface Technology {
  name: string;
  icon?: string; // optionnel: emoji ou chemin d'icône
}

export interface TechnologyCategory {
  category: string;
  items: Technology[];
}

export const technologies: TechnologyCategory[] = [
  {
    category: "frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Shadcn/ui", icon: "🎭" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Oracle Forms", icon: "📋" },
      { name: "Oracle Report Builder", icon: "📊" },
    ],
  },
  {
    category: "backend",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Spring Boot", icon: "🌱" },
      { name: "PL/SQL", icon: "📜" },
    ],
  },
  {
    category: "db",
    items: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "⚡" },
      { name: "Oracle", icon: "🔶" },      
      { name: "Cassandra", icon: "🐦" },
    ],
  },
  {
    category: "tool",
    items: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "Maven", icon: "🏗️" },
      { name: "Gradle", icon: "🔧" },
      { name: "JUnit", icon: "🃏" },
    ],
  },
];