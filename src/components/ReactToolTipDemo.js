import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const ColoredToolTip = () => {
  return <span style={{ color: "yellow" }}>Colored Component</span>;
};
const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});
const ReactToolTipDemo = () => {
  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          content="Basic Tooltip"
          arrow={false}
          delay={1000}
          placement={"right"}
        >
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <h2>Hover</h2>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredToolTip></ColoredToolTip>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredToolTip></ColoredToolTip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
};

export default ReactToolTipDemo;
