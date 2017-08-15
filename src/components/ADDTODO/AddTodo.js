import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class AddTodo extends React.Component {

    getformval(e) {
        e.preventDefault();
        this.props.addTodo()
        this.refs.todoform.reset()
    }
    onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.props.onImageChange(e.target.result)
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    render() {
        const style = {
            marginRight: 20,
            parentdiv: {
                margin: "10px auto",
                width: '45%'
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
                                style={{ maxWidth: '300px', float: "left" }}
                                type="text"
                                bsSize="large"
                                placeholder="Enter text"
                                name='Todoitem'
                                inputRef={(ref) => { this.input = ref }}
                                onChange={(e) => this.props.onTOdoChange(e.target.value)}
                            />
                        </span>
                        <span>
                            <Button
                                bsSize="small"
                                style={{ marginLeft: "0.5em" }}
                                onClick={(e) => this.getformval(e)}
                                bsStyle='primary'
                            >
                                <ContentAdd />
                            </Button>
                        </span>
                        <br />
                        <span>
                            <input
                                type="file"
                                onChange={this.onImageChange.bind(this)}
                            />
                            <label>Add image</label>
                        </span>
                    </FormGroup>
                </form>
            </div>
        )
    }
}