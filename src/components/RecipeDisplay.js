// src/components/RecipeDisplay.js
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const RecipeDisplay = ({ recipes }) => {
  const { isDarkMode } = useTheme();
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  const toggleRecipe = (index) => {
    setExpandedRecipe(expandedRecipe === index ? null : index);
  };

  if (!recipes.length) return null;

  return (
    <div className={`recipe-display ${isDarkMode ? 'dark' : 'light'}`}>
      <h2 className="section-title">Your Personalized Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className={`recipe-card ${expandedRecipe === index ? 'expanded' : ''}`}
            onClick={() => toggleRecipe(index)}
          >
            <div className="recipe-header">
              <h3 className="recipe-title">{recipe.title}</h3>
              <span className="expand-icon">
                {expandedRecipe === index ? '−' : '+'}
              </span>
            </div>
            
            <div className={`recipe-content ${expandedRecipe === index ? 'show' : ''}`}>
              <div className="ingredients-section">
                <h4>Ingredients</h4>
                <ul className="ingredients-list">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>
                      <span className="ingredient-bullet">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="instructions-section">
                <h4>Instructions</h4>
                <p className="instructions-text">{recipe.instructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDisplay;