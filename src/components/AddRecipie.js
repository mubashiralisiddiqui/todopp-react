import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import UpdateRecipi from './updateRecip.js'
import ReipiList from './RecipiList'

class AddReceipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dialog:false,
            edit: false,
            recipiarrr: [],
            recipiTitle: '',
            ingredient: '',
            id:null
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
        let obj = {
            recipiTitle: this.state.recipiTitle,
            ingredient: this.state.ingredient,
        }
        // let id = Math.random()*100
        
        let newitem = this.state.recipiarrr.concat(obj);
        console.log("newitem=========", newitem)

        this.setState({
            recipiarrr: newitem,
            open: !this.state.open
        })
        localStorage.setItem("receipi", JSON.stringify(newitem))
    }
    handleUpdate(index) {
        const selectedItem = this.state.recipiarrr[index]
        console.log(selectedItem)
        selectedItem.recipiTitle = this.state.recipiTitle;
        selectedItem.ingredient = this.state.ingredient;
        if(selectedItem.recipiTitle.length<2||selectedItem.ingredient.length<2){
            alert("please update some thing else it will empty")
            
        }
        else{
            localStorage.setItem('receipi', JSON.stringify(this.state.recipiarrr))
        }
      
        
        this.setState({
            dialog:!this.state.dialog
        })
    }
    toggleDialog() {
        console.log('toggledialog')
        this.setState({
            dialog: !this.state.dialog
        })
    }

    render() {
       
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
                <ReipiList
                    recipivalue={this.state.recipiarrr}
                    delete={(key) => this.deleteIngredients(key)}
                    toggle={() => { this.toggleDialog() }}
                    isOpen={this.state.dialog}
                    handleToggle={() => this.toggleDialog()}
                    handleUpdate={(index) => this.handleUpdate(index)}
                    handlechange={(target) => { this.handlechange(target) }}
                    titlestate={this.state.recipiTitle}
                />
                
            </div>
        );
    }
}
export default AddReceipie;