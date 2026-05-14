import { ThemeSwitch } from "@shared/ui/theme-switch/ThemeSwitch";
import { routes } from "@shared/config/routes";
import s from "./Header.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchParams({ q: input }); // або setQuery(input)
    }, 1500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <header className={s.header}>
      <div className={`header__container ${s.headerContainer}`}>
        <NavLink to={routes.home} className={`title  ${s.logo}`}>
          <span className={`${s.logoTop}`}>Order</span>
          <span className={`${s.logoMid}`}>x</span>
          <span className={`${s.logoBot}`}>Cinema</span>
        </NavLink>

        <input
          type="text"
          className={s.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <nav className={s.nav} aria-label="Header actions">
          <div className={s.actions}>
            <NavLink to={routes.favorites} className={`title ${s.link}`}>
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
