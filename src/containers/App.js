import React from 'react';

import { TodoList, AddTodo,UpdateDialog } from '../components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      isOpen:false,
      isEdit:false,
     updateValue: 'abc'
    }
  }
  addTodo(inputval) {
    const Todoitem = inputval
    const Todos = this.state.Todos.concat(Todoitem);
    this.setState({
      Todos,
    })
  }
  deleteItem(i) {
    this.state.Todos.splice(i, 1)
    this.setState({
      Todos: this.state.Todos ? this.state.Todos : []
    })
  }
  toggleInput(){
    console.log(this.state.isEdit)
    this.setState({
      isEdit:!this.state.isEdit,
      
    })
  }
  onUpdateValue(e){
    this.setState({
         updateValue:e.target.value
    })
        console.log(this.state.updateValue)
  }
  updateItem(i,updateValue){
    console.log("=======",i,updateValue)
    let selectedItem=this.state.Todos[i];
    
    this.state.Todos[i] = updateValue
    
    console.log("update ", this.state.Todos)
    this.setState({
      Todos: this.state.Todos,
      isEdit:!this.state.isEdit
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
        <TodoList
          Todos={this.state.Todos}
          deleteItem={(i) => this.deleteItem(i)}
          updateItem={(i,updateValue)=>this.updateItem(i,updateValue)}
          toggleDialog={()=>this.toggleDialog()}
          isEdit={this.state.isEdit}
          toggleInput={()=>{this.toggleInput()}}
          onUpdateValue={(e)=>this.onUpdateValue(e)}
          updateValue={this.state.updateValue}
        />
      </div>
    )
  }
}