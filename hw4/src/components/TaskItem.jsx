import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={!!task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span className={task.completed ? "done" : ""}>
        {task.text}
      </span>
      <button className="del" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default React.memo(TaskItem);