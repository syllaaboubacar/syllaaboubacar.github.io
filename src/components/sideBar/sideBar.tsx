import { Button } from "@/components/ui/button"; // optionnel pour les liens du menu
import {DataText} from "@/data/contentText";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};
export default function SideBar(){
  const sideItems = DataText.sideItems;
  const menuEntries = Object.entries(sideItems).filter(([key]) => key !== "title");
    return(
        <div className="w-[280px] flex-shrink-0 border text-card-foreground shadow bg-card bg-blue-500">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              {DataText.sideItems.title}
            </h3>
          </div>
          <div className="p-6 pt-0">
            <nav className="flex flex-col gap-2">
              {menuEntries.map(([key, value]) => {
                // TypeScript ne déduit toujours pas automatiquement, on peut utiliser une assertion
                const { label, href } = value as NavItem;
                return (
                  <Button
                    variant={"ghost"}
                    className="justify-start text-left"
                    key={key} 
                  >
                    <Link key={key} href={href}>
                      {label}
                    </Link>
                  </Button>
                );
              })}

            </nav>
          </div>
        </div>

    );
}