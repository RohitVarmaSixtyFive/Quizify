import React from 'react';

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  timer,
  selectedAnswer,
  onAnswerSelect,
  isExpired
}) {
  // Card styling
  const cardStyle = {
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
    maxHeight: 'calc(100% - 2rem)',
    overflowY: 'auto',
    position: 'relative'
  };

  // Base option styling
  const optionStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    margin: '0.5rem 0',
    borderRadius: '0.375rem',
    cursor: isExpired ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '1rem',
    border: '2px solid #e5e7eb',
    backgroundColor: '#f9fafb',
    opacity: isExpired ? 0.75 : 1
  };

  // Selected option styling
  const selectedOptionStyle = {
    ...optionStyle,
    // borderColor: '#4f46e5',
    backgroundColor: '#eff6ff',
    fontWeight: '500'
  };

  // Timer color based on remaining time or expiration
  const timerColor = isExpired ? '#9ca3af' : timer <= 10 ? '#ef4444' : timer <= 20 ? '#f59e0b' : '#374151';
  
  // Determine timer text
  const timerText = isExpired ? "Time Expired" : `Time Left: ${timer}s`;

  return (
    <div style={cardStyle}>
      {/* Expired overlay for visual indication */}
      {isExpired && (
        <div style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          backgroundColor: '#ef4444',
          color: 'white',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>
          EXPIRED
        </div>
      )}
    
      <h3 style={{ marginBottom: '1rem', color: '#1f2937' }}>
        Question {questionNumber} of {totalQuestions}
      </h3>
      
      <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
        {question.text}
      </p>
      
      {/* Timer with visual indication */}
      <div style={{ 
        marginBottom: '1.5rem', 
        color: timerColor,
        fontWeight: timer <= 20 && !isExpired ? '600' : '400',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke={timerColor} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>{timerText}</span>
      </div>
      
      {/* Expired notice */}
      {isExpired && (
        <div style={{
          marginBottom: '1rem',
          padding: '0.75rem',
          backgroundColor: '#fee2e2',
          borderRadius: '0.375rem',
          border: '1px solid #fecaca',
          color: '#b91c1c'
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            <strong>Note:</strong> Time has expired for this question. You cannot change your answer.
          </p>
        </div>
      )}
      
      {/* Options */}
      <div>
        {question.options.map((option, index) => (
          <div
            key={`option-${questionNumber}-${index}`}
            style={selectedAnswer === option ? selectedOptionStyle : optionStyle}
            onClick={() => !isExpired && onAnswerSelect(option)}
          >
            <span style={{ 
              width: '24px', 
              height: '24px',
              borderRadius: '50%',
              backgroundColor: selectedAnswer === option ? '#4f46e5' : '#e5e7eb',
              color: selectedAnswer === option ? '#ffffff' : '#4b5563',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.75rem',
              fontWeight: '600',
              opacity: isExpired ? 0.8 : 1
            }}>
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}