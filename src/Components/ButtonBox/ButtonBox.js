import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ButtonBox.scss";

const ButtonBox = ({ changeText, changedText, onClear, copied, onCopy }) => {
  return (
    <div className="buttonBox">
      <button className="button_common" onClick={() => onClear()}>
        Clear!
      </button>
      <button className="button_common">THEME</button>
      <button className="button_common" onClick={() => changeText()}>
        {changedText === "" ? "Change!" : "Recovery!"}
      </button>

      <CopyToClipboard text={changedText} onCopy={() => onCopy()}>
        <button className={`button_common ${copied && "copied"}`}>
          {copied ? "Copied✓" : "Copy!"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ButtonBox;
