import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactResizeDetector from "react-resize-detector";

class TextArea extends Component {
  state = {
    dotBoxWidth: "50px"
  };
  dotBox = React.createRef();

  onResize = () => {
    this.setState({
      dotBoxWidth: this.dotBox.current.clientWidth - 4
    });
  };

  render() {
    const { dotBoxWidth } = this.state;
    return (
      <div style={{ border: "2px solid #fff", backgroundColor: "#A8B2BB" }}>
        <section style={{ margin: "60px" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#292C33"
            }}
            ref={this.dotBox}
          >
            <p
              style={{
                color: "#ED655A",
                marginRight: "5px",
                marginLeft: "5px"
              }}
            >
              {" "}
              ●
            </p>
            <p style={{ color: "#F6C150", marginRight: "5px" }}> ●</p>
            <p style={{ color: "#64CA57", marginRight: "5px" }}> ●</p>
          </div>
          <TextareaAutosize
            style={{
              backgroundColor: "#292C33",
              color: "#f8f8f8",
              border: "none",
              outline: "none",
              overflow: "hidden",
              width: `${dotBoxWidth}px`
            }}

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
