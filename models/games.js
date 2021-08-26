const { Schema } = require('mongoose')

const Game = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    published_date: { type: String, required: true },
    publisher_id: { type: Schema.Types.ObjectId, ref: 'publisher_id' }
  },
  { timestamps: true }
)

module.exports = Game
