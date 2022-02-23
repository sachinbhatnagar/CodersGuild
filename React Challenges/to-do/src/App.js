import { useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    setEvents([...events, input]);
  };
  return (
    <div className="App">
      <input value={input} onChange={handleInput} type="text" />
      <button onClick={handleSubmit}>submit</button>
      <div>
        <ul>
          {events.map((event, index) => {
            return <li key={index}>{event}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
