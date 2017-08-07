import React from 'react';

export default class AddTodo extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.AddTodoItems}>
                    <input
                        name='Todoitem'
                        onChange={this.props.onTodoTextChange}
                        value={this.props.Todoitem}
                        type="text"
                    />
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}
