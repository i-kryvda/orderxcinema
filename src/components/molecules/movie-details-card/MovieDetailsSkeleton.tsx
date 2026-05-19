import clsx from "clsx";
import styles from "./MovieDetailsSkeleton.module.scss";

export function MovieDetailsSkeleton() {
  return (
    <>
      <div className={`${styles.posterSkeleton} ${styles.skeleton}`} />

      <div className={styles.info}>
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
        <div className={`${styles.skeleton} ${styles.skeletonText}`} />
        <div className={`${styles.skeleton} ${styles.skeletonText}`} />
        <div
          className={clsx(
            styles.skeleton,
            styles.skeletonText,
            styles.skeletonShort,
          )}
        />
      </div>
    </>
  );
}
