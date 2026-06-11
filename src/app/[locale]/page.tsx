import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Briefcase, Calendar, MapPin } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { routing } from "../i18n/routing";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  //console.log("Locale : ",locale)
  const t = await getTranslations("Home");
  return (
    
    <>
      
      <Card className="overflow-hidden">
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

          </CardContent>
      </Card>
      
                     

    </>
        


  );
}
