import { MovieCard } from "@components/molecules/movies-card/MovieCard";
import type { Movie } from "@shared/types/movies";
import styles from "./MoviesList.module.scss";

type Props = {
  movies: Movie[];
};

export function MoviesList({ movies }: Props) {
  return (
    <ul className={styles.list}>
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
