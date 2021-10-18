import React, {useState} from 'react'
import './Todos.css';
import { RiEditCircleFill } from "react-icons/ri";


export default function ListItem({todo,id,checkComplete,handleEditTodos}) {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleOnEdit = () =>{
        setOnEdit(true)
    }

    const handleSave = id =>{
        setOnEdit(false)
        if(editValue){
            handleEditTodos(editValue,id)
        }else{
            setEditValue(todo.name)
        }
    }

    if(onEdit){
        return (
            <li>
                <input className="saveInput" type="text" id="editValue" value={editValue} 
                name="editValue" 
                onChange={e => setEditValue(e.target.value.toLowerCase())} />

                <button className="saveBtn" onClick={() => handleSave(id)}>Save</button>
            </li>
        )
    }else{
        return (
            
                <li>
                    <div className="itemDiv">
                        <div className="listDiv">
                            <label htmlFor={id} style={{color:'#0ba360', fontWeight:600}} className={todo.complete ? "active" : ""}>
                                <input type="checkbox"style={{marginRight:'10px'}} id={id} checked={todo.complete}
                                onChange={() => checkComplete(id)} />
                                {todo.name}
                            </label>
                        </div>
                        <div className="iconDiv">
                           <button className="editBtn" disabled={todo.complete} onClick={handleOnEdit}><RiEditCircleFill className="editIcon" /></button>
                         </div>
                    </div>
                </li>
                
                
           
            
        )
    }
    
}
