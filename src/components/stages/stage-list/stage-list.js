import Stage from "./stage/stage";
import plain from "../../../images/plain.png";
import styles from "./stage-list.module.css";

export default function StageList () {
  return (
    
      <ul className={styles.list}>
        <li className={styles.area_1}>
          <Stage number='1' text='Строительство железнодорожной магистрали Москва-Васюки' />
          <img className={styles.plain_mobile} src={plain} alt="plain_mobile"/> 
        </li>
        <li className={styles.area_2}>
        <Stage number='2' text='Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов' />
        </li>
        <li className={styles.area_3}>
          <Stage number='3' text='Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет' />
        </li>
        <li className={styles.area_4}>
          <Stage number='4' text={`Строительство дворца для${'\u00A0'}турнира`} />
        </li>
        <li className={styles.area_5}>
          <Stage number='5' text={`Размещение гаражей для${'\u00A0'}гостевого автотранспорта`} />
        </li>
        <li className={styles.area_6}>
          <Stage number='6' text='Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов' />
        </li>
        <li className={styles.area_7}>
          <Stage number='7' text={`Создание аэропорта «Большие Васюки» с${'\u00A0'}регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн`} />
          <img className={styles.plain_decktop} src={plain} alt="plain_desctop"/> 
        </li>
      </ul>
       
    
  )
    
}