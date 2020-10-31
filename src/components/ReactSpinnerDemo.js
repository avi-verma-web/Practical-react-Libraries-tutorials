import React from "react";
import { css } from "@emotion/core";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const ReactSpinnerDemo = () => {
  return (
    <div>
      <BounceLoader
        css={loaderCSS}
        size={24}
        color="red"
        loading={true}
      ></BounceLoader>
      <br></br>
      <BarLoader
        css={loaderCSS}
        size={48}
        color="red"
        loading={true}
      ></BarLoader>
      <br></br>
      <BeatLoader
        css={loaderCSS}
        size={72}
        color="red"
        loading={true}
      ></BeatLoader>
      <br></br>
    </div>
  );
};

export default ReactSpinnerDemo;
