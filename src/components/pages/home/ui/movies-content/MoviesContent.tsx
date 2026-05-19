import {
  MoviesList,
  MoviesListSkeleton,
} from "@components/organisms/movies-list";
import type { Movie } from "@shared/types/movies";
import { EmptyState } from "@shared/ui/empty-state/EmptyState";
import { ErrorMessage } from "@shared/ui/error-message/ErrorMessage";

type Props = {
  isLoading: boolean;
  error: string | null;
  data: Movie[];
  onRetry: () => void;
};

export function MoviesContent({ isLoading, error, data, onRetry }: Props) {
  if (isLoading) return <MoviesListSkeleton />;
  if (error) return <ErrorMessage onRetry={onRetry} />;
  if (!data.length) return <EmptyState text="No movies matched your search" />;

  return <MoviesList movies={data} />;
}
