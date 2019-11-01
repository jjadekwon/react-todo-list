import React from 'react'
import Todo from './Todo'

const TodoList = ({id, dateString, todolist, onAddTodo, onDeleteTodo, onCheckTask}) => {
    let _task

    const handleKeyPress = e => {
        if (e.charCode === 13 && _task.value.length) {
            onAddTodo(id, _task.value)
            _task.value = ''
        }
    }

    return (
        <div>
            <h5>{dateString}</h5>
            <div>
                {
                    todolist.map((todo, i) => {
                        console.log(todo)
                        return <Todo key={i} {...todo} onCheckTask={onCheckTask} onDeleteTodo={onDeleteTodo}/>
                    })
                }
            </div>
            <input type="text" ref={input => _task = input} onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default TodoList