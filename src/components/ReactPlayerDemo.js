import React from "react";
import ReactPlayer from "react-player";

const ReactPlayerDemo = () => {
  return (
    <div>
      <ReactPlayer
        width="480px"
        height="240px"
        controls={true}
        url="https://www.youtube.com/watch?v=FJiE6X4xF6I"
        onReady={() => alert("On ready")}
        onStart={() => alert("On start")}
        onPause={() => alert("On pasue")}
        onEnded={() => alert("On ended")}
        onError={() => alert("On error")}
      ></ReactPlayer>
    </div>
  );
};

export default ReactPlayerDemo;
