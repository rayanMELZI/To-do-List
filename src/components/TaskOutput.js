import "../styles/TaskOutput.css";
import { useState } from "react"; // Import useState

function TaskOutput({ tasks, setTasks }) {
  const [editedTask, setEditedTask] = useState(""); // State to track the currently edited task

  const handleEdit = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, task: updatedTask, isEditing: false };
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditedTask(""); // Reset the editedTask state after saving
  };

  return (
    <div className="TaskOutput">
      <ul>
        {tasks.map(({ task, isEditing }, index) => (
          <li key={index}>
            {!isEditing ? (
              <div className="taskEdit">
                <p>{task}</p>
                <div>
                  <i
                    onClick={() => {
                      const newArray = [
                        ...tasks.slice(0, index),
                        ...tasks.slice(index + 1),
                      ];
                      setTasks(newArray);
                    }}
                  >
                    ✔️
                  </i>
                  <i
                    onClick={() => {
                      setEditedTask(task); // Set the currently edited task when clicking the edit button
                      const updatedTasks = tasks.map((task, i) => {
                        if (i === index) {
                          return { ...task, isEditing: true };
                        }
                        return task;
                      });
                      setTasks(updatedTasks);
                    }}
                  >
                    ✏️
                  </i>
                </div>
              </div>
            ) : (
              <form
                className="taskEdit"
                onSubmit={(e) => {
                  handleEdit(index, e.target.editTask.value);
                }}
              >
                <input
                  className="editInput"
                  type="text"
                  id="editTask"
                  name="editTask"
                  value={editedTask} // Use the state variable for the input value
                  onChange={(e) => setEditedTask(e.target.value)} // Update the editedTask state as the user types
                />
                <button type="submit" className="save button">
                  Save
                </button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskOutput;
