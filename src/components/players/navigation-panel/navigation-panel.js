import ButtonLeft from "../../button/button-left/button-left";
import ButtonRight from "../../button/button-right/button-right";

import styles from "./navigation-panel.module.css";

export default function NavigationPanel({ leftButtonKlick, rightButtonKlick, selectedPlayers, arrLength }) {
  const lastActiveIndex = selectedPlayers[selectedPlayers.length - 1]
  const firstActiveIndex = selectedPlayers[0]

  
  return (
    <div className={styles.navigation}>
      <ButtonLeft onClick={leftButtonKlick} isDisabled={firstActiveIndex === 1}/>
      <p className={styles.counter}>{lastActiveIndex} <span className={lastActiveIndex !== arrLength ? `${styles.counter} ${styles.counter_disabled}` : styles.counter}>{` / ${arrLength}`}</span></p>      
      <ButtonRight onClick={rightButtonKlick} isDisabled={lastActiveIndex === arrLength}/>
    </div>
  );
}
