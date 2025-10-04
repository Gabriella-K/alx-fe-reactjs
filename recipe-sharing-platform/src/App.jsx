import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    <AddRecipeForm />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    
      
    </>
  )
}

export default App
