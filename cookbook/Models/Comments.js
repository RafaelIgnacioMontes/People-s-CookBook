const { Schema } = require('mongoose')

const commentsSchema = new Schema(
  {
    user: { type: String, required: true },
    comment: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = commentsSchema
