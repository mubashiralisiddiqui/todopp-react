import React from 'react';
import TodoList from './TodoList'
class AddTodo extends React.Component {
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
        let itemArray = this.state.Todos.concat(Todoitem);
        this.setState({
            Todos: itemArray,
            Todoitem: " "
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.AddTodoItems(e)}>
                    <input
                        name='Todoitem'
                        onChange={(e) => this.onTodoTextChange(e)}
                        type="text"
                    />
                    <button>ADD</button>
                    <TodoList Todos={this.state.Todos} />
                </form>
            </div>
        )
    }
}
export default AddTodo;