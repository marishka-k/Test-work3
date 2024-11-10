import styles from "./button-dot.module.css";

export default function ButtonDot({onClick, isDisabled}) {
 
  return (
      <button type="button" onClick={onClick} className={isDisabled ? `${styles.button} ${styles.disabled}` : styles.button}>
        
      </button>
    )
}
