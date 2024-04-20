// eslint-disable-next-line no-unused-vars
import React from "react";
import "./button.css";

const Button = ({ colorName }) => {
  

  return (
    <button
      style={{ backgroundColor: colorName }}
    >
      {colorName}
    </button>
  );
};

export default Button;
