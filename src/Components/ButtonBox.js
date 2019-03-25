import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ButtonBox.scss";

const ButtonBox = ({ changeText, changedText, onClear, copied }) => {
  return (
    <div className="buttonBox">
      <button className="button_common" onClick={() => onClear()}>
        Clear!
      </button>
      <button className="button_common">THEME</button>
      <button className="button_common" onClick={() => changeText()}>
        {changedText === "" ? "Change!" : "Recovery!"}
      </button>

      <CopyToClipboard
        text={changedText}
        // onCopy={() => this.setState({ copied: true })}
      >
        <button className="button_common">Copy!</button>
      </CopyToClipboard>
    </div>
  );
};

export default ButtonBox;
