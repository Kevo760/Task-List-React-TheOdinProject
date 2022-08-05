import React from 'react';
import Task from './Task';



const Overview = (props) => {
    const { tasks, clickHandler, updateHandler, handleEditing } = props
    const task = tasks.map(task => 
    <Task 
    task={task} 
    key={task.id} 
    clickHandler={clickHandler} 
    updateHandler={updateHandler} 
    handleEditing={handleEditing} 
    />)
  return (
    <div className='task-box'>
      <h1>Task</h1>
      {task}
    </div>
  )
}

export default Overview