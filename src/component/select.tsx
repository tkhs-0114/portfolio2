import React, { useState } from 'react';

interface SelectProps {
  list: string[];
  onSelect: (selectedIndex: number) => void;
}

export default function Select({ list, onSelect }: SelectProps) {
  const [index, setIndex] = useState(-1);
  return (
    <div className="flex space-x-2 text-lg">
      {list.map((item, i) => (
        <button
          key={i}
          className={`${index != i ? 'text-ubuntu bg-white' : 'text-white'} underline px-2`}
          onClick={() => {
            onSelect(i);
            setIndex(i);
          }}
        >
          {`${index == i ? '>' : ''}${item}`}
        </button>
      ))}
    </div>
  );
}
