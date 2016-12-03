import styles from './index.scss';
import React from 'react';

import { AppHeader } from './AppHeader/AppHeader';
import { TaskList } from './TaskList/TaskList';
import { CategoryList } from './CategoryList/CategoryList';
import { AppLayout } from './AppLayout/AppLayout';
// import { Input } from './Input/Input';
import { Input } from './components/Input/Input';
import { Button } from './Button/Button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategoryId: 0,
      newCategoryTitle: '',
      newSubtaskTitle: '',
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
        searchFocused: false,
        searchValue: ''
      }
    }
    this.toggleShowActive = this.toggleShowActive.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.searchBlurHandler = this.searchBlurHandler.bind(this);
    this.searchFocusHandler = this.searchFocusHandler.bind(this);
    this.categoryClickHandler = this.categoryClickHandler.bind(this);
    this.searchValueHandler = this.searchValueHandler.bind(this);
  }

  render() {
    return <Input/>
  }

  toggleShowActive() {
    this.state.filter.isActiveOnly = !this.state.filter.isActiveOnly;
    this.forceUpdate();
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
    this.state.activeCategoryId = c.id;
    this.forceUpdate();
  }

  searchValueHandler(se) {
    this.state.filter.searchValue = se.target.value;
    this.forceUpdate();
  }

  filterTasksBySearch(tasks, value) {
    console.log(value);
    let reg = new RegExp(`${value}`, 'gi');
    return tasks.filter(t => value ? t.title.match(reg): t);
  }

  addNewCategory() {
    this.state.categories.push({id: this.state.categories.length + 1, title: this.state.newCategoryTitle, tasks: []});
    this.state.newCategoryTitle = '';
    this.forceUpdate();
  }

  newCategoryTitleHandler(se) {
    this.state.newCategoryTitle = se.target.value;
    this.forceUpdate();
  }

  addNewSubtask() {
    let tasks = this.state.categories.find(c => c.id === this.state.activeCategoryId).tasks;
    tasks.push({id: tasks.length + 1, title: this.state.newSubtaskTitle, done: false});
    this.forceUpdate();
  }

  newSubtaskTitleHandler(se) {
    this.state.newSubtaskTitle = se.target.value;
    this.forceUpdate();
  }



  renderApp() {
    return <AppLayout
        header={
        <AppHeader
          searchFocused={this.state.filter.searchFocused}
          searchFocusHandler={this.searchFocusHandler}
          searchBlurHandler={this.searchBlurHandler}
          showActiveHandler={this.toggleShowActive}
          showActive={this.state.filter.isActiveOnly}
          title="Todo list"
          progressValue={this.getDonePersent(this.getTodos(this.state.categories))}
          searchValue={this.state.filter.searchValue}
          searchValueHandler={this.searchValueHandler}
        />}
        left={
        <div className={styles.categoriesColumn}>
          <div className={styles.addNewTask}>
            <Input onChange={this.newCategoryTitleHandler.bind(this)} value={this.state.newCategoryTitle} placeholder="Type new category here"/>
            <Button disabled={this.state.newCategoryTitle === '' ? true : false} onClick={this.addNewCategory.bind(this)} text="Add new caterogy"/>
          </div>
          <CategoryList
            categories={this.state.categories}
            activeCategoryId={this.state.activeCategoryId}
            categoryClickHandler={this.categoryClickHandler}
          />
        </div>}
        right={
        <div className={`${styles.tasksColumn} ${this.state.activeCategoryId === 0 && styles.marginTop}`}>
          {this.state.activeCategoryId !==0 && <div className={styles.addNewTask}>
            <Input onChange={this.newSubtaskTitleHandler.bind(this)} value={this.state.newSubtaskTitle} placeholder="Type new task here"/>
            <Button onClick={this.addNewSubtask.bind(this)} text="Add new subtask"/>
          </div>}
          <TaskList
            tasks={this.filterTasksBySearch(this.getTodos(this.state.categories.filter(c => this.state.activeCategoryId!==0 ? c.id === this.state.activeCategoryId : c)).filter(t => this.state.filter.isActiveOnly ? !t.done : t), this.state.filter.searchValue)}
            toggleHandler={this.toggleTodo}
          />
        </div>}
      />
  }
}
