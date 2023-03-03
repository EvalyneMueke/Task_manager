import React, { useEffect, useState } from 'react'

function TaskList({task, onTaskDelete}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: "DELETE",
        })
        onTaskDelete(task.id)
    }
    
    return (
        <div className='all-todos'>
            {task.importance == "high" ? (
                <li className="red">{task.item.toLowerCase()} </li>
            ) : task.importance == "medium" ? (
                <li className="orange">{task.item.toLowerCase()} </li>
            ) : task.importance == "low" ? (
                <li className="green" >{task.item.toLowerCase()} </li> 
            ) : (
                <li>{task.item.toLowerCase()}</li> 
            )}
            

        </div>
    )
}
export default TaskList