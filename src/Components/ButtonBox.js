import React from "react";

const ButtonBox = ({ changeText }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <button>THEME</button>
      <button onClick={() => changeText()}>Change!</button>
      <button>Copy!</button>
    </div>
  );
};

export default ButtonBox;
