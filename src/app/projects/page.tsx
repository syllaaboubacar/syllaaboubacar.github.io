import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("aboutTitle"), description: t("aboutDesc") };
}

export default async function ProjectsPage() {
  const t = await getTranslations("About");
  return (
    <section className="p-6">
      <h1>{t("title")}</h1>
      <p>{t("body")}</p>
    </section>
  );
}
