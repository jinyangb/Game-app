const mongoose = require('mongoose')
const GameSchema = require('./games')

const Game = mongoose.model('games', GameSchema)

module.exports = {
  Game
}
