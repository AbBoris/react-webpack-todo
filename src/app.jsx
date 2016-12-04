import styles from './index.scss';
import React from 'react';

import { AppBar } from './components/AppBar/AppBar';
import { CategoryList } from './components/CategoryList/CategoryList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isActiveOnly: false};
    this.isActiveOnlyHandler = this.isActiveOnlyHandler.bind(this);
  }

  isActiveOnlyHandler() {
    this.state.isActiveOnly = !this.state.isActiveOnly;
    this.forceUpdate();
  }

  render() {
    return <div className={styles.wrap}>
      <AppBar
        title="Todo list"
        searchValue=""
        isActiveOnly={this.state.isActiveOnly}
        isActiveOnlyHandler={this.isActiveOnlyHandler}
      />
      <CategoryList
        items={[{id: 1, title: "Хуй", categories: [{id: 4, title: "Хуй", categories: [{id: 5, title: "Хуй"}]}]}, {id: 2, title: "Хуй"}, {id: 3, title: "Хуй"}]}
      />
    </div>
  }

}
