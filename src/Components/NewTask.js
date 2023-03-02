import React, { useState } from 'react'

function NewTask({onAddTask}) {
    const [task, setTask] = useState("")
    const [importance, setImportance] = useState("1. high")
    const [category_id, setCategoryId] = useState("0")
    const [user_id, setUserId] = useState("0")


    function handleSubmit(e) {
      e.preventDefault()
  
      fetch("http://localhost:9292/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: task,
          importance: importance,
          category_id: category_id,
          user_id: user_id

        }),
      })
      .then((r) => r.json())
      .then(newTask => {
        onAddTask(newTask)
        setTask("")
        setImportance(importance)
        setCategoryId(category_id)
        setUserId(user_id)
      })
    }
  
    return (
      <div>
        {/* <h3 className='all-tasks'>Add New Task</h3> */}
        <form className='add-forum' onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            autoComplete="off"
            value={task}
            placeholder="Add Task..."
            onChange={(e) => setTask(e.target.value)}
          />
          <br></br>
          <select className='importance' onChange={(e) => setImportance(e.target.value)}>
            <option value={importance}>Choose Importance</option>
            <option value="1. high">High</option>
            <option value="2. medium">Medium</option>
            <option value="3. low">Low</option>
          </select>
          <select className='category' onChange={(e) => setCategoryId(e.target.value)}>
            <option value={category_id}>Choose Category</option>
            
            <option value="1">Chores</option>
            <option value="2">Work</option>
            <option value="3">Exercise</option>
            
            <option value="4">Groceries</option>
            <option value="5">School</option>
          </select>
          <select onChange={(e) => setUserId(e.target.value)}>
            <option>John</option>
            <option>jane</option>
            <option>Bob</option>
          </select>
          <br></br>
          <button className='btn' id='add' type="submit">Add Task</button>
        </form>
        <br/>
      </div>
      
    )
}

export default NewTask