import { ThemeSwitch } from "@shared/ui/theme-switch/ThemeSwitch";
import s from "./Header.module.scss";

import { FaRegHeart } from "react-icons/fa";

export function Header() {
  return (
    <header className={s.header}>
      <div className={`header__container ${s.headerContainer}`}>
        <div className={`title  ${s.logo}`}>
          <span className={`${s.logoTop}`}>Order</span>
          <span className={`${s.logoMid}`}>x</span>
          <span className={`${s.logoBot}`}>Cinema</span>
        </div>

        <ul className={s.headerActions}>
          <li className={`title  ${s.headerTitle}`}>
            <span>
              <FaRegHeart size={18} />
            </span>
            <span>Like Movies</span>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </header>
  );
}
