import { Link, routing } from "@/app/i18n/routing";
import { ContactForm } from "@/components/db/messageForm/ContactForm";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "@dev.icons/react";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("aboutTitle"), description: t("aboutDesc") };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("Contact");
  const tr = await getTranslations("Contact.form");
  return (
    <>
      
      <div className="container mx-auto max-w-6xl py-8 px-4 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-1.5">
      {/* Bande colorée dégradée comme les autres pages */}
      <div className="relative w-full rounded-2xl bg-linear-to-r from-primary/40 via-primary/20 to-transparent p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground">{t('title')}</h1>
        <p className="text-muted-foreground mt-2 text-lg">{t('subtitle')}</p>
        <div className="w-24 h-1 bg-primary/70 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Coordonnées - chaque élément dans une carte */}
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">{t('email')}</h3>
                <Link href="mailto:contact@aboubacar.dev" className="text-muted-foreground hover:text-primary">
                  aboubacar.sylla54@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">{t('phone')}</h3>
                <p className="text-muted-foreground">+32 484 755 406 </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">{t('location')}</h3>
                <p className="text-muted-foreground">{t('locationValue')}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex gap-4 pt-2 justify-center items-center">
              <Link
                href="https://github.com/syllaaboubacar"
                target="_blank"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
                aria-label="GitHub"
              >
                <Github className="h-10 w-10" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/sylla-aboubacar-ba033312b"
              >
                <svg
                  data-prefix="fab"
                  data-icon="linkedin"
                  className="h-10 w-10"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Formulaire dans une carte */}
        <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-xl font-semibold mb-4">{tr("title")}</h2>
          <ContactForm /> 
        </div>
      </div>
    </div>

    
    </>
  );
}
