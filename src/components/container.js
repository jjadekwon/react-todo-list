import {addTodo, addTodoList, changeDay, checkTask, deleteTodo, deleteTodoList} from "../actions";
import {connect} from "react-redux";
import AllTodoList from "./AllTodoList";
import TodoList from "./TodoList";
import AddNewTodoList from "./AddNewTodoList";

export const NewTodoList = connect(
    state =>
        ({
            date: state.date
        }),
    dispatch =>
        ({
            onAddTodoList(dateString, task) {
                dispatch(addTodoList(dateString, task))
            },
            onDayInputChange(date) {
                dispatch(changeDay(date))
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
        })
)(AllTodoList)