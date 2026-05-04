import { useEffect } from "react";
import { useLocalStorage } from "@shared/hooks/useLocalStorage";
import { ThemeContext } from "../model/theme-context";
import type { ThemeProviderProps, ThemeType } from "../model/theme-types";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<ThemeType>("theme", "dark");

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
