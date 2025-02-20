import React from 'react';
import { Link } from 'react-router-dom';

export default function AttemptHistoryPage() {
  // Retrieve quiz attempts from local storage
  const storedAttempts = JSON.parse(localStorage.getItem('quizAttempts')) || [];

  // Sort attempts in descending order of attempt ID (most recent first)
  const sortedAttempts = [...storedAttempts].sort((a, b) => b.id - a.id);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: '0', 
      padding: '2rem', 
      background: 'linear-gradient(to bottom, #eff6ff, #eef2ff)', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        backgroundColor: 'white', 
        borderRadius: '1rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
        overflow: 'hidden', 
        padding: '2rem', 
        marginLeft: '-5%',
        marginTop: '-5%' 
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>Attempt History</h1>
        
        {/* Scrollable Container */}
        <div style={{
          maxHeight: '400px', // Fixed height for scrollable area
          overflowY: 'auto', // Enable vertical scrolling
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          padding: '1rem',
          backgroundColor: '#f9fafb'
        }}>
          {sortedAttempts.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {sortedAttempts.map((attempt, index) => (
                <div 
                  key={index} 
                  style={{ 
                    padding: '1rem', 
                    backgroundColor: 'white', 
                    borderRadius: '0.5rem', 
                    border: '1px solid #e5e7eb', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}
                >
                  <div>
                    <p style={{ fontSize: '1rem', fontWeight: '500', margin: '0' }}>Attempt {attempt.id}</p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0' }}>
                      Score: {attempt.score}/{attempt.maxScore}
                    </p>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0' }}>
                    {new Date(attempt.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: '#6b7280' }}>No attempts recorded yet.</p>
          )}
        </div>

        {/* Back to Home Button */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <Link to="/">
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}