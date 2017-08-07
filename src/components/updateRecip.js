import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UpdateRecipi extends React.Component {


    render() {

        const actions = [
            <FlatButton
                label="Save"
                secondary={true}
                onClick={() => this.props.handleUpdate(this.props.index)}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                keyboardFocused={true}
                onClick={this.props.handleToggle}
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
                  
                    <form onSubmit={() => this.props.handleUpdate(this.props.index)}>
                        <div className="form-group">
                            <TextField
                                type="text"
                                hintText={this.props.recipiTitle}
                                floatingLabelText={this.props.recipiTitle}
                                name="recipiTitle"
                                onChange={this.props.handlechange}
                                fullWidth={true}
                             //value={this.props.recipiTitle} 

                            />

                        </div>

                        <div className="form-group">
                           

                            <TextField
                                type="text"
                                hintText={this.props.ingrident}
                                floatingLabelText={this.props.Ingrident}
                                name="ingredient"
                                onChange={this.props.handlechange}
                                style={{ textAlign: 'left' }}
                                multiLine={true}
                                fullWidth={true}
                                 //value={this.props.Ingrident} 
                            />
                        </div>

                    </form>
                </Dialog>


            </div>
        )
    }
}

export default UpdateRecipi;