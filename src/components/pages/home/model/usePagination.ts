type Props = {
  page: number;
  setPage: (p: number) => void;
  total: number;
};
export function usePagination({ page, setPage, total }: Props) {
  const totalPages = Math.ceil(total / 10);

  const prevPage = () => setPage(Math.max(1, page - 1));
  const nextPage = () => setPage(Math.min(totalPages, page + 1));

  return {
    page,
    prevPage,
    nextPage,
    totalPages,
    isFirst: page === 1,
    isLast: page >= totalPages,
  };
}
