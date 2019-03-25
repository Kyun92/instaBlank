import React, { Component } from "react";
import InstaTemplate from "./Components/InstaTemplate";

class App extends Component {
  state = {
    width: undefined,
    originInput: undefined,
    changedText: "",
    copied: false
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      originInput: e.target.value
    });
  };

  handleWidth = dotBoxWidth => {
    this.setState({
      ...this.state,
      width: dotBoxWidth - 14
    });
  };

  handleClear = () => {
    this.setState({
      originInput: "",
      changedText: "",
      copied: false
    });
  };

  handleTextChange = () => {
    const { originInput, changedText } = this.state;
    if (changedText !== "") {
      this.setState({
        changedText: "",
        copied: false
      });
      return;
    }
    let text = [];
    for (let i = 0; i < originInput.length; i++) {
      if (originInput[i] === "\n" && originInput[i + 1] === "\n") {
        text.push("\n⠀⠀⠀");
        continue;
      }
      text.push(originInput[i]);
    }
    this.setState({
      changedText: text.join("")
    });
  };
  handleCopy = () => {
    if (this.state.originInput) {
      this.setState({
        copied: !this.state.copied
      });
    }
  };

  render() {
    const { width, originInput, changedText, copied } = this.state;
    return (
      <InstaTemplate
        onResize={this.handleWidth}
        onChange={this.handleChange}
        width={width}
        originInput={originInput}
        changedText={changedText}
        changeText={this.handleTextChange}
        onClear={this.handleClear}
        onCopy={this.handleCopy}
        copied={copied}
      />
    );
  }
}

export default App;
