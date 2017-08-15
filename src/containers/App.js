import React from 'react';

import { TodoList, AddTodo, } from '../components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      todoInput: '',
      image: ''
    }
  }
  onTOdoChange(e) {
    this.setState({
      todoInput: e
    })
  }
  onImageChange(url) {
    this.setState({
      image: url
    })
  }
  addTodo() {
    let obj = {
      todoInput: this.state.todoInput,
      image: this.state.image
    }
    let Todos = this.state.Todos.concat(obj);
    this.setState({
      Todos: Todos
    })

  }
  deleteItem(i) {
    this.state.Todos.splice(i, 1)
    this.setState({
      Todos: this.state.Todos ? this.state.Todos : []
    })
  }
  updateItem(i, updateValue) {
    const selctedTodo = this.state.Todos[i];
    selctedTodo.todoInput = updateValue
    this.setState({
      Todos: this.state.Todos,
    })
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Todo App</h1>
        <AddTodo
          addTodo={(val) => this.addTodo(val)}
          Todoitem={this.state.Todoitem}
          onTOdoChange={(e) => this.onTOdoChange(e)}
          todoinput={this.state.todoinput}
          onImageChange={(url) => this.onImageChange(url)}
          image={this.state.image}
        />
        <TodoList
          Todos={this.state.Todos}
          deleteItem={(i) => this.deleteItem(i)}
          updateItem={(i, updateValue) => this.updateItem(i, updateValue)}
        />
      </div>
    )
  }
}