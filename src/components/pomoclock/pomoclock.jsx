import { useLocation } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useRef, useState } from "react";

export function Pomoclock() {
  const location = useLocation();
  const { task } = location.state;
  const { title, description, time } = task;
  const [seconds, setSeconds] = useState(0);
  const [infoMessage, setInfoMessage] = useState("");
  const [setTimeoutId, setSetTimeoutId] = useState(null);

  const clearMessage = () => {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }

    const id = setTimeout(() => {
      setInfoMessage("");
    }, 2000);

    setSetTimeoutId(id);
  };

  const intervalId = useRef(null);
  const secondsRef = useRef(0);

  const handleStart = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    setInfoMessage("Clock Started");
    clearMessage();

    intervalId.current = setInterval(() => {
      if (secondsRef.current === 0) {
        clearInterval(intervalId);
      } else {
        secondsRef.current--;
        setSeconds(secondsRef.current);
      }
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalId.current);
    setInfoMessage("Clock Paused");
    clearMessage();
  };

  const handleRestart = () => {
    setSeconds(time * 60);
    clearInterval(intervalId.current);
    setInfoMessage("Clock reset");
    clearMessage();
  };

  useEffect(() => {
    setSeconds(time * 60);
    secondsRef.current = time * 60;
  }, [time]);

  let totalSeconds = time * 60;
  const secondsLeft = seconds % 60;
  const minutesLeft = Math.floor(seconds / 60);

  const percentValue = (seconds / totalSeconds) * 100;

  return (
    <main className="pomoclock-main ">
      <section className="pomoclock">
        <div className="pomo-progress-bar">
          <CircularProgressbar
            value={percentValue}
            text={`${minutesLeft}:${secondsLeft}`}
            counterClockwise={true}
            styles={{
              path: {
                stroke: `hsl(242, 72%, 51%)`,
              },
              trail: {
                stroke: "hsl(340, 83%, 73%)",
              },
            }}
          />
        </div>
        <div className="clock-action-btn">
          <button className="btn btn-primary" onClick={handleStart}>
            Start
          </button>
          <button className="btn btn-secondary" onClick={handlePause}>
            Pause
          </button>
          <button className="btn btn-primary-outline" onClick={handleRestart}>
            Restart
          </button>
        </div>

        {infoMessage && <span className="info-message">{infoMessage}</span>}
      </section>
      <section className="task-details">
        <h1 className="task-title">{title}</h1>
        <p className="task-description txt-md">{description}</p>
      </section>
    </main>
  );
}
