import { useEffect, useState } from "react";
import { getMovieSuggestions } from "@shared/api/movies";

export const useMovieSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        const data = await getMovieSuggestions(query, controller.signal);

        setSuggestions(data);
      } catch (err: any) {
        if (err.name !== "CanceledError") {
          console.error(err);
        }
      }
    };

    if (query.trim()) {
      fetchMovies();
    } else {
      setSuggestions([]);
    }

    return () => controller.abort();
  }, [query]);

  return suggestions;
};
