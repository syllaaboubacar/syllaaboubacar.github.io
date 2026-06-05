import { jsPDF } from "jspdf";

export type CVData = {
  fileName: string;
  profile: { name: string; role: string; bio: string };
  sections: {
    contact: string;
    experiences: string;
    competences: string;
    skills: string;
    projets: string;
    etudes: string;
    stack: string;
  };
  contact: { label: string; value: string }[];
  experiences: { role: string; company: string; period: string; desc: string }[];
  competences: { title: string; desc: string }[];
  skills: { name: string; items: string[] }[];
  projets: { name: string; desc: string; tags: string[] }[];
  etudes: { title: string; school: string; period: string }[];
};

export function downloadCV(data: CVData) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 48;
  let y = M;

  const ensure = (need: number) => {
    if (y + need > H - M) { doc.addPage(); y = M; }
  };
  const h1 = (t: string) => {
    ensure(28);
    doc.setFont("helvetica", "bold"); doc.setFontSize(22); doc.setTextColor(20);
    doc.text(t, M, y); y += 26;
  };
  const h2 = (t: string) => {
    ensure(30); y += 8;
    doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor(140, 90, 0);
    doc.text(t.toUpperCase(), M, y); y += 6;
    doc.setDrawColor(200); doc.line(M, y, W - M, y); y += 14;
  };
  const p = (t: string, bold = false, size = 10, color = 60) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size); doc.setTextColor(color);
    const lines = doc.splitTextToSize(t, W - M * 2) as string[];
    lines.forEach((ln) => { ensure(size + 4); doc.text(ln, M, y); y += size + 4; });
  };

  // Header
  h1(data.profile.name);
  p(data.profile.role, false, 11, 90); y += 4;
  p(data.profile.bio, false, 10, 80);

  h2(data.sections.contact);
  data.contact.forEach((c) => p(`${c.label} : ${c.value}`));

  h2(data.sections.experiences);
  data.experiences.forEach((e) => {
    p(`${e.role} — ${e.company}`, true, 11, 30);
    p(e.period, false, 9, 120);
    p(e.desc);
    y += 4;
  });

  h2(data.sections.competences);
  data.competences.forEach((c) => { p(c.title, true); p(c.desc); y += 2; });

  h2(data.sections.skills);
  data.skills.forEach((g) => { p(g.name, true); p(g.items.join(" · ")); y += 2; });

  h2(data.sections.projets);
  data.projets.forEach((pr) => {
    p(pr.name, true, 11, 30);
    p(pr.desc);
    p(`${data.sections.stack} : ${pr.tags.join(", ")}`, false, 9, 120);
    y += 4;
  });

  h2(data.sections.etudes);
  data.etudes.forEach((e) => {
    p(e.title, true);
    p(`${e.school} — ${e.period}`, false, 9, 120);
    y += 2;
  });

  doc.save(`${data.fileName}.pdf`);
}
