import React from 'react'
import {Todos} from './container'
import '../stylesheets/AllTodoList.scss'

const AllTodoList = ({data=[]}) =>
    <div className="all-list">
        {
            data.length ?
                data.map((list) => {
                    return list.todolist.length === 0 ? "" :
                        <Todos key={list.id}
                                     {...list} />
                })
                : <p>Add new todo list..</p>
        }
    </div>

export default AllTodoList