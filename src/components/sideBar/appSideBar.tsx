"use client"

import * as React from "react"
import {
  Command,
  GraduationCap
} from "lucide-react"
import {data} from "@/data/contentText"
import { NavMain } from "@/components/sideBar/navMain"
import { NavProjects } from "@/components/sideBar/navProjects"
import { NavSecondary } from "@/components/sideBar/navSecondary"
import { NavUser } from "@/components/sideBar/navUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Aboubacar SYLLA</span>
                  <span className="truncate text-xs">Portfolio</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* ----------<NavProjects projects={data.projects} />---------- */}
        {/* ----------<NavSecondary items={data.navSecondary} className="mt-auto" />---------- */} 
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
