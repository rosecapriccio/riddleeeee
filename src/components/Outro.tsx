//import React from "react";

interface OutroProps {
  onReset: () => void;
}

export default function Outro({ onReset }: OutroProps) {
  // X（旧Twitter）へのシェア機能を実行する関数
  const handleShare = () => {
    const text = encodeURIComponent(
      "事務所に残されたすべての謎を解き明かした！\nサークル「〇〇」のアイマス謎解きゲームをクリア！",
    );
    // 本番環境（Vercelなど）で発行されたURLをここに差し替えます
    const gameUrl = encodeURIComponent("https://your-game-url.vercel.app");
    const hashtags = encodeURIComponent("SSF10,アイマス謎解き"); // イベントのハッシュタグなど

    const twitterUrl = `https://twitter.com/share?text=${text}&url=${gameUrl}&hashtags=${hashtags}`;
    window.open(twitterUrl, "_blank", "noreferrer");
  };

  return (
    <div className="outro-container">
      <div className="clear-badge">🎉 CLEAR!!</div>

      <h2 className="outro-title">作戦大成功！</h2>

      {/* エンディングストーリー */}
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

      {/* アクションボタン群 */}
      <div className="outro-actions">
        {/* SNSへの拡散ボタン（即売会での認知にめちゃくちゃ効きます） */}
        <button onClick={handleShare} className="share-button">
          結果をX(Twitter)にシェアする
        </button>

        {/* もう一度遊ぶ、またはデータを消して最初に戻るボタン */}
        <button onClick={onReset} className="reset-button">
          タイトルに戻る
        </button>
      </div>
    </div>
  );
}
