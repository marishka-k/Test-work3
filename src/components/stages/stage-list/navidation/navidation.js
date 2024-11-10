import ButtonDot from "../../../button/button-dot/button-dot";
import ButtonLeft from "../../../button/button-left/button-left";
import ButtonRight from "../../../button/button-right/button-right";
import styles from './navidation.module.css'

export default function Navidation ({selected, setSelected}) {

  const leftButtonKlick = () => {
    if (selected !== '1') {
      setSelected(`${Number(selected) - 1}`)
    }  
   
  }

  const rightButtonKlick = () => {
    if (selected !== '5') {
      setSelected(`${Number(selected) + 1}`)
    }  
  }


  return (
    <div className={styles.buttons}>
      <ButtonLeft onClick={leftButtonKlick} isDisabled={selected === '1'}/>
      <div className={styles.dots}>
        <ButtonDot onClick={() => setSelected('1')} isDisabled={selected === '1'}/>
        <ButtonDot onClick={() => setSelected('2')} isDisabled={selected === '2'}/>
        <ButtonDot onClick={() => setSelected('3')} isDisabled={selected === '3'}/>
        <ButtonDot onClick={() => setSelected('4')} isDisabled={selected === '4'}/>
        <ButtonDot onClick={() => setSelected('5')} isDisabled={selected === '5'}/>
      </div>
      <ButtonRight onClick={rightButtonKlick} isDisabled={selected === '5'}/>
    </div>
  )
  
}