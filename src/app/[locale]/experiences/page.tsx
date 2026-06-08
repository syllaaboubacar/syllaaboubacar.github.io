import { routing } from "@/app/i18n/routing";
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
  console.log("Locale : ",locale)
  const t = await getTranslations("About");
  return (
    <section className="p-6">
      <h1>{t("title")}</h1>
      <p>{t("body")}</p>
    </section>
  );
}
