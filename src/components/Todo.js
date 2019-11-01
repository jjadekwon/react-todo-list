import React from 'react'

const Todo = ({task, done, onCheckTask, onDeleteTodo}) =>
    <div>
        <input type="checkbox" checked={done} onChange={() => onCheckTask(task)} />
        <span>{task}</span>
        <input type="button" value="X" onClick={() => onDeleteTodo(task)}/>
    </div>

Todo.defaultProps = {
    onCheckTask: f=>f,
    onDeleteTodo: f=>f
}

export default Todo
