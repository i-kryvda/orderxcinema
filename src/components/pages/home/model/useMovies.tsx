import { useCallback, useEffect, useState } from "react";
import { getMovies } from "@shared/api/movies";
import type { Movie } from "@shared/types/movies";

export function useMovies(query: string, page: number) {
  const [data, setData] = useState<Movie[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchMovies = useCallback(async () => {
    setLoading(true);

    try {
      const search = query.trim() || "batman";
      const movies = await getMovies(search, page);
      setData(movies.movies);
      setTotal(Number(movies.totalResults));
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { data: data ?? [], isLoading, error, refetch: fetchMovies, total };
}
