import React from 'react'

const AddNewTodoList = ({onAddTodoList=f=>f}) => {
    let _task

    const addList = () => {
        if (_task.value.length) {
            onAddTodoList(_task.value)
            _task.value = ''
        }
    }

    const handleKeyPress = e => {
        if (e.charCode === 13) {
            addList()
        }
    }

    return (
        <div>
            <span>TODO: </span>
            <input type="text" ref={input => _task = input} onKeyPress={handleKeyPress}/>
            <input type="button" value="add" onClick={addList}/>
        </div>
    )
}


export default AddNewTodoList