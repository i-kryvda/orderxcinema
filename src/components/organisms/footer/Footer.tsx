import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`footer__container ${styles.footerContainer}`}>
        <div className={styles.footerBody}>
          <p className={styles.footerDescription}>
            💭 Thanks for visiting WatchList ! <br />
            I hope you’ll find your next favorite movie here. <br />
          </p>
        </div>

        <div className={styles.footerActions}>
          <a href="https://github.com" className={styles.footerLink}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
