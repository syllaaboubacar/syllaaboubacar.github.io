"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_THEME = "dark";

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(DEFAULT_THEME === "dark");

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
      <div className="relative h-5 w-5">
        {/* Icône Sun (visible en mode dark) */}
        <Sun
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-300 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          suppressHydrationWarning
        />
        {/* Icône Moon (visible en mode light) */}
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-300 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          suppressHydrationWarning
        />
      </div>
    </Button>
  );
}