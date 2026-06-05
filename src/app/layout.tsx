import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Link from "next/link";

//--------------------------------
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navBar/navBar";
import { SiteHeader } from "@/components/navBar/navHeader";
import { AppSidebar } from "@/components/sideBar/appSideBar";
import SideBar from "@/components/sideBar/sideBar";
import ThemeProvider from "@/components/theme/themeProvider";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/globals.css";

//--------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("homeTitle"),
    description: t("homeDesc"),
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations("Nav");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
      
      	<ThemeProvider attribute="class" defaultTheme="system" enableSystem /*children={children}*/>
		
          <NextIntlClientProvider locale={locale} messages={messages}>
                              
                        
            <div className="[--header-height:calc(--spacing(14))]">
              <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <div className="flex flex-1">
                  <AppSidebar />
                  <SidebarInset>
                    
                    <main className="flex flex-1 flex-col gap-4 p-4">
                      
                      {children}

                    </main>
                  </SidebarInset>
                
                </div>
              </SidebarProvider>
            </div>
                  	  
            
          </NextIntlClientProvider>
		
	      </ThemeProvider>
	
      </body>
    </html>
  );
}
