import React, { useState, useEffect } from 'react';
import recipeData from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    
    setRecipes(recipeData);
  }, []); 

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-beige-200 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;