import React from 'react';
import styles from './ProgressBar.scss';


export let ProgressBar = props => {
  return <div className={styles.progressBar}>
    <div
      style={{"width": `${props.value}%`}}
      className={styles.progressBarMeter}
    ></div>
  </div>
}
