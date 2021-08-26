const mongoose = require('mongoose')
const GameSchema = require('./game')

const Game = mongoose.model('games', GameSchema)

module.exports = {
  Game
}
