import styles from "./button-main.module.css";

export default function ButtonMain({isColor, text, targetId}) {

  const handleScroll = () => {
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
        block: 'start',     // Выравнивание по верхнему краю элемента
      });
    }
  };
 
  return (
      <button type="button" onClick={handleScroll} className={isColor ? `${styles.button_black} ${styles.button}` : styles.button}>
        {text}
      </button>
    )
}
