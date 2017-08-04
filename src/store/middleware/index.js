// import RecipieAction from '../actions/index.js';
import {getrecipi} from '../actions';
import {isDaialogueOpen} from '../actions';


export function DaialogueOpen(receipe){
    console.log("open dialogue")
  return dispatch=>{
      dispatch(isDaialogueOpen())
  }
}

 
 
    