import arrow from '../../../images/arrow.png'
import styles from "./button-left.module.css";

export default function ButtonLeft({onClick, isDisabled}) {
 
  return (
    <button type="button" onClick={onClick} className={isDisabled ? `${styles.button} ${styles.disabled}` : styles.button}>
        <img className={styles.arrow} src={arrow} alt="назад"/>   
      </button>
    )
}
