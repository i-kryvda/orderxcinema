import { MoviesList } from "@widgets/movies-list/ui/MoviesList";
import { useFavoritesStore } from "@entities/movie/model/fovorites-store";
import { MoviesSection } from "@shared/ui/movies-section/MoviesSection";

import "./FavoritesPage.scss";
import { EmptyState } from "@shared/ui/empty-state/EmptyState";

export function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <MoviesSection title="Favorites">
      {favorites.length === 0 ? (
        <EmptyState text="No favorites yet" />
      ) : (
        <MoviesList movies={favorites} />
      )}
    </MoviesSection>
  );
}
