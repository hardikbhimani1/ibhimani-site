import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetNumber, label }) => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  const isInView = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  useEffect(() => {
    let observer;

    const handleScroll = () => {
      if (isInView() && counter < targetNumber) {
        const speed = Math.round(targetNumber / 100); // Adjust for animation speed
        setCounter((prevCounter) => Math.min(prevCounter + speed, targetNumber));
      }
    };

    // Start observing when the component mounts
    observer = new IntersectionObserver(handleScroll, { threshold: 0.1 }); // Adjust threshold as needed
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup 
    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [counter, targetNumber]); 

  return (
    <div ref={ref} className="flex flex-col items-center p-6 text-center">
      {targetNumber !== 20 && targetNumber !== 32 && (
        <span className="text-4xl font-bold text-blue-500">
          {counter}+
        </span>
      )}
      <span className="mt-2 text-gray-600">{label}</span>
    </div>
  );
};
export default Counter;