import React from 'react'
import Task from './Task'

const TodoList = ({todo}) =>
    <div>
        <div>{`${todo.date.getMonth()+1}/${todo.date.getDate()}`}</div>
        <div>
            {
                todo.todolist.map((todo, i) => <Task key={i} todo={todo}/>)
            }
        </div>
    </div>

export default TodoList