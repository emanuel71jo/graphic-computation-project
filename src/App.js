import React from "react";

import Home from "./pages/Home";

export const StateContext = React.createContext(null);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      points: {
        x1: null,
        y1: null,
        x2: null,
        y2: null,
      },
      frame: {
        height: null,
        width: null,
      },
      setPoints: this.setPoints,
      setFrame: this.setFrame,
      setCoordinates: this.setCoordinates,
    };
  }

  setPoints = (x1, y1, x2, y2) => {
    this.setState((state) => ({
      points: {
        x1,
        y1,
        x2,
        y2,
      },
    }));
  };

  setFrame = (height, width) => {
    this.setState((state) => ({
      frame: { height, width },
    }));
  };

  setCoordinates = (coordinates) => {
    this.setState((state) => ({
      coordinates,
    }));
  };

  render() {
    return (
      <StateContext.Provider value={this.state}>
        <Home />
      </StateContext.Provider>
    );
  }
}

export default App;
