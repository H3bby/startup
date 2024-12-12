import React, {useState, useEffect, useRef} from "react"
import "./timer.css";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [Running, setRunning] = useState(false);
  const [Paused, setPaused] = useState(false);
  const [timerType, setTimerType] = useState('focus');
  const [poms, setPoms] = useState([false, false, false, false]);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const initialTime = timerType === 'focus' ? 1500 : timerType === 'short break' ? 300 : timerType === 'long break' ? 1800 : 0;
  const circleRef = useRef(null)

  /* timee */
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (Running && !Paused && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [Running, Paused, timeLeft]);

  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;

      const progress = (timeLeft / initialTime) * 100;
      const offset = circumference - (progress / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  }, [timeLeft, initialTime, circleRef]);

  /* functions */
  const Start = () => {
    setRunning(true);
    setPaused(false);
  };

  const Pause = () => {
    setPaused(true);
  };

  const Reset = () => {
    switch (timerType) {
      case 'focus':
        setTimeLeft(25 * 60);
        break;
      case 'short break':
        setTimeLeft(5 * 60);
        break;
      case 'long break':
        setTimeLeft(30 * 60);
        break;
      default:
        setTimeLeft(25 * 60);
    }
    setRunning(false);
    setPaused(false);
  };

  const Focus = () => {
    setTimerType('focus');
    setTimeLeft(25 * 60);
    Pause();
  };

  const ShortBreak = () => {
    setTimerType('short break');
    setTimeLeft(5 * 60);
    Pause();
  };

  const LongBreak = () => {
    setTimerType('long break');
    setTimeLeft(30 * 60);
    Pause();
  };

  const ResetPoms = () => {
    setPoms([false, false, false, false]);
  };

  const Pom = (index) => {
    const newPoms = [...poms];
    newPoms[index] = !newPoms[index];
    setPoms(newPoms);
  };


  return (
    <div className="timer">
      <div className="top-buttons">
        <button className={`top-button ${timerType === 'focus' ? 'active' : ''}`} onClick={Focus}>Focus</button>
        <button className={`top-button ${timerType === 'short break' ? 'active' : ''}`} onClick={ShortBreak}>Short Break</button>
        <button className={`top-button ${timerType === 'long break' ? 'active' : ''}`} onClick={LongBreak}>Long Break</button>
      </div>
      <div className="circle-and-buttons">
        <div className="circle-and-clock">
          <div className="timer-text">
            <div className="mins">{minutes}</div>
            <div>:</div>
            <div className="secs">{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>
          <svg className="progress-ring" width="250" height="250">
            <circle
              cx="125"
              cy="125"
              r="100"
              stroke="#3691b0"
              strokeWidth="20"
              fill="transparent"
              ref={circleRef}
            />
          </svg>
        </div>
        <div className="main-buttons">
          <button className="timer-button" onClick={Reset}id="restart">
          <img src="back.png" alt="Restart" />
          </button>
          <button className="timer-button" onClick={Start}id="play">
            <img src="play.png" alt="Play" />
          </button>
          <button className="timer-button" onClick={Pause}id="pause">
            <img src="pause.png" alt="Pause" />
          </button>
        </div>
      </div>
      <div className="sessions">
        <h3>Sessions</h3>
        <div className="poms">
          <button className={`pom ${poms[0] ? 'active' : ''}`} onClick={() => Pom(0)}>1</button>
          <button className={`pom ${poms[1] ? 'active' : ''}`} onClick={() => Pom(1)}>2</button>
          <button className={`pom ${poms[2] ? 'active' : ''}`} onClick={() => Pom(2)}>3</button>
          <button className={`pom ${poms[3] ? 'active' : ''}`} onClick={() => Pom(3)}>4</button>
          <button className="top-button" onClick={ResetPoms}id="resetpoms">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;