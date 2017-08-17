import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class TodoItem extends Component {
    state = {
        toggle: false
    }
    toggleDialog() {
        console.log("open ===")
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
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
                height: "50px auto",
                padding: "08px",
                fontFamily: "Times New Roman Georgia Serif",
                fontSize: "20px",
            }
        }
        const props = this.props;
        return (
            <div key={props.index} style={style.listContainer} >
                <span>{props.todo}</span>
                <span>
                    <ButtonToolbar style={{ float: "right" }}>
                        <div>
                            <Button
                                onClick={() => this.props.toggleDialog()}
                            >
                                Edit
                            </Button>
                            <Button bsStyle="danger" onClick={() => this.props.deleteItem(props.index)}>Delete</Button>
                        </div>
                    </ButtonToolbar>
                    <br />
                    <div>
                        <img alt="your snap" src={this.props.image} style={{ width: "200px", height: "100px" }} />
                    </div>
                </span>
            </div>
        )
    }
}
