import { useCallback, useEffect, useState } from "react";
import { getMovies } from "@entities/movie/api/api";
import type { Movie } from "@entities/movie/types";

export function useMovies() {
  const [data, setData] = useState<Movie[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);

    try {
      const result = await getMovies();
      setData(result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { data: data ?? [], isLoading, error, refetch: fetchMovies };
}
