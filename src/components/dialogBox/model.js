import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AddPhoto from 'material-ui/svg-icons/editor/attach-file';

export default class Model extends React.Component {
    state = {
        todo: this.props.todo,
        image: this.props.image
    }
    updateImage(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.props.onUpdateImage(e.target.result)
                this.setState({ image: e.target.result })
            };
            reader.readAsDataURL(event.target.files[0]);
        }
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
                            <div className="image-upload" >
                                <label htmlFor="file-input-1">
                                    <AddPhoto />
                                </label>

                                <input
                                    id="file-input-1"
                                    type="file"
                                    onChange={(e) => this.updateImage(e)}
                                />
                            </div>
                            <a href={this.state.image}> <img src={this.state.image} style={{ width: "24vh", height: "24vh" }} alt="select above" /></a>
                        </div>
                    </form>
                </Dialog>
            </div>
        )
    }
}
