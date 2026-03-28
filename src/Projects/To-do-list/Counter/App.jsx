import { useState } from "react";
function Counter() {
  const [count, setcount] = useState(0);
  function Increase() {
    setcount(count + 1);
  }
  function Minus() {
    setcount(count - 1);
  }
  function Reset() {
    setcount(0);
  }
  return (
    <div className="Counter-Container">
      <h1 className="Count">Count: {count}</h1>
      <button className="IncreaseButton" onClick={Increase}>
        +
      </button>
      <button className="Minus" onClick={Minus}>
        -
      </button>
      <button className="Rest" onClick={Reset}>
        Reset
      </button>
    </div>
  );
}
export default Counter;
