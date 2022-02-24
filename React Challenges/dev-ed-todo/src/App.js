import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>Task Tracker</header>
      <Form setInputText={setInputText} />
      <ToDoList />
    </div>
  );
}

export default App;

function foo(arr) {}

foo([1, 2, 4]);
