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
        <div className="image-wrapper">
          <img src="assets/title.png" alt="title" className="title-image" />
        </div>
        <p></p>
        {/* <h1 className="game-main-title">
          サクラギ先生
          <br />
          からの出題
        </h1> */}
        {/* <p className="game-subtitle">〜 事務所に残された暗号 〜</p> */}

        {/* <div className="intro-ribbon">SECOND EDITION</div> */}

        <div className="story-box">
          <h2 className="intro-section-title">
            <span className="title-first">あ</span>らすじ
          </h2>
          <p className="story-text">
            学園祭のクラスの出し物で「謎解きカフェ」を出展した真乃
            <br />
            そんな謎解き作りにハマった真乃が、今度は283プロの謎を作ってきてくれたみたいですよ
            <br />
            灯織・めぐると一緒に真乃の謎に挑戦してみよう！
            {/* やりたい！
            <br /> */}
          </p>
          <h2 className="intro-section-title">
            <span className="title-first">あ</span>そびかた
          </h2>
          <p className="story-text">
            ・「アイドルマスターシャイニーカラーズ」の基本的な知識は必要になりますが、コミュやライブの内容は知らなくても解けるようになっています。
            <br />
            ・問題は全部で5問あります。所要時間はだいたい10〜20分ぐらいだと思います。
            <br />
            ・謎の答えは
            <span className="text-highlight">「ひらがな」</span>
            で入力してください。
            <br />
            ・各問題にヒントが3段階で用意されています。
          </p>
        </div>

        <button onClick={onStart} className="start-button">
          はじめる！
        </button>
      </div>

      <p className="copyright-notice">
        当サイトは『アイドルマスターシャイニーカラーズ』の非公式二次創作
        （ファンメイド）ゲームです。公式および関係企業様とは一切関係ありません。
        <br />
        <br />
        当サイトはGoogleAnalyticsを利用し、謎解き時間やヒント使用率をCookieを用いた個人を特定しない匿名の形で収集しています。あらかじめご了承ください。
      </p>
    </motion.div>
  );
}
