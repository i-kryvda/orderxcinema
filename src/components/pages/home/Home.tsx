import { useSearchParams } from "react-router-dom";
import {
  MoviesListSkeleton,
  MoviesList,
} from "@components/organisms/movies-list";
import { Section } from "@shared/ui/section/Section";
import { useMovies } from "@shared/hooks/useMovies";
import { EmptyState } from "@shared/ui/empty-state/EmptyState";
import { ErrorMessage } from "@shared/ui/error-message/ErrorMessage";

export function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "batman";
  const { data, isLoading, error, refetch } = useMovies(query);

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

  return <Section title="Movies">{content}</Section>;
}
