import { useState } from "react";
import { truncateText } from "@shared/utils/truncateText";
import type { Movie } from "@shared/types/movies";

import styles from "./MovieDetailsCard.module.scss";

const LIMIT_TEXT = 150;

export function MovieDetailsCard({ data }: { data: Movie }) {
  const [expanded, setExpanded] = useState(false);

  const plot = data.Plot ?? "";
  const isLong = plot.length > LIMIT_TEXT;

  const displayed = expanded || !isLong ? plot : truncateText(plot, LIMIT_TEXT);

  return (
    <article className={styles.card}>
      <figure className={styles.poster}>
        <img
          src={data.Poster !== "N/A" ? data.Poster : "/no-image.png"}
          alt={data.Title}
        />
      </figure>

      <div className={styles.info}>
        <header className={styles.header}>
          <h2 className={styles.title}>{data.Title}</h2>
          <time className={styles.year}>{data.Year}</time>
        </header>

        <section className={styles.plot}>
          <p>{displayed}</p>

          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className={styles.button}
            >
              {expanded ? "Less" : "More"}
            </button>
          )}
        </section>
      </div>
    </article>
  );
}
