import { useEffect, useState } from "react";
import "./timer.scss";
const Timer = () =>{
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
            if (seconds === 59) {
                setMinutes(prev => prev + 1);
                setSeconds(0);
            }
        }, 1000);
        return () => clearInterval(interval);
    });
    return (
        <div className ="timer"> 
            <p>Tempo trascorso</p>
            <p>{minutes === 0 ? null : (`${minutes}:`)}{seconds} </p>
        </div>
    )
}

export default Timer;