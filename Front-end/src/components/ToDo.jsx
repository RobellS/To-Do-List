import {useState} from 'react'
import {EditTask} from './EditTask'
export const ToDo = (props) =>{

    // Using state to setup toggle effect for edit form 
    const [isEdit, setIsEdit] = useState(false)
   
 const {id, title,description, deleteToDo, updateToDo} = props;   
    
return (
<div className="toDo-container">
<strong>{title}</strong>
<p>{description}</p>
<button className="toDo-removal-button" onClick ={(e) => {e.preventDefault(); deleteToDo(id)}}>Delete</button>
<button className="toDo-update-button" onClick ={(e) => {e.preventDefault();
    setIsEdit(true)}}>Edit</button>
{isEdit && <EditTask id={id} title={title} description={description} updateToDo={updateToDo} setIsEdit={setIsEdit}/> }

</div>


)}
