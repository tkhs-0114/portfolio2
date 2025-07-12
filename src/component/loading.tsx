import React, { useState, useEffect } from 'react';

const spinnerChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠦', '⠧', '⠇', '⠏'];

interface LoadtextProps {
  duration: number;
  isComplete: boolean;
}

export default function Load({ duration, isComplete }: LoadtextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isComplete) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % spinnerChars.length);
    }, 80);
    return () => clearInterval(timer);
  }, [isComplete]);

  return (
    <span className="text-2xl text-gemini-blue">
      {!isComplete ? spinnerChars[index] : '✔'}
    </span>
  );
}
