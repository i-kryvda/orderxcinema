import { useFavoritesStore } from "@app/store/fovorites-store";
import { MoviesList } from "@components/organisms/movies-list/MoviesList";
import { Section } from "@shared/ui/section/Section";
import { EmptyState } from "@shared/ui/empty-state/EmptyState";

export function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <Section title="Favorites">
      {favorites.length === 0 ? (
        <EmptyState text="No favorites yet" />
      ) : (
        <MoviesList movies={favorites} />
      )}
    </Section>
  );
}
