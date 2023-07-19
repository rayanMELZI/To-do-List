import "../styles/App.css";
import TaskInput from "./TaskInput.js";
import TaskOutput from "./TaskOutput.js";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h3>To-Do List</h3>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskOutput tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
