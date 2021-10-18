import React, {useContext} from 'react';
import ListItem from './TodoListItem';
import {DataContext} from '../../context/ContextApi';
import './Todos.css';



export default function TodoList() {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id =>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index) =>{
            if(index === id){
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    const handleEditTodos = (editvalue, id) =>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index) =>{
            if(index === id){
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                    checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
                ))
            }
        </ul>
    )
}
