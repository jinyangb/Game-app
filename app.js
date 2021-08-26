const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const routes = require('./routes')

const gamesController = require('./controllers/GameController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send({ msg: 'Sever Running' })
})

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))
