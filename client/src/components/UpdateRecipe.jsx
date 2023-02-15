import { useState } from 'react'
import axios from 'axios'
const UpdateRecipe = ({ recipe, getRecipeList }) => {
  const [recipeUpdate, setRecipeUpdate] = useState(recipe)

  console.log(recipeUpdate)

  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipeUpdate((recipeUpdate) => ({
      ...recipeUpdate,
      [name]: value
    }))
  }

  const updateRecipeCall = async (e) => {
    e.preventDefault()
    const response = await axios.put(
      `http://localhost:3001/api/recipes/${recipe._id}`,
      recipeUpdate
    )

    getRecipeList()
  }

  return (
    <div>
      <p>RecipeUpdate</p>
      <form onSubmit={updateRecipeCall}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={recipeUpdate.name}
          placeholder="Update Recipe Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="ingredients"
          value={recipeUpdate.ingredients}
          placeholder="Update Recipe Name"
        />
        <textarea
          className="box"
          onChange={handleChange}
          type="textarea"
          name="description"
          value={recipeUpdate.description}
          placeholder="Update Recipe Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="serving"
          value={recipeUpdate.serving}
          placeholder="Update Recipe Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default UpdateRecipe
