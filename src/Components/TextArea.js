import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactResizeDetector from "react-resize-detector";
import "./TextArea.scss";

const TextArea = ({ onResize, onChange, width, originInput, changedText }) => {
  const dotBox = React.createRef();
  return (
    <div className="textarea_container">
      <section className="textarea_box">
        <div className="textarea_dotBox" ref={dotBox}>
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
          className="textarea_input"
          style={{
            width: `${width}px`
          }}
          spellCheck="false"
          onChange={e => {
            onChange(e);
          }}
          value={changedText === "" ? originInput : changedText}
          placeholder={originInput}
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
