import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';

function Task(props) {
    const { task, clickHandler, updateHandler} = props
    const [edit, setEdit] = useState(false)

    function handleEdit() {
      if(edit) {
        setEdit(false)
      } else {
        setEdit(true)
      }
    }


    let viewMode = {}
    let editMode = {
    }
    
    if(edit) {
      viewMode.display = 'none'
    } else {
      editMode.display ='none'
    }
    
  return (
    <div className='task'>
        <h3 style={viewMode}>{task.text}</h3>
        <input
        type='text'
        style={editMode}
        className='edit-input'
        onChange={e => {
          updateHandler(task.id, e.target.value)}}
        />
        <button style={editMode} className='edit-button' onClick={() => handleEdit()}>Edit Task</button>
        <div className='icons' style={viewMode}>
          <FaEdit className='edit icon' onClick={() => handleEdit()}/>
          <AiOutlineDelete className='delete icon'  onClick={() => clickHandler(task.id)}/>
        </div>
    </div>
  )
}

export default Task