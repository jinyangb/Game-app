import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import GameList from './components/GameList'
import Nav from './components/Nav'
import List from './pages/List'
import GameForm from './pages/GameForm'
import SignIn from './pages/SignIn'

function App() {
  const [games, setGames] = useState([])
  const [newGame, setNewGame] = useState({
    id: '',
    name: '',
    img: '',
    description: '',
    price: ''
  })

  const addGame = async (e) => {
    e.preventDefault()
    const currentGames = games
    const addedGame = {
      ...newGame,
      id: parseInt(games.length + 1),
      price: parseInt(newGame.price)
    }
    console.log(games, currentGames)
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
          <Route exact path="/" component={SignIn} />
          <Route path="/list/:username" component={List} />
          <Route
            path="/new"
            render={(props) => (
              <GameForm
                {...props}
                newGame={newGame}
                handleChange={handleChange}
                addGame={addGame}
              />
            )}
          />
        </Switch>
      </body>
    </div>
  )
}

export default App
