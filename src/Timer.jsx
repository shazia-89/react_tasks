import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Time's up!");
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    const sec = parseInt(seconds, 10);
    if (isNaN(sec) || sec <= 0) {
      alert("Enter a positive number!");
      return;
    }
    setTimeLeft(sec);
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Countdown Timer</h2>
      <input
        type="number"
        placeholder="Enter seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
      <br /><br />
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <h3>
        {timeLeft !== null ? `Time Left: ${timeLeft} seconds` : "Enter a number and start"}
      </h3>
    </div>
  );
}
