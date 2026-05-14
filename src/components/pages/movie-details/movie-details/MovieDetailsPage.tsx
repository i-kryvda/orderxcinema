import { useNavigate, useParams } from "react-router-dom";
import { NotFoundPage } from "@components/pages/not-found/NotFoundPage";
import { ErrorMessage } from "@shared/ui/error-message/ErrorMessage";
import { useMovie } from "@shared/hooks/useMovie";
import { Section } from "@shared/ui/section/Section";
import { EmptyState } from "@shared/ui/empty-state/EmptyState";
import { MovieSkeleton } from "../movie-skeleton/MovieSkeleton";
import { MovieContent } from "../movie-content/MovieContent";
import styles from "./MovieDetailsPage.module.scss";

export function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <NotFoundPage />;

  const { data, status } = useMovie(id);

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  const renderContent = () => {
    if (status === "loading") return <MovieSkeleton />;
    if (status === "error") return <ErrorMessage />;
    if (!data) return <EmptyState text="Movie not found" />;
    return <MovieContent data={data} />;
  };

  return (
    <Section title="Movie details">
      <div className={styles.header}>
        <button className={styles.back} onClick={handleBack}>
          Back
        </button>
      </div>

      <div className={styles.content}>{renderContent()}</div>
    </Section>
  );
}
