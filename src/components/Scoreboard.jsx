import AttemptHistoryItem from './AttemptHistoryItem';

export default function Scoreboard({ score, maxScore, attemptHistory, onRestart }) {
    const getFeedbackMessage = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage >= 80) return "Excellent! You've mastered this quiz!";
        if (percentage >= 60) return "Good job! Keep practicing to improve your score.";
        return "Keep practicing! You'll do better next time.";
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ backgroundColor: 'white', borderRadius: '0.75rem', width: '100%', maxWidth: '1200px',    marginLeft: '-5%', marginTop: '-5%' }}>
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
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
                    Attempt History
                </h3>
                
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        maxHeight: '300px',
                        maxWidth: '1200px',
                        overflowY: 'auto',
                        paddingRight: '0.5rem',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        backgroundColor: '#f9fafb',
                        padding: '1rem',
                    }}
                >
                    {attemptHistory.length > 0 ? (
                        attemptHistory.map((attempt, index) => (
                            <AttemptHistoryItem key={index} attempt={attempt} />
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', color: '#6b7280' }}>No attempt history available.</p>
                    )}
                </div>
                
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
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
                </div>
            </div>
        </div>
    );
}
