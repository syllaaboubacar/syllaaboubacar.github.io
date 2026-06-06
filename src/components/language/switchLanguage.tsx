"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function SwitchLanguage() {
  const locale = useLocale(); // string : 'fr' ou 'en'
  console.log("Le locale : ", locale);
  const router = useRouter();
  const pathname = usePathname(); // ex: '/fr/a-propos'

  const toggleLocale = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    // Remplace l'ancienne locale dans le chemin
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    console.log("Changement de langue");
  };

  return (
    <Button variant="ghost" onClick={toggleLocale}>
      {locale === "fr" ? (
        <span className="h-5 w-5 transition-all">EN</span>
      ) : (
        <span className="h-5 w-5 transition-all">FR</span>
      )}
    </Button>
  );
}