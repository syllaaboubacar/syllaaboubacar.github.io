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
              <Link target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" href="https://github.com/syllaaboubacar">
                                
                  <svg data-prefix="fab" data-icon="square-github" className="svg-inline--fa fa-square-github h-12 w-12 rounded-full  text-primary" role="img" viewBox="0 0 448 512" aria-hidden="true">
                      <path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM265.8 407.7c0-1.8 0-6 .1-11.6 .1-11.4 .1-28.8 .1-43.7 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-26.6-7.5-56.6-7.5-83.2 0 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 9 .1 21.7 .1 30.6 0 4.8 .1 8.6 .1 10 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4 0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9 1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6-.4 .9-1.7 1.1-2.8 .4z">
                      </path>
                  </svg>

              </Link>

              <Link target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" href="https://www.linkedin.com/in/sylla-aboubacar-ba033312b">
                  <svg data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin h-12 w-12 rounded-full text-primary" role="img" viewBox="0 0 448 512" aria-hidden="true">
                      <path fill="currentColor" d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z">
                      </path>
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
