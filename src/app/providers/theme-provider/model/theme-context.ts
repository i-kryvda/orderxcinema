import { createContext } from "react";
import type { ThemeContextType } from "./theme-types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

// https://www.omdbapi.com/?i=tt3896198&apikey=21a9b2c

// https://www.omdbapi.com/?apikey=21a9b2c&s=batman
