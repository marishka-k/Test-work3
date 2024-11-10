import StageList from "./stage-list/stage-list";
import plain from "../../images/plain.png";
import styles from "./stages.module.css";

export default function Stages() {

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Этапы преображения</h2>
      <div className={styles.title_block}>
        <h2 className={styles.title}>Васюков</h2>
        <p className={styles.remark}>Будущие источники обогащения васюкинцев</p>
        <img className={styles.plain_mobile} src={plain} alt="plain_mobile"/>
      </div>
      <StageList/>
    </div>
  );
}
