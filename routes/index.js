const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('DB connected!'))

router.post('/recipes', controllers.createRecipe)

router.get('/recipes', controllers.getAllRecipes)

router.get('/recipes/:id', controllers.getRecipeById)

router.put('/recipes/:id', controllers.updateRecipe)

router.delete('/recipes/:id', controllers.deleteRecipe)

router.post('/comments/:id/comment', controllers.createComment)

module.exports = router
