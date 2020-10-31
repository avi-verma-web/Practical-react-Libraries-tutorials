import React from "react";
import CountUp, { useCountUp } from "react-countup";

//Default duration is 2 seconds
//Default initial value is 0

const ReactCountUpDemo = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false,
  });
  return (
    <h1>
      <CountUp end={200}></CountUp>
      <br></br>
      <CountUp end={200} duration={5}></CountUp>
      <br></br>
      <CountUp start={500} end={1000} duration={5}></CountUp>
      <br></br>
      <CountUp
        prefix="$"
        decimals={2}
        start={0}
        end={1000}
        duration={5}
      ></CountUp>
      <br></br>
      <CountUp
        suffix="USD"
        decimals={2}
        start={0}
        end={1000}
        duration={5}
      ></CountUp>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
    </h1>
  );
};

export default ReactCountUpDemo;
