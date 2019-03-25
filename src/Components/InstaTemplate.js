import React from "react";
import TextArea from "./TextArea/TextArea";
import Header from "./Header/Header";
import ButtonBox from "./ButtonBox/ButtonBox";

const InstaTemplate = ({
  onResize,
  onChange,
  onClear,
  onCopy,
  width,
  originInput,
  changedText,
  changeText,
  copied
}) => {
  return (
    <React.Fragment>
      <Header />
      <TextArea
        originInput={originInput}
        onResize={onResize}
        onChange={onChange}
        width={width}
        changedText={changedText}
      />
      <ButtonBox
        changeText={changeText}
        changedText={changedText}
        onClear={onClear}
        onCopy={onCopy}
        copied={copied}
      />
    </React.Fragment>
  );
};

export default InstaTemplate;
