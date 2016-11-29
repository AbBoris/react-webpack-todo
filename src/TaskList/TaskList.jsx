import React from 'react';
import styles from './TaskList.scss';

export let TaskList = (props) => {

	let renderTaskItem = (t) => {
		return <li key={t.id}>
		<input type="checkbox" checked={t.done}/>
		{t.title}
		</li>
	}


	return <ul>
		{props.tasks.map(t => renderTaskItem(t))}
	</ul>
}
