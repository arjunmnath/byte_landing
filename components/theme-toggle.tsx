"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    const x = e.clientX;
    const y = e.clientY;

    // Pass click position to CSS
    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    // View Transitions API with fallback
    // @ts-ignore
    if (document.startViewTransition) {
      // @ts-ignore
      document.startViewTransition(() => {
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  }

  const next = theme === "light" ? "dark" : "light";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className="relative h-9 w-9 px-0"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
