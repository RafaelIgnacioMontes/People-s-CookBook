import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const RecipeForm = ({ props, getRecipeList }) => {
  let navigate = useNavigate()

  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: '',
    description: '',
    serving: '',
    imageUrl: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:3001/api/recipes', newRecipe)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    console.log(newRecipe)
    navigate('/recipes')
    getRecipeList()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="createformdiv">
      <h1 className="createformheader">Lets try your recipe!</h1>
      <form onSubmit={handleSubmit} className="createformform">
        <input
          type="text"
          value={newRecipe.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'Whats the name of your recipe?'}
        />
        <input
          type="text"
          value={newRecipe.ingredients}
          onChange={handleChange}
          name={'ingredients'}
          placeholder={'List your ingredients here'}
        />
        <textarea
          className="textareatext"
          type="text"
          value={newRecipe.description}
          onChange={handleChange}
          name={'description'}
          placeholder={'What is the process for your recipe?'}
        />
        <input
          type="text"
          value={newRecipe.serving}
          onChange={handleChange}
          name={'serving'}
          placeholder={'Serving in numbers'}
        />
        <input
          type="text"
          value={newRecipe.imageUrl}
          onChange={handleChange}
          name={'imageUrl'}
          placeholder={'url for an image for your recipe here'}
        />
        <button className="submitbutton">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
