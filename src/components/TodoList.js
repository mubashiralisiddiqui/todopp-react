import React from 'react';

//this is list component
class TodoList extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.Todos.map((text, index) => {
                        return (
                            <li key={index}>{text.item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default TodoList;