import styles from "./Pagination.module.scss";

type Props = {
  page: number;
  prevPage: () => void;
  nextPage: () => void;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
};

export function Pagination({
  page,
  prevPage,
  nextPage,
  totalPages,
  isFirst,
  isLast,
}: Props) {
  return (
    <nav className={styles.pagination} aria-label="Movies pagination">
      <div className={styles.buttons}>
        <button
          className={styles.button}
          type="button"
          onClick={prevPage}
          disabled={isFirst}
          aria-label="Go to previous page"
        >
          Prev
        </button>

        <button
          className={styles.button}
          type="button"
          onClick={nextPage}
          disabled={isLast}
          aria-label="Go to next page"
        >
          Next
        </button>
      </div>

      <span className={styles.info}>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </span>
    </nav>
  );
}
