import React from 'react';
import styles from './CategoryList.scss';

export let CategoryList = props => {
	let renderCategoryItem = (c) => {
		return <li onClick={props.categoryClickHandler.bind(this, c)} className={styles.categoryListItem} key={c.id}>
			{c.title}
		</li>
	}

	return <ul className={styles.categoryList}>
	{props.categories.map(c => renderCategoryItem(c))}
	</ul>
}
