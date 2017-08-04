import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import ReipiList from './RecipiList'
import { createRecipi, DaialogueOpen } from '../store/middleware/index.js';

function mapStateToProps(state) {

    return {
        dialogOpen: state.recipes.open,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openDialog: () => dispatch(DaialogueOpen()),
        createRecipi: (ingredient) => dispatch(createRecipi(ingredient))
    }
}
class AddReceipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            recipiarrr: []
        }
        this.recipevalue = this.recipevalue.bind(this)
        this.deleteIngredients=this.deleteIngredients.bind(this)

    }
    componentWillMount() {
        const list = JSON.parse(localStorage.getItem('receipi'))
        this.setState({
            recipiarrr: list?list:[]
        })
    }
    deleteIngredients(key) {
        console.log(key)
      this.state.recipiarrr.splice(key,1)
      localStorage.setItem('receipi', JSON.stringify(this.state.recipiarrr))
        this.setState(
            {
                recipiarrr:this.state.recipiarrr
            }
        )
    }
    recipevalue() {
        //form value object
        console.log("rerr==========")
        let recipy = {
            recipiTitle: this.refs.title.getValue(),
            Ingredients: this.refs.ingredient.getValue(),
        }
        let newitem  = this.state.recipiarrr.concat(recipy);
        console.log("newitem=========",newitem)
       
        this.setState({
                recipiarrr: newitem
            })

        
            localStorage.setItem("receipi", JSON.stringify(newitem))
        
    
            

        }
    

    render() {
        const style = {
            textarea: {
                width: '100%',
                borderRadius: "4px"
            },
            label: { color: "black" },

        }
        const actions = [
            <FlatButton
                label="AddRecipe"
                secondary={true}
                onClick={this.recipevalue}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                keyboardFocused={true}
                onClick={this.props.openDialog}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Add Receipie" secondary={true} onClick={this.props.openDialog} />
                <Dialog
                    title="Add recipies"
                    actions={actions}
                    modal={false}
                    open={this.props.dialogOpen}
                    onRequestClose={this.handleClose}
                >
                    <form>
                        <div className="form-group">
                            <TextField
                                type="text"
                                hintText="Add Recipe Title"
                                floatingLabelText="Recipe Title"
                                ref="title"


                            />

                        </div>
                        <div className="form-group">

                            <TextField
                                type="text"
                                hintText="Yogurt, Cheese, Water"
                                floatingLabelText="Ingredients"
                                ref="ingredient"
                                style={{ textAlign: 'left' }}
                                multiLine={true}
                            />
                        </div>

                    </form>
                </Dialog>

                <ReipiList recipivalue={this.state.recipiarrr} delete={(key)=>this.deleteIngredients(key)} />


            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddReceipie);