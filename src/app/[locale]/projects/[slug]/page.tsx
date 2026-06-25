import { notFound } from "next/navigation";
import { projects } from "@/components/db/data/project";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, User, Code2, Calendar } from "lucide-react"; // ← Calendar ajouté
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link, routing } from "@/app/i18n/routing";
import ProjectImageSlider from "@/components/projects/slider";

// Génération statique des paramètres
export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
    }
  }
  return params;
}

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const t = await getTranslations("Projets");

  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-1.5">
      {/* Bande colorée dégradée */}
        <div className="relative w-full rounded-2xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground">{t("title")}</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            {t("subtitle")}
          </p>
          <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full" />
        </div>

      {/* Ligne : bouton retour (gauche) + année (droite) */}
      <div className="flex items-center justify-between mb-4">
        <Button asChild variant="ghost">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t("backToList")}
          </Link>
        </Button>
        {project.year && (
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
        )}
      </div>

      {/* Diaporama avec bordure fine et ombre */}
      <div className="aspect-video relative rounded-xl overflow-hidden bg-muted mb-8 border border-gray-200 shadow-lg">
        <ProjectImageSlider images={project.images} title={project.title} />
      </div>

      {/* Sections (inchangées) */}
      <div className="space-y-6 bg-linear-to-r from-blue-50/60 to-sky-50/40 dark:from-blue-950/30 dark:to-sky-900/20 p-6 rounded-xl">
        {project.presentation && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">{t("presentation")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t(`${project.presentation}`)}</p>
          </section>
        )}

        {project.architecture && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">{t("architecture")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t(`${project.architecture}`)}</p>
          </section>
        )}

        {project.defis && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">{t("defis")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t(`${project.defis}`)}</p>
          </section>
        )}

        {project.resultats && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">{t("resultats")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t(`${project.resultats}`)}</p>
          </section>
        )}

        {project.etatActuel && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">{t("etatActuel")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t(`${project.etatActuel}`)}</p>
          </section>
        )}

        {/* Technologies */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("technologies")}</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-secondary px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Type et participants */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("type")}</h2>
          <div className="flex items-center gap-2">
            {project.type === "personnel" ? (
              <User className="h-5 w-5 text-primary" />
            ) : (
              <Users className="h-5 w-5 text-primary" />
            )}
            <span>
              {project.type === "personnel"
                ? t("personal")
                : t("team")}
            </span>
            {project.type === "equipe" && project.participants && (
              <span className="text-muted-foreground">
                : {project.participants.join(", ")}
              </span>
            )}
          </div>
        </section>
      </div>

      {/* Bouton GitHub centré */}
      {project.github && (
        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href={project.github} target="_blank">
              <Code2 className="mr-2 h-5 w-5" /> {t("githubRepo")}
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}