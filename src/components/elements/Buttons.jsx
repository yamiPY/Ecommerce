import React from "react";

const Buttons = ({ value, handleClick }) => {
  return (
    <button onClick={() => handleClick(value)} className="btns">
      {value}
    </button>
  );
};

export default Buttons;
