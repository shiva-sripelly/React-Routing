import { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  const pauseTimer = () => setIsRunning(false);

  const resumeTimer = () => setIsRunning(true);

  const stopTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const resetTimer = () => setSeconds(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Timer: {seconds} sec</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
