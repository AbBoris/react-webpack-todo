import React from 'react';
import styles from './CategoryItem.scss';

export let CategoryItem = props => {
  return <li
    onClick={props.onClick}
  >{props.title}</li>
}
