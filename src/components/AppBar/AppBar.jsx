import React from 'react';
import styles from './AppBar.scss';
import { Search } from '../Search/Search';
import { Checkbox } from '../Checkbox/Checkbox';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export let AppBar = props => {

  return <header className={styles.appBar}>
  <h1>{props.title}</h1>
  <div className={styles.filter}>
    <Checkbox
      id="isActiveOnly"
      checked={props.isActiveOnly}
      onClick={props.isActiveOnlyHandler}
    />
    <label
      style={{marginRight: '1.2em'}}
      htmlFor="isActiveOnly">Show active
    </label>
    <Search
      value={props.searchValue}
      onChange={props.searchOnChange}
      onClick={props.searchOnClick}
    />
  </div>
  <ProgressBar value={props.progress}/>
  </header>
}
