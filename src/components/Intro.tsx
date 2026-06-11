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
      transition={{ duration: 0.8, ease: "easeInOut" }} // 初回は少し長めの0.8秒とかにするとエモい
    >
      <div className="intro-container">
        {/* ゲーム全体のタイトル（アイマス風、あるいはサークルやユニット名にちなんだもの） */}
        <h1 className="game-main-title">サクラギ先生からの出題</h1>
        <p></p>
        {/* <p className="game-subtitle">〜 事務所に残された暗号 〜</p> */}

        {/* 導入ストーリーエリア */}
        <div className="story-box">
          <p className="story-text">
            めまぐるしいライブツアーが終わり、久しぶりのオフ。
          </p>
          <p className="story-text">
            忘れ物を取りに静まり返った事務所へ戻ると、
            あなたのデスクの上に、見慣れない封筒が置かれていた。
          </p>
          <div className="letter-preview">
            <p className="letter-text">
              「プロデューサーさんへ。
              <br />
              私たちの“次のステージ”へのヒント、ここに置いておきますね」
            </p>
          </div>
          <p className="story-text">
            中に入っていたのは、いくつかの奇妙な記号が書かれたカード。
            どうやらアイドルたちからの挑戦状のようだ。
          </p>
        </div>

        {/* 挑戦開始ボタン */}
        <button onClick={onStart} className="start-button">
          START
        </button>
      </div>

      <p className="copyright-notice">
        当サイトは『アイドルマスターシャイニーカラーズ』の非公式二次創作 <br />
        （ファンメイド）ゲームです。公式および関係企業様とは一切関係ありません。
      </p>
    </motion.div>
  );
}
