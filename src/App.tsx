import React, { useState } from 'react';
import Window from './component/window';
import VimBox from './component/vimbox';
import Select from './component/select';
import Skills from './component/skills';
import Works from './component/works';
import Background from './component/background';

function App() {
  const categories = ['FrontEnd', 'BackEnd', 'Others'];
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(-1);

  return (
    <div className="min-h-screen p-1 ">
      <Background />
      <img
        src={`${process.env.PUBLIC_URL}/title.png`}
        className="w-10/12 max-w-lg mx-auto py-10"
      />
      <Window color="gemini-blue-light">
        <VimBox
          name="/home/profile.txt [+]"
          text={`
        自己紹介
        情報系学科の大学3年生です
        バックエンド・フロントエンド・競技プログラミングから３Ｄグラフィックスまで幅広い分野に興味があります。
        ハッカソンへの多数参加経験やコンピュータ部での部長経験など個人開発だけでなくチーム開発にも精力的にチャレンジしています。
        `}
        />
      </Window>
      <Window color="gemini-green-light" className="h-72 ">
        <Select list={categories} onSelect={setCurrentCategoryIndex} />
        {currentCategoryIndex == 0 && (
          <>
            <Skills
              skills={[
                { name: 'HTML', state: 'Completed', time: 2, date: '2020/04' },
                {
                  name: 'JavaScript',
                  state: 'Completed',
                  time: 1,
                  date: '2020/04',
                },
                {
                  name: 'TypeScript',
                  state: 'Completed',
                  time: 4,
                  date: '2023/04',
                },
                {
                  name: 'Tailwindcss',
                  state: 'Completed',
                  time: 3,
                  date: '2024/04',
                },
                { name: 'React', state: 'Learning', time: 0, date: '2024/04' },
                { name: 'wasm', state: 'Stop', time: 6, date: '2024/04' },
                {
                  name: 'Next.js',
                  state: 'Learning',
                  time: 0,
                  date: '2024/06',
                },
              ]}
            />
          </>
        )}
        {currentCategoryIndex == 1 && (
          <>
            <Skills
              skills={[
                {
                  name: 'Python',
                  state: 'Completed',
                  time: 1,
                  date: '2022/04',
                },
                {
                  name: 'Node.js',
                  state: 'Learning',
                  time: 0,
                  date: '2023/04',
                },
                { name: 'Flask', state: 'Stop', time: 2, date: '2023/08' },
                { name: 'SQL', state: 'Completed', time: 4, date: '2023/04' },
                {
                  name: 'FastAPI',
                  state: 'Learning',
                  time: 0,
                  date: '2024/10',
                },
                {
                  name: 'RubyonRails',
                  state: 'Learning',
                  time: 0,
                  date: '2025/03',
                },
                { name: 'Go', state: 'Learning', time: 0, date: '2025/06' },
              ]}
            />
          </>
        )}
        {currentCategoryIndex == 2 && (
          <>
            <Skills
              skills={[
                {
                  name: 'Windows',
                  state: 'Completed',
                  time: 1,
                  date: '2017/04',
                },
                { name: 'Linux', state: 'Completed', time: 3, date: '2023/04' },
                { name: 'Git', state: 'Completed', time: 4, date: '2023/04' },
                { name: 'C++', state: 'Stop', time: 3, date: '2024/05' },
                {
                  name: 'Docker',
                  state: 'Completed',
                  time: 5,
                  date: '2024/08',
                },
                { name: 'Rust', state: 'Stop', time: 5, date: '2024/10' },
                { name: 'Mac', state: 'Learning', time: 0, date: '2025/03' },
              ]}
            />
          </>
        )}
      </Window>
      <Window color="gemini-yellow-light" className="h-72 ">
        <Works
          works={[
            {
              user: 'solo',
              date: '2025/07',
              title: 'ポートフォリオ2',
              text: `
              二つ目のポートフォリオサイト
              フロントエンド系のインターンを目指してオシャレ(自分的に...)を作成
              個人的にはボチボチ満足な出来栄え...かな...
                `,
            },
            {
              user: 'solo',
              date: '2023/04',
              title: 'Auther_text',
              text: `
                別のテキスト１
                `,
            },
            { user: 'solo', date: '2023/04', title: 'React_tutor', text: `` },
            { user: 'solo', date: '2023/04', title: 'React_tutor', text: `` },
            { user: 'solo', date: '2023/04', title: 'React_tutor', text: `` },
            { user: 'solo', date: '2023/04', title: 'React_tutor', text: `` },
            { user: 'solo', date: '2023/04', title: 'React_tutor', text: `` },
            { user: 'solo', date: '2023/04', title: 'React_tutor', text: `` },
          ]}
        />
      </Window>
    </div>
  );
}

export default App;
