/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

const style = {
  Header_text: {
    color: "#fff",
    textAlign: "center",
    fontSize: "2em",
    marginLeft: "12px"
  }
};

const Header = () => {
  return (
    <div>
      <p style={style.Header_text}>Blank 👏</p>
    </div>
  );
};

export default Header;
