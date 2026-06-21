import { routing } from "@/app/i18n/routing";
import { experiences } from "@/components/db/data/experience";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("aboutTitle"), description: t("aboutDesc") };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("Experiences");
  const tl = await getTranslations("Experiences.jobs");

  // Calcul des années d'expérience
  const totalYears = experiences.reduce((acc, exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate === "Présent" ? new Date() : new Date(exp.endDate);
    const years = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return acc + (years > 0 ? years : 0);
  }, 0);
  const totalYearsRounded = Math.round(totalYears);

  return (
    <>
      <div className="container mx-auto max-w-6xl py-8 px-4 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-1.5">
        {/* Bande colorée dégradée avec titre et sous-titre */}
        <div className="relative w-full rounded-2xl bg-linear-to-r from-primary/40 via-primary/20 to-transparent p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground">{t("title")}</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            {totalYearsRounded > 0 ? `${totalYearsRounded} ${t("subtitleExp")}` : `${t("subtitlePar")}`}
          </p>
          <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grille des expériences */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Ligne colorée sur le côté gauche (accent) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-primary/70 group-hover:bg-primary transition-colors" />
              
              <div className="ml-4">
                {/* En-tête de la carte : titre, entreprise, date */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {tl(`${exp.title}`)}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {tl(`${exp.company}`)}
                      {exp.location && (
                        <>
                          <span className="mx-1">•</span>
                          <MapPin className="h-4 w-4" />
                          {tl(`${exp.location}`)}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {tl(`${exp.description}`)}
                </p>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
}
