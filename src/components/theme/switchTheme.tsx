"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";

export default function SwitchTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-10 h-10"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning   // ← Ignore les différences d'hydratation
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-all" suppressHydrationWarning />
      ) : (
        <Moon className="h-5 w-5 transition-all" suppressHydrationWarning />
      )}
    </Button>
  );
}