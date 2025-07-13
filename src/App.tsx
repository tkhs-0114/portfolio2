import React, { useState } from 'react';
import Window from './component/window';
import Skill from './component/skill';
import Select from './component/select';
import TextBox from './component/textbox';

function App() {
  const categories = ['FrontEnd', 'BackEnd', 'Others'];
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-ubuntu-terminal ">
      <img
        src={`${process.env.PUBLIC_URL}/title.png`}
        className="w-10/12 max-w-lg mx-auto py-10"
      />
      <Window color="gemini-blue-light">
        <TextBox
          text={`
        ここに文字を書いていく
        自己紹介的な文章を書く
        ここに長文で長くなってしまった時に適切な場所で折り返すことが可能か確認する
        `}
        />
      </Window>
      <Window color="gemini-green-light" className="h-72 ">
        <Select list={categories} onSelect={setCurrentCategoryIndex} />
        {currentCategoryIndex == 0 && (
          <>
            <Skill
              name="JavaScript"
              state="Completed"
              time={1}
              date="2020/04"
            />
            <Skill
              name="TypeScript"
              state="Completed"
              time={4}
              date="2023/04"
            />
            <Skill
              name="Tailwindcss"
              state="Completed"
              time={3}
              date="2024/04"
            />
            <Skill name="React" state="Learning" time={0} date="2024/04" />
            <Skill name="wasm" state="Stop" time={6} date="2024/04" />
            <Skill name="Next.js" state="Learning" time={0} date="2024/06" />
          </>
        )}
        {currentCategoryIndex == 1 && (
          <>
            <Skill
              name="JavaScript"
              state="Completed"
              time={1}
              date="2020/04"
            />
            <Skill name="Pytohn" state="Completed" time={2} date="2022/04" />
            <Skill name="SQL" state="Completed" time={4} date="2023/04" />
            <Skill name="Flask" state="Stop" time={3} date="2023/08" />
            <Skill name="FastAPI" state="Learning" time={0} date="2024/10" />
            <Skill
              name="RubyonRails"
              state="Learning"
              time={0}
              date="2025/03"
            />
            <Skill name="Go" state="Learning" time={0} date="2025/06" />
          </>
        )}
        {currentCategoryIndex == 2 && (
          <>
            <Skill name="Windows" state="Completed" time={1} date="2017/04" />
            <Skill name="Linux" state="Completed" time={3} date="2023/04" />
            <Skill name="Git" state="Completed" time={4} date="2023/04" />
            <Skill name="Docker" state="Completed" time={6} date="2024/08" />
            <Skill name="Mac" state="Learning" time={0} date="2025/03" />
          </>
        )}
      </Window>
      <Window color="gemini-yellow-light">
        <h1 className="text-white">こんなの作りましたの枠</h1>
      </Window>
    </div>
  );
}

export default App;
