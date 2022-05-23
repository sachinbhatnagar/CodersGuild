import React, { useState } from "react";

const url = "https://jsonplaceholder.typicode.com/todos/1";
function LoadingPractice() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  fetch(url)
    .then((response) => response.json())
    .then((user) => {
      const { title } = user;
      setUser(title);
      setIsLoading(false);
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div>{user}</div>;
}

export default LoadingPractice;
