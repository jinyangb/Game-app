const { Schema } = require('mongoose')

const Game = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    console: { type: String, required: true },
    rating: { type: String, required: true }
    // Genre: { type: String, required: true }
    // publisher_id: { type: Schema.Types.ObjectId, ref: 'publisher_id' }
  },
  { timestamps: true }
)

module.exports = Game
