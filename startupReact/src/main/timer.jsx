import React from "react"

function Timer() {
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