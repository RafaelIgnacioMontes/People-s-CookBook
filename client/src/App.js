import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/RecipeForm" elemnt={<RecipeForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
