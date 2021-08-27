import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import GameList from './components/GameList'
import Nav from './components/Nav'
import List from './pages/List'
import GameForm from './pages/GameForm'

function App() {
  const [games, setGames] = useState([])
  const [newGame, setNewGame] = useState({
    id: '',
    name: '',
    img: '',
    description: '',
    price: ''
  })

  const addGame = (e) => {
    e.preventDefault()
    const currentGames = games
    const addedGame = {
      ...newGame,
      id: parseInt(games.length + 1),
      price: parseInt(newGame.price)
    }
    currentGames.push(addedGame)
    setGames(currentGames)
    setNewGame({ id: '', name: '', img: '', description: '', price: '' })
  }
  const handleChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <header>
        <Nav />
      </header>
      <body>
        <Switch>
          <Route exact path="/">
            <GameList
              newGame={newGame}
              handleChange={handleChange}
              addGame={addGame}
            />
          </Route>
          <Route path="/new"></Route>
        </Switch>
      </body>
    </div>
  )
}

export default App
