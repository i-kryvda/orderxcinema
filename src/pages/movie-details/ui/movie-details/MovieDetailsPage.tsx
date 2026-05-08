import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { NotFoundPage } from "@pages/not-found/NotFoundPage";
import { useMovie } from "@entities/movie/model/useMovie";
import { MoviesSection } from "@shared/ui/movies-section/MoviesSection";
import { MovieSkeleton } from "../movie-skeleton/MovieSkeleton";
import { MovieContent } from "../movie-content/MovieContent";
import { ErrorMessage } from "@shared/ui/error-message/ErrorMessage";
import styles from "./MovieDetailsPage.module.scss";

export function MovieDetailsPage() {
  const { id } = useParams();
  if (!id) return <NotFoundPage />;
  const { data, status } = useMovie(id);

  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  let content;

  if (status === "loading") {
    content = <MovieSkeleton />;
  } else if (status === "error") {
    content = <ErrorMessage />;
  } else if (status === "not-found") {
    content = <NotFoundPage />;
  } else if (status === "success" && data) {
    content = <MovieContent data={data} />;
  }

  return (
    <MoviesSection title="Movie details">
      <div className={styles.header}>
        <button className={styles.back} onClick={handleBack}>
          <IoArrowBack size={20} />
          Back
        </button>
      </div>
      <div className={styles.content}>{content}</div>
    </MoviesSection>
  );
}
