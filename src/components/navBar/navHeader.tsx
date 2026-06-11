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
import DownloadCVButton from "../downloadCv/DownloadCVButton";
import { useTranslations } from "next-intl";
import NavigationRoot from "../navigationPath/navigationRoot";





export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const b = 5;

  const tFilAriane = useTranslations('navigationBar');

  const translate = {
      about: tFilAriane('about'),
      experience: tFilAriane('experience'),
      competence: tFilAriane('competence'),
      project: tFilAriane('project'),
      skill: tFilAriane('skill'),
      school: tFilAriane('school'),
      contact: tFilAriane('contact'),
  }; 

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-(--header-height) w-full justify-between gap-2 px-4 items-center">
        <div className="flex justify-start items-center h-10">
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
          <SidebarIcon />
          </Button>
          <Separator orientation="vertical" className="mr-2 h-6" />

          <NavigationRoot translations={translate} />

          {/*<Breadcrumb className="hidden sm:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>*/}

        </div>

        {/*<HeaderContent className="w-full sm:ml-auto sm:w-auto hiden" /> */}   
        
        {/* Desktop */}  
        <div className="hidden md:flex ml-auto justify-end items-center h-10 gap-3" >
          <SwitchTheme/>
          <SwitchLanguage />
          <Avaibility/> 
          <DownloadCVButton/>
        </div>


        {/* Mobile */}    
        <div className="flex justify-end items-center h-10 gap-3 md:hidden ml-auto md:ml-0" >
          <SwitchTheme/>
          <SwitchLanguage />
          <DownloadCVButton/>
        </div>

        
        
           
      </div>
    </header>
  )
}
