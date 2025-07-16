import React, { useState, useEffect, useRef } from 'react';
import Work, { WorkProps } from './work';
import Command from './command';

interface WorksProps {
  works: WorkProps[];
}

export default function Works({ works }: WorksProps) {
  const [display, setDisplay] = useState<React.ReactNode[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function addText(text: string | undefined, title: string) {
    setDisplay((prev) => {
      const newDisplay = [...prev];
      newDisplay.pop();
      return newDisplay;
    });
    setDisplay((prev) => [
      ...prev,
      <Command key={`command-${prev.length}`} cmd={`cat /${title}`} />,
    ]);

    setDisplay((prev) => [
      ...prev,
      <div key={`cat-${prev.length}`} className="text-white">
        {text && text.split('\n').map((str) => <div>{str}</div>)}
      </div>,
    ]);
    setDisplay((prev) => [
      ...prev,
      <Command key={`command-${prev.length}`} cmd="" />,
    ]);
  }

  useEffect(() => {
    setDisplay((prev) => [
      ...prev,
      <Command key={`command-first`} cmd="ls -al" />,
    ]);
    works.forEach((work, i) => {
      setDisplay((prev) => [
        ...prev,
        <div
          key={`work-${i}`}
          onClick={() => {
            addText(work.text, work.title);
          }}
        >
          <Work user={work.user} date={work.date} title={work.title} />
        </div>,
      ]);
    });
    setDisplay((prev) => [
      ...prev,
      <Command key={`command-${prev.length}`} cmd="" />,
    ]);

    return () => {
      setDisplay([]);
    };
  }, [works]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [display]);

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-y-auto h-full custom-scrollbar"
    >
      {display}
    </div>
  );
}
