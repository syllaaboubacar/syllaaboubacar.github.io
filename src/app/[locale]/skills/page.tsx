import { routing } from "@/app/i18n/routing";
import { skillsData } from "@/components/db/data/skill";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Level = 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';

const levelColors: Record<Level, string> = {
  Débutant: "bg-rose-400",
  Intermédiaire: "bg-yellow-500",
  Avancé: "bg-blue-500",
  Expert: "bg-emerald-500",
};

const levelLabels: Record<Level, string> = {
  Débutant: "Débutant",
  Intermédiaire: "Intermédiaire",
  Avancé: "Avancé",
  Expert: "Expert",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("skillTitle"), description: t("aboutDesc") };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function SkillsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("Skills");
  return (
    <>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 py-8 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-1.5">
      {/* Bannière avec dégradé animé */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 p-8 mb-12 text-center backdrop-blur-sm border border-white/10 shadow-xl">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          {t("title")}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        {/* 
        <div className="mt-6 flex justify-center gap-3">
          <span className="inline-block w-16 h-1 rounded-full bg-linear-to-r from-blue-400 to-purple-400" />
          <span className="inline-block w-8 h-1 rounded-full bg-linear-to-r from-purple-400 to-pink-400" />
        </div> 
        */}
        <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grille des catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {skillsData.map((cat) => (
          <div
            key={cat.category}
            className={`group relative rounded-2xl border border-white/10 bg-linear-to-br ${cat.color}  dark:from-blue-950/30 dark:to-sky-900/20 bg-opacity-50 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
          >
            {/* Icône et titre */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl drop-shadow-lg">{cat.icon}</span>
              <h2 className="text-xl font-semibold text-foreground">
                {t(`${cat.category}`)}
              </h2>
            </div>

            {/* Liste des compétences */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const color = levelColors[skill.level] || "bg-gray-400";
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/5 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-foreground border border-white/10 shadow-sm hover:bg-white/10 transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default"
                  >
                    {/* Indicateur de niveau (cercle coloré) */}
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${color} ring-2 ring-white/20`}
                      title={levelLabels[skill.level] || skill.level}
                    />
                    {skill.name}
                  </span>
                );
              })}
            </div>

            {/* Petit pied de carte (nombre de compétences) */}
            <div className="mt-4 text-xs text-muted-foreground/70 border-t border-white/5 pt-3 flex justify-between">
              <span>{cat.skills.length} {t("tech")}</span>
              <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                ✦
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
    
  );
}
