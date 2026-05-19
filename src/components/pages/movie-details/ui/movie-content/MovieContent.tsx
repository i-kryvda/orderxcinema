import type { Movie } from "@shared/types/movies";

import { MovieDetailsCard } from "@components/molecules/movie-details-card/MovieDetailsCard";
import { MovieDetailsSkeleton } from "@components/molecules/movie-details-card/MovieDetailsSkeleton";
// import { MovieSkeleton } from "../movie-skeleton/MovieSkeleton";
import { ErrorMessage } from "@shared/ui/error-message/ErrorMessage";
import { EmptyState } from "@shared/ui/empty-state/EmptyState";

type Props = {
  data: Movie;
  isLoading: boolean;
  isError: boolean;
};

export function MovieContent({ data, isLoading, isError }: Props) {
  if (isLoading) return <MovieDetailsSkeleton />;
  if (isError) return <ErrorMessage />;
  if (!data) return <EmptyState text="Movie not found" />;

  return <MovieDetailsCard data={data} />;
}
