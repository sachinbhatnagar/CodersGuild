import { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import "./App.css";

function App() {
  const date = new Date();
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    const inputAndDate = {
      date: new Date(Date.now()),
      input,
      id: Math.floor(Math.random() * 100) + 1,
    };
    setEvents([...events, inputAndDate]);
  };
  const handleDelete = (id) => {
    const newList = events.filter((event) => event.id !== id);
    setEvents(newList);
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
              <Fragment key={index}>
                <li className="li">
                  {event.input} {event.date.toDateString()}
                  <Button onClick={(e) => handleDelete(event.id)}>
                    Delete
                  </Button>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
