export default function AnswerOption({ option, isSelected, isCorrect, isDisabled, onClick }) {
  // Determine button styles with inline styles as backup
  let buttonClasses = "w-full p-4 text-left rounded-lg transition-all duration-200 border-2 ";
  let buttonStyles = {
    borderWidth: '2px',
    transition: 'all 0.2s'
  };
  
  if (isSelected) {
    // if (isCorrect) {
    //   buttonClasses += "border-green-500 bg-green-50 text-green-800";
    //   buttonStyles.backgroundColor = '#f0fdf4';  // green-50
    //   buttonStyles.borderColor = '#22c55e';      // green-500
    //   buttonStyles.color = '#166534';            // green-800
    // } else {
    //   buttonClasses += "border-red-500 bg-red-50 text-red-800";
    //   buttonStyles.backgroundColor = '#fef2f2';  // red-50
    //   buttonStyles.borderColor = '#ef4444';      // red-500
    //   buttonStyles.color = '#991b1b';            // red-800
    // }
    // buttonClasses += "border-green-500 bg-green-50 text-green-800";
    // buttonStyles.backgroundColor = '#f0fdf4';  // green-50
    // buttonStyles.borderColor = '#22c55e';      // green-500
    // buttonStyles.color = '#166534';            // green-800
  } else {
    buttonClasses += "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50";
    buttonStyles.borderColor = '#e5e7eb';        // gray-200
  }
  
  if (isDisabled) {
    buttonClasses += " opacity-75 cursor-not-allowed";
    buttonStyles.opacity = 0.75;
    buttonStyles.cursor = 'not-allowed';
  }
  
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClasses}
      style={buttonStyles}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center mr-3"
             style={{ 
               borderColor: isSelected ? 'transparent' : '#d1d5db', 
               borderRadius: '50%',
               height: '1.5rem',
               width: '1.5rem',
               marginRight: '0.75rem',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
             }}>
          {/* {isSelected && (
            isCorrect ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="#ef4444">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )
          )} */}
        </div>
        <span>{option}</span>
      </div>
    </button>
  );
}