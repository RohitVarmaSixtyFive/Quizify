export default function QuizHeader({ title, score }) {
  return (
    <div className="bg-indigo-600 p-6 text-white" style={{ backgroundColor: '#4f46e5', color: 'white' }}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{ title}</h1>
        <div className="bg-white text-indigo-900 px-4 py-2 rounded-lg font-bold" 
             style={{ backgroundColor: 'white', color: '#312e81' }}>
          {/* Score: {score} */}
        </div>
      </div>
    </div>
  );
}