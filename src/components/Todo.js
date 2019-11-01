import React from 'react'
import '../stylesheets/Todo.scss'

const Todo = ({task, done, onCheckTask, onDeleteTodo}) =>
    <div className="todo">
        <input type="checkbox" checked={done} onChange={() => onCheckTask(task)} />
        <span>{task}</span>
        <input id="deletetaskbtn" type="button" value="X" onClick={() => onDeleteTodo(task)}/>
    </div>

Todo.defaultProps = {
    onCheckTask: f=>f,
    onDeleteTodo: f=>f
}

export default Todo
