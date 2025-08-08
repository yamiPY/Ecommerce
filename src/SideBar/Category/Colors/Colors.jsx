import React from "react";
import "./colors.css";
import Input from "../../../components/elements/Input";

const Colors = ({ onColorChange, selectedColor }) => {
  const linear = "linear-gradient(#e66465, #9198e5)";
  return (
    <div className="color-container">
      <h1 className="side-bar-title color-title">Colors</h1>
      <div className="category-icons color-icons">
        <Input
          onRadioChange={onColorChange}
          value="all"
          title="All"
          name="color"
          color={linear}
          checked={selectedColor === "all"}
        />
        <Input
          onRadioChange={onColorChange}
          value="black"
          title="Black"
          name="color"
          color="black"
          checked={selectedColor === "black"}
        />
        <Input
          onRadioChange={onColorChange}
          value="red"
          title="Red"
          name="color"
          color="red"
          checked={selectedColor === "red"}
        />
        <Input
          onRadioChange={onColorChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
          checked={selectedColor === "blue"}
        />
        <Input
          onRadioChange={onColorChange}
          value="green"
          title="Green"
          name="color"
          color="green"
          checked={selectedColor === "green"}
        />
      </div>
    </div>
  );
};

export default Colors;
