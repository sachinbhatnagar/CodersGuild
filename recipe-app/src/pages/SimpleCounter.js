import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };
  }
};
function SimpleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </div>
  );
}

export default SimpleCounter;
