const Comment = require('../models/Comment')
const Recipe = require('../models/Recipe')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    const recipeFind = await Recipe.findById(req.params.id)
    recipeFind.comments.push(comment._id)
    recipeFind.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({
      recipe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('comments')
    return res.status(200).json({ recipes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id).populate('comments')
    if (recipe) {
      return res.status(200).json({ recipe })
    }
    return res.status(404).send('Recipe with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(recipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Recipe.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Recipe deleted')
    }
    throw new Error('Recipe not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  createComment
}
