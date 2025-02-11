import { useState } from "react";
import "./Hooks.css";
 function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + Number(step));
    setHistory(prevHistory => [...prevHistory, `Incremented by ${step}`]);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - Number(step));
    setHistory(prevHistory => [...prevHistory, `Decremented by ${step}`]);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
    setHistory([]);
  };

  return (
    <>
    <div className="container state-container">
      <h1>Advanced Counter App</h1>
      <p>Count: <span className="count">{count}</span></p>
      <div>
        <label>Step: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </div>
      <div className="grid-three-cols">
        <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
        <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <button className="history-button" onClick={() => setShowHistory(!showHistory)}>
        {showHistory ? "Hide History" : "Show History"}
      </button>
      {showHistory && (
        <div>
          <h2>History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <footer >all right reserved 2025 teertharaj turkar</footer>
    </>
  );
}


export default Counter;
