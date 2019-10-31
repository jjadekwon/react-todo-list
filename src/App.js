import React from 'react';
import AddNewList from './components/AddNewList'
import AllTodoList from './components/AllTodoList';
import {list} from './data/todolist'

const App = () =>
    <div>
      <AddNewList />
      <AllTodoList todoList={list} />
    </div>


export default App