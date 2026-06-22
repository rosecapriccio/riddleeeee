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
      <div className="clear-badge">〜CLEAR〜</div>

      <div className="image-wrapper">
        <img src="assets/ending.png" alt="ending" className="quiz-image" />
      </div>

      <h2 className="outro-title">
        おめでとう！
        <br />
        全ての謎を解き明かしたよ！
      </h2>

      {/* <div className="story-box">
        <p className="story-text">真乃「すごいね」</p>
        <p className="story-text">灯織「」</p>
        <p className="story-text">めぐる「真面目かっ」</p>
      </div> */}

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
