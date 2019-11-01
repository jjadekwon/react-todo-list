import React from 'react'
import TodoList from './TodoList'
import {addTodo, addTodoList, deleteTodo, deleteTodoList, checkTask} from "../actions";
import {connect} from 'react-redux'

export const AllTodoList = ({data=[], onAddTodo=f=>f, onCheckTask=f=>f}) =>
    <div>
        {
            data.length ?
                data.map((list) => {
                    return <TodoList key={list.id} {...list} onAddTodo={onAddTodo} onCheckTask={(task) => onCheckTask(list.id, task)} />
                })
                : <p>Add new todo list..</p>
        }
    </div>

const mapStateToProps = state =>
    ({
        data: [...state.data]
    })

const mapDispatchToProps = dispatch =>
    ({
        onAddTodoList() {
            dispatch(addTodoList())
        },
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

export const AllTodos = connect(mapStateToProps, mapDispatchToProps)(AllTodoList)