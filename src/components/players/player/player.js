import avatar from '../../../images/avatar.png'
import ButtonAbout from '../../button/button-about/button-about'
import styles from './player.module.css'

export default function Player ({player}) {
  return (
    <li className={styles.player}>
      <img className={styles.avatar} src={avatar} alt="avatar"/>
      <h3 className={styles.name}>{player.name}</h3>
      <p className={styles.rank} >{player.rank}</p>
      <ButtonAbout/>
    </li>
  )
  
}