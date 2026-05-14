import { NavLink } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoritesStore } from "@app/store/fovorites-store";
import type { Movie } from "@shared/types/movies";
import { routes } from "@shared/config/routes";
import styles from "./MovieCard.module.scss";

type Props = {
  movie: Movie;
};

export function MovieCard({ movie }: Props) {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite(movie.imdbID));

  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png";

  return (
    <li className={styles.movie}>
      <figure className={styles.card}>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <img src={poster} alt={movie.Title} />
          </div>

          <div className={styles.overlay}>
            <button
              className={styles.like}
              onClick={() => toggleFavorite(movie)}
            >
              {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>

            <NavLink
              className={styles.details}
              to={routes.movies.detail(movie.imdbID)}
            >
              Details
            </NavLink>
          </div>
        </div>

        <figcaption className={styles.content}>
          <h2 className={styles.title} title={movie.Title}>
            {movie.Title}
          </h2>
          <span className={styles.year}>{movie.Year}</span>
        </figcaption>
      </figure>
    </li>
  );
}
