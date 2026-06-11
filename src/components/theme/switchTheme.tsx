"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SwitchTheme(){
    const {theme,setTheme, resolvedTheme} = useTheme();
    const isDark = resolvedTheme === "dark";
    
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Éviter l'hydratation en ne rendant rien côté serveur
    if (!mounted) {
        return <Button variant="ghost" className="invisible w-10 h-10" />; // placeholder pour éviter le shift de layout
    }

    return(

        <Button 
            
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