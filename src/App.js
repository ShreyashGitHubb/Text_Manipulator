import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
      document.body.classList.toggle('bg-dark', !darkMode);
      document.body.classList.toggle('text-white', !darkMode);
  };
  return (
    <>
    <Navbar title="Text Manipulator" darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <div className="container my-3">
      <TextForm heading = "Enter your text to Analyze" darkMode={darkMode}/>
    </div>
    </>
  );
}

export default App;
