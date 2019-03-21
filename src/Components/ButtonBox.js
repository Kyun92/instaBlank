import React from "react";

const ButtonBox = ({ changeText, changedText }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <button>THEME</button>
      <button onClick={() => changeText()}>
        {changedText === "" ? "Change!" : "Recovery!"}
      </button>
      <button>Copy!</button>
    </div>
  );
};

export default ButtonBox;
