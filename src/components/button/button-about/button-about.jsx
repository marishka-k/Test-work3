import styles from "./button-about.module.css";

export default function ButtonAbout() {
 
  return (
      <button type="button" onClick={() => console.log('меня нажали')} className={styles.button}>
       Подробнее
      </button>
    )
}
