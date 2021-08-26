import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  const [games, manageGames] = useState([])
  const [input, setInput] = useState('')

  const addGame = () => {
    let myNewList = [...games, input]
    manageGames(myNewList)
  }

  const removeGame = (index) => {
    let myNewList = [...games]
    myNewList.splice(index, 1)
    manageGames(myNewList)
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="list">
      <Input handleChange={handleChange} addGame={addGame} />
      <games games={games} removeTask={removeGame} />
    </div>
  )
}

export default TodoList
