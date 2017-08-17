import React from 'react';

import Model from '../dialogBox/model';
import TodoItem from '../todoItem/todoItem';
export default class TodoList extends React.Component {
    state = {
        toggle: false
    }
    toggleDialog() {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        const { Todos } = this.props;
        const style = {
            parenDiv: {
                Width: "100%",
                mrgin: "0px auto",
            }
        }
        return (
            <div style={style.parenDiv}>
                {Todos.map((text, index) => {
                    return (
                        <div key={index} style={style.container}>
                            <TodoItem
                                index={index}
                                 toggleDialog={() => this.toggleDialog()}
                                todo={text.todoInput}
                                updateItem={this.props.updateItem}
                                deleteItem={(i) => this.props.deleteItem(i)}
                                image={text.image}
                            />
                            <Model
                                isOpen={this.state.toggle}
                                toggleDialog={() => this.toggleDialog()}
                                index={index}
                                todo={text.todoInput}
                                updateItem={this.props.updateItem}
                                image={text.image}
                                updateImage={this.props.image}
                                onUpdateImage={this.props.onUpdateImage}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}