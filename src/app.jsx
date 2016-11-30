import styles from './index.scss';
import React from 'react';

import { AppHeader } from './AppHeader/AppHeader';
import { TaskList } from './TaskList/TaskList';
import { CategoryList } from './CategoryList/CategoryList';
import { AppLayout } from './AppLayout/AppLayout';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      activeCategoryId: undefined,
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
				isActiveOnly: true,
        searchFocused: false
			}
		}
		this.toggleShowActive = this.toggleShowActive.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
    this.searchBlurHandler = this.searchBlurHandler.bind(this);
    this.searchFocusHandler = this.searchFocusHandler.bind(this);
    this.categoryClickHandler = this.categoryClickHandler.bind(this);
	}

	toggleShowActive() {
		this.setState({filter: {isActiveOnly: !this.state.filter.isActiveOnly}});
	}

	toggleTodo(todo) {
		todo.done = !todo.done;
		this.forceUpdate();
	}

	getDonePersent(todos) {
		return (todos.filter(t => t.done).length / todos.length) * 100;
	}

	getTodos(categories) {
		return categories.reduce((prev, current) => prev.concat(current.tasks), []);
	}

  searchFocusHandler() {
    this.state.filter.searchFocused = true;
    this.forceUpdate();
  }

  searchBlurHandler() {
    this.state.filter.searchFocused = false;
    this.forceUpdate();
  }

  categoryClickHandler(c) {
    this.setState({activeCategoryId: c.id});
  }

  render() {
    return (
      <AppLayout
        header={
        <AppHeader
          searchFocused={this.state.filter.searchFocused}
          searchFocusHandler={this.searchFocusHandler}
          searchBlurHandler={this.searchBlurHandler}
          showActiveHandler={this.toggleShowActive}
          showActive={this.state.filter.isActiveOnly}
          title="Todo list"
          progressValue={this.getDonePersent(this.getTodos(this.state.categories))}
        />}
        left={<CategoryList categories={this.state.categories} categoryClickHandler={this.categoryClickHandler}/>}
        right={<TaskList tasks={this.getTodos(this.state.categories.filter(c => this.state.activeCategoryId ? c.id === this.state.activeCategoryId : c)).filter(t => this.state.filter.isActiveOnly ? !t.done : t)} toggleHandler={this.toggleTodo}/>}
      />
    )
  }
}
