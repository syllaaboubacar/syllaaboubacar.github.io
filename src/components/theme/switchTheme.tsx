"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_THEME = "dark"; // correspond à votre defaultTheme

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  // État initial = thème par défaut
  const [isDark, setIsDark] = useState(DEFAULT_THEME === "dark");

  // Synchronisation après hydratation
  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-10 h-10"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
    >
      <div className="relative h-5 w-5">
        {/* Icône Sun (visible en mode dark) */}
        <Sun
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          suppressHydrationWarning
        />
        {/* Icône Moon (visible en mode light) */}
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          suppressHydrationWarning
        />
      </div>
    </Button>
  );
}