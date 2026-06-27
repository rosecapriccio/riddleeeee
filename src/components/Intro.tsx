//import React from "react";
import { motion } from "framer-motion";

interface IntroProps {
  onStart: () => void;
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="intro-container">
        <h1 className="game-main-title">
          サクラギ先生
          <br />
          からの出題
        </h1>
        <p></p>
        {/* <p className="game-subtitle">〜 事務所に残された暗号 〜</p> */}

        {/* <div className="intro-ribbon">SECOND EDITION</div> */}

        <div className="story-box">
          <h2 className="intro-section-title">
            <span className="title-first">I</span>NTRODUCTION
          </h2>
          <p className="story-text">
            学園祭にてクラスで謎解きカフェを出展した櫻木真乃
            <br />
            そんな謎解き作りにハマった真乃が283プロの謎を作ってきた！
            <br />
            これはやるしかないだろう　---メグル・ハチミヤ
            <br />
          </p>
          <h2 className="intro-section-title">
            <span className="title-first">R</span>ULE
          </h2>
          <p className="story-text">
            ・「アイドルマスターシャイニーカラーズ」の基本的な知識は必要になりますが、コミュやライブの内容は知らなくても解けるようになっています。
            <br />
            ・問題は全部で5問あります。所要時間はだいたい10〜15分ぐらいだと思います。
            <br />
            ・謎の答えは
            <span className="text-highlight">「ひらがな」</span>
            で入力してください。
            <br />
            ・各問題にヒントが3段階で用意されています。
          </p>
        </div>

        <button onClick={onStart} className="start-button">
          START
        </button>
      </div>

      <p className="copyright-notice">
        当サイトは『アイドルマスターシャイニーカラーズ』の非公式二次創作
        （ファンメイド）ゲームです。公式および関係企業様とは一切関係ありません。
      </p>
    </motion.div>
  );
}
