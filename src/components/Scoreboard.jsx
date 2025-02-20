import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

export default function Scoreboard({ score, maxScore, attemptHistory, onRestart }) {
  const getFeedbackMessage = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return "Excellent! You've mastered this quiz!";
    if (percentage >= 60) return "Good job! Keep practicing to improve your score.";
    return "Keep practicing! You'll do better next time.";
  };

  // Save attempt history to local storage
  React.useEffect(() => {
    const storedAttempts = JSON.parse(localStorage.getItem('quizAttempts')) || [];
    const newAttempt = {
      id: storedAttempts.length + 1,
      score: score,
      maxScore: maxScore,
      timestamp: new Date().toISOString(),
    };
    const updatedAttempts = [...storedAttempts, newAttempt];
    localStorage.setItem('quizAttempts', JSON.stringify(updatedAttempts));
  }, [score, maxScore]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ backgroundColor: 'white', borderRadius: '0.75rem', width: '100%', maxWidth: '1200px', marginLeft: '-5%', marginTop: '-5%' }}>
      <div className="bg-indigo-600 p-6 text-white" style={{ backgroundColor: '#4f46e5', color: 'white', textAlign: 'center' }}>
        <h1 className="text-3xl font-bold">Quiz Complete!</h1>
      </div>

      <div className="p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Final Score: {score}/{maxScore}
          </h2>
          <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '1rem', marginBottom: '1rem' }}>
            <div 
              style={{ 
                width: `${(score / maxScore) * 100}%`, 
                backgroundColor: '#4f46e5', 
                height: '1rem', 
                borderRadius: '9999px' 
              }}
            ></div>
          </div>
          <p style={{ color: '#4b5563', fontSize: '1rem', fontWeight: '500' }}>{getFeedbackMessage()}</p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {/* Restart Quiz Button */}
          <button
            onClick={onRestart}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4f46e5',
              color: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Restart Quiz
          </button>

          {/* Attempt History Button */}
          <Link to="/attempts">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Attempt History
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}