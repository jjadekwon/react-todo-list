import React from 'react';
import AddNewTodoList from './AddNewTodoList'
import {AllTodos} from './AllTodoList';
import {data} from '../data/initialState'

const App = () =>
    <div>
      <AddNewTodoList />
      <AllTodos data={data} />
    </div>


export default App