import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "@shared/types/movies";

type FavoritesStore = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [], // string[] (imdbID)

      addFavorite: (movie) =>
        set((state) => {
          const exists = state.favorites.some((m) => m.imdbID === movie.imdbID);
          if (exists) return state;
          return { favorites: [...state.favorites, movie] };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((m) => m.imdbID !== id),
        })),

      toggleFavorite: (movie) => {
        get().isFavorite(movie.imdbID)
          ? get().removeFavorite(movie.imdbID)
          : get().addFavorite(movie);
      },

      isFavorite: (id) => get().favorites.some((m) => m.imdbID === id),
    }),
    { name: "favorites-storage" },
  ),
);
