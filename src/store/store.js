// import { createStore } from 'redux';
// import {combineReducers}from 'redux'
// import {TodolistReducer}from './reducers/todoListReducer'

// import allReducers from './reducers/index.js'

// export const allReducers =combineReducers({

// })
// const store = createStore()
// export default store;

import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const thunkMiddleware = applyMiddleware(thunk);

const store = createStore(rootReducer,thunkMiddleware);

export default store;