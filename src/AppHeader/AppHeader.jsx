import React from 'react';
import styles from './AppHeader.scss';

import { ProgressBar } from '../ProgressBar/ProgressBar';

export let AppHeader = props => {
	return <header className={styles.appHeader}>
		<h1>{props.title}</h1>
		<div className="filter">
			<label>
				<input type="checkbox" onChange={props.showActiveHandler} checked={props.showActive}/>
				Show active
			</label>
			<input type="search" placeholder="Search your todos"/>
		</div>
		<div className={styles.progressBarWrap}>
			<ProgressBar value={props.progressValue}/>
		</div>
	</header>
}
