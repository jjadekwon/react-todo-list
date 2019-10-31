import {ADD_TODO, DELETE_TODO, ADD_TODO_LIST, DELETE_TODO_LIST, CHECK_TASK} from "../actions";

export const todo = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                task: action.task,
                done: false
            }
        case CHECK_TASK:
            return state.task === action.task ?
                {
                    ...state,
                    done: !state.done
                } : state
        default:
            return state
    }
}

export const todolist = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todolist: [...todolist, todo({}, action)]
            }
        case DELETE_TODO:
            return state.todolist.filter(todo => todo.task === action.task)
        case ADD_TODO_LIST:
            return {
                id: action.id,
                todolist: action.todolist,
                date: action.date
            }
        case CHECK_TASK:
            return state.id === action.id ?
                {
                    ...state,
                    todolist: state.todolist.map(t => todo(t, action))
                } :
                state
        default:
            return state
    }
}

export const data = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO_LIST:
            return [
                ...state,
                todolist({}, action)
            ]
        case DELETE_TODO_LIST:
            return state.filter(list => list.id === action.id)
        case CHECK_TASK:
            return state.map(list => todolist(list, action))
        default:
            return state
    }
}
