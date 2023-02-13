const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    description: { type: String, required: true },
    serving: { type: Number, required: true },
    imageUrl: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', Recipe)
