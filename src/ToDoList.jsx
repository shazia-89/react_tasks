import { useState, useEffect } from "react";

function ToDoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (text.trim() !== "") {
      setTasks([...tasks, text]);
      setText("");
    }
  };

  useEffect(() => {
    if (tasks.length > 10) {
      alert("You have more than 10 jobs to do");
    }
  }, [tasks]);

  return (
    <div>
      <h3>ToDo List</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{i + 1}. {t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;