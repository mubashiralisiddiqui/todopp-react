import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';
export default class Model extends React.Component {
    state = {
        todo: this.props.todo
    }
    handleChange(e) {
        this.setState({
            todo: e.target.value
        })
    }
    handleUpdate() {
        this.props.updateItem(this.props.index, this.state.todo)
        this.props.toggleDialog()
    }
    render() {
        const actions = [
            <FlatButton
                label="Save"
                secondary={true}
                onClick={() => this.handleUpdate()}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                keyboardFocused={true}
                onClick={this.props.toggleDialog}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Edit recipies"
                    actions={actions}
                    modal={false}
                    open={this.props.isOpen}
                >
                    <form>
                        <div className="form-group">
                            <TextField
                                type="text"
                                hintText="update"
                                floatingLabelText="update"
                                name="recipiTitle"
                                onChange={(e) => this.handleChange(e)}
                                fullWidth={true}
                                value={this.state.todo}
                            />
                        </div>
                    </form>
                </Dialog>
            </div>
        )
    }



}
