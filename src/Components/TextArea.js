import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactResizeDetector from "react-resize-detector";

class TextArea extends Component {
  state = {
    dotBoxWidth: undefined
  };
  dotBox = React.createRef();

  style = {
    textarea_container: {
      border: "2px solid #fff",
      backgroundColor: "#A8B2BB",
      margin: "auto 75px"
    },
    textarea_box: {
      margin: "60px"
    },
    textarea_dotBox: {
      display: "flex",
      backgroundColor: "#292C33"
    },
    textarea_input: {
      backgroundColor: "#292C33",
      color: "#f8f8f8",
      border: "none",
      fontSize: "14px",
      outline: "none",
      overflow: "hidden",
      resize: "none",
      padding: "7px",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      spellcheck: "false"
    }
  };

  onResize = () => {
    this.setState({
      dotBoxWidth: this.dotBox.current.clientWidth - 14
    });
  };

  render() {
    const { dotBoxWidth } = this.state;
    return (
      <div style={this.style.textarea_container}>
        <section style={this.style.textarea_box}>
          <div style={this.style.textarea_dotBox} ref={this.dotBox}>
            <p
              style={{
                color: "#ED655A",
                marginRight: "5px",
                marginLeft: "5px"
              }}
            >
              ●
            </p>
            <p style={{ color: "#F6C150", marginRight: "5px" }}> ●</p>
            <p style={{ color: "#64CA57", marginRight: "5px" }}> ●</p>
          </div>
          <TextareaAutosize
            style={{
              ...this.style.textarea_input,
              width: `${dotBoxWidth}px`
            }}
            spellcheck="false"
            // value={originText}
          />
          <ReactResizeDetector
            handleWidth
            handleHeight
            onResize={this.onResize}
          />
        </section>
      </div>
    );
  }
}

export default TextArea;
