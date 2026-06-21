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
      
      <div className="container mx-auto max-w-6xl py-8 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-1.5">
      {/* Bande horizontale colorée */}
      <div className="relative h-48 w-full rounded-2xl bg-linear-to-r from-primary/40 via-primary/20 to-transparent mb-8">
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
              <Link href={profileData.social.github} target="_blank" className="text-primary">GitHub</Link>
              <Link href={profileData.social.linkedin} target="_blank" className="text-primary">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TECHNOLOGIES - AJOUTÉE ICI */} 
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">{`🛠️ ${tl('title')}`}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((cat) => (
            <div key={cat.category} className="bg-card rounded-xl p-4 border shadow-sm">
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
