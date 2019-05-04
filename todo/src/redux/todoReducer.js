const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//action creator
function addTodo(content){
    return {
        type:ADD_TODO,
        content:content,
    }
} 

function deleteTodo(index) {
    return {
        type:DELETE_TODO,
        index:index,
    }
}

const initialSatate = {
    todos: ["씻기"]
}
function todoReducer(state = initialSatate, action) {
    switch(action.type) {
        case ADD_TODO:
            return  Object.assign({},state, {
                todos: [...state.todos, action.content]
            });
        case DELETE_TODO:
            return  Object.assign({},state, {
                todos: [...state.todos.slice(0,action.index), ...state.todos.slice(action.index+1)]
            });
        default:
            return state;
    }
}

export {
    todoReducer,
    addTodo,
    deleteTodo,
}