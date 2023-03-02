import React, { useEffect, useState } from 'react'
import Task from './Task'
import SearchBar from './SearchBar'
import NewTask from './NewTask'
import TaskList from './TaskList'

function ItemList({tasks, onTaskDelete, onUpdateTask, onAddTask}) {
    const [search, setSearch] = useState("")
    const [filterBy, setFilterBy] = useState('')

    const filteredTasks = tasks.filter(task => task.category.category === filterBy) 
    const renderTasksList = filteredTasks.map(task=> <TaskList task={task} key={task.id} onTaskDelete={onTaskDelete}/>)
    
    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
      }

    const displayedTasks = tasks.filter(task =>
    task.item.toLowerCase().includes(search.toLowerCase())
    )

    const renderTasks = displayedTasks.map(task => <Task task={task} key={task.id} onTaskDelete={onTaskDelete} onUpdateTask={onUpdateTask} />)

    return (
        <div className='flexer'>
            <div className='flex'>
                <div className='dropdown'>
                    
                <div className='info'>Make a New Task</div>

                    <div className='todo'>
                        <NewTask onAddTask={onAddTask}/>
                    </div>

                    <div className='info'>Search for Task</div>
                    
                
                    <div className='todo'>
                        <br/>
                        <SearchBar onSearch={setSearch}/>
                        <br/>
                    </div>

                    <div className='info'>Filter by Category</div>
                   
                    <select className='select' onChange={onFilterChange} value={filterBy}>
                        <option value="">Choose Category</option>
                    
                        <option value="work">Work</option>
                        <option value="chores">Chores</option>
                        <option value="exercise">Exercise</option>
                        
                        <option value="groceries">Groceries</option>
                        <option value="school">School</option>
                    </select>

                    <div id='todos-cat'>
                    {renderTasksList}
                </div>
                </div>
                {/* <div className='search'>
                    

                    
                </div> */}
            </div>

            <div className='flex'>
                
            <div id='edit' className='info'>Edit Tasks</div>

                <div className='the-list'>
                    
                    
                    {renderTasks}
                    
                </div>
                
            </div>
                


        </div>
    )
}

export default ItemList