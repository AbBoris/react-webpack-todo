import React from 'react';
import styles from './CategoryList.scss';

export let CategoryList = (props) => {
	let renderCategoryItem = (c) => {
		return <li key={c.id}>
			{c.title}
		</li>
	}

	return <ul>
	{props.categories.map(c => renderCategoryItem(c))}
	</ul>
}
