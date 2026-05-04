// import { clsx } from "clsx";

// export function MovieCardSkeleton() {
//   return (
//     <li className="movies__item">
//       <article className="movie-card skeleton">
//         <div className="skeleton__image"></div>

//         <div className="movie-card__content">
//           <div className="skeleton__title"></div>
//         </div>
//       </article>
//     </li>
//   );
// }

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
