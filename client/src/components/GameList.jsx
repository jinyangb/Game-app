import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  const [tasks, manageTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    let myNewList = [...tasks, input]
    manageTasks(myNewList)
  }

  const removeTask = (index) => {
    let myNewList = [...tasks]
    myNewList.splice(index, 1)
    manageTasks(myNewList)
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="list">
      <Input handleChange={handleChange} addTask={addTask} />
      <Tasks tasks={tasks} removeTask={removeTask} />
    </div>
  )
}

export default TodoList
