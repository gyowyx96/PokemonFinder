import { useEffect, useState } from "react";
import "./timer.scss"

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            return 0;
          }
          setMinutes(prevMinutes => prevMinutes - 1);
          return 59;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes]);

  return (
    <div className="timer">
      <p>Tempo trascorso</p>
      <p>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
};
export default Timer