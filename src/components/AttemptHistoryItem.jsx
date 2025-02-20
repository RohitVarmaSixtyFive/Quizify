export default function AttemptHistoryItem({ attempt }) {
    const containerStyles = {
      padding: '1rem',
      borderRadius: '0.5rem',
      borderLeftWidth: '4px',
      borderLeftColor: attempt.isCorrect ? '#22c55e' : '#ef4444', // green-500 : red-500
      backgroundColor: attempt.isCorrect ? '#f0fdf4' : '#fef2f2', // green-50 : red-50
    };
    
    const badgeStyles = {
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      backgroundColor: attempt.isCorrect ? '#bbf7d0' : '#fecaca', // green-200 : red-200
      color: attempt.isCorrect ? '#166534' : '#991b1b', // green-800 : red-800
    };
  
    return (
      <div style={containerStyles}>
        <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>{attempt.question}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
          <span>
            <span style={{ fontWeight: '600' }}>Answer:</span> {attempt.selectedAnswer || 'Time expired'}
          </span>
          <span style={badgeStyles}>
            {attempt.isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
          {new Date(attempt.timestamp).toLocaleString()}
        </p>
      </div>
    );
  }