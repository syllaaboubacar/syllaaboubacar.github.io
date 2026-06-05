import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Briefcase, Calendar, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations("Home");
  return (
    
    <Card className="overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-blue-200 to-indigo-100" />
      <CardContent className="relative pt-0">
        <Avatar className="size-32 -mt-16 border-4 border-background">
          <AvatarImage src="/photo-profil.jpg" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-serif font-bold mt-4">Aboubacar SYLLA</h1>
        <div className="flex gap-4 text-muted-foreground text-sm mt-2">
          <span><MapPin className="size-4" /> Liège, Belgique</span>
          <span><Calendar className="size-4" /> Disponible février 2027</span>
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
  );
}
