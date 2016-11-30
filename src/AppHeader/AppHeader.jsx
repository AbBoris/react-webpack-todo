import React from 'react';
import styles from './AppHeader.scss';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Search } from '../Search/Search';

export let AppHeader = props => {
	return <header className={styles.appHeader}>
		<h1>{props.title}</h1>
		<div className={styles.filter}>
			<label>
				<input type="checkbox" onChange={props.showActiveHandler} checked={props.showActive}/>
				Show active
			</label>
			<Search focused={props.searchFocused} focusHandler={props.searchFocusHandler} blurHandler={props.searchBlurHandler}/>
		</div>
		<div className={styles.progressBarWrap}>
			<ProgressBar value={props.progressValue}/>
		</div>
	</header>
}
