import React from "react";
import TextArea from "./TextArea";
import Header from "./Header";
import ButtonBox from "./ButtonBox";

const InstaTemplate = ({
  onResize,
  onChange,
  width,
  originInput,
  changeInput
}) => {
  return (
    <div>
      <Header />
      <TextArea
        originInput={originInput}
        onResize={onResize}
        onChange={onChange}
        width={width}
        changeInput={changeInput}
      />
      <ButtonBox />
    </div>
  );
};

export default InstaTemplate;
