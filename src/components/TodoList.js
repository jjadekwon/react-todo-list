import React from 'react'
import Todo from './Todo'

// export const TodoList = ({todolist, dateString, onCheckTask}) =>
const TodoList = (props) => {
    let _task

    const handleKeyPress = e => {
        if (e.charCode === 13 && _task.value.length) {
            props.onAddTodo(props.id, _task.value)
            _task.value = ''
        }
    }

    return (
        <div>
            <h5>{props.dateString}</h5>
            <div>
                {
                    props.todolist.map((todo, i) => {
                        console.log(todo)
                        return <Todo key={i} {...todo} onCheckTask={props.onCheckTask} />
                    })
                }
            </div>
            <input type="text" ref={input => _task = input} onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default TodoList

// const mapDispatchToProps = dispatch =>
//     ({
//         onCheckTask(id, task) {
//             dispatch(checkTask(id, task))
//         }
//     })
//
// export const Todos = connect(null, mapDispatchToProps)(TodoList)