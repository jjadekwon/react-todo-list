import React from 'react';
import {NewTodoList, AllTodos} from './container';
import {data} from '../data/initialState'

const App = () =>
    <div>
        <h1>Todo App</h1>
        <NewTodoList />
        <AllTodos data={data} />
    </div>


export default App