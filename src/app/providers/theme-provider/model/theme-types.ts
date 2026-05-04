export type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};
