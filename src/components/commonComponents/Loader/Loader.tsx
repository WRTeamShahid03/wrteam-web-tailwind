import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress animation when component mounts
    setProgress(10); // Initial progress

    // Simulate gradual progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 90) {
          return prev + 2;
        }
        clearInterval(progressInterval);
        return prev;
      });
    }, 100);

    // Cleanup interval on unmount
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className='fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-center z-50'>
      <style jsx global>{`
        .progress-bar {
          transition: width 0.3s ease-out;
        }
      `}</style>
      
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {['W', 'R', 'T', 'e', 'a', 'm'].map((letter, index) => (
            <span 
              key={index}
              className="text-5xl font-bold"
              style={{ 
                color: index < 2 ? '#3b82f6' : (index >= 4 ? '#8b5cf6' : '#6366f1')
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="h-1.5 w-80 mx-auto bg-gray-200 rounded-full overflow-hidden mt-4">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-gray-600 mt-3 text-sm font-medium">
          Loading your experience... {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Loader;