import React from "react";

function RadioInput({ labelValue, name, id, value }) {
  return (
    <>
      <input type="radio" id={id} value={value} name={name} />
      <label htmlFor={id}>{labelValue}</label>
    </>
  );
}

export default RadioInput;
