import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const style = {
  button_common: {
    backgroundColor: "#292c33",
    color: "#fff",
    border: "1px solid #f8f8f8",
    padding: "12px 20px",
    marginRight: "5px",
    outline: "none"
  }
};

const ButtonBox = ({ changeText, changedText, onClear, copied }) => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}
    >
      <button style={style.button_common} onClick={() => onClear()}>
        Clear!
      </button>
      <button style={style.button_common}>THEME</button>
      <button style={style.button_common} onClick={() => changeText()}>
        {changedText === "" ? "Change!" : "Recovery!"}
      </button>

      <CopyToClipboard
        text={changedText}
        // onCopy={() => this.setState({ copied: true })}
      >
        <button style={style.button_common}>Copy!</button>
      </CopyToClipboard>
    </div>
  );
};

export default ButtonBox;
