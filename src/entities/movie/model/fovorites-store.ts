import { create } from "zustand";
import type { Movie } from "../types";

type FavoritesStore = {
  favorites: Movie[];

  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  addFavorite: (movie) =>
    set((state) => {
      const exists = state.favorites.find((m) => m.imdbID === movie.imdbID);

      if (exists) return state;

      return {
        favorites: [...state.favorites, movie],
      };
    }),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((m) => m.imdbID !== id),
    })),

  toggleFavorite: (movie) => {
    const exists = get().favorites.some((m) => m.imdbID === movie.imdbID);

    if (exists) {
      set((state) => ({
        favorites: state.favorites.filter((m) => m.imdbID !== movie.imdbID),
      }));
    }

    if (!exists) {
      set((state) => ({ favorites: [...state.favorites, movie] }));
    }
  },

  isFavorite: (id) => {
    return get().favorites.some((m) => m.imdbID === id);
  },
}));
