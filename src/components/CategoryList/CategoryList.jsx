import React from 'react';
import styles from './CategoryList.scss'

let renderItem = item => {
	return <li key={item.id}>
    <span className={styles.category}>{item.title}</span>
    <ul>
      <li><span className={styles.subcategory}>{item.title}</span></li>
      <li><span className={styles.subcategory}>{item.title}</span></li>
    </ul>
  </li>
}

export let CategoryList = props => {
	return <ul className={styles.categotyList}>
  	{props.items.map(i => renderItem(i))}
  </ul>
}
