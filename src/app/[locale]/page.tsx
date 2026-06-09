import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Briefcase, Calendar, MapPin } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { routing } from "../i18n/routing";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  console.log("Locale : ",locale)
  const t = await getTranslations("Home");
  return (
    
    <>
      {/* ---------- CONTENU (sans bordure) ---------- */}
      
      {/* 
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      */}

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            
        <Card className="overflow-hidden min-h-[100vh]">
          <div className="h-48 bg-gradient-to-r from-blue-200 to-indigo-100" />
          <CardContent className="relative pt-0">
            <Avatar className="size-32 -mt-16 border-4 border-background">
              <AvatarImage src="/images/sylla.jpeg" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-serif font-bold mt-4">Aboubacar SYLLA</h1>
            <div className="flex gap-4 text-muted-foreground text-sm mt-2">
              <span><MapPin className="size-4" /> Liège, Belgique</span>
              <span><Calendar className="size-4" /> Disponible dès maintenant</span>
            </div>

            <section className="p-6">
              <h1>{t("title")}</h1>
              <p>{t("subtitle")}</p>
              <Button>
                <Link href="/about">
                    {t("cta")}
                  </Link>
              </Button>    
            </section>

            Le passage de Lorem Ipsum standard, utilisé depuis 1966 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            Section 1.10.32 du "De Finibus Bonorum et Malorum" de Ciceron (45 av. J.-C.) "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0}>
                  <Button variant="outline" disabled>
                    Bouton désactivé
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explication de pourquoi le bouton est désactivé</p>
              </TooltipContent>
            </Tooltip>         

            <Card>
              <CardHeader className="flex-row items-start gap-3 t-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="size-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">Expérience</CardTitle>
                  <CardDescription>Projets académiques et professionnels</CardDescription>
                </div>
              </CardHeader>
            </Card>
            
          </CardContent>
        </Card>

      </div>        

    </>
        


  );
}
