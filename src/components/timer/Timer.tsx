import { useEffect } from "react";
import "./timer.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrement, selectRunning, selectTimer } from "../../store/slices/timerSlice";

const Timer = () => {
  const time = useSelector(selectTimer);
  const isRunning = useSelector(selectRunning);
  const dispatch = useDispatch();

  // Deriviamo direttamente active
  const active = time <= 10;

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      dispatch(decrement());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, isRunning]);

  return (
    <div className={`timer ${active ? "red-time active" : ""}`}>
      <p>Tempo Rimanente</p>
      <p>{time} Secondi</p>
    </div>
  );
};

export default Timer;
