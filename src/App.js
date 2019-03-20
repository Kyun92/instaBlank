import React, { Component } from "react";
import InstaTemplate from "./Components/InstaTemplate";

class App extends Component {
  state = {
    width: undefined,
    originInput: "줄바꿈을 신경쓰지 마시고 마음껏 글 쓰세요 👏",
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

  render() {
    const { width, originInput, changeInput } = this.state;
    return (
      <div>
        <InstaTemplate
          onResize={this.handleWidth}
          onChange={this.handleChange}
          width={width}
          originInput={originInput}
          changeInput={changeInput}
        />
      </div>
    );
  }
}

export default App;
