import styles from "./button-main.module.css";

export default function ButtonMain({isColor, text}) {
 
  return (
      <button type="button" onClick={() => console.log('меня нажали')} className={isColor ? `${styles.button_black} ${styles.button}` : styles.button}>
        {text}
      </button>
    )
}
