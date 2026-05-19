import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Section } from "@shared/ui/section/Section";
import { NotFoundPage } from "@components/pages/not-found/NotFoundPage";

import { MovieContent } from "./ui/movie-content/MovieContent";
import { useMovie } from "./model/useMovie";
import styles from "./MovieDetailsPage.module.scss";

export function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <NotFoundPage />;

  const { data, status } = useMovie(id);

  const location = useLocation();

  const handleBack = () => {
    const from = location.state?.from;

    if (from) navigate(from);
    else navigate("/");
  };

  return (
    <Section title="Movie details">
      <div className={styles.header}>
        <button type="button" onClick={handleBack}>
          back
        </button>
      </div>
      <div className={styles.content}>
        <MovieContent
          data={data!}
          isLoading={status === "loading"}
          isError={status === "error"}
        />
      </div>
    </Section>
  );
}
