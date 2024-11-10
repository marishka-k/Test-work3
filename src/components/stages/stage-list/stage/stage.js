import styles from "./stage.module.css";

export default function Stage({ number, text }) {
  return (
    <div className={styles.content}>
      <span className={styles.background1}></span>
      <span className={styles.background2}></span>
      <div className={styles.stage}>
        <p className={styles.number}>{number}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
