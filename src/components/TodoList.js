import React from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'
import {checkTask} from "../actions";

// export const TodoList = ({todolist, dateString, onCheckTask}) =>
const TodoList = (props) =>
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
    </div>
export default TodoList
// const mapDispatchToProps = dispatch =>
//     ({
//         onCheckTask(id, task) {
//             dispatch(checkTask(id, task))
//         }
//     })
//
// export const Todos = connect(null, mapDispatchToProps)(TodoList)