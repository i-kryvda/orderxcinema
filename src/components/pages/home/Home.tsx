import { Section } from "@shared/ui/section/Section";
// import { useMovies } from "@components/pages/home/model/useMovies";

import { MoviesContent } from "./ui/movies-content/MoviesContent";
import { Pagination } from "./ui/pagination/Pagination";
import { usePagination } from "./model/usePagination";
import { useMoviesQueryParams } from "./model/useMoviesQueryParams";
import { useMovies } from "./model/useMovies";

export function Home() {
  const { query, page, setPage } = useMoviesQueryParams();
  const { data, isLoading, error, refetch, total } = useMovies(query, page);

  const pagitation = usePagination({
    page,
    setPage,
    total,
  });

  return (
    <Section title="Movies">
      <Pagination {...pagitation} />

      <MoviesContent
        isLoading={isLoading}
        error={error}
        data={data}
        onRetry={refetch}
      />
    </Section>
  );
}
