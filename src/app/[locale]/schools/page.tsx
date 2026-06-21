import { routing } from "@/app/i18n/routing";
import { etudes } from "@/components/db/data/etude";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("schoolTitle"), description: t("aboutDesc") };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function StudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("Etudes");
  const tl = await getTranslations("Etudes.study");
  return (
    <>
      <div className="container mx-auto max-w-6xl py-8 px-4">
        {/* Bande colorée dégradée */}
        <div className="relative w-full rounded-2xl bg-linear-to-r from-primary/40 via-primary/20 to-transparent p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground">{t("title")}</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            {t("subtitle")}
          </p>
          <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grille des études */}
        <div className="space-y-6">
          {etudes.map((etu, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Ligne colorée sur le côté gauche */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-primary/70 group-hover:bg-primary transition-colors" />

              <div className="ml-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      {tl(`${etu.degree}`)}
                    </h3>
                    <p className="text-muted-foreground">{tl(`${etu.school}`)}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-4 w-4" />
                    <span>{etu.year}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {tl(`${etu.description}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
}
