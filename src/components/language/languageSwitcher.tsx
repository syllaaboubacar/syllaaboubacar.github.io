"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { setLocale } from "@/app/actions/setLocale";
import { locales, type Locale } from "@/app/i18n/config";

export function LanguageSwitcher() {
  const current = useLocale() as Locale;
  const t = useTranslations("Language");
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2 text-sm" aria-label={t("label")}>
      {locales.map((lng) => (
        <button
          key={lng}
          disabled={pending || lng === current}
          onClick={() => startTransition(() => setLocale(lng))}
          className={lng === current ? "font-semibold" : "opacity-70 hover:opacity-100"}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
