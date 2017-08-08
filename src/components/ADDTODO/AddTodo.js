import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TodoList from '../TODOLIST/TodoList'
export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Todos: [],
        }
    }
    AddTodoItems(e) {
        e.preventDefault();
        let Todoitem = { item: this.refs.todovalue.getValue() }
        let Todos = this.state.Todos.concat(Todoitem);
        this.setState({
            Todos: Todos
        })
    }
    render() {
        const style = {
            marginRight: 20,
            parentdiv: {
                marginLeft: "40%"
            }
        };
        return (
            <div style={style.parentdiv}>
                <form onSubmit={() => this.AddTodoItems()}>
                    <TextField
                        hintText="Enter items"
                        floatingLabelText="Add som itmes"
                        name='Todoitem'
                        ref="todovalue"
                        type="text"
                    />
                    <FloatingActionButton mini={true} style={style}>
                        <ContentAdd onClick={(e) => this.AddTodoItems(e)} />
                    </FloatingActionButton>
                </form>
                <TodoList Todos={this.state.Todos} />
            </div>
        )
    }
}
