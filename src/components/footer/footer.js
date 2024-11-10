import styles from "./footer.module.css";

export default function Footer() {
 
  return (
    <footer className={styles.footer}>
      <p className={styles.text} >Все персонажи, события и цитаты являются вымышленными и не принадлежат создателям сайта. С подробностями можно познакомиться в главе XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».</p>
    </footer>
  );
}
