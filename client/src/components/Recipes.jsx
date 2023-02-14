import { useState, useEffect } from 'react'
import axios from 'axios'

const Recipe = (response) => {
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    const getRecipeList = async () => {
      const response = await axios.get('http://localhost:3001/api/recipes')
      console.log(response)
      setRecipeList(response.data.recipes)
    }
    getRecipeList()
  }, [])

  return (
    <div className="recipes">
      {recipeList.length ? (
          {recipeList.map((recipes) =>(
            recipes.name
          ))}
       <div>
        {recipeList}</div>)
         : <div>Loading</div>}
    </div>
  )
}

export default Recipe
