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
  children: React.ReactNode;
}

export default function Window({ color, children }: WindowProps) {
  return (
    <div className={`border-2 rounded-md p-4 border-${color}`}>{children}</div>
  );
}

