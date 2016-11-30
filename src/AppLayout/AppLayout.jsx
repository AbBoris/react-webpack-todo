import React from 'React';
import styles from './AppLayout.scss';

export let AppLayout = props => {
  return <div className={styles.wrap}>
    <div className={styles.header}>{props.header}</div>
    <div className={styles.main}>
      <div className={styles.left}>{props.left}</div>
      <div className={styles.right}>{props.right}</div>
    </div>
  </div>
}

