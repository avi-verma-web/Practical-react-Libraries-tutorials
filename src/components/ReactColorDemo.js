import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ReactColorDemo = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "Close Color Picker" : "Pick A Color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        ></ChromePicker>
      )}
      <h2>You Picked {color}</h2>
    </div>
  );
};

export default ReactColorDemo;
