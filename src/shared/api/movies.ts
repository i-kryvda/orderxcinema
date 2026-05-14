import { api } from "./axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// /?apikey=${API_KEY}&s=batman&page=1

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getMovies = async (query = "batman") => {
  const res = await api.get(`/?apikey=${API_KEY}&s=${query}`);

  await delay(1000);
  return res.data.Search || [];
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
