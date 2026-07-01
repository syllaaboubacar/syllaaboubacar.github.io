import "@/globals.css";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import { GoogleAnalytics } from '@next/third-parties/google'

//--------------------------------
import { SiteHeader } from "@/components/navBar/navHeader";
import { AppSidebar } from "@/components/sideBar/appSideBar";
import ThemeProvider from "@/components/theme/themeProvider";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ReactNode } from "react";
import { routing } from "../i18n/routing";
import { notFound } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import MyFooter from "@/components/footer/footer";

export const dynamic = "force-static";

//--------------------------------

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  
  const messages = (await import(`@/messages/${locale}.json`)).default; 
  
  return (

    <html lang={locale} suppressHydrationWarning> 

      <body>
      	<ThemeProvider attribute="class" defaultTheme="system" enableSystem >
		
          <NextIntlClientProvider locale={locale} messages={messages}>
                              
             <TooltipProvider>           
              <div className="[--header-height:calc(--spacing(14))]">
                <SidebarProvider className="flex flex-col">
                  <SiteHeader />
                  <div className="flex flex-1">
                    
                    <AppSidebar className="border"/>
                    
                    <SidebarInset>
                      
                      <main className="flex flex-1 flex-col gap-4 p-4">
                        
                        {children}

                      </main>
                      <MyFooter/>
                    </SidebarInset>
                  
                  </div>
                </SidebarProvider>
              </div>

              <GoogleAnalytics gaId="G-C4KP698CF9" />
              
            </TooltipProvider>      	  
            
          </NextIntlClientProvider>
		
	      </ThemeProvider>
        
      </body>
    </html> 
	
  );
}


