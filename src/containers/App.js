import React from 'react';

import { TodoList, AddTodo } from '../components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: []
    }
  }
  addTodo(inputval) {
    const Todoitem = { item: inputval }
    const Todos = this.state.Todos.concat(Todoitem);
    this.setState({
      Todos
    })
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Todo App</h1>
        <AddTodo
          addTodo={(val) => this.addTodo(val)}
          Todoitem={this.state.Todoitem}
        />
        <TodoList Todos={this.state.Todos} />
      </div>
    )
  }
}