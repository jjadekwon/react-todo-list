import React from 'react'
const Task = ({todo}) =>
    <div>
        <input type="checkbox" checked={todo.done} onChange={handleInputChange}/>
        <span>{todo.task}</span>
    </div>

const handleInputChange = (e) => {
    // data update
}

export default Task
