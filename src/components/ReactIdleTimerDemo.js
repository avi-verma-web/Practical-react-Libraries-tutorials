import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";

const ReactIdleTimerDemo = () => {
  const IdleTimerRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onIdle = () => {
    alert("User is Idle");
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? <h2>Hello Avi</h2> : <h2>Hello Guest</h2>}
      <IdleTimer ref={IdleTimerRef} timeout={5000} onIdle={onIdle}></IdleTimer>
    </div>
  );
};

export default ReactIdleTimerDemo;
