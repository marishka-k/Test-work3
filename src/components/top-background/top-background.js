import styles from "./top-background.module.css";

export default function TopBackground() {
  return (
    <div className={styles.background}>
      <div className={styles.back_1}></div>
      <div className={styles.back_2}></div>
      <div className={styles.back_3}></div>
    </div>
  );
}

