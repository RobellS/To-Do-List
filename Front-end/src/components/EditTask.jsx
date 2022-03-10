import {useState} from 'react'

export const EditTask = (props) =>{

// Using state to update task properties when edited
const[update,setUpdate]=useState({title: props.title, description: props.description})
// console.log(props.id)

// Where input from edit text gets saved to state
    const handleChange2 = (e) => {
        setUpdate({
          ...update,
          [e.target.name]: e.target.value.trim(),
        });
      };

    return(
        // Edit form for updating task
        <div className="todo-form" >
        <h3>Updated Task Title</h3>
        <input
          type="text"
          value={update.title}
          name="title"
          onChange={handleChange2}
        />
        {console.log(props.title)}
      <h3>Updated Task Description</h3>
        <input
          type="text"
          value={update.description}
          name="description"
          onChange={handleChange2}
        />
        {console.log(props.description)}
        <br />
        <br />
        <button className="todo-button"onClick={async (e) =>{
            e.preventDefault(); 
            await props.updateToDo(props.id, update.title, update.description);
            props.setIsEdit(false)
            }}>
          Update
        </button>
        </div>

    )
}
