import { useEffect, useState } from 'react';

const LoaderTwo = () => {
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
    <div className='relative h-screen w-full flexCenter loader'>
      <h2 className='loaderFillTextAnimation !rotate-0' data-fill-text="WRTEAM">WRTEAM</h2>
    </div>
  );
};

export default LoaderTwo;