import React from 'react';

import {AddTodo} from '../components';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Todo App</h1>
        <AddTodo/>   
      </div>
    )
  }
}
