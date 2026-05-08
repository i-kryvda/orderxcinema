import { MovieCard } from "@entities/movie/ui/movies-card/MovieCard";
import styles from "./MoviesList.module.scss";
import type { Movie } from "@entities/movie/types";

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
