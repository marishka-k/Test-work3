import ButtonMain from "../button/button-main/button-main";
import styles from "./tezises.module.css";

export default function Tezises() {
  return (
    <div className={styles.content}>
      <div className={styles.tezises}>
        <p className={`${styles.tezis} ${styles.tezis_left}`}> Превратите уездный город </p>
        <p className={`${styles.tezis} ${styles.tezis_center}`}> в столицу </p>
        <p className={`${styles.tezis} ${styles.tezis_right}`}> земного шара </p>
      </div>
      <p className={styles.pay}>Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</p>
      <div className={styles.buttons}>
        <ButtonMain isColor={true} text="Поддержать шахматную мысль" />
        <ButtonMain isColor={false} text="Подробнее о турнире" />
      </div>
    </div>
  );
}
