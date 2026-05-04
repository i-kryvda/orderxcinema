import { api } from "@shared/api/api";

const API_KEY = "21a9b2c";

// /?apikey=${API_KEY}&s=batman&page=1

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getMovies = async (query = "batman") => {
  const res = await api.get(`/?apikey=${API_KEY}&s=${query}`);

  await delay(1000);
  return res.data.Search || [];
};
