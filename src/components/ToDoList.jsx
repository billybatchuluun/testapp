import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk a dog",
  ]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {}
  function addTask(index) {}
  function deleteTask(index) {}
  function moveTaskUp(index) {}
  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="text-3xl">To-Do-List</h1>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={deleteTask}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
