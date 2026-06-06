import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Briefcase, Calendar, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations("Home");
  return (
    
    <>
      {/* ---------- CONTENU (sans bordure) ---------- */}

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            
        <Card className="overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-200 to-indigo-100" />
          <CardContent className="relative pt-0">
            <Avatar className="size-32 -mt-16 border-4 border-background">
              <AvatarImage src="/public/images/sylla.jpeg" />
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
              <button>
                <Link href="/about">
                    {t("cta")}
                  </Link>
              </button>    
            </section>

            Le passage de Lorem Ipsum standard, utilisé depuis 1966 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            Section 1.10.32 du "De Finibus Bonorum et Malorum" de Ciceron (45 av. J.-C.) "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        

            <Card>
              <CardHeader className="flex-row items-start gap-3">
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
