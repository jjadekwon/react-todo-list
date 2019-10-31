import React from 'react'
import TodoList from './TodoList'

const AllTodoList = ({todoList}) =>
    <div>
        {
            todoList.length ?
                todoList.map(todo =>
                    <TodoList key={todo.id} todo={todo} />
                )
                : <p>Add new todo list..</p>
        }
    </div>

export default AllTodoList