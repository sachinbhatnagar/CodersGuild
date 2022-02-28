import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const [inputText, setinputText] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const handleSubmit = () => {
    localStorage.setItem("username", inputText);
    navigate("/");
  };

  return (
    <>
      <input
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        type="text"
      />
      <input
        value={inputPassword}
        onChange={(e) => setinputPassword(e.target.value)}
        type="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default Login;
