"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: (event?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setThemeState(newTheme);
    try {
      localStorage.setItem("shirayukino-theme", newTheme);
    } catch {
      // Ignore local storage errors
    }
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("shirayukino-theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        applyTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        applyTheme("dark");
      } else {
        applyTheme("light");
      }
    } catch {
      applyTheme("light");
    }
  }, [applyTheme]);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      const isDarkNow = theme === "dark";
      const nextTheme: Theme = isDarkNow ? "light" : "dark";

      // Check if browser supports View Transitions API
      if (
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        const x = event?.clientX ?? window.innerWidth / 2;
        const y = event?.clientY ?? 0;
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        // Execute circular view transition
        const transition = (document as unknown as {
          startViewTransition: (callback: () => void) => { ready: Promise<void> };
        }).startViewTransition(() => {
          applyTheme(nextTheme);
        });

        transition.ready.then(() => {
          const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ];
          document.documentElement.animate(
            {
              clipPath: isDarkNow ? [...clipPath].reverse() : clipPath,
            },
            {
              duration: 500,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              pseudoElement: isDarkNow
                ? "::view-transition-old(root)"
                : "::view-transition-new(root)",
            }
          );
        });
      } else {
        // Fallback smooth transition
        const root = document.documentElement;
        root.classList.add("theme-transitioning");
        applyTheme(nextTheme);
        setTimeout(() => {
          root.classList.remove("theme-transitioning");
        }, 450);
      }
    },
    [theme, applyTheme]
  );

  const setTheme = useCallback(
    (t: Theme) => {
      applyTheme(t);
    },
    [applyTheme]
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
