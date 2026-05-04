import { useTheme } from "@app/providers/theme-provider/model/theme-hooks";
import styles from "./ThemeSwitch.module.scss";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeSwitch}
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <span className={styles.themeSwitchThumb} data-theme={theme} />
    </button>
  );
}
