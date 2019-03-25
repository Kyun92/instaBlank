import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ButtonBox.scss";

const ButtonBox = ({
  onChangeText,
  changedText,
  onClear,
  copied,
  onCopy,
  textLength,
  onChangeTheme,
  warnMessage
}) => {
  return (
    <div className="buttonBox">
      <p className={`textLength ${textLength > 2000 && "red"}`}>
        {textLength} / 2000
      </p>
      <button className="button_common" onClick={() => onClear()}>
        Clear!
      </button>
      <button className="button_common" onClick={() => onChangeTheme()}>
        THEME
      </button>
      <button
        className={`button_common green ${changedText && "red"}`}
        onClick={() => {
          onChangeText();
        }}
      >
        {changedText === "" ? "Change!" : "Recovery!"}
      </button>

      <CopyToClipboard text={changedText} onCopy={() => onCopy()}>
        <button className={`button_common ${copied && "green"}`}>
          {copied ? "Copied✓" : "Copy!"}
        </button>
      </CopyToClipboard>
      <p className="warnMessage">{warnMessage}</p>
    </div>
  );
};

export default ButtonBox;
