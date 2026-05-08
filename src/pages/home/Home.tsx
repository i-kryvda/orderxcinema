import { MoviesListSkeleton } from "@entities/movie/ui/movies-list-skeleton/MoviesListSkeleton";
import { useMovies } from "@features/movies-list/model/useMovies";
import { EmptyState } from "@shared/ui/empty-state/EmptyState";
import { ErrorMessage } from "@shared/ui/error-message/ErrorMessage";
import { MoviesSection } from "@shared/ui/movies-section/MoviesSection";
// import { Preloader } from "@shared/ui/preloader/Preloader";
import { MoviesList } from "@widgets/movies-list/ui/MoviesList";
// import { EmptyState } from "@shared/ui/empty-state/EmptyState";

export function Home() {
  const { data, isLoading, error, refetch } = useMovies();

  let content;

  if (isLoading) {
    content = <MoviesListSkeleton />;
  } else if (error) {
    content = <ErrorMessage onRetry={refetch} />;
  } else if (data.length === 0) {
    content = <EmptyState text="No movies matched your search" />;
  } else {
    content = <MoviesList movies={data} />;
  }

  return <MoviesSection title="Movies">{content}</MoviesSection>;
}
