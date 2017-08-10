import React from 'react';
import TodoItem from '../todoItem/todoItem';

export default class TodoList extends React.Component {
    render() {
        const { Todos } = this.props;
        const style = {
            parenDiv: {
                Width: "100%",
                mrgin: "0px auto",
            },
        }
        return (
            <div style={style.parenDiv}>
                {Todos.map((text, index) => {
                    return (
                        <TodoItem
                            key={index}
                            index={index}
                            todo={text}
                            updateItem={this.props.updateItem}
                            deleteItem={(i) => this.props.deleteItem(i)}
                        />
                    )
                })}
            </div>
        )
    }
}