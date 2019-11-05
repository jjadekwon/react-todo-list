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
            return state.id === action.id ?
                {
                    ...state,
                    todolist: [...state.todolist, todo({}, action)]
                } :
                state
        case DELETE_TODO:
            return state.id === action.id ?
                {
                    ...state,
                    todolist: [...state.todolist].filter(todo => todo.task !== action.task)
                } :
                state
        case ADD_TODO_LIST:
            return {
                id: action.id,
                todolist:
                    [{
                        task: action.task,
                        done: false
                    }],
                dateString: action.dateString
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
        case ADD_TODO:
            return state.map(list => todolist(list, action))
        case DELETE_TODO:
            return state.map(list => todolist(list, action))
        case ADD_TODO_LIST:
            return [
                ...state,
                todolist({}, action)
            ]
        case DELETE_TODO_LIST:
            return state.filter(list => list.id !== action.id)
        case CHECK_TASK:
            return state.map(list => todolist(list, action))
        default:
            return state
    }
}

export const date = (state = {}, action) => {
    if (action.type === "CHANGE_DAY") return action.date
    return state
}