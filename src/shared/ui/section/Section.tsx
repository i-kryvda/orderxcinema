import type { ReactNode } from "react";
import styles from "./Section.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};

export function Section({ children, title }: Props) {
  return (
    <section className={styles.movies}>
      <div className="movies__container">
        <h1 className="visually-hidden">{title}</h1>

        {children}
      </div>
    </section>
  );
}
