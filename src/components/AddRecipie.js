import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import UpdateRecipi from './updateRecip.js'
import ReipiList from './RecipiList'

class AddReceipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            edit: false,
            recipiarrr: [],
            recipiTitle: '',
            ingredient: '',
        }
    }

    componentWillMount() {
        const list = JSON.parse(localStorage.getItem('receipi'))
        this.setState({
            recipiarrr: list ? list : []
        })
    }
    handleOpen() {
        console.log("open========")
        this.setState({
            open: !this.state.open
        })
    }
    deleteIngredients(key) {
        console.log(key)
        this.state.recipiarrr.splice(key, 1)
        localStorage.setItem('receipi', JSON.stringify(this.state.recipiarrr))
        this.setState(
            {
                recipiarrr: this.state.recipiarrr
            }
        )
    }
    handlechange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    recipevalue() {
        //form value object
        let recipy = {
            recipiTitle: this.state.recipiTitle,
            Ingredients: this.state.ingredient,
        }
        let newitem = this.state.recipiarrr.concat(recipy);
        console.log("newitem=========", newitem)

        this.setState({
            recipiarrr: newitem,
            open: !this.state.open
        })
        localStorage.setItem("receipi", JSON.stringify(newitem))
    }
    handleUpdate() {
        this.setState({
            edit:!this.state.edit,
            recipiarrr:this.state.recipiarrr
        })
        localStorage.setItem('receipi',JSON.stringify(this.state.recipiarrr))
    }
    toggleDialog() {
        console.log('toggledialog')
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        const style = {
            textarea: {
                width: '100%',
                borderRadius: "4px"
            },
            label: { color: "black" },

        }
        // console.log(this.state.recipiarrr)
        const actions = [
            <FlatButton
                label="ADD RECIPI"
                secondary={true}
                onClick={() => this.recipevalue()}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                keyboardFocused={true}
                onClick={() => this.handleOpen()}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Add Receipie" secondary={true} onClick={() => this.handleOpen()} />
                <Dialog

                    title="Add recipies"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >

                    <form>
                        <div className="form-group">
                            <TextField
                                type="text"
                                fullWidth={true}
                                hintText="Add Recipe Title"
                                floatingLabelText="Recipe Title"
                                name="recipiTitle"
                                onChange={(e) => this.handlechange(e)}
                            />

                        </div>
                        <div className="form-group">

                            <TextField
                                type="text"
                                hintText="Yogurt, Cheese, Water"
                                floatingLabelText="Ingredients"
                                name="ingredient"
                                onChange={(e) => this.handlechange(e)}
                                style={{ textAlign: 'left' }}
                                fullWidth={true}
                                multiLine={true}
                            />
                        </div>

                    </form>
                </Dialog>
                {/* <UpdateRecipi
                    objState={this.state.recipiarrr}
                    handleToggle={() => this.toggleDialog()}
                    handleUpdate={() => this.handleUpdate()}
                    isOpen={this.state.edit}
                    handlechange={(target) => { this.handlechange(target) }}
                    
                /> */}
                <ReipiList
                    recipivalue={this.state.recipiarrr}
                    delete={(key) => this.deleteIngredients(key)}
                    toggle={() => { this.toggleDialog() }}
                    
                    isOpen={this.state.edit}
                    handleToggle={() => this.toggleDialog()}
                    handleUpdate={() => this.handleUpdate()}
                     handlechange={(target) => { this.handlechange(target) }}
                     titlestate={this.state.recipiTitle}
                />
            </div>
        );
    }
}
export default AddReceipie;