import { useState } from "react";
import { PROLOGUE_STORY } from "../data/storyData";
import { motion, AnimatePresence } from "framer-motion";

interface StoryProps {
  onFinish: () => void;
}

export default function Story({ onFinish }: StoryProps) {
  const [index, setIndex] = useState(0);

  // 次の一言へ進む関数
  const nextLine = () => {
    if (index < PROLOGUE_STORY.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      onFinish(); // 最後まで読んだら終了
    }
  };

  const currentLine = PROLOGUE_STORY[index];
  const speakerNames = {
    mano: "真乃",
    hiori: "灯織",
    meguru: "めぐる",
    none: "",
  };

  return (
    <div className="story-mode-container" onClick={nextLine}>
      {/* キャラクター立ち絵エリア（現在の話者を表示） */}
      <div className="story-character-stage">
        <AnimatePresence mode="wait">
          {currentLine.speaker !== "none" && (
            <motion.img
              key={currentLine.speaker}
              src={`assets/${currentLine.speaker}.png`}
              alt="character"
              className="story-character-image"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* メッセージウィンドウ */}
      <motion.div
        className="message-window"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {currentLine.speaker !== "none" && (
          <div className={`message-speaker-tag ${currentLine.speaker}`}>
            {speakerNames[currentLine.speaker]}
          </div>
        )}
        <div className="message-text">
          {currentLine.text}
          <span className="next-cursor">▼</span>
        </div>
      </motion.div>
    </div>
  );
}
