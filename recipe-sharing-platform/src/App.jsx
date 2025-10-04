import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    
      
    </>
  )
}

export default App
