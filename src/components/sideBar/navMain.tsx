"use client"

import { ChevronRight, Icon, type LucideIcon } from "lucide-react";
import { Link } from '@/app/i18n/routing';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useTranslations } from "next-intl";

import { usePathname } from '@/app/i18n/routing';
import { useCallback } from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      icon: LucideIcon
    }[]
  }[]
}) {

  const pathname = usePathname(); 
  const t = useTranslations('appSidebar'); 

  // Vérifie si une URL est active (exacte ou préfixe)
    const isLinkActive = useCallback((url: string | undefined) => {
        if (!url) return false;
        if (url === "/") return pathname === "/" || pathname === "";
        // Match exact
        if (pathname === url) return true;
        // Gérer les cas où un préfixe de locale est présent (ex: /fr/customers)
        if (pathname.endsWith(url)) return true;
        // Cas préfixe (url + slash)
        return pathname.startsWith(url + "/");

    }, [pathname]);

  return (
    <SidebarGroup >
      <SidebarGroupLabel className="text-2xl mb-5">{t('title')}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>                  
                  <SidebarMenuButton asChild className="p-4 h-8 font-medium text-2xl border-2">
                    <Link href={item.url}>
                      <item.icon color="#569F98" />
                      <span>{t(`${item.title}.title`)}</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('tooltip')}</p>                  
                </TooltipContent>
              </Tooltip>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="gap-10 pt-5">
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild 
                            isActive={isLinkActive(subItem.url)}
                            className={`border-2 hover:-translate-y-0.5 hover:bg-[#8bb5b1] shadow hover:shadow-lg transition-shadow ${
                            isLinkActive(subItem.url) ? "font-bold border-l-8 border-t-4 border-primary bg-lime-200" : ""}`}
                          >
                            <div key={subItem.title}>
                              <subItem.icon color="#569F98" />
                              <Link href={subItem.url} className="w-full">                             
                                <span>{t(`menu.${subItem.title}`).toUpperCase()}</span>
                              </Link>
                            </div>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
