import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoForm from "./components/ToDoForm";


function App() {


  return (
    <div className="app" style={{ maxWidth: "40rem", margin: "5rem auto" }}>
      <h1 className="appTitle">To-Do List Application</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ToDoForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
