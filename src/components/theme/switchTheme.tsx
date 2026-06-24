"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avant montage : placeholder invisible (structure identique)
  if (!mounted) {
    return (
      <Button size="icon">
        <div className="relative h-5 w-5">
          <div className="absolute inset-0 h-5 w-5 opacity-0">
            <Sun className="h-5 w-5" />
          </div>
        </div>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
    >
      <div className="relative h-5 w-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-150 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          suppressHydrationWarning
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-opacity duration-150 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          suppressHydrationWarning
        />
      </div>
    </Button>
  );
}