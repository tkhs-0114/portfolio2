import React from 'react';

type WindowColor =
  | 'gemini-blue'
  | 'gemini-red'
  | 'gemini-yellow'
  | 'gemini-green'
  | 'gemini-blue-light'
  | 'gemini-red-light'
  | 'gemini-yellow-light'
  | 'gemini-green-light';

interface WindowProps {
  color: WindowColor;
  className?: string;
  children: React.ReactNode;
}

export default function Window({ color, children, className }: WindowProps) {
  return (
    <div
      className={`border-2 rounded-md p-4 m-4 border-${color} ${className} max-w-md w-10/12`}
    >
      {children}
    </div>
  );
}
