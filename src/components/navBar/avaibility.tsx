"use client";

import { data, DataText } from "@/data/contentText";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import ViewsCounter from "../countViews/visitorCounter";
import { Eye } from "lucide-react";

export function Avaibility() {
  const tFilAriane = useTranslations('navigationBar');

  return (
    <Button className="rounded-lg text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
      {/* Indicateur de disponibilité (point vert) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-dot w-3 h-3 text-primary"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" fill="white" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="green" stroke="green" strokeWidth="4" />
      </svg>

      {/* Texte de disponibilité (ex: "Disponible") */}
      <span>{tFilAriane(data.navbarItems.avaibility)}</span>

      {/* Séparateur visuel (optionnel) */}
      <span className="mx-1 text-gray-400">|</span>

      {/* Compteur de visites avec l'icône œil */}
      <span className="flex items-center gap-1.5 text-sm">
        <Eye className="h-3.5 w-3.5" />
        <ViewsCounter />
      </span>
    </Button>
  );
}