import React, { useEffect, useState } from 'react'

function EditTask({onUpdateTask, task}) {
    const [newTask, setTask] = useState(task.item)
    const [importance, setImportance] = useState(task.importance)
    const [category_id, setCategoryId] = useState(task.category_id)




    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`http://localhost:9292/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: newTask,
          importance: importance,
          category_id: category_id,
          
        }),
      })
      .then((r) => r.json())
      .then(updatedTask => {
          onUpdateTask(updatedTask)
      })
    }
  
    return (
      <form className='edit-forum' onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="item"
          autoComplete="off"
          value={newTask}
          placeholder="update task"
          onChange={(e) => setTask(e.target.value)}
        />

        <select className='importance2'  onChange={(e) => setImportance(e.target.value)}>
          <option value={importance}>Update Importance</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select className='category2' onChange={(e) => setCategoryId(e.target.value)}>
          <option value={category_id}>Update Category</option>
          
          <option value="1">Chores</option>
          <option value="2">Work</option>
          <option value="3">Exercise</option>
          
          <option value="4">Groceries</option>
          <option value="5">School</option>
        </select>
        <br></br>
        <button className='btn' type="submit">Update</button>
      </form>
    )
}

export default EditTask