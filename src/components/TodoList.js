import React from 'react'
import Todo from './Todo'
import '../stylesheets/TodoList.scss'

const TodoList = ({id, dateString, todolist, onAddTodo=f=>f, onDeleteTodo=f=>f, onDeleteTodoList=f=>f, onCheckTask=f=>f}) => {
    let _task

    const handleKeyPress = e => {
        if (e.charCode === 13 && _task.value.length) {
            onAddTodo(id, _task.value)
            _task.value = ''
        }
    }

    return (
        <div className="todo-list">
            <div className="top">
                <input id="deletelistbtn" type="button" value="X" onClick={() => onDeleteTodoList(id)} />
                <p>{dateString}</p>
            </div>
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