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
  return (
    <SidebarGroup >
      <SidebarGroupLabel className="text-2xl mb-5">Navigation</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>                  
                  <SidebarMenuButton asChild className="p-4 h-8 font-medium text-2xl border-2">
                    <Link href={item.url}>
                      <item.icon color="#569F98" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`Accéder au menu en cliquant ce chevron '>'`}</p>                  
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
                    <SidebarMenuSub className="gap-15 pt-5">
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild 
                            className="border-2 transition-transform hover:-translate-y-0.5"
                          >
                            <div key={subItem.title}>
                              <subItem.icon color="#569F98" />
                              <Link href={subItem.url} className="w-full text-accent">                             
                                <span>{subItem.title}</span>
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
