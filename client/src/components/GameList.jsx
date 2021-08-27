import React, { useState } from 'react'
import Tasks from './Tasks'
import TextInput from './TextInput'
import { useHistory } from 'react-router'
import axios from 'axios'


const TodoList = ({ newGame, handleChange, addGame }) => {
  const [games, manageGames] = useState([])
  const [input, setInput] = useState('')
  const history = useHistory()

  

  const addNewGame = async (formdata) => {
    // let myNewList = [...games, newGame]
    // manageGames(myNewList)
    console.log('newGame', formdata)
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/games`
          : 'http://localhost:3001/games',
        formdata
      )
      return res.data
    } catch (error) {
      console.log(error)
    }
  
    // try {
    //   const res = await axios.post(`http://localhost:3001/games`, formdata)
    //   return res.data
    // } catch (error) {console.log(error)}
  }

  const removeGame = (index) => {
    let myNewList = [...games]
    myNewList.splice(index, 1)
    manageGames(myNewList)
  }

  // const handleOtherChange = (event) => {
  //   setInput(event.target.value)
    
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    addNewGame(newGame)
    
    // history.push('/')
    // console.log(games)
  }
  return (
    <div className="list">
      <form onSubmit={handleSubmit} >
        <TextInput
          type="text"
          value={newGame.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
      
          

        />
        <TextInput
          type="text"
          value={newGame.img}
          onChange={handleChange}
          name={'img'}
          placeholder={'image'}
          
      
        />
        <TextInput
          type="text-area"
          value={newGame.console}
          onChange={handleChange}
          name={'console'}
          placeholder={'console'}
          // 
        
        />
        <TextInput
          type="text"
          value={newGame.rating}
          onChange={handleChange}
          name={'rating'}
          placeholder={'rating'}
         
          
        />
        <button>Submit</button>
      </form>
      <Tasks games={games} removeGame={removeGame} />
    </div>
  )
}

export default TodoList
