import React, { useState } from 'react'
import Tasks from './Tasks'
import TextInput from './TextInput'
import { useHistory } from 'react-router'

const TodoList = ({ newGame, handleChange, addGame }) => {
  const [games, manageGames] = useState([])
  const [input, setInput] = useState('')
  const history = useHistory()

  const addNewGame = () => {
    let myNewList = [...games, input]
    manageGames(myNewList)
  }

  const removeGame = (index) => {
    let myNewList = [...games]
    myNewList.splice(index, 1)
    manageGames(myNewList)
  }

  const handleOtherChange = (event) => {
    setInput(event.target.value)
    console.log(games)
  }
  const handleSubmit = (e) => {
    addGame(e)
    history.push('/')
  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={newGame.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
          handleChange={handleOtherChange}
          addNewGame={addNewGame}
        />
        <TextInput
          type="text"
          value={newGame.img}
          onChange={handleChange}
          name={'img'}
          placeholder={'image'}
          handleChange={handleOtherChange}
          addNewGame={addNewGame}
        />
        <TextInput
          type="text-area"
          value={newGame.description}
          onChange={handleChange}
          name={'description'}
          placeholder={'description'}
          handleChange={handleOtherChange}
          addNewGame={addNewGame}
        />
        <TextInput
          type="text"
          value={newGame.price}
          onChange={handleChange}
          name={'price'}
          placeholder={'price'}
          handleChange={handleOtherChange}
          addNewGame={addNewGame}
        />
        <button>Submit</button>
      </form>
      <Tasks games={games} removeGame={removeGame} />
    </div>
  )
}

export default TodoList
