import React from 'react';
import styles from './Search.scss';

export let Search = props => {
  return <div className={styles.search}>
    <input
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      type="text"
    />
    <button
      onClick={props.onClick}
      disabled={props.value === undefined || props.value === ''}
      type="text"
    >🔍</button>
  </div>
}
