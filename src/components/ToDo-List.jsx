import React, {useState} from 'react'
import '../App.css'

function ToDoList() {

    let [tasks, setTasks] = useState(['take a shower', 'go to work'])
    let [newTask, setNewTask] = useState('')

    function addTask () {
        if (newTask.trim() !== '') {
            setTasks(task => [...task, newTask])
            setNewTask('')
        }
    }

    function deleteTask (index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    function moveTaskUp (index) {
        if (index > 0) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown (index) {
        if (index < tasks.length - 1) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

  return (
    <div className='to-do-list'>
        <h1>To-Do List</h1>
        <div>
            <input 
                type="text" 
                value={newTask}
                placeholder='Enter you input'
                onChange={ (e) => setNewTask(e.target.value) }
                />
                <button className='add-btn' onClick={addTask} >Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index} >
                <span className='text' > {task} </span>
                <button className='delete-btn' onClick={() => deleteTask (index)} >Delete</button>
                <button className='move-btn' onClick={() => moveTaskUp (index)} >Up</button>
                <button className='move-btn' onClick={() => moveTaskDown (index)} >Down</button>
            </li>
            )}
        </ol>
    </div>
  )
}

export default ToDoList