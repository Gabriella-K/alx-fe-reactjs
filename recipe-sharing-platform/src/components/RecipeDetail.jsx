import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe || null);
  }, [id]);

  if (!recipe) {
    return <div className="text-white text-center p-8">Recipe not found...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-beige-200 p-6 sm:p-8">
      <Link
        to="/"
        className="text-green-500 hover:text-green-700 mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-white text-center mb-6 sm:mb-8">{recipe.title}</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-t-lg mb-6"
          />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="pl-2">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="pl-4">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;