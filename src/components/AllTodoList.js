import React from 'react'
import TodoList from './TodoList'

const AllTodoList = ({data=[], onAddTodo=f=>f, onDeleteTodo=f=>f, onCheckTask=f=>f}) =>
    <div>
        {
            data.length ?
                data.map((list) => {
                    return <TodoList key={list.id}
                                     {...list}
                                     onAddTodo={onAddTodo}
                                     onDeleteTodo={onDeleteTodo}
                                     onCheckTask={onCheckTask} />
                })
                : <p>Add new todo list..</p>
        }
    </div>

export default AllTodoList