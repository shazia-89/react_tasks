import React, { useState } from "react";
export default StudentCard()
export const StudentCard = React.memo(({ student, onDelete }) => {
    return(
        <div Classname="border p-3 rounded-md flex justfy-between">
            <div>
                value={input}
                ondelete={(e) => setInput(e.target.value)}
                placeholder=""
            </div>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            </div>
    )
})
