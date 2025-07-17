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
              date: '2025/05',
              title: 'ポートフォリオ',
              text: `
              就職活動に向けて作成した 一つ目のポートフォリオ
              読み込みに5秒ほど掛かることやデザインがイマイチな事など至らない点が多かった。
                `,
            },
            {
              user: 'team',
              date: '2025/03',
              title: 'KC3-Hack 2025',
              text: `
                KC3(関西情報系学生団体交流会)が主催するハッカソンに参加
                Next.jsを用いて地図上に楽曲と登録して近づくと再生されるWebアプリケーションを作成した。
                `,
            },
            {
              user: 'solo',
              date: '2025/02',
              title: 'VScode拡張機能',
              text: `
                VScodeの拡張機能を作成した
                VScodeのサイドバーが展開する際にシームレスに開くようにアニメーションを適用する拡張機能。
                `,
            },
            {
              user: 'solo',
              date: '2024/11',
              title: 'RunCat-CUI',
              text: `
                RunCatのCUI版を作ってみた
                CPUの使用率に合わせて猫が走るアプリRunCatのCUIバージョンを作成した。
                `,
            },
            {
              user: 'team',
              date: '2024/10',
              title: 'モバイルオーダー',
              text: `
              モバイルオーダーアプリを作った。
              大学の文化祭で出店するフランクフルトをオンラインで販売するためのモバイルオーダーシステムを開発した。
              `,
            },
            {
              user: 'team',
              date: '2024/09',
              title: '近畿大学ハッカソン',
              text: `
              近畿大学主催UnionHackに参加
              企業賞を頂いた
              `,
            },
            {
              user: 'solo',
              date: '2024/08',
              title: 'KC3登壇',
              text: `
                KC3(関西情報系学生団体交流会)にて「１から始めるDocker入門」で登壇
                docker composeを用いた開発用コンテナを作成する為のプロセスを紹介した。
                `,
            },
          ]}
        />
      </Window>
    </div>
  );
}

export default App;
