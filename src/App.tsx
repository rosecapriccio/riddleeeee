import { useState } from "react";
import Intro from "./components/Intro";
import Story from "./components/Story";
import Question from "./components/Question";
import Outro from "./components/Outro";
import ProgressBar from "./components/ProgressBar";
import "./index.css";
import { AnimatePresence, motion } from "framer-motion";
import ReactGA from "react-ga4";

import {
  QUIZ_LIST,
  STAGE_INTRO,
  STAGE_CLEAR,
  STAGE_STORY,
  STAGE_LOADING,
} from "./data/quizzes";

ReactGA.initialize("G-CJSG9V0TC2");

const imageModules = import.meta.glob("/public/assets/*.png", { eager: true });

const preloadImages = () => {
  const imageUrls = Object.keys(imageModules).map((path) =>
    path.replace("/public/", ""),
  );

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

preloadImages();

export default function App() {
  const [stage, setStage] = useState<number>(0);
  const [totalHints, setTotalHints] = useState<number>(0);
  const totalQuestions = QUIZ_LIST.length;

  const handleNextStage = () => {
    if (stage === totalQuestions) {
      setStage(STAGE_CLEAR);
    } else {
      setStage(stage + 1);
    }
  };

  const handleHintCount = () => {
    setTotalHints((prev) => prev + 1);
  };

  const handleReset = () => {
    setStage(STAGE_INTRO);
    setTotalHints(0);
  };

  const handleStoryEnd = () => {
    setStage(STAGE_LOADING);
    setTimeout(() => {
      setStage(1);
    }, 2000);
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
        return <Outro onReset={handleReset} totalHints={totalHints} />;

      default:
        return (
          <Question
            data={QUIZ_LIST[stage - 1]}
            onCorrectAnswer={handleNextStage}
            onUseHint={handleHintCount}
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
          <motion.div
            key={stage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
