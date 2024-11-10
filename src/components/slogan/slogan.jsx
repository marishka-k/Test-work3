import textdot from "../../images/textdot.png";
import styles from "./slogan.module.css";

const Dot = () => {
  return <img className={styles.dot} src={textdot} alt="text-dot"/>
}

export default function Slogan() {
  return (
    <div className={styles.content}>
      <p className={styles.slogan}> Дело помощи утопающим — дело рук самих утопающих! </p>
      <Dot/> 
      <p className={styles.slogan}> Шахматы двигают вперед не только культуру, но и экономику! </p>
      <Dot/>
      <p className={styles.slogan}> Лед тронулся, господа присяжные заседатели!</p>
      <Dot/>            
    </div>
  );
}
