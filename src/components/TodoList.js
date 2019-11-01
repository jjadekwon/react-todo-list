import React from 'react'
import Todo from './Todo'

const TodoList = ({id, dateString, todolist, onAddTodo, onDeleteTodo, onDeleteTodoList, onCheckTask}) => {
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
            <input type="button" value="X" onClick={() => onDeleteTodoList(id)} />
            <div>
                {
                    todolist.map((todo, i) => {
                        console.log(todo)
                        return <Todo key={i}
                                     {...todo}
                                     onCheckTask={task => onCheckTask(id, task)}
                                     onDeleteTodo={task => onDeleteTodo(id, task)} />
                    })
                }
            </div>
            <input type="text" ref={input => _task = input} onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default TodoList