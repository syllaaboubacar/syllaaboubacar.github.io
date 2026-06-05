import jsPDF from "jspdf";

export const profile = {
  name: "Aboubacar SYLLA",
  role: "Développeur Full-Stack · Spécialisé React & Node.js",
  initials: "JD",
  status: "Disponible pour missions",
  bio: "Je conçois des interfaces soignées et des applications web performantes. Passionné par le détail, l'accessibilité et l'expérience utilisateur.",
}; 

export const contact = [
  { label: "Email", value: "jean.dupont@email.com", href: "mailto:jean.dupont@email.com" },
  { label: "Téléphone", value: "+33 6 12 34 56 78", href: "tel:+33612345678" },
  { label: "Localisation", value: "Paris, France" },
  { label: "LinkedIn", value: "/in/jeandupont", href: "#" },
  { label: "GitHub", value: "@jeandupont", href: "#" },
];

export const experiences = [
  { role: "Lead Développeur Front-End", company: "Acme Corp", period: "2023 — Aujourd'hui",
    desc: "Refonte de la plateforme SaaS, mise en place du design system, encadrement d'une équipe de 4 développeurs." },
  { role: "Développeur Full-Stack", company: "Studio Numérique", period: "2021 — 2023",
    desc: "Développement d'applications React / Node.js pour des clients e-commerce et médias." },
  { role: "Développeur Web Junior", company: "Webagency", period: "2019 — 2021",
    desc: "Intégration de sites vitrines, maintenance et optimisation des performances." },
];

export const competences = [
  { title: "Architecture Front-End", desc: "Conception d'applications scalables et performantes." },
  { title: "Design System", desc: "Création de bibliothèques de composants cohérentes." },
  { title: "Accessibilité", desc: "Respect des normes WCAG et UX inclusive." },
  { title: "Performance Web", desc: "Optimisation Core Web Vitals et SEO technique." },
];

export const skills = [
  { name: "Langages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { name: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "TanStack"] },
  { name: "Outils", items: ["Git", "Docker", "Figma", "Vite", "Tailwind CSS"] },
  { name: "Bases de données", items: ["PostgreSQL", "MongoDB", "Redis"] },
];

export const projets = [
  { name: "Plateforme E-Learning", desc: "Application LMS avec parcours interactifs et certifications.", tags: ["Next.js", "Postgres", "Stripe"] },
  { name: "Dashboard Analytics", desc: "Tableau de bord temps-réel pour suivi de KPI métier.", tags: ["React", "WebSocket", "D3"] },
  { name: "Marketplace Artisanale", desc: "Place de marché pour artisans locaux, paiements intégrés.", tags: ["TanStack", "Supabase"] },
  { name: "App Mobile Fitness", desc: "Suivi d'entraînement et progression personnalisée.", tags: ["React Native", "Node"] },
];

export const etudes = [
  { title: "Master Informatique — Génie Logiciel", school: "Université Paris-Saclay", period: "2017 — 2019" },
  { title: "Licence Informatique", school: "Université de Lyon", period: "2014 — 2017" },
  { title: "Baccalauréat Scientifique — Mention Bien", school: "Lycée Henri IV", period: "2014" },
];

export function downloadCV() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 48;
  let y = M;

  const ensure = (need: number) => {
    if (y + need > H - M) { doc.addPage(); y = M; }
  };
  const h1 = (t: string) => { ensure(28); doc.setFont("helvetica", "bold"); doc.setFontSize(22); doc.setTextColor(20); doc.text(t, M, y); y += 26; };
  const h2 = (t: string) => {
    ensure(30); y += 8;
    doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor(140, 90, 0);
    doc.text(t.toUpperCase(), M, y); y += 6;
    doc.setDrawColor(200); doc.line(M, y, W - M, y); y += 14;
  };
  const p = (t: string, bold = false, size = 10, color = 60) => {
    doc.setFont("helvetica", bold ? "bold" : "normal"); doc.setFontSize(size); doc.setTextColor(color);
    const lines = doc.splitTextToSize(t, W - M * 2) as string[];
    lines.forEach((ln) => { ensure(size + 4); doc.text(ln, M, y); y += size + 4; });
  };

  // Header
  h1(profile.name);
  p(profile.role, false, 11, 90); y += 4;
  p(profile.bio, false, 10, 80);

  h2("Contact");
  contact.forEach((c) => p(`${c.label} : ${c.value}`));

  h2("Expériences");
  experiences.forEach((e) => {
    p(`${e.role} — ${e.company}`, true, 11, 30);
    p(e.period, false, 9, 120);
    p(e.desc);
    y += 4;
  });

  h2("Compétences");
  competences.forEach((c) => { p(c.title, true); p(c.desc); y += 2; });

  h2("Skills");
  skills.forEach((g) => { p(g.name, true); p(g.items.join(" · ")); y += 2; });

  h2("Projets");
  projets.forEach((pr) => {
    p(pr.name, true, 11, 30);
    p(pr.desc);
    p(`Stack : ${pr.tags.join(", ")}`, false, 9, 120);
    y += 4;
  });

  h2("Études");
  etudes.forEach((e) => {
    p(e.title, true);
    p(`${e.school} — ${e.period}`, false, 9, 120);
    y += 2;
  });

  doc.save(`CV-${profile.name.replace(/\s+/g, "-")}.pdf`);
}
