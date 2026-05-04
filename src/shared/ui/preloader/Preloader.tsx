import styles from "./Preloader.module.scss";

export function Preloader() {
  return (
    <div className={styles.preloader}>
      <span className={styles.loader}></span>
    </div>
  );
}
