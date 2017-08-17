import React from 'react';

import { TodoList, AddTodo } from '../components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      todoInput: '',
      image: '',
      updateImage: '',
      preview: false
    }
  }
  onTOdoChange(e) {
    this.setState({
      todoInput: e
    })
  }
  onImageChange(url) {
    this.setState({
      image: url,
      preview: true
    })
  }
  onUpdateImage(url) {
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
      Todos: Todos,
      preview: false
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
    selctedTodo.image = this.state.image
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
          preview={this.state.preview}
        />
        <TodoList
          Todos={this.state.Todos}
          deleteItem={(i) => this.deleteItem(i)}
          updateItem={(i, updateValue) => this.updateItem(i, updateValue)}
          onImageChange={(url) => this.onImageChange(url)}
          image={this.state.image}
          onUpdateImage={(url) => this.onUpdateImage(url)}
        />
      </div>
    )
  }
}