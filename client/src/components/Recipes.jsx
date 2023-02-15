import { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateRecipe from './UpdateRecipe'

const Recipes = (response) => {
  const initialState = [
    { name: '', ingredients: '', description: '', serving: '', imageUrl: '' }
  ]
  const [recipeList, setRecipeList] = useState([])
  const [updateRecipe, setUpdateRecipe] = useState()

  const getRecipeList = async () => {
    const response = await axios.get('http://localhost:3001/api/recipes')
    console.log(response)
    setRecipeList(response.data.recipes)
  }
  const delRecipe = async (recipeId) => {
    const response = await axios.delete(
      `http://localhost:3001/api/recipes/${recipeId}`
    )
    console.log(response)
    getRecipeList()
  }

  useEffect(() => {
    getRecipeList()
  }, [])
  console.log(recipeList)
  return (
    <div className="recipes">
      <h1 className="RecipeTitle">Recipes</h1>
      <div>
        {recipeList.map((recipe) => (
          <div>
            <div>
              <img src={recipe.imageUrl} className="picture" />
            </div>
            <div>{recipe.name}</div>
            <div>Ingredients: {recipe.ingredients}</div>
            <div>Instructions: {recipe.description}</div>
            <div>Serving Size: {recipe.serving}</div>
            <button onClick={() => delRecipe(recipe._id)}>Delete</button>
            <UpdateRecipe getRecipeList={getRecipeList} recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipes
