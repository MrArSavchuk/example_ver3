import styles from './Skeleton.module.scss';

export const Skeleton = ({ width, height }) => {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height }}
    />
  );
};


