import React, {useState, useEffect} from "react"
import "./timer.css";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [Running, setRunning] = useState(false);
  const [Paused, setPaused] = useState(false);
  const [timerType, setTimerType] = useState('focus');
  const [poms, setPoms] = useState([false, false, false, false]);

  /* timee */
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning && !isPaused && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, isPaused, timeLeft]);

  /* functions */
  const StartPause = () => {
    if (isRunning && !isPaused) {
      setIsPaused(true);
    } else {
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const Reset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsPaused(false);
  };

  const Focus = () => {
    setTimerType('focus');
    setTimeLeft(25 * 60);
    StartPause();
  };

  const ShortBreak = () => {
    setTimerType('short break');
    setTimeLeft(5 * 60);
    StartPause();
  };

  const LongBreak = () => {
    setTimerType('long break');
    setTimeLeft(30 * 60);
    StartPause();
  };

  const ResetPoms = () => {
    setPoms([false, false, false, false]);
  };

  const Pom = (index) => {
    const newPoms = [...poms];
    newPoms[index] = true;
    setPoms(newPoms);
  };

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;


  return (
    <div className="timer">
      <div className="top-buttons">
        <button className="top-button">Focus</button>
        <button className="top-button">Short Break</button>
        <button className="top-button">Long Break</button>
        <button className="top-button">Mute</button>
      </div>
      <div className="circle-and-buttons">
        <div className="circle-and-clock">
          <div className="timer-text">
            <div className="mins">0</div>
            <div>:</div>
            <div className="secs">00</div>
          </div>
          <svg className="progress-ring" width="250" height="250">
            <circle
              cx="125"
              cy="125"
              r="100"
              stroke="#3691b0"
              strokeWidth="20"
              fill="transparent"
            />
          </svg>
        </div>
        <div className="main-buttons">
          <button className="timer-button" id="restart">
          <img src="back.png" alt="Restart" />
          </button>
          <button className="timer-button" id="play">
            <img src="play.png" alt="Play" />
          </button>
          <button className="timer-button" id="pause">
            <img src="pause.png" alt="Pause" />
          </button>
        </div>
      </div>
      <div className="sessions">
        <h3>Sessions</h3>
        <div className="poms">
          <div className="pom">1</div>
          <div className="pom">2</div>
          <div className="pom">3</div>
          <div className="pom">4</div>
          <button className="top-button" id="resetpoms">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;