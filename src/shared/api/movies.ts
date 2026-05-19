import type { Movie } from "@shared/types/movies";
import { api } from "./axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// /?apikey=${API_KEY}&s=batman&page=1

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getMovies = async (query = "batman", page = 1) => {
  const res = await api.get(`/?apikey=${API_KEY}&s=${query}&page=${page}`);

  await delay(1000);

  console.log(res.data);

  return {
    movies: res.data.Search || [],
    totalResults: res.data.totalResults || "0",
  };
  // return (res.data.Search || []).filter(
  //   (movie: Movie) => movie.Poster !== "N/A",
  // );
};

export const getMovie = async (id: string) => {
  const res = await api.get(`/?apikey=${API_KEY}&i=${id}`);

  await delay(1000);

  const data = res.data;

  if (data.Response === "False") {
    return null;
  }

  return data;
};

export const getMovieSuggestions = async (
  query: string,
  signal?: AbortSignal,
) => {
  const res = await api.get(
    `/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`,
    { signal },
  );

  // console.log(res.data);

  return (res.data.Search || []).map((movie: Movie) => movie.Title);
};
