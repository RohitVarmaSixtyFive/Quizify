import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '2rem',
    background: 'linear-gradient(to bottom, #eff6ff, #eef2ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial, sans-serif'
  };

  const startButtonStyle = {
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1>Welcome to the Quiz!</h1>
        <p>Test your knowledge and have fun!</p>
        {/* Link to the Quiz Page */}
        <Link to="/quiz">
          <button style={startButtonStyle}>Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;