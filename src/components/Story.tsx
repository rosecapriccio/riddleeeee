import { useState } from "react";
import { PROLOGUE_STORY } from "../data/storyData";
import { motion, AnimatePresence } from "framer-motion";

interface StoryProps {
  onFinish: () => void;
}

export default function Story({ onFinish }: StoryProps) {
  const [index, setIndex] = useState(0);
  const currentLine = PROLOGUE_STORY[index];
  const speakerNames = {
    mano: "真乃",
    hiori: "灯織",
    meguru: "めぐる",
    none: "",
  };

  const nextLine = () => {
    if (index < PROLOGUE_STORY.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      onFinish();
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFinish();
  };

  return (
    <div className="story-mode-container" onClick={nextLine}>
      <button className="story-skip-button" onClick={handleSkip}>
        SKIP ≫
      </button>

      {/* 立ち絵 */}
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
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* メッセージウィンドウ */}
      <motion.div
        className="message-window"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
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
