import React from "react";
import TextArea from "./TextArea/TextArea";
import Header from "./Header/Header";
import ButtonBox from "./ButtonBox/ButtonBox";
import Footer from "./Footer/Footer";

const InstaTemplate = ({
  onResize,
  onChange,
  onClear,
  onCopy,
  width,
  originText,
  changedText,
  onChangeText,
  copied,
  textLength,
  isWhite,
  onChangeTheme,
  warnMessage
}) => {
  return (
    <React.Fragment>
      <Header />
      <TextArea
        originText={originText}
        onResize={onResize}
        onChange={onChange}
        width={width}
        changedText={changedText}
        isWhite={isWhite}
      />
      <ButtonBox
        textLength={textLength}
        onChangeText={onChangeText}
        changedText={changedText}
        onClear={onClear}
        onCopy={onCopy}
        copied={copied}
        onChangeTheme={onChangeTheme}
        warnMessage={warnMessage}
      />
      <Footer />
    </React.Fragment>
  );
};

export default InstaTemplate;
