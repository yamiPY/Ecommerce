import React from "react";

const Input = ({ onRadioChange, name, value, title, color, checked }) => {
  return (
    <label className="side-bar-label price-label color-label">
      <input
      className="search-bar"
        type="radio"
        name={name}
        value={value}
        onChange={onRadioChange}
        checked={checked}
      />
      <span className="check-mark" style={{ background: color }}></span>
      {title}
    </label>
  );
};

export default Input;
