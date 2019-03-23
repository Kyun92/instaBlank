import React from "react";
import TextArea from "./TextArea";
import Header from "./Header";
import ButtonBox from "./ButtonBox";

const InstaTemplate = ({
  onResize,
  onChange,
  onClear,
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
        copied={copied}
      />
    </React.Fragment>
  );
};

export default InstaTemplate;
