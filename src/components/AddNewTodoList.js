import React from 'react'
import '../stylesheets/AddNewTodoList.scss'

const AddNewTodoList = ({onAddTodoList=f=>f}) => {
    let _task

    const addList = () => {
        if (_task.value.length) {
            onAddTodoList(_task.value)
            _task.value = ''
        }
    }

    const handleKeyPress = e => {
        // enter
        if (e.charCode === 13) {
            addList()
        }
    }

    return (
        <div className="add-form">
            <span>TODO : </span>
            <input type="text" ref={input => _task = input} onKeyPress={handleKeyPress}/>
            <input type="button" value="+" onClick={addList}/>
        </div>
    )
}


export default AddNewTodoList