import { Link } from "react-router-dom";
import { routes } from "@shared/config/routes";
import styles from "./NotFound.module.scss";
import { FaHome } from "react-icons/fa";

export function NotFoundPage() {
  // const navigate = useNavigate();

  // const handleBackHome = () => navigate(routes.home);
  // const handleBack = () => navigate(-1);

  return (
    <div className="center">
      <div className={styles.notFound}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Movie not found</h2>

          <p className={styles.text}>
            Try another search or check the spelling.
          </p>

          <Link to={routes.home} className={styles.link}>
            <FaHome></FaHome>
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
