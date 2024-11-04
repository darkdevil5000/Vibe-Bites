// src/components/MoodSelector.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MoodSelector = ({ onSelectMood, selectedMood }) => {
  const { isDarkMode } = useTheme();
  
  const moods = [
    { name: 'Stressed', emoji: '😫', color: '#FF6B6B' },
    { name: 'Happy', emoji: '😊', color: '#4ECDC4' },
    { name: 'Excited', emoji: '🤩', color: '#FFD93D' },
    { name: 'Sad', emoji: '😢', color: '#6C5CE7' },
    { name: 'Relaxed', emoji: '😌', color: '#A8E6CF' }
  ];

  return (
    <div className={`mood-selector ${isDarkMode ? 'dark' : 'light'}`}>
      <h2 className="section-title">How are you feeling today?</h2>
      <div className="mood-buttons">
        {moods.map(({ name, emoji, color }) => (
          <button
            key={name}
            onClick={() => onSelectMood(name)}
            className={`mood-button ${selectedMood === name ? 'selected' : ''}`}
            style={{
              '--mood-color': color,
              '--mood-color-light': `${color}33`
            }}
          >
            <span className="mood-emoji" role="img" aria-label={name}>
              {emoji}
            </span>
            <span className="mood-text">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;