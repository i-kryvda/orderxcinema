import { useState } from "react";
import { truncateText } from "@shared/utils/truncateText";
import type { Movie } from "@shared/types/movies";

import styles from "./MovieContent.module.scss";

const LIMIT_TEXT = 150;

export function MovieContent({ data }: { data: Movie }) {
  const [expanded, setExpanded] = useState(false);

  const plot = data.Plot ?? "";
  const isLong = plot.length > LIMIT_TEXT;

  const toggle = () => setExpanded((v) => !v);

  const displayed = expanded || !isLong ? plot : truncateText(plot, LIMIT_TEXT);

  return (
    <>
      <img
        className={styles.poster}
        src={data.Poster !== "N/A" ? data.Poster : "/no-image.png"}
        alt={data.Title}
      />

      <div className={styles.info}>
        <h1 className={styles.title}>{data.Title}</h1>
        <p className={styles.year}>{data.Year}</p>
        <p className={styles.plot}>
          {displayed}{" "}
          {isLong && (
            <button onClick={toggle} className={styles.button}>
              {expanded ? "Less" : "More"}
            </button>
          )}
        </p>
      </div>
    </>
  );
}
