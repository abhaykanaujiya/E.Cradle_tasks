import React from "react";
import "./inputField.css";
const InputField = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
    />
  );
};
export default InputField;
