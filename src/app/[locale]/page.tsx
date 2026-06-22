import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Briefcase, Calendar, FolderGit2, Mail, MapPin } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link,routing } from "../i18n/routing";
import { Button } from "@/components/ui/button";
import { profileData } from "@/components/db/data/profile";
import { AvailabilityBadge } from "@/components/avaibility/avaibility";
import DownloadCVButton from "@/components/downloadCv/DownloadCVButton";
import { technologies } from "@/components/db/data/technologies";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return { title: t("aboutTitle"), description: t("aboutDesc") };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("Profile");
  const tl = await getTranslations("Technologies");
  return (
      <>
      
      <div className="container mx-auto max-w-7xl py-8 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-1.5">
      {/* Bande horizontale colorée */}
      <div className="relative h-48 w-full rounded-2xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 mb-8">
        <div className="absolute -bottom-16 left-8 flex gap-6 items-end">
          <div className="relative w-32 h-32 rounded-full border-4 border-background bg-background overflow-hidden shadow-xl">
            <div className="relative w-32 h-32 rounded-full border-4 border-background bg-background overflow-hidden shadow-xl items-center justify-center">
              <img src={profileData.avatarUrl} alt={profileData.name} className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="mb-2  pt-3">
            <h1 className="text-4xl font-bold">{profileData.name}</h1>
            <p className="text-xl text-muted-foreground">{t(`${profileData.title}`)}</p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="mt-20 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("welcome")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t(`${profileData.description}`)}
            </p>
          </div>

          <AvailabilityBadge available={profileData.availability} />

          <div className="flex flex-wrap gap-3">
            <DownloadCVButton/>
            <Button variant="outline" asChild>
              <Link href="/contacts">
                <Mail className="mr-2 h-4 w-4" /> {t('contact')}
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> {t('bottomTitle')}
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border shadow-sm">
          <h3 className="font-semibold text-lg mb-2">📬 {t('contact')}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {t('contactDesc')}
          </p>
          <div className="space-y-2">
            <p><strong>{t('email')} :</strong> {profileData.social.email}</p>
            <p><strong>{t('phone')} :</strong> +32 484 755 406 </p>
            <div className="flex gap-3 pt-2">
              
              <Link target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" href={profileData.social.github}>
                                
                  <svg data-prefix="fab" data-icon="square-github" className="svg-inline--fa fa-square-github h-8 w-8 rounded-full text-primary" role="img" viewBox="0 0 448 512" aria-hidden="true">
                      <path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM265.8 407.7c0-1.8 0-6 .1-11.6 .1-11.4 .1-28.8 .1-43.7 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-26.6-7.5-56.6-7.5-83.2 0 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 9 .1 21.7 .1 30.6 0 4.8 .1 8.6 .1 10 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4 0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9 1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6-.4 .9-1.7 1.1-2.8 .4z">
                      </path>
                  </svg>

              </Link>

              <Link target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" href={profileData.social.linkedin}>
                  <svg data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin h-8 w-8 rounded-full text-primary" role="img" viewBox="0 0 448 512" aria-hidden="true">
                      <path fill="currentColor" d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z">
                      </path>
                  </svg>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* SECTION TECHNOLOGIES */} 
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">{`🛠️ ${tl('title')}`}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((cat) => (
            <div key={cat.category} className="bg-linear-to-r from-blue-50/60 to-sky-50/40 dark:from-blue-950/30 dark:to-sky-900/20 rounded-xl p-4 border shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-primary">{tl(`${cat.category}`)}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {tech.icon && <span>{tech.icon}</span>}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
      
                     

    </>
      


  );
}
