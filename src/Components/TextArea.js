import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactResizeDetector from "react-resize-detector";

const style = {
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

const TextArea = ({ onResize, onChange, width, originInput, changeInput }) => {
  const dotBox = React.createRef();
  return (
    <div style={style.textarea_container}>
      <section style={style.textarea_box}>
        <div style={style.textarea_dotBox} ref={dotBox}>
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
            ...style.textarea_input,
            width: `${width}px`
          }}
          spellCheck="false"
          onChange={e => {
            console.log(e.target.value);
            onChange(e);
          }}
          value={originInput}
        />
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={() => {
            onResize(dotBox.current.clientWidth);
          }}
        />
      </section>
    </div>
  );
};

export default TextArea;
