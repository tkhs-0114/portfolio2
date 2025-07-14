import React from 'react';
import BlinkingCursor from './blinkingCursor';

interface VimBoxProps {
  text: string;
  name: string;
}

export default function VimBox({ text, name }: VimBoxProps) {
  const printText = text
    .split('\n')
    .map((t) => t.trim())
    .slice(1, -1);
  return (
    <div className="bg-gray-800 w-11/12">
      <div></div>
      <div className="text-white">
        {printText.map((pt, i) => (
          <div key={`vimbox-${i}`} className="flex">
            <div className="w-5 mr-2 text-gemini-yellow">
              {('00' + (i + 1)).slice(-2)}
            </div>
            <div className="w-full text-wrap">{pt}</div>
          </div>
        ))}
        <div className="flex">
          <div className="w-5 mr-2 text-gemini-yellow">
            {('00' + (printText.length + 1)).slice(-2)}
          </div>
          <div className="w-full text-wrap bg-gray-600">
            <BlinkingCursor />
          </div>
        </div>
        <div className="w-full text-gemini-blue bg-gray-600">~</div>
        <div className="w-full text-gemini-blue bg-gray-600">~</div>
      </div>
      <div className="bg-yellow-100 w-full text-black">{name}</div>
    </div>
  );
}
