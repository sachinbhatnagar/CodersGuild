import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const date = new Date();
  console.log(date);
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    const inputAndDate = {
      date: new Date(Date.now()),
      input,
    };
    setEvents([...events, inputAndDate]);
  };
  return (
    <div className="App">
      <input value={input} onChange={handleInput} type="text" />
      <Button className="btn" onClick={handleSubmit}>
        submit
      </Button>
      <div>
        <ul>
          {events.map((event, index) => {
            return (
              <li key={index}>
                {event.input} {event.date.toDateString()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
