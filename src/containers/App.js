import React from 'react';
import AddTodo from '../components/AddTodo.js'
class App extends React.Component {

  render() {

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Todo App</h1>
        <AddTodo />
      </div>
    )
  }
}
export default App;