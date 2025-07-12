import React, { useState, useEffect } from 'react';
import Load from './loading';

type SkillState = 'Learning' | 'Completed' | 'Stop';
const stateColor = {
  Learning: 'gemini-blue',
  Completed: 'gemini-green',
  Stop: 'gemini-red',
};

interface SkillProps {
  name: string;
  date: string;
  state: SkillState;
  time: number;
}

export default function Skill({ name, date, state, time }: SkillProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [nowState, setNowState] = useState<SkillState>('Learning');
  useEffect(() => {
    if (time == 0) return;
    const timer = setTimeout(() => {
      setNowState(state);
      setIsComplete(true);
    }, time * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="flex items-center text-lg w-80">
      <div className="w-8">
        <Load duration={time} isComplete={isComplete} />
      </div>
      <div className="w-28 text-white">{name}</div>
      <div className={`text-${stateColor[nowState]}`}>{nowState}</div>
      <div className="text-gemini-blue ml-auto">{date}</div>
    </div>
  );
}
