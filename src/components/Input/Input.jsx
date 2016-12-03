import React from 'react';
import styles from './Input.scss';

export let Input = props => {
  return <input
  onChange={props.onChange}
  value={props.value}
  placeholder={props.placeholder}
  type="text"
  className={styles.input}
  />
}
