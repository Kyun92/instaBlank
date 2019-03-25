import React, { Component } from "react";
import InstaTemplate from "./Components/InstaTemplate";

class App extends Component {
  state = {
    width: undefined,
    originText: "",
    changedText: "",
    copied: false,
    textLength: 0,
    isWhite: false,
    warnMessage: ""
  };

  handleCheckTextLength = () => {
    const { originText, changedText } = this.state;
    if (changedText !== "") {
      return changedText.length;
    }
    return originText.length;
  };

  handleChange = e => {
    this.setState({
      originText: e.target.value,
      textLength: e.target.value.length,
      warnMessage: ""
    });
  };

  handleWidth = dotBoxWidth => {
    this.setState({
      width: dotBoxWidth - 14
    });
  };

  handleClear = () => {
    this.setState({
      originText: "",
      changedText: "",
      copied: false,
      textLength: 0,
      warnMessage: ""
    });
  };

  handleTextChange = () => {
    const { originText, changedText } = this.state;
    if (!originText) {
      this.setState({
        warnMessage: "텍스트를 입력해야합니다! 🤨"
      });
      return;
    }

    //recovery
    if (changedText !== "") {
      this.setState({
        changedText: "",
        copied: false,
        textLength: originText.length,
        warnMessage: ""
      });
      return;
    }
    let text = [];
    for (let i = 0; i < originText.length; i++) {
      if (originText[i] === "\n" && originText[i + 1] === "\n") {
        text.push("\n⠀⠀⠀");
        continue;
      }
      text.push(originText[i]);
    }
    this.setState({
      changedText: text.join(""),
      textLength: text.join("").length,
      warnMessage: ""
    });
  };

  handleCopy = () => {
    const { changedText, originText } = this.state;
    if (changedText === "") {
      this.setState({
        warnMessage: "원문을 변경하셔야합니다! 🤨"
      });
      return;
    }
    if (originText !== "") {
      this.setState({
        copied: !this.state.copied
      });
    }
  };

  handleChangeTheme = () => {
    this.setState({
      isWhite: !this.state.isWhite
    });
  };

  render() {
    const {
      width,
      originText,
      changedText,
      copied,
      textLength,
      isWhite,
      warnMessage
    } = this.state;
    return (
      <InstaTemplate
        width={width}
        textLength={textLength}
        originText={originText}
        changedText={changedText}
        copied={copied}
        isWhite={isWhite}
        warnMessage={warnMessage}
        onResize={this.handleWidth}
        onChange={this.handleChange}
        onChangeText={this.handleTextChange}
        onClear={this.handleClear}
        onCopy={this.handleCopy}
        onChangeTheme={this.handleChangeTheme}
      />
    );
  }
}

export default App;
