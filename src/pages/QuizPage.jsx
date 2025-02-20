import React, { useState, useEffect } from 'react';
import { sampleQuiz } from '../data/quizzes';
import QuizHeader from '../components/QuizHeader';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import NavigationFooter from '../components/NavigationFooter';
import Scoreboard from '../components/Scoreboard';
import { ArrowLeftCircleIcon } from '@heroicons/react/16/solid';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [attemptHistory, setAttemptHistory] = useState([]);
  
  // Track remaining time for each question separately
  const [questionTimers, setQuestionTimers] = useState(() => {
    // Initialize with original durations for all questions
    const initialTimers = {};
    sampleQuiz.questions.forEach((question, index) => {
      initialTimers[index] = question.timerDuration;
    });
    return initialTimers;
  });
  
  // Track which questions have expired
  const [expiredQuestions, setExpiredQuestions] = useState({});

  // Get current question's timer
  const currentTimer = questionTimers[currentQuestionIndex] || 0;
  const currentQuestion = sampleQuiz.questions[currentQuestionIndex];
  const isCurrentQuestionExpired = expiredQuestions[currentQuestionIndex] || false;

  // Timer effect - only runs for active, non-expired questions
  useEffect(() => {
    if (!showScoreboard && currentTimer > 0 && !isCurrentQuestionExpired) {
      const interval = setInterval(() => {
        setQuestionTimers(prev => {
          const updatedTimer = prev[currentQuestionIndex] - 1;
          
          // If timer reaches zero, mark this question as expired
          if (updatedTimer <= 0) {
            setExpiredQuestions(expired => ({
              ...expired,
              [currentQuestionIndex]: true
            }));
          }
          
          return {
            ...prev,
            [currentQuestionIndex]: Math.max(0, updatedTimer)
          };
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [currentQuestionIndex, currentTimer, showScoreboard, isCurrentQuestionExpired]);

  const handleAnswerSelect = (answer) => {
    // Only allow answer selection if the question timer hasn't expired
    if (!expiredQuestions[currentQuestionIndex]) {
      setSelectedAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: answer
      }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < sampleQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      submitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const submitQuiz = () => {
    const newAttemptHistory = sampleQuiz.questions.map((question, index) => ({
      question: question.text,
      selectedAnswer: selectedAnswers[index],
      isCorrect: selectedAnswers[index] === question.correctAnswer,
      timestamp: new Date().toISOString(),
      expired: expiredQuestions[index] || false,
      remainingTime: questionTimers[index]
    }));
    setAttemptHistory(newAttemptHistory);
    const finalScore = newAttemptHistory.reduce(
      (acc, attempt) => (attempt.isCorrect ? acc + 1 : acc),
      0
    );
    setScore(finalScore);
    setShowScoreboard(true);
  };

  const restartQuiz = () => {
    // Reset all states to initial values
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScoreboard(false);
    setAttemptHistory([]);
    setSelectedAnswers({});
    setExpiredQuestions({});
    
    // Reset all question timers to their original duration
    const initialTimers = {};
    sampleQuiz.questions.forEach((question, index) => {
      initialTimers[index] = question.timerDuration;
    });
    setQuestionTimers(initialTimers);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / sampleQuiz.questions.length) * 100;

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '2rem',
    background: 'linear-gradient(to bottom, #eff6ff, #eef2ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
 
  };

  const quizContainerStyle = {
    width: '100%',
    maxWidth: '1200px',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column', 
    marginLeft: '-5%',
    marginTop: '-5%'  
  };

  if (showScoreboard) {
    return (
      <div style={containerStyle}>
        <Scoreboard
          score={score}
          maxScore={sampleQuiz.questions.length}
          attemptHistory={attemptHistory}
          onRestart={restartQuiz}
        />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={quizContainerStyle}>
        <div style={{ textAlign: 'center' }}>
          <QuizHeader title={sampleQuiz.title} score={score} />
        </div>
        <ProgressBar percentage={progressPercentage} />
        
        <div style={{ 
          flex: '1 1 auto',
          padding: '1.5rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <QuestionCard
            key={`question-${currentQuestionIndex}`}
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={sampleQuiz.questions.length}
            timer={currentTimer}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            isExpired={isCurrentQuestionExpired}
          />
        </div>
        
        <div style={{ flexShrink: 0 }}>
          <NavigationFooter
            isFirstQuestion={currentQuestionIndex === 0}
            isLastQuestion={currentQuestionIndex === sampleQuiz.questions.length - 1}
            canProgress={selectedAnswers[currentQuestionIndex] !== undefined || isCurrentQuestionExpired}
            onPrevious={handlePreviousQuestion}
            onNext={handleNextQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;