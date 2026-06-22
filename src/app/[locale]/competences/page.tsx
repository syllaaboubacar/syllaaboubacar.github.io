import { routing } from "@/app/i18n/routing";
import { competences } from "@/components/db/data/competence";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("competenceTitle"), description: t("aboutDesc") };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function CompetencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Competences");
  //const locale = await getLocale();

  // Calcul du nombre total de compétences
  const totalItems = competences.reduce((acc, cat) => acc + cat.items.length, 0);
  
  return (
    <>
      <div className="container mx-auto max-w-7xl py-8 px-4 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-1.5">
      {/* Bande colorée dégradée */}
      <div className="relative w-full rounded-2xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground">{t("title")}</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          {t("subtitle")}
        </p>
        <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grille des catégories */} 
      <div className="grid md:grid-cols-2 gap-6">
        {competences.map((cat, idx) => (
          <div
            key={idx}
            className="group relative rounded-xl border bg-linear-to-r from-blue-50/60 to-sky-50/40 dark:from-blue-950/30 dark:to-sky-900/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Ligne colorée sur le côté gauche */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-primary/70 group-hover:bg-primary transition-colors" />

            <div className="ml-4">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-3xl">{cat.icon}</span>
                {t(`${cat.category}`)}
              </h3>

              <ul className="mt-4 space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{t(`${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}
