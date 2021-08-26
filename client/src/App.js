import './App.css'
import GameList from './components/GameList'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <body>
        <GameList />
      </body>
    </div>
  )
}

export default App
