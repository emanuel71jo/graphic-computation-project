import React, { useContext } from "react";

import Form from "../../components/Form";
import Canvas from "../../components/Canvas";
import { StateContext } from "../../App";

import "./styles.css";

function Home() {
  const { frame, coordinates } = useContext(StateContext);

  return (
    <div id="home-container">
      <Form />
      <Canvas height={500} width={500} points={[0, 0]} />
      {/* {frame.height && (
        <Canvas
          height={frame.height}
          width={frame.width}
          points={coordinates}
        />
      )} */}
    </div>
  );
}

export default Home;
