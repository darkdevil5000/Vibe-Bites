// src/App.js
import React, { useState } from 'react';
import MoodSelector from './components/MoodSelector';
import RecipeDisplay from './components/RecipeDisplay';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import recipesData from './assets/recipes.json';
import './App.css';

const AppContent = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [recipes, setRecipes] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    const filteredRecipes = recipesData[mood.toLowerCase()] || [];
    setRecipes(filteredRecipes);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="app-header">
        <div className="header-content">
          <h1>
            <span className="logo-text">Vibe</span>
            <span className="logo-accent">Bites</span>
            <span className="logo-emoji">🍽️</span>
          </h1>
          <h2>Developed by Dark Devil</h2>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      
      <main className="main-content">
        <MoodSelector onSelectMood={handleMoodSelect} selectedMood={selectedMood} />
        {selectedMood && (
          <div className="mood-indicator">
            Currently feeling: <span className="mood-text">{selectedMood}</span>
          </div>
        )}
        <RecipeDisplay recipes={recipes} />
      </main>
      
      <footer className="app-footer">
        <p>Made with ❤️ for food lovers</p>
        <p>We are improving the user experience of our website.</p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;