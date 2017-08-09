import React from 'react';
import TextField from 'material-ui/TextField';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AccountBalance from 'material-ui/svg-icons/content/add-circle';

export default class AddTodo extends React.Component {
    getformval(e) {
        e.preventDefault();
        let inputvalue = this.input.value
        this.props.addTodo(inputvalue)
        this.refs.todoform.reset()
    }
    render() {
        const style = {
            marginRight: 20,
            parentdiv: {
               margin:"10px auto",
               width:'40%'
            }
        };
        return (
            <div style={style.parentdiv}>
                <form ref="todoform" onSubmit={(e) => this.getformval(e)}>
                    <FormGroup
                        bsSize="large"           
                    >
                        <span>
                            <FormControl
                                style={{ maxWidth: '250px',float:"left" }}
                                type="text"
                                bsSize="large"
                                placeholder="Enter text"
                                name='Todoitem'
                                inputRef={(ref) => { this.input = ref }}

                            /></span>
                        <span>
                            <Button
                                 bsSize="small"
                                 style={{ marginLeft:"0.5em"}} 
                                onClick={(e) => this.getformval(e)}
                                bsStyle='primary'
                            ><ContentAdd />
                            </Button>
                        </span>

                    </FormGroup>
                </form>
            </div>
        )
    }
}