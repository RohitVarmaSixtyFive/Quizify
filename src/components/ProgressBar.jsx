export default function ProgressBar({ percentage }) {
  return (
    <div className="w-full bg-gray-200 h-2" style={{ backgroundColor: '#e5e7eb' }}>
      <div 
        className="bg-indigo-600 h-2 transition-all duration-300" 
        style={{ 
          width: `${percentage}%`,
          backgroundColor: '#4f46e5' 
        }}
      ></div>
    </div>
  );
}