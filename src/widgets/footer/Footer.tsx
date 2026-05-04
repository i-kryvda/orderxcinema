import s from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`footer__container ${s.footerContainer}`}>
        <div className={s.footerBody}>
          <a href="/" className={`title ${s.footerLogo}`}>
            🎬 Watch <span>list</span>
          </a>
          <p className={s.footerDescription}>
            💭 Thanks for visiting WatchList ! <br />
            I hope you’ll find your next favorite movie here. <br />
          </p>
        </div>

        <div className={s.footerActions}>
          <a href="https://github.com" className={s.footerLink}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
