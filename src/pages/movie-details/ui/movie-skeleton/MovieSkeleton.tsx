import clsx from "clsx";
import styles from "./MovieSkeleton.module.scss";

export function MovieSkeleton() {
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
