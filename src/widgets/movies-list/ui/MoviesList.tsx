import { MovieCardSkeleton } from "@entities/movie/ui/movies-card-skeleton/MovieCardSkeleton";
import { MovieCard } from "@entities/movie/ui/movies-card/MovieCard";
import { Preloader } from "@shared/ui/preloader/Preloader";
import styles from "./MoviesList.module.scss";
// import { getMovies } from "@entities/movie/api/api";
import { useMovies } from "@features/movies-list/model/useMovies";

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

export function MoviesList() {
  const { data, isLoading } = useMovies();

  const skeletons = Array.from({ length: 10 });

  return (
    <section className={styles.movies}>
      <h1 className="visually-hidden">Movie list</h1>

      <div className="movies__container">
        {isLoading && <Preloader />}
        <ul className={styles.list}>
          {isLoading
            ? skeletons.map((_, index) => <MovieCardSkeleton key={index} />)
            : data?.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  poster={movie.Poster}
                  year={movie.Year}
                  title={movie.Title}
                />
              ))}
        </ul>
      </div>
    </section>
  );
}
