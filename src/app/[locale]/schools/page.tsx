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

export default async function StudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("About");
  return (
    <>
      <Card>
        <CardHeader className="flex-row items-start gap-3 t-4">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="size-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-base">Etudes</CardTitle>
            <CardDescription> Etudes académiques </CardDescription>
          </div>
        </CardHeader>
        
        <section className="p-6">
          <h1>{t("title")}</h1>
          <p>{t("body")}</p>
        </section>

      </Card>
    
    </>
  );
}
