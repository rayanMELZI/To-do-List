import "../styles/TaskInput.css";

function TaskInput({ tasks, setTasks }) {
  return (
    <form
      className="TaskInput"
      onSubmit={(e) => {
        e.preventDefault();
        e.target.taskName.value &&
          setTasks([
            ...tasks,
            { task: e.target.taskName.value, isEditing: false, id: "" },
          ]);
        e.target.taskName.value = ""; // Reset the input field
      }}
    >
      <input
        type="text"
        id="taskName"
        name="taskName"
        placeholder="Enter you task"
        className="input"
      />
      <button type="submit" className="button">
        Add task
      </button>
    </form>
  );
}

export default TaskInput;
