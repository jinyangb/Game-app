const { Schema } = require('mongoose')

const Game = new Schema(
  {
    title: { type: String, required: true },
    Image: { type: String, required: true },
    Console: { type: String, required: true },
    Rating: { type: String, required: true },
    Genre: { type: String, required: true }
    // publisher_id: { type: Schema.Types.ObjectId, ref: 'publisher_id' }
  },
  { timestamps: true }
)

module.exports = Game
