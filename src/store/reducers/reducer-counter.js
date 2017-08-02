let InitialState ={
    name:"mubahir",
    age:21
}

export default function (state = InitialState, action) {
switch(action.type){
            case'Increment':
            return{
                state:state+1
            }
            default:
            return{
                state
            }
        }
    
}