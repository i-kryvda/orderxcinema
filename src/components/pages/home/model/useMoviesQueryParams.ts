import { useSearchParams } from "react-router-dom";

export function useMoviesQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "spider";
  const page = Number(searchParams.get("page")) || 1;

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    setSearchParams(params);
  };

  // const setPage = (newPage: number) => {
  //   setSearchParams({
  //     q: query,
  //     page: String(newPage),
  //   });
  // };

  return { query, page, setPage };
}
