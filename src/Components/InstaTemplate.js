import React from "react";
import TextArea from "./TextArea";
import Header from "./Header";
import ButtonBox from "./ButtonBox";

const InstaTemplate = () => {
  return (
    <div>
      <Header />
      <TextArea originText="hello" />
      <ButtonBox />
    </div>
  );
};

export default InstaTemplate;
