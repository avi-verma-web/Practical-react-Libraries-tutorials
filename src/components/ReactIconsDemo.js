import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
const ReactIconsDemo = () => {
  return (
    <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
      <FaReact></FaReact>
      <MdAlarm></MdAlarm>
    </IconContext.Provider>
  );
};

export default ReactIconsDemo;
