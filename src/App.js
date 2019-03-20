import React, { Component } from "react";
import InstaTemplate from "./Components/InstaTemplate";

class App extends Component {
  state = {
    width: undefined,
    originInput: "",
    changeInput: ""
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

  handleTextChange = () => {
    const { originInput } = this.state;
    // console.log(originInput.replace(/(?:\r\n|\r|\n)/g, "AA"));
    let text = [];
    for (let i = 0; i < originInput.length; i++) {
      if (originInput[i] === "\n" && originInput[i + 1] === "\n") {
        text.push("\n⠀⠀⠀");
        continue;
      }
      text.push(originInput[i]);
    }
    this.setState({
      changeInput: text.join("")
    });
  };

  render() {
    const { width, originInput, changeInput } = this.state;
    return (
      <InstaTemplate
        onResize={this.handleWidth}
        onChange={this.handleChange}
        width={width}
        originInput={originInput}
        changeInput={changeInput}
        changeText={this.handleTextChange}
      />
    );
  }
}

export default App;
