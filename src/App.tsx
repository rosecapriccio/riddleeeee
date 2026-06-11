import { useState } from "react";
import Intro from "./components/Intro";
import Story from "./components/Story";
import Question from "./components/Question";
import Outro from "./components/Outro";
import ProgressBar from "./components/ProgressBar";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";

import {
  QUIZ_LIST,
  STAGE_INTRO,
  STAGE_CLEAR,
  STAGE_STORY,
  STAGE_LOADING,
} from "./data/quizzes";

const preloadImages = () => {
  const imageUrls = [
    "assets/mano.png",
    "assets/hiori.png",
    "assets/meguru.png",
    "assets/mano_icon.png",
    "assets/hiori_icon.png",
    "assets/meguru_icon.png",
    "assets/q1.png",
    "assets/q2.png",
    "assets/q3.png",
    "assets/bg.png",
  ];
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

preloadImages();

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
        return <Story onFinish={() => handleStoryEnd()} />;
      case STAGE_LOADING:
        return (
          <div className="loading-container">
            <div className="loading-star">★</div>
            <p className="loading-text">LOADING...</p>
          </div>
        );
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

  const handleStoryEnd = () => {
    setStage(STAGE_LOADING);
    setTimeout(() => {
      setStage(1);
    }, 2000);
  };

  return (
    <div className="game-layout">
      <main className="game-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage} /* stageが変わるたびに退場・入場アニメを検知させる */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} /* 0.5秒かけてじわーっとフェード */
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {renderMainContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {shouldShowProgressBar() && (
        <ProgressBar current={stage} total={totalQuestions} />
      )}
    </div>
  );
}
