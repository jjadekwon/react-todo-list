import React from 'react';
import {NewTodoList, AllTodos} from './container';
import '../stylesheets/App.scss'

const App = () =>
    <div className="app">
        <h1>Todo App</h1>
        <NewTodoList />
        <AllTodos />
    </div>


export default App