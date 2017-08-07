import React from 'react';


import AddTodo from '../components/AddTodo.js';
import TodoList from '../components/TodoList'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      Todoitem: ''
    }
  }
  //function which take the value to form
  onTodoTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //function which add an item on list
  AddTodoItems(e) {
    e.preventDefault();
    let Todoitem = { item: this.state.Todoitem }
    let Todos = this.state.Todos.concat(Todoitem);
    this.setState({
      Todos,
      Todoitem: ""
    })
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Todo App</h1>
        <AddTodo
          onTodoTextChange={(e) => this.onTodoTextChange(e)}
          AddTodoItems={(e) => this.AddTodoItems(e)}
          Todoitem={this.state.Todoitem}
        />
        <TodoList Todos={this.state.Todos} />
      </div>
    )
  }
}
