import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const RecipeForm = (props) => {
  let navigate = useNavigate()

  const [formData, setFormData] = useState({})

  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: '',
    description: '',
    serving: '',
    img: ''
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
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Lets try your recipe!</h1>
      <form onSubmit={handleSubmit}>
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
        <input
          type="text-area"
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
          value={newRecipe.img}
          onChange={handleChange}
          name={'img'}
          placeholder={'url for an image for your recipe here'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
