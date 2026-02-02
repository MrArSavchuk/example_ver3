import styles from "./Number.module.scss";
import { getStyles } from "../../lib";

export const Number = ({ index }) => (
  <div className={styles.numberContainer}>
    <span className={styles.number}>
      {index < 10 ? `0${index}` : index}
    </span>
    <span className={getStyles(styles.number, {}, [styles.numberDot])}>
      .
    </span>
  </div>
);
