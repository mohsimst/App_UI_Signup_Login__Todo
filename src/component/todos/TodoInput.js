import React, {useState, useContext, useRef, useEffect} from 'react';
import {DataContext} from '../../context/ContextApi';
import './Todos.css';



export default function TodoInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName('');
        todoInput.current.focus();
    }

    useEffect(() =>{
        todoInput.current.focus();
    },[])

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text" className="inputs" name="todos" id="todos" ref={todoInput}
            required placeholder=" Add Items" value={todoName} 
            onChange={e => setTodoName(e.target.value.toLowerCase())} />
            <button className="btn" type="submit"> + </button>
        </form>
    )
}
