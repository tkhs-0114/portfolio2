import React, { useState } from 'react';
import Select from './select';
import BlinkingCursor from './blinkingCursor';

interface CommandProps {
  cmd: string;
}

export default function Command({ cmd }: CommandProps) {
  const [a, sa] = useState(-1);
  return (
    <div className="w-full text-lg ">
      <div className="flex flex-wrap items-center">
        <span className="text-gemini-green">user@portfolio</span>
        <span className="text-white">:</span>
        <span className="text-gemini-blue">/works</span>
        <span className="text-white whitespace-nowrap text-sm">
          $&nbsp;{cmd == '' ? <BlinkingCursor /> : `${cmd}`}
        </span>
      </div>
    </div>
  );
}
