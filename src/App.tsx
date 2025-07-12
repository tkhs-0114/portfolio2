import React, { useState } from 'react';
import Window from './component/window';
import Skill from './component/skill';

function App() {
  return (
    <div className="min-h-screen bg-ubuntu-terminal flex items-center justify-center">
      <Window color="gemini-green">
        {/* frontend */}
        <Skill name="JavaScript" state="Completed" time={2} date="2020/04" />
        <Skill name="TypeScript" state="Completed" time={4} date="2023/04" />
        <Skill name="Tailwindcss" state="Completed" time={3} date="2024/04" />
        <Skill name="React" state="Learning" time={0} date="2024/04" />
        <Skill name="wasm" state="Stop" time={6} date="2024/04" />
        <Skill name="Next.js" state="Learning" time={0} date="2024/06" />
        {/* backend */}
        <Skill name="JavaScript" state="Completed" time={2} date="2020/04" />
        <Skill name="Pytohn" state="Completed" time={3} date="2022/04" />
        <Skill name="SQL" state="Completed" time={4} date="2024/04" />
        <Skill name="FastAPI" state="Learning" time={0} date="2022/04" />
        <Skill name="RubyonRails" state="Learning" time={0} date="2022/04" />
        <Skill name="Go" state="Learning" time={0} date="2022/04" />
        {/* others */}
      </Window>
    </div>
  );
}

export default App;
