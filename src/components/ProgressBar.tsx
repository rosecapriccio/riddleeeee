import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const tabs = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <footer className="progress-bar">
      {tabs.map((num) => (
        <div
          key={num}
          className={`progress-tab ${num === current ? "active" : ""} ${num < current ? "cleared" : ""}`}
        >
          {num}
        </div>
      ))}
    </footer>
  );
}
