import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [color, setColour] = useState("cold");

  const increase = () => {
    if (temperatureValue === 30) return;
    const newTemp = temperatureValue + 1;

    if (newTemp >= 15) {
      setColour("hot");
    }
    setTemperatureValue(newTemp);
  };
  const decrease = () => {
    if (temperatureValue === 0) return;
    const newTemp = temperatureValue - 1;
    if (newTemp < 15) {
      setColour("cold");
    }
    setTemperatureValue(newTemp);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temperatureValue}</div>
      </div>
      <div className="button-container">
        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
      </div>
    </div>
  );
};
export default App;
