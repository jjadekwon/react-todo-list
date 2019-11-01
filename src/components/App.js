import React from 'react';
import {NewTodoList, AllTodos} from './container';
import {data} from '../data/initialState'
import '../stylesheets/App.scss'

const App = () =>
    <div className="app">
        <h1>Todo App</h1>
        <NewTodoList />
        <AllTodos data={data} />
    </div>


export default App