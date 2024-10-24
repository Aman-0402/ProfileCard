// src/App.js
import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';  // Import global styles

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Aman Raj"
        title="Full Stack Developer & AIML Expert"
        description="I am a passionate full stack developer with expertise in Artificial Intelligence and Machine Learning. I enjoy solving complex problems and building innovative applications."
        avatar="./profile.jpeg"  // Path to your local profile picture
      />
    </div>
  );
}

export default App;
