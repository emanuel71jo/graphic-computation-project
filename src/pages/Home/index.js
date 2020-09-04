import React, { useContext } from "react";

import Form from "../../components/Form";
import Canvas from "../../components/Canvas";
import { StateContext } from "../../App";

function Home() {
  const { frame, coordinates } = useContext(StateContext);

  return (
    <div>
      <Form />
      {frame.height && (
        <Canvas
          height={frame.height}
          width={frame.width}
          points={coordinates}
        />
      )}
    </div>
  );
}

export default Home;
