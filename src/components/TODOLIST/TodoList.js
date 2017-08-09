import React from 'react';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { List, ListItem } from 'material-ui/List';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class TodoList extends React.Component {
    state = {
        value: 'abc'
    }
    render() {
        const { Todos } = this.props;
        const style = {
            parenDiv: {
                Width: "100%",
                mrgin: "0px auto",
            },
            listContainer: {
                maxWidth: '350px',
                border: '2px solid gray',
                borderRadius: "10px",
                marginLeft: '30%',
                height: "50px",
                padding: "08px",
                fontFamily: "Times New Roman Georgia Serif",
                fontSize: "20px",



            }
        }
        return (
            <div style={style.parenDiv}>
                {Todos.map((text, index) => {
                    return (
                        <div key={index} style={style.listContainer} >
                            {this.props.isEdit ?
                                <input type="text"
                                ref="updateValue"
                                    placeholder={text}
                                    
                                    style={{ maxWidth: "200px" }}
                                /> :
                                <span>{text}</span>
                            }

                            <span>
                                <ButtonToolbar style={{ float: "right" }}>
                                    {this.props.isEdit ?
                                        <div>
                                            <Button onClick={() => this.props.updateItem(index,this.refs.updateValue.value)}>Save</Button>
                                            <Button bsStyle="primary" onClick={this.props.toggleInput}>Cancel</Button>
                                        </div> :
                                        <div>
                                            <Button onClick={this.props.toggleInput}>Edit</Button>
                                            <Button bsStyle="danger" onClick={() => this.props.deleteItem()}>Delete</Button>
                                        </div>}
                                </ButtonToolbar>
                            </span>


                        </div>
                    )
                })}
            </div>
        )
    }
}