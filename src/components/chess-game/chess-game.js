import ches1 from '../../images/ches1.jpg'
import ches2 from '../../images/ches2.jpg'
import styles from './chess-game.module.css'
import Table from './table/table'

export default function ChessGame({ windowWidth }) {
  return (
    <div className={styles.content} >
      {windowWidth > 1290
      ? <div className={styles.ches_one}>
          <p className={styles.main_text}> Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: <span className={styles.red}>«Плодотворная дебютная идея»</span> </p>
                      
          <img className={styles.ches_image_one} src={ches1} alt="шахматы"/> 
         
        </div>
      : <div className={styles.ches_one}>
          <p className={styles.main_text}> Чтобы поддержать Международный васюкинский турнир </p> 
          
          <img className={styles.ches_image_one} src={ches1} alt="шахматы"/> 
          
          <p className={styles.main_text}> посетите лекцию на тему: <span className={styles.red}>«Плодотворная дебютная идея»</span> </p>
        </div>
      }
      <div className={styles.ches_two}>
        <img className={styles.ches_image_two} src={ches2} alt="шахматы"/> 
        <div className={styles.main_text_two}>
          <p className={styles.main_text}> и Сеанс <span className={styles.red}>{`одновременной игры в шахматы на${'\u00A0'}160 досках `}</span>{`гроссмейстера О.${'\u00A0'}Бендера`}</p>
          <Table/>
          <p className={styles.remark}>По всем вопросам обращаться в администрацию к К. Михельсону</p>
        </div>        
      </div>
    </div>
  )  
}
