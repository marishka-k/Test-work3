import logo from "../../images/logo.svg";
import styles from './app-header.module.css'


export default function Header () {  
    
      return (
        <header className={styles.header}>
          <img className={styles.logo} src={logo} alt="logo"/>            
        </header>
      );

}