import React from 'react';
import styles from './TaskList.scss';

export let TaskList = (props) => {

	let renderTaskItem = (t) => {
		return <li key={t.id}>
		<input type="checkbox" checked={t.done} onChange={props.toggleHandler.bind(this, t)}/>
		{t.title}
		</li>
	}


	return <ul>
		{props.tasks.map(t => renderTaskItem(t))}
	</ul>
}
