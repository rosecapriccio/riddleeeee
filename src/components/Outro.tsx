//import React from "react";

interface OutroProps {
  onReset: () => void;
}

export default function Outro({ onReset }: OutroProps) {
  // X（旧Twitter）へのシェア機能を実行する関数
  const handleShare = () => {
    const text = encodeURIComponent(
      "真乃の謎をすべて解き明かしたよ！\nサークル「〇〇」のアイマス謎解きゲームをクリア！",
    );
    const gameUrl = encodeURIComponent(
      "https://rosecapriccio.github.io/riddleeeee/",
    );
    const hashtags = encodeURIComponent("SSF10");

    const twitterUrl = `https://twitter.com/share?text=${text}&url=${gameUrl}&hashtags=${hashtags}`;
    window.open(twitterUrl, "_blank", "noreferrer");
  };

  return (
    <div className="outro-container">
      <div className="clear-badge">🎉 CLEAR!!</div>

      <h2 className="outro-title">作戦大成功！</h2>

      <div className="image-wrapper">
        <img src="assets/ending.png" alt="ending" className="quiz-image" />
      </div>

      <div className="story-box">
        <p className="story-text">
          最後の答えを導き出したその瞬間、カチャリと事務所のドアが開いた。
        </p>
        <p className="story-text">
          「あ！プロデューサーさん、本当に全部解いちゃったんですか！？」
        </p>
        <p className="story-text">
          ひょっこり顔を出したアイドルたちの手には、
          サプライズツアーの特製ケーキが握られている。
        </p>
        <p className="story-text">
          どうやら、日頃の感謝を込めた彼女たちなりの悪戯だったようだ。
          プロデューサーの最高の休日が、ここから始まる――。
        </p>
      </div>

      <div className="outro-actions">
        <button onClick={handleShare} className="share-button">
          結果をX(Twitter)にシェアする
        </button>
        <button onClick={onReset} className="reset-button">
          タイトルに戻る
        </button>
      </div>
    </div>
  );
}
