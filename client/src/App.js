import './App.css'
import GameList from './components/GameList'
import Nav from './components/Nav'

const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

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

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

export default App
