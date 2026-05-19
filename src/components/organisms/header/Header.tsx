import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { ThemeSwitch } from "@shared/ui/theme-switch/ThemeSwitch";
import { routes } from "@shared/config/routes";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`header__container ${styles.headerContainer}`}>
        <div className={styles.brand}>
          <NavLink to={routes.home} className={`title ${styles.logo}`}>
            <span>Order</span>
            <span className={styles.logoMid}>x</span>
            <span>Cinema</span>
          </NavLink>
        </div>

        <nav className={styles.nav} aria-label="Header actions">
          <div className={styles.actions}>
            <NavLink to={routes.favorites} className={`title ${styles.link}`}>
              <FaRegHeart size={18} />
              <span>Favorites</span>
            </NavLink>

            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
}
