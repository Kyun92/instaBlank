import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactResizeDetector from "react-resize-detector";
import "./TextArea.scss";

const TextArea = ({
  onResize,
  onChange,
  width,
  originText,
  changedText,
  isWhite
}) => {
  const dotBox = React.createRef();
  return (
    <div className="textarea_container">
      <section className="textarea_box">
        <div
          className={`textarea_dotBox ${isWhite && "whiteTheme"}`}
          ref={dotBox}
        >
          <p className="dot red left">●</p>
          <p className="dot yellow">●</p>
          <p className="dot green">●</p>
        </div>
        <TextareaAutosize
          className={`textarea_input ${isWhite && "whiteTheme"}`}
          style={{
            width: `${width}px`
          }}
          spellCheck="false"
          onChange={e => {
            onChange(e);
          }}
          value={changedText === "" ? originText : changedText}
          placeholder="줄바꿈을 신경쓰지 마시고 마음껏 쓰세요 👏"
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
