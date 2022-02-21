import JSONDATA from "./MOCK_DATA.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {JSONDATA.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.first_name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return item;
        }
      }).map((item, key) => {
        return (
          <div className="use" key={key}>
            <p>{item.first_name}</p>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default App;
