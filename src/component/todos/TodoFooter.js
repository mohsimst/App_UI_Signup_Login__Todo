import React, {useContext, useState} from 'react';
import {DataContext} from '../../context/ContextApi';
import { MdDeleteForever } from "react-icons/md";


export default function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos,setTodos] = useContext(DataContext)

    const handleCheckAll = () =>{
        const newTodos = [...todos]
        newTodos.forEach(todo =>{
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const newTodosComplete = () =>{
        return todos.filter(todo => todo.complete === false)
    }

    const deleteTodo = () =>{
        setTodos(newTodosComplete())
        setCheckAll(false)
    }

    return (
        <>
        {
            todos.length === 0 ? <h2 style={{marginTop:'20px'}}>!!Empty Todo!!</h2> 
                :  <div className="row">
                        <label htmlFor="all" style={{marginRight:'10px',fontWeight:700,fontSize:'20px'}}>
                            <input type="checkbox" style={{marginRight:'10px',border:'2px solid green',fontSize:'20px'}} name="all" id="all"
                            onChange={handleCheckAll} checked={checkAll} />
                            ALL
                        </label>
                        <p style={{fontSize:'16px'}}>You have {newTodosComplete().length} to do</p>
                        <button id="delete" className="deleteBtn" onClick={deleteTodo}><MdDeleteForever /></button>
                   </div>
        }
        </>
    )
}
