"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_THEME = "dark"; // doit correspondre à votre defaultTheme

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu initial (serveur + premier client) : placeholder invisible
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        {DEFAULT_THEME === "dark" ? (
          <Sun className="h-5 w-5 opacity-0" />
        ) : (
          <Moon className="h-5 w-5 opacity-0" />
        )}
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
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