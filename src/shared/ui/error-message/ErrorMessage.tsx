import styles from "./ErrorMessage.module.scss";

type Props = {
  onRetry?: () => void;
};

export function ErrorMessage({ onRetry }: Props) {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Something went wrong</h2>

      <p className={styles.text}>Failed to load data. Please try again.</p>

      {onRetry && (
        <button type="button" className={styles.button} onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
