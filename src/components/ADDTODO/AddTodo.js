import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddPhoto from 'material-ui/svg-icons/editor/attach-file';

import './addtodo.css'

export default class AddTodo extends React.Component {

    getformval(e) {
        e.preventDefault();
        this.props.addTodo()
        this.refs.todoform.reset()
    }
    selectImage(event) {
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
                width: '45%',
                height: "05em",
                display: "flex",
                border: "2px solid orange",
                borderRadius: "5px",
                padding: "0px auto"

            },
            firstChild: {
                width: "80%",
                height: "5em",
                margin: "10px",
                padding: "0.5em"

            },
            secondChild: {
                width: "10%",
                height: "5em",
                margin: "10px",
                padding: "5px "
            },
            thirdChild: {
                width: "10%",
                height: "5em",
                margin: "10px",
                padding: "10px "
            },
            image: {
                width: "150px",
                height: "150px",
                margin: "0px auto"
            }
        };
        return (
            <div>
                <div style={style.parentdiv}>
                    <div style={style.firstChild}>
                        <form ref="todoform" onSubmit={(e) => this.getformval(e)}>
                            <div className="form-group">
                                <FormGroup
                                    bsSize="large"
                                >
                                    <span >
                                        <FormControl
                                            className="form-control"
                                            type="text"
                                            bsSize="large"
                                            placeholder="Enter text"
                                            name='Todoitem'
                                            inputRef={(ref) => { this.input = ref }}
                                            onChange={(e) => this.props.onTOdoChange(e.target.value)}
                                        />
                                    </span>
                                </FormGroup>
                            </div>
                        </form>
                    </div>
                    <div style={style.secondChild}>
                        <span>
                            <Button
                                bsSize="small"
                                onClick={(e) => this.getformval(e)}
                                bsStyle='primary'
                            >
                                <ContentAdd />
                            </Button>
                        </span>
                        <br />
                    </div>
                    <div style={style.thirdChild}>
                        <span>

                            <div className="image-upload" >
                                <label htmlFor="file-input">
                                    <AddPhoto />
                                </label>

                                <input
                                    id="file-input"
                                    type="file"
                                    onChange={(e) => this.selectImage(e)}
                                />
                            </div>

                        </span>
                    </div>
                </div>
                {this.props.preview ?
                    <div id="image" style={style.image}>
                        <a href={this.props.image}>
                            <img
                                src={this.props.image}
                                style={{ width: "24vh", height: "24vh" }}
                                alt="select bove"
                            />
                        </a>
                    </div>
                    : null}

            </div>
        )
    }
}