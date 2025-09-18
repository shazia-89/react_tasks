import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (!tasks.length) return <p className="empty">No tasks</p>;

  return (
    <ul className="task-list">
      {tasks.map(t => (
        <TaskItem key={t.id} task={t} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default React.memo(TaskList);