import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"

export function AppSidebarr() {
  return (
    <Sidebar className="w-[280px] flex-shrink-0 border text-card-foreground shadow bg-card mt-20">
      <SidebarHeader>Menu</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <Button>Contact</Button>
            <Button>Contacto</Button>
            <Button>Contactp</Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}