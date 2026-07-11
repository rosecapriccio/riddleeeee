//import React from "react";

interface OutroProps {
  onReset: () => void;
  totalHints: number;
}

export default function Outro({ onReset, totalHints }: OutroProps) {
  const handleShare = () => {
    const rawText = `🥟 ゲームクリア！ 🥟\n真乃が作った謎を全て解いたよ！\n使ったヒント数： ${totalHints}回\n\nhttps://rosecapriccio.github.io/riddleeeee/`;
    const encodedText = encodeURIComponent(rawText);
    const twitterUrl = `https://twitter.com/share?text=${encodedText}`;
    window.open(twitterUrl, "_blank", "noreferrer");
  };

  return (
    <div className="outro-container">
      <div className="clear-badge">
        ゲームクリア！
        <br />
        全ての謎を解き明かした！
      </div>

      <div className="image-wrapper">
        <img src="assets/ending.png" alt="ending" className="quiz-image" />
      </div>

      <h2 className="outro-title">
        謎が難しければ難しいほど
        <br />
        解き明かした瞬間の輝きは増すのだ
        <br />
        ──メグル・ハチミヤ
      </h2>

      <div className="stats-box">
        <p>
          🥟 使ったヒント数： <strong>{totalHints}</strong> 回 🥟
        </p>
        {totalHints === 0 && <p>👆 すごすぎる！天才！ 👆</p>}
        {totalHints > 0 && totalHints < 6 && <p>👆 すごい！ 👆</p>}
      </div>
      {/* <div className="story-box">
        <p className="story-text">真乃「すごいね」</p>
        <p className="story-text">灯織「」</p>
        <p className="story-text">めぐる「真面目かっ」</p>
      </div> */}

      <div className="outro-actions">
        <button onClick={handleShare} className="share-button">
          結果をX(Twitter)でツイートする
        </button>
        <button onClick={onReset} className="reset-button">
          タイトルに戻る
        </button>
      </div>
    </div>
  );
}
