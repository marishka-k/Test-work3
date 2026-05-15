import styles from "./top-background.module.css";
import backgroundImg from '../../images/main_image.png'; 

export default function TopBackground() {
  return <div className={styles.background} aria-hidden="true" />;
}
