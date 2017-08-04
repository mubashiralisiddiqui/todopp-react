import ReceipiActions from '../actions/index.js';


const initialstate = {
    open: false,
    recipi:[]
}

export function dialogueOpenReducer(state = initialstate, action) {
    // console.log('is reducer running', action);


    switch (action.type) {

        case "open":
            console.log("reducer ",action.payload)
            return Object.assign({}, state, { open: !state.open });
         case "getrecipi":

         return Object.assign({},state,{recipi:action.payload})

        default:
            return state;
    }state
}