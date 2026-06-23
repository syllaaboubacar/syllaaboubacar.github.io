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
  const [isDark, setIsDark] = useState(DEFAULT_THEME === "dark");

  // Mise à jour de l'état lorsque le thème résolu change (client uniquement)
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <Button
      size="icon"
      className="w-10 h-10"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </Button>
  );
}