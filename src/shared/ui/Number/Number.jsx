import styles from "./Number.module.scss";

export const Number = ({ index }) => (
  <div className={styles.numberContainer}>
    <span className={styles.number}>
      {index < 10 ? `0${index}` : index}
    </span>
    <span className={styles.numberDot}>
      .
    </span>
  </div>
);
