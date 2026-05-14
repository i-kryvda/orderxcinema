import clsx from "clsx";
import styles from "./MovieCardSkeleton.module.scss";

export function MovieCardSkeleton() {
  return (
    <li className={styles.movie}>
      <article className={clsx(styles.card, styles.skeleton)}>
        <div className={styles.image} />

        <div className={styles.content}>
          <div className={styles.title} />
        </div>
      </article>
    </li>
  );
}
