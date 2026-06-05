"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";
import { downloadCV, type CVData } from "./downloadCVdata";

export function DownloadCVButton() {
  const locale = useLocale(); // "fr" | "en"
  const t = useTranslations();
  // useMessages() retourne TOUT le JSON de la locale active
  // utile pour récupérer les tableaux complexes (experiences.items, etc.)
  const messages = useMessages() as any;

  const handleClick = () => {
    const data: CVData = {
      fileName: t("Common.cvFileName"),
      profile: {
        name: t("Profile.name"),
        role: t("Profile.role"),
        bio: t("Profile.bio"),
      },
      sections: {
        contact: t("Sections.contact"),
        experiences: t("Sections.experiences"),
        competences: t("Sections.competences"),
        skills: t("Sections.skills"),
        projets: t("Sections.projets"),
        etudes: t("Sections.etudes"),
        stack: t("Sections.stack"),
      },
      contact: [
        { label: t("Contact.email"), value: "jean.dupont@email.com" },
        { label: t("Contact.phone"), value: "+33 6 12 34 56 78" },
        { label: t("Contact.location"), value: t("Contact.locationValue") },
        { label: t("Contact.linkedin"), value: "/in/jeandupont" },
        { label: t("Contact.github"), value: "@jeandupont" },
      ],
      experiences: messages.Experiences.items,
      competences: messages.Competences.items,
      skills: messages.Skills.groups,
      projets: messages.Projets.items,
      etudes: messages.Etudes.items,
    };

    console.log("Génération CV en langue :", locale);
    downloadCV(data);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 hover:-translate-y-0.5"
    >
      {t("Common.downloadCV")}
    </button>
  );
}

export { CVData };
