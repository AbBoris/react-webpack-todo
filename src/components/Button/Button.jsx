import React from 'react';
import styles from './Button.scss';

export let Button = props => {
  return <button
  onClick={props.onClick}
  disabled={props.disabled}
  className={styles.button}
  >{props.text}</button>
}
