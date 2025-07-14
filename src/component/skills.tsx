import React from 'react';
import Skill, { SkillProps } from './skill';

interface SkillsProps {
  skills: SkillProps[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div>
      {skills.map((skill, i) => (
        <Skill
          key={i}
          name={skill.name}
          state={skill.state}
          date={skill.date}
          time={skill.time}
        />
      ))}
    </div>
  );
}
