import JSONDATA from "./MOCK_DATA.json";
import "./App.css";
import { useState } from "react";
import SearchComp from "./SearchComp";
import Cards from "./Cards";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <SearchComp setSearchTerm={setSearchTerm} />

      <Cards JSONDATA={JSONDATA} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
