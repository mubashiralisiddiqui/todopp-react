import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';
export default class UpdateDialog extends React.Component {
    render() {
        const actions = [
            <FlatButton
                label="Save"
                secondary={true}
             onClick={() => this.props.updateItem()}
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
                                floatingLabelText="asdgadgadf"
                                name="recipiTitle"
                                fullWidth={true}
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                type="text"
                                hintText="asfasfdasfdadsf"
                                floatingLabelText="asfdasfdadf"
                                name="ingredient"
                                style={{ textAlign: 'left' }}
                                multiLine={true}
                                fullWidth={true}
                            />
                        </div>
                    </form>
                </Dialog>
            </div>
        )
    }



}
