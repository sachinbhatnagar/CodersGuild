import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => (prev += 1));
  };
  const subtract = () => {
    setCount((prev) => (prev -= 1));
  };
  return (
    <div className="App">
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
