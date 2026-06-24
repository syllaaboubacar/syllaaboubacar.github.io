"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_THEME = "dark"; // doit correspondre à votre defaultTheme

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  // État local initialisé avec la valeur par défaut (pas de flash au montage)
  const [isDark, setIsDark] = useState(DEFAULT_THEME === "dark");

  // Synchronisation une fois que resolvedTheme est connu (client uniquement)
  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  return (
    <Button
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
    >
      <div className="h-5 w-5 transition-opacity duration-150">
        {isDark ? (
          <Sun className="h-5 w-5" suppressHydrationWarning />
        ) : (
          <Moon className="h-5 w-5" suppressHydrationWarning />
        )}
      </div>
    </Button>
  );
}