import React from 'react'
import {getDateString} from '../lib/day-helper'
import '../stylesheets/AddNewTodoList.scss'
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';
import {style} from '../stylesheets/DayPickerInput.scss'

const AddNewTodoList = ({date, onAddTodoList=f=>f, onDayInputChange=f=>f}) => {
    let _task

    const addList = () => {
        if (_task.value.length) {
            //const date = document.querySelector("div.DayPickerInput input").value

            onAddTodoList(getDateString(date), _task.value)

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
            <DayPickerInput classNames={style}
                            formatDate={getDateString}
                            value={getDateString()}
                            onDayChange={onDayInputChange}/>
            <input type="text" ref={input => _task = input} onKeyPress={handleKeyPress}/>
            <input type="button" value="+" onClick={addList}/>
        </div>
    )
}

export default AddNewTodoList