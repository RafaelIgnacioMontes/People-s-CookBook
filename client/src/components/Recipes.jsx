import { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateRecipe from './UpdateRecipe'
import Comment from './Comments'

const Recipes = (response) => {
  const [recipeList, setRecipeList] = useState([])

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
      <div>
        <h1 className="RecipeTitle">Recipes</h1>{' '}
        <div className="recipecard">
          <div className="column1">
            {recipeList.map(
              (recipe, index) =>
                index % 2 == 0 && (
                  <div className="thewholecard" key={recipe._id}>
                    <div>
                      <img src={recipe.imageUrl} className="picture" />
                    </div>
                    <div className="rname">{recipe.name}</div>
                    <div className="ringredients">
                      Ingredients: {recipe.ingredients}
                    </div>
                    <div className="description">
                      Instructions: {recipe.description}
                    </div>
                    <div>Serving Size: {recipe.serving}</div>
                    <button
                      onClick={() => delRecipe(recipe._id)}
                      className="recipebutton"
                    >
                      {' '}
                      <span>Delete</span>
                    </button>
                    <UpdateRecipe
                      getRecipeList={getRecipeList}
                      recipe={recipe}
                    />

                    <Comment getRecipeList={getRecipeList} recipe={recipe} />
                    <div>
                      {recipe.comments.map((comment) => (
                        <div key={comment._id}>
                          <h3>User: {comment.user}</h3>
                          <p>Comment: {comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="column2">
            {recipeList.map(
              (recipe, index) =>
                index % 2 != 0 && (
                  <div className="thewholecard" key={recipe._id}>
                    <div>
                      <img src={recipe.imageUrl} className="picture" />
                    </div>
                    <div>{recipe.name}</div>
                    <div>Ingredients: {recipe.ingredients}</div>
                    <div className="description">
                      Instructions: {recipe.description}
                    </div>
                    <div>Serving Size: {recipe.serving}</div>
                    <button
                      onClick={() => delRecipe(recipe._id)}
                      className="recipebutton"
                    >
                      <span>Delete</span>
                    </button>
                    <UpdateRecipe
                      getRecipeList={getRecipeList}
                      recipe={recipe}
                    />

                    <Comment getRecipeList={getRecipeList} recipe={recipe} />
                    <div>
                      {recipe.comments.map((comment) => (
                        <div key={comment._id}>
                          <h3>User: {comment.user}</h3>
                          <p>Comment: {comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes
