import { routing } from "@/app/i18n/routing";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("aboutTitle"), description: t("aboutDesc") };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("Projets");
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

        
        //Remove
        <Card>
          <CardHeader className="flex-row items-start gap-3 t-4">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="size-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base">Projets</CardTitle>
              <CardDescription>Projets académiques et professionnels</CardDescription>
            </div>
          </CardHeader>
        </Card>




      </div>    
    </>
  );
}
