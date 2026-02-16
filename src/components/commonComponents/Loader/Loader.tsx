'use client';
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
        <div className='relative w-full flexCenter loader'>
          <h2 className='loaderFillTextAnimation !text-[34px] sm:!text-[44px] md:!text-[54px] !rotate-0' data-fill-text="WRTEAM">WRTEAM</h2>
        </div>
        <div className="h-1.5 w-40 md:w-72 lg:w-80 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[linear-gradient(to_right,_#869E11,_#EC8C25,_#E5016F,_#43A2A1)] rounded-full progress-bar"
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