import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class AddTodo extends React.Component {
    getformval(e) {
        e.preventDefault();
        let inputvalue = this.refs.todovalue.getValue();
        this.props.addTodo(inputvalue)
        this.refs.todoform.reset()
    }
    render() {
        const style = {
            marginRight: 20,
            parentdiv: {
                marginLeft: "30%"
            }
        };
        return (
            <div style={style.parentdiv}>
                <form ref="todoform" onSubmit={(e) => this.getformval(e)}>
                    <TextField
                        type="text"
                        hintText="Enter items"
                        floatingLabelText="Add some items"
                        name='Todoitem'
                        ref="todovalue"
                    />
                    <FloatingActionButton mini={true} style={style}>
                        <ContentAdd onClick={(e) => this.getformval(e)} />
                    </FloatingActionButton>
                </form>
            </div>
        )
    }
}