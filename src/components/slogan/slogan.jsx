import React from 'react';
import textdot from "../../images/textdot.png";
import styles from "./slogan.module.css";

const Dot = () => {
  return <img className={styles.dot} src={textdot} alt="text-dot"/>
}

const slogans = [
  "Дело помощи утопающим — дело рук самих утопающих!",
  "Шахматы двигают вперед не только культуру, но и экономику!",
  "Лед тронулся, господа присяжные заседатели!"
];

export default function Slogan() {
  const renderGroup = (keyPrefix) => (
    <div className={styles.group} key={keyPrefix}>
      {slogans.map((text, index) => (
        <React.Fragment key={`${keyPrefix}-${index}`}>
          <p className={styles.slogan}>{text}</p>
          {/* Если Dot это отдельный компонент: <Dot /> */}
          {/* Если Dot это просто стилизованный div: */}
          <div className={styles.dot} />
        </React.Fragment>
      ))}
    </div>
  );


  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {/* Первая группа (видимая) */}
        {renderGroup('set1')}
        
        {/* Вторая группа (копия для бесшовности) */}
        {renderGroup('set2')}
      </div>
    </div>
  );
}
