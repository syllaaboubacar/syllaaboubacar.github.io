"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_THEME = "dark"; // à adapter selon votre defaultTheme

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu initial (serveur + premier client) : structure identique, mais invisible
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <div className="h-5 w-5 opacity-0 transition-opacity duration-200">
          {DEFAULT_THEME === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </div>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      size="icon"
      className="w-10 h-10"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="h-5 w-5 transition-opacity duration-200">
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </div>
    </Button>
  );
}