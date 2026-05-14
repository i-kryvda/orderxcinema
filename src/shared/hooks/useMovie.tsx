import { useEffect, useState } from "react";

import { getMovie } from "@shared/api/movies";
import type { Movie } from "@shared/types/movies";

type Status = "not-found" | "loading" | "error" | "success";

export function useMovie(id: string) {
  const [data, setData] = useState<Movie | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      setStatus("loading");
      setError(null);
      try {
        const result = await getMovie(id);

        if (!result) {
          setStatus("not-found");
          return;
        }

        setData(result);
        setStatus("success");
      } catch (e) {
        setError((e as Error).message);
        setStatus("error");
      }
    };

    fetchMovie();
  }, [id]);

  return { data, error, status };
}
