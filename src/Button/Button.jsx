import React from 'react';
import styles from './Button.scss';

export let Button = props => {
  return <button
    onClick={props.onClick}
    className={styles.button}
    disabled={props.disabled}
  >{props.text}</button>
}
