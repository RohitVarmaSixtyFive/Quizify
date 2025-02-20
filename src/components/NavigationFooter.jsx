import React from 'react';

export default function NavigationFooter({ 
  isFirstQuestion, 
  isLastQuestion, 
  onNext, 
  onPrevious 
}) {
  const containerStyle = {
    backgroundColor: '#f9fafb', // Light gray background
    borderTop: '1px solid #e5e7eb', // Light border at the top
    padding: '1rem 2rem', // Padding for spacing
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const buttonBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem', // Consistent padding
    borderRadius: '0.5rem', // Rounded corners
    fontSize: '1rem', // Uniform font size
    fontWeight: '500', // Medium font weight
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    outline: 'none', // Remove default focus outline
    border: 'none' // Remove default button border
  };

  const previousButtonStyles = {
    ...buttonBaseStyle,
    color: '#4f46e5', // Indigo text
    backgroundColor: '#ffffff', // White background
    cursor: isFirstQuestion ? 'not-allowed' : 'pointer',
    opacity: isFirstQuestion ? 0.6 : 1 // Reduce opacity if disabled
  };

  const nextButtonStyles = {
    ...buttonBaseStyle,
    color: '#ffffff', // White text
    backgroundColor: '#4f46e5', // Indigo background
    cursor: 'pointer', // Always enabled
    opacity: 1 // Always fully visible
  };

  const iconStyle = {
    width: '1.25rem', // Fixed width for icons
    height: '1.25rem', // Fixed height for icons
    marginRight: '0.5rem' // Space between icon and text
  };

  return (
    <div style={containerStyle}>
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        style={previousButtonStyles}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={iconStyle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      {/* Next/Finish Button */}
      <button
        onClick={onNext}
        style={nextButtonStyles}
      >
        {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={iconStyle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}