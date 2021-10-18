import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import './Todos.css';
import DataProvider from '../../context/ContextApi';


function App() {
  return (
    <DataProvider>
      <div className="main_div">
        <div className="center_div">
        <h1 id="heading">To Do List</h1>
        <TodoInput />
        <TodoList />
        <TodoFooter />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;