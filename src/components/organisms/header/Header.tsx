import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ThemeSwitch } from "@shared/ui/theme-switch/ThemeSwitch";
import { routes } from "@shared/config/routes";
import styles from "./Header.module.scss";
import { Combobox } from "@components/organisms/combobox/Combobox";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`header__container ${styles.headerContainer}`}>
        <div className={styles.brand}>
          <NavLink to={routes.home} className={`title ${styles.logo}`}>
            <span className={styles.logoTop}>Order</span>
            <span className={styles.logoMid}>x</span>
            <span className={styles.logoBot}>Cinema</span>
          </NavLink>
          <Combobox />
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
