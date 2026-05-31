"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";

export default function SwitchTheme(){
    const {theme,setTheme, resolvedTheme} = useTheme();
    const isDark = resolvedTheme === "dark";

    return(
        <Button 
            variant="ghost"
            onClick={() => setTheme(theme==="dark" ? "light" : "dark")}
        >
            {isDark ? (
               <Sun className="h-5 w-5 transition-all" />

            ) : (
                <Moon className="h-5 w-5 transition-all" />
            )}
        </Button>
    );
}