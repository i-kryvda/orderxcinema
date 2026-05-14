import { MovieCardSkeleton } from "@components/molecules/movies-card";
import styles from "./MoviesListSkeleton.module.scss";

export function MoviesListSkeleton() {
  const skeletons = Array.from({ length: 10 });

  return (
    <ul className={styles.list}>
      {skeletons.map((_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </ul>
  );
}
