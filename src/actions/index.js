import { v4 } from 'uuid'

export const CHANGE_DAY = 'CHANGE_DAY'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const ADD_TODO_LIST = 'ADD_TODO_LIST'
export const DELETE_TODO_LIST = 'DELETE_TODO_LIST'
export const CHECK_TASK = 'CHECK_TASK'

export const addTodo = (id, task) => {
    return {
        type: ADD_TODO,
        id,
        task
    }
}

export const deleteTodo = (id, task) => {
    return {
        type: DELETE_TODO,
        id,
        task
    }
}

export const changeDay = (date) => {
    return {
        type: CHANGE_DAY,
        date
    }
}

export const addTodoList = (dateString, task) => {
    return {
        type: ADD_TODO_LIST,
        id: v4(),
        task,
        dateString
    }
}

export const deleteTodoList = (id) => {
    return {
        type: DELETE_TODO_LIST,
        id
    }
}

export const checkTask = (id, task) => {
    return {
        type: CHECK_TASK,
        id,
        task
    }
}