import React from 'react';
import styles from './Checkbox.scss';

export let Checkbox = props => {
  return <input
    id={props.id}
    checked={props.checked}
    disabled={props.disabled}
    onClick={props.onClick}
    className={styles.checkbox}
    type="checkbox"/>
}
