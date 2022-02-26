import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(false);
  const url = "https://api.adviceslip.com/advice";
  const handleClick = () => {
    setFlag(flag === true ? false : true);
  };
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.slip.advice);
    });
  }, [flag]);
  return (
    <div className="App">
      <p className="text-primary">{data}</p>
      <Button variant="success" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
}

export default App;
