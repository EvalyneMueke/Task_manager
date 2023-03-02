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
            {task.importance == "1. high" ? (
                <li className="red"><button className='trash' onClick={handleDeleteClick}>❌</button>{task.item.toLowerCase()} </li>
            ) : task.importance == "2. medium" ? (
                <li className="orange"><button className='trash' onClick={handleDeleteClick}>❌</button>{task.item.toLowerCase()} </li>
            ) : task.importance == "3. low" ? (
                <li className="green" ><button className='trash' onClick={handleDeleteClick}>❌</button>{task.item.toLowerCase()} </li> 
            ) : (
                <li>{task.item.toLowerCase()}</li> 
            )}
            

        </div>
    )
}
export default TaskList