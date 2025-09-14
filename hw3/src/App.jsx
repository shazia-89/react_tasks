import { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = (sec) => {
    setTimeLeft(sec);
    setIsRunning(true);
  };

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Countdown Timer</h2>
      <input
        type="number"
        placeholder="Enter seconds"
        onChange={(e) => setTimeLeft(Number(e.target.value))}
      />
      <br />
      <button onClick={() => startTimer(timeLeft)}>Start</button>
      <h3>{timeLeft} seconds left</h3>
    </div>
  );
}

export default App;
