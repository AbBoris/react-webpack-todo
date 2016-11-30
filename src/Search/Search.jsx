import React from 'react';
import styles from './Search.scss';

export let Search = props => {
  return <div className={styles.search}>
  <input className={`${styles.searchField} ${props.focused && styles.searchField__active}`} onFocus={props.focusHandler} onBlur={props.blurHandler}></input>
  <button className={`${styles.searchIconButton} ${props.focused && styles.searchIconButton__active}`}>🔍</button>
  </div>
}
