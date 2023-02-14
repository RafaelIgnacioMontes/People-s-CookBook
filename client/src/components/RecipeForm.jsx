import { useNavigate } from 'react-router-dom'

const RecipeForm = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addBoat(e)
    navigate('/recipes')
  }
  const newRecipe = props.newRecipe

  return (
    <div>
      <h1>Lets try your recipe!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newRecipe.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'Whats the name of your recipe?'}
        />
        <input
          type="text"
          value={newRecipe.ingredients}
          onChange={props.handleChange}
          name={'ingredients'}
          placeholder={'List your ingredients here'}
        />
        <input
          type="text-area"
          value={newRecipe.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'What is the process for your recipe?'}
        />
        <input
          type="text"
          value={newRecipe.serving}
          onChange={props.handleChange}
          name={'serving'}
          placeholder={'Serving in numbers'}
        />
        <input
          type="text"
          value={newRecipe.img}
          onChange={props.handleChange}
          name={'image'}
          placeholder={'url for an image for your recipe here'}
        />
      </form>
    </div>
  )
}

export default RecipeForm
