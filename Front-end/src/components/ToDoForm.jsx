import { useState, useEffect } from "react";
import { api } from "./api";
import { ToDo } from "./ToDo";
import { Footer } from "./Footer";

function ToDoForm() {

  // Using state to capture data both ToDos and Form
  const [toDos, setToDos] = useState([]);
  const [formData, setFormData] = useState({});

  // Creating variable to toggle message if list is empty
  const noToDos = !toDos || (toDos && toDos.length === 0);

  // API Get Request
  const getToDos = async () => {
    const response = await api.get("/").catch((err) => {
      console.log("Error: ", err);
    });

    console.log("Response: ", response.data);

    if (response && response.data) {
      setToDos(response.data);
    }
  };

  // Updates state with input of New Task
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // API Post request
  const addToDo = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await api.post("/save", formData).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) await getToDos();

    setFormData([]);
  };

  // API Delete request
  const deleteToDo = async (id) => {
    const response = await api.delete(`/delete/${id}`).catch((err) => {
      console.log("Error deleting: ", err);
    });

    if (response) await getToDos();
  };

  // API Put request
  const updateToDo = async (id, titleValue, descriptValue) => {
    const response = await api
      .put(`/update/${id}`, { title: titleValue, description: descriptValue })
      .catch((err) => {
        console.log("Error updating: ", err);
      });

    // console.log(response);
    if (response) await getToDos();
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <div>
      <form className="todoform">
        <h1>Add Task</h1>
        <h3>New Task Title</h3>
        <input
          type="text"
          placeholder="Enter title here"
          name="title"
          onChange={handleChange}
        />
        <h3>New Task Description</h3>
        <input
          type="text"
          placeholder="Enter description here"
          name="description"
          onChange={handleChange}
        />

        <br />
        <br />
        <button className="todo-button" onClick={(e) => addToDo(e)}>
          Add
        </button>
      </form>
      <div className="listOfTasks">
        <h1>Tasks to Complete</h1>
{/* Where message is generated if no tasks in list */}
        {noToDos && <h2>Nothing to do today so relax!</h2>}
        {!noToDos &&
          toDos.map((toDo, index) => (
            <ToDo
              key={index}
              {...toDo}
              deleteToDo={deleteToDo}
              updateToDo={updateToDo}
              addToDos={addToDo}
              handleChange={handleChange}
            />
          ))}
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default ToDoForm;
