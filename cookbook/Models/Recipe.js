const { Schema } = require('mongoose')

const recipeSchema = new Schema(
  {
    ingredientList: { type: String, required: true },
    description: { type: String, required: true },
    servingAmount: { type: Integer, required: true },
    imageUrl: { type: String, required: true },
    Comments: [{ type: Schema.Types.ObjectId, ref: 'commentsSchema' }]
  },
  { timestamps: true }
)

module.exports = recipeSchema
