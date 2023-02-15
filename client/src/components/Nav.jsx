import { NavLink } from 'react-router-dom'
import '../App.css'
const Nav = () => {
  return (
    <nav className="navbar">
      <h4>People's Cookbook</h4>
      <div className="navtext">
        <div className="links">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="links">
          <NavLink to="/Recipes">Recipes</NavLink>
        </div>
        <div className="links">
          <NavLink to="/RecipeForm">New Recipe</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
