import React from 'react';
import styles from './CategoryList.scss';

export let CategoryList = props => {
  let renderCategoryItem = (c) => {
    return <li onClick={props.categoryClickHandler.bind(this, c)} className={`${styles.categoryListItem} ${props.activeCategoryId === c.id && styles.categoryListItem__active}`} key={c.id}>
      {c.title}
    </li>
  }

  return <ul className={styles.categoryList}>
  <li onClick={props.categoryClickHandler.bind(this, {id: 0})} className={`${styles.categoryListItem} ${props.activeCategoryId === 0 && styles.categoryListItem__active}`} key={0}>All</li>
  {props.categories.map(c => renderCategoryItem(c))}
  </ul>
}
