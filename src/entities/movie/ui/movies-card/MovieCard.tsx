import { clsx } from "clsx";
import styles from "./MovieCard.module.scss";

type MovieCardProps = {
  poster: string;
  title: string;
  year: string;
};

export function MovieCard({ poster, title, year }: MovieCardProps) {
  return (
    <li className={styles.movie}>
      <article className={styles.card}>
        <div className={styles.image}>
          <img src={poster} alt={title} />
        </div>

        <div className={styles.content}>
          <h2 className={clsx("title", styles.title)}>{title}</h2>
          <span className={styles.year}>{year}</span>
        </div>
      </article>
    </li>
  );
}
