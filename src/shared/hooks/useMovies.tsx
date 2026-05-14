import { useCallback, useEffect, useState } from "react";
import { getMovies } from "@shared/api/movies";
import type { Movie } from "@shared/types/movies";

export function useMovies(query: string = "batman") {
  const [data, setData] = useState<Movie[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);

    try {
      const search = query.trim() || "batman";
      const result = await getMovies(search);
      setData(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { data: data ?? [], isLoading, error, refetch: fetchMovies };
}
