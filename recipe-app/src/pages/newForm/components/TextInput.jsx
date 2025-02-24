import React from "react";
import { InputField, Label } from "./styledComponents/Form.styled";

function TextInput({ labelValue, type, name, id, onChangeHandler }) {
  return (
    <>
      <Label htmlFor={id}>{labelValue}</Label>
      <InputField
        onChange={(e) => onChangeHandler(e)}
        type={type}
        name={name}
        id={id}
      />
    </>
  );
}

export default TextInput;
