import React, { useState } from "react";
import { type QuizData } from "../data/quizzes";
import { motion } from "framer-motion";
import { convertToHash } from "../hash";

interface QuestionProps {
  data: QuizData;
  onCorrectAnswer: () => void;
}

export default function Question({ data, onCorrectAnswer }: QuestionProps) {
  const [typedAnswer, setTypedAnswer] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const [openedHintCount, setOpenedHintCount] = useState<number>(0);

  const maxCharLength = data.answerLength;
  const cells = Array.from({ length: maxCharLength });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= maxCharLength) {
      setTypedAnswer(value);
      if (isError) setIsError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const typedHashAnswer = await convertToHash(typedAnswer);

    console.log(typedHashAnswer);
    console.log(data.answer);
    console.log(" a ");
    if (typedHashAnswer === data.answer) {
      setIsError(false);
      setTypedAnswer("");
      onCorrectAnswer();
    } else {
      setIsError(true);
    }
  };

  const handleRevealHint = () => {
    if (openedHintCount < data.hints.length) {
      setOpenedHintCount((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      className="question-container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      <div className="stage-indicator">
        <span className="stage-num">{data.id}</span>
        <span className="stage-title">{data.title}</span>
      </div>

      <div className="image-wrapper">
        <img
          src={`assets/${data.imageName}`}
          alt={data.title}
          className="quiz-image"
        />
      </div>

      <div className="answer-boxes-container">
        {cells.map((_, index) => {
          const char = typedAnswer[index] || "";
          return (
            <motion.div
              key={index}
              className={`char-box ${char ? "has-letter" : ""} ${isError ? "is-invalid" : ""}`}
              animate={isError ? { x: [-12, 12, -12, 12, 0] } : { x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {char}
            </motion.div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="answer-form">
        <input
          type="text"
          value={typedAnswer}
          onChange={handleInputChange}
          placeholder="解答を入力 (ひらがな)"
          className="answer-input"
        />
        <button type="submit" className="submit-button">
          OK
        </button>
      </form>

      {isError && <p className="error-message">ちがうですゾ〜</p>}

      <div className="hint-section">
        {openedHintCount < data.hints.length ? (
          <button
            type="button"
            onClick={() => handleRevealHint()}
            className="hint-trigger-button"
          >
            {openedHintCount === 0
              ? `🕊️ ヒントを見る (0/${data.hints.length})`
              : `🔍 次のヒントを表示 (${openedHintCount}/${data.hints.length})`}
          </button>
        ) : (
          <p className="hint-max-notice">🥟 すべてのヒントを表示しました 🥟</p>
        )}

        <div className="hints-display-container">
          {data.hints.map((hint, index) => {
            if (index >= openedHintCount) return null;

            const speakerNames = {
              mano: "真乃",
              hiori: "灯織",
              meguru: "めぐる",
            };
            const displayName = speakerNames[hint.speaker] || "？？？";
            const charImagePath = `assets/${hint.speaker}_icon.png`;

            return (
              <motion.div
                key={index}
                className={`hint-character-chat ${hint.speaker}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="hint-avatar-wrapper">
                  <img
                    src={charImagePath}
                    alt={displayName}
                    className="hint-avatar"
                  />
                </div>
                <div className="hint-speech-bubble">
                  <span className="hint-speaker-name">{displayName}</span>
                  <p className="hint-text">{hint.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
