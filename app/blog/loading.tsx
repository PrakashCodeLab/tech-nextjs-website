import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading__body__container}>
      <div className={styles.loading__animation}></div>
    </div>
  );
}

export default Loading;
