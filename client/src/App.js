import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import RecipeForm from './components/RecipeForm'
import Recipes from './components/Recipes'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RecipeForm" element={<RecipeForm />} />
          <Route path="/Recipes" element={<Recipes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
