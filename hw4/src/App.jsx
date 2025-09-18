import React, { useState, useRef, useCallback, useEffect } from "react";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const s = localStorage.getItem("tasks");
    return s ? JSON.parse(s) : [];
  });
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(() => {
    const txt = inputRef.current.value.trim();
    if (!txt) return;
    const t = { id: Date.now(), text: txt, completed: false };
    setTasks(prev => [...prev, t]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(p => p.id === id ? { ...p, completed: !p.completed } : p));
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const filtered = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="input-row">
        <input ref={inputRef} type="text" placeholder="Enter a task..." />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="controls">
        <div className="filters">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <div className="counter">
          Total: {tasks.length} | Completed: {completedCount}
        </div>
      </div>

      <TaskList tasks={filtered} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}