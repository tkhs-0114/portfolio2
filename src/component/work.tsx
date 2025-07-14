import React from 'react';

export interface WorkProps {
  user: 'team' | 'solo';
  date: string;
  title: string;
  text?: string;
}

export default function Work({ user, date, title }: WorkProps) {
  return (
    <div className="flex text-white">
      <div className="w-16">{user}</div>
      <div className="w-20">{date}</div>
      <div className="underline">{title}</div>
    </div>
  );
}
