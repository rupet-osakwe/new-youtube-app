import { useRef, useState, useEffect } from 'react';

function Stopwatch() {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);

    const handleStart = () => {
        if (timerIdRef.current) { return; }
        timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000);
    };

    const handleStop = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    };
    const handleReset = () => {
        setCount(0)
    }

    useEffect(() => {
        return () => clearInterval(timerIdRef.current);
    }, []);

    return (
        <div>
            <div>Timer: {count}s</div>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}
export default Stopwatch

