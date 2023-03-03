import React, { useEffect, useState } from 'react'
import EditTask from './EditTask';

function Task({task, onTaskDelete, onUpdateTask}) {
    const [editor, setEditor] = useState(false)

    function handleClick() {
        setEditor(!editor)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: "DELETE",
        })
        onTaskDelete(task.id)
    }

    function handleUpdateTask(updatedTask) {
        onUpdateTask(updatedTask)
      }

      function getEditor() {
        if (editor)
        return <EditTask onUpdateTask={handleUpdateTask} task={task} />
    }

    function idName() {
        if (task.importance == "high") {
            return 'high'
        } else if (task.importance == "medium") {
            return 'medium'
        } else if(task.importance == "low") {
            return 'low'
        }
    }
    
    return (
        <div className='list'>
                <div id={idName()}>
                    <br/>
                    <b className='item-text'>{task.item.toUpperCase()}</b> 
                    <p className='item-text'>Importance: {task.importance}</p>
                    <p className='item-text'>Category: {task.category.category}</p>
                    <button className='btn' onClick={handleClick}>Edit</button>
                    {getEditor()}
                    <br/><br/>
                    <button className='trash'  onClick={handleDeleteClick}>❌</button>
                   

                </div>
        </div>
    )
}

export default Task