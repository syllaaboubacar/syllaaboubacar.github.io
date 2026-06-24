"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

// Doit correspondre à la valeur de defaultTheme dans votre ThemeProvider
const DEFAULT_THEME = "dark";

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();  
  // État initial : correspond au thème par défaut
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(DEFAULT_THEME === "dark");

  useEffect(() => {
    setMounted(true);
    // Une fois monté, on synchronise avec le thème réel
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  // Rendu initial (serveur + premier client) : placeholder invisible
  if (!mounted) {
    return (
      <Button  size="icon">
        <div className="h-5 w-5" /> {/* placeholder invisible mais garde la taille */}
      </Button>
    );
  }

  return (
    <Button
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="transition-opacity duration-200 ease-in-out">
        {isDark ? (
          <Sun className="h-5 w-5 transition-all" />
        ) : (
          <Moon className="h-5 w-5 transition-all" />
        )}
      </div>
    </Button>
  );
}