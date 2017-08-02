// import {Store}from 'redux'
// import {createStore}from 'redux'
import TodoListAction from '../actions/index'

var InitailState={
    todo:{todolist:[]},
    maxid:0
    
}

function TodoListReducer(state=InitailState,action){
    var items =null;
        switch(action.type){
            case TodoListAction.Add_Todo:
            var newState = Object.assign({},state)
            newState.maxid +=1;
            newState.todo.todolist.push({...action.payload,id:newState.maxid})
            return newState
            
            
            default:
            return state
            
        }
}

 export default TodoListReducer