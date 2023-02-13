import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>People's Cookbook</h4>
      <div>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Recipes">Recipes</NavLink>
        <NavLink to="/RecipeForm">New Recipe</NavLink>
      </div>
    </nav>
  )
}

export default Nav
