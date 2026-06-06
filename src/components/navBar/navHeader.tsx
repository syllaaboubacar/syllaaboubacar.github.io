"use client";

import { SidebarIcon,Download } from "lucide-react"

import { HeaderContent } from "@/components/navBar/navHeaderContent"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import SwitchTheme from "../theme/switchTheme";
import { Avaibility } from "./avaibility";
import { DataText } from "@/data/contentText";
import SwitchLanguage from "../language/switchLanguage";





export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HeaderContent className="w-full sm:ml-auto sm:w-auto hiden" />
        
        <SwitchTheme/>
        <SwitchLanguage/>
        <Avaibility/> 
        {/* ----------onClick={() => downloadCV()}------- a ajouter dans les props du button--- */}        
        <Button 
          type="button" 
          
          className="rounded-lg text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Download className="w-4 h-4" /> {DataText.navItems.downloadCv}

        </Button>
        {/* ---------- <DownloadCVButton />    ---------- */}    
      </div>
    </header>
  )
}
