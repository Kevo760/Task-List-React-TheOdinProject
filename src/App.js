import './App.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';


class App extends Component {
  constructor(props) {
    super(props)

  
    this.state = {
       task: { 
        text: '',
        id: uniqid()
      },
       tasks: [],
    }
  }


  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id
      }
    })
  }


  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '',
      id: uniqid()
    },
    })
  }

  deleteTaskHandler = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(
        task => task.id !== id
      )
    })
  }

  updateTask = (id, newValue) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.text = newValue
        }
        return task
      })
      })
  }



  render() {
    const { task, tasks } = this.state;

    return (
      <div>

        <form onSubmit={this.onSubmitTask}>
          <input
          onChange={this.handleChange}
          value={task.text}
          type='text' 
          id='taskInput'
          placeholder='Enter Task'
          />
          <button type='submit'>
            Add Task
          </button>
        </form>

        <Overview 
        tasks={tasks} 
        clickHandler={this.deleteTaskHandler.bind(this)} 
        updateHandler={this.updateTask.bind(this)} 
        />

      </div>
    )
  }
}


export default App;
