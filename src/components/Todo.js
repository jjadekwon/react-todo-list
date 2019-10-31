import React from 'react'

class Todo extends React.Component {
    render() {
        const {task, done, onCheckTask} = this.props
        return (
            <div>
                <input type="checkbox" checked={done} onChange={() => onCheckTask(task)}/>
                <span>{task}</span>
            </div>
        )
    }
}

Todo.defaultProps = {
    onCheckTask: f=>f
}

export default Todo
