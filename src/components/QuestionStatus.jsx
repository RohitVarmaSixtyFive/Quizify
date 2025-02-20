export default function QuestionStatus({ questionNumber, totalQuestions, timer, attempts, maxAttempts }) {
  // Timer color based on time remaining
  const getTimerColor = () => {
    if (timer > 18) return "#16a34a";
    if (timer > 9) return "#ca8a04";
    return "#dc2626";
  };
  
  return (
    <div className="flex justify-between items-center mb-6">
      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
        style={{ backgroundColor: '#e0e7ff', color: '#3730a3' }}>
        Question {questionNumber} of {totalQuestions}
      </span>
      <div className="flex items-center gap-4">
        <span className="flex items-center font-semibold"
          style={{ color: getTimerColor() }}>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="ml-1">{timer}s</span>
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium"
          style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
          Attempt {attempts}/{maxAttempts}
        </span>
      </div>
    </div>
  );
}