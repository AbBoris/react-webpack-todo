import styles from './index.scss';
import React from 'react';

import { AppHeader } from './AppHeader/AppHeader';
import { TaskList } from './TaskList/TaskList';
import { CategoryList } from './CategoryList/CategoryList';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{
					id: 1,
					title: "Learn",
					tasks: [
						{id: 1, title: "React", done: false},
						{id: 2, title: "Redux", done: false},
						{id: 3, title: "Angular", done: true},
						{id: 4, title: "JS", done: false}
					]
				},
				{
					id: 2,
					title: "Buy",
					tasks: [
						{id: 5, title: "Milk", done: true},
						{id: 6, title: "Bread", done: false},
						{id: 7, title: "Cheese", done: true},
						{id: 8, title: "Meat", done: false}
					]
				}
			],
			filter: {
				showActive: true
			}
		}

	}


  render() {
    return (
      <div>
				<AppHeader showActive={this.state.filter.showActive} title="Todo list"/>
				<main>
					<CategoryList categories={this.state.categories}/>
					<TaskList tasks={this.state.categories.reduce((prev, current) => prev.concat(current.tasks), [])}/>
				</main>
      </div>
    )
  }
}
