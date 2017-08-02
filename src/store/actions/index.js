


export default class TodoListAction {

    static Add_Todo = "ADD_TODO";

    static addTodo(TodoItemDIscription){
        return{
            type: TodoListAction.Add_Todo,
            payload:{
                text:TodoItemDIscription
            }
        }
    }
}
