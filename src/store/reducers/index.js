
import {combineReducers} from 'redux';
import {dialogueOpenReducer} from './reciepiReducer';

const rootReducer = combineReducers({
    recipes: dialogueOpenReducer,
});

export default rootReducer;