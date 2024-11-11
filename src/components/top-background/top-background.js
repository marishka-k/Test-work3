import styles from "./top-background.module.css";

export default function TopBackground() {
  return (
    <div className = {styles.content}>
      <div className = {styles.back_color}>
          <div className = {styles.back_img}></div>
          <div className = {styles.back_mask}></div>
          <div className = {styles.front_img}></div>
      </div>
  </div>
  );
}
