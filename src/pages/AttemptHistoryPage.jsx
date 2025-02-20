import React from 'react';

export default function AttemptHistoryPage() {
  // Retrieve quiz attempts from local storage
  const storedAttempts = JSON.parse(localStorage.getItem('quizAttempts')) || [];

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
        maxWidth: '800px', 
        backgroundColor: 'white', 
        borderRadius: '1rem', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
        overflow: 'hidden', 
        padding: '2rem' 
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>Attempt History</h1>
        
        {storedAttempts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {storedAttempts.map((attempt, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '1rem', 
                  backgroundColor: '#f9fafb', 
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
    </div>
  );
}