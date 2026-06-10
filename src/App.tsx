import React, { useState } from "react";
import Intro from "./components/Intro";
import Story from "./components/Story";
import Question from "./components/Question";
import Outro from "./components/Outro";
import ProgressBar from "./components/ProgressBar";
import "./index.css";
import { AnimatePresence } from "framer-motion";

import {
  QUIZ_LIST,
  STAGE_INTRO,
  STAGE_CLEAR,
  STAGE_STORY,
} from "./data/quizzes";

export default function App() {
  // stage 0: 導入, 1〜N: 各問題, 999: クリア画面
  const [stage, setStage] = useState<number>(0);

  const totalQuestions = QUIZ_LIST.length;

  // 正解したときに次のページへ遷移させる関数
  const handleNextStage = () => {
    if (stage === totalQuestions) {
      setStage(STAGE_CLEAR); // 最終問題をクリアしたらエンディングへ
    } else {
      setStage(stage + 1);
    }
  };

  const renderMainContent = () => {
    switch (stage) {
      case STAGE_INTRO:
        return <Intro onStart={() => setStage(STAGE_STORY)} />;
      case STAGE_STORY:
        return <Story onFinish={() => setStage(1)} />;
      case STAGE_CLEAR:
        return <Outro onReset={() => setStage(STAGE_INTRO)} />;

      default:
        // 1 〜 N 問目の問題画面
        return (
          <Question
            data={QUIZ_LIST[stage - 1]}
            onCorrectAnswer={handleNextStage}
          />
        );
    }
  };

  const shouldShowProgressBar = () => {
    if (
      stage === STAGE_INTRO ||
      stage === STAGE_STORY ||
      stage === STAGE_CLEAR
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="game-layout">
      <main className="game-content">
        <AnimatePresence mode="wait">
          {/* Framer Motion用に一意の key（stage番号）をセット */}
          <React.Fragment key={stage}>{renderMainContent()}</React.Fragment>
        </AnimatePresence>
      </main>

      {shouldShowProgressBar() && (
        <ProgressBar current={stage} total={totalQuestions} />
      )}
    </div>
  );
}
