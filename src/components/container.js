import {addTodo, addTodoList, checkTask, deleteTodo, deleteTodoList} from "../actions";
import {connect} from "react-redux";
import AllTodoList from "./AllTodoList";
import TodoList from "./TodoList";
import AddNewTodoList from "./AddNewTodoList";

export const NewTodoList = connect(
    null,
    dispatch =>
        ({
            onAddTodoList(task) {
                dispatch(addTodoList(task))
            }
        })
)(AddNewTodoList)

export const Todos = connect(
    null,
    dispatch =>
        ({
            onDeleteTodoList(id) {
                dispatch(deleteTodoList(id))
            },
            onAddTodo(id, task) {
                dispatch(addTodo(id, task))
            },
            onDeleteTodo(id, task) {
                dispatch(deleteTodo(id, task))
            },
            onCheckTask(id, task) {
                dispatch(checkTask(id, task))
            }
        })
)(TodoList)

export const AllTodos = connect(
    state =>
        ({
            data: [...state.data]
        }),
    null
)(AllTodoList)