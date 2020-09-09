import React, { useState, useContext } from "react";

import { StateContext } from "../../App";
import { DDA } from "../../utils/dda.js";
import { PM } from "../../utils/bresenham-pm.js";

import "./styles.css";

function Form() {
  const { setPoints, setFrame, setCoordinates } = useContext(StateContext);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);
  const [checkboxSelected, setCheckboxSelected] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setPoints(x1, y1, x2, y2);
    setFrame(height, width);

    const coordinates =
      checkboxSelected === "dda"
        ? DDA(x1, y1, x2, y2, height, width)
        : PM(x1, y1, x2, y2, height, height);

    setCoordinates(coordinates);
  }

  function handleChangeCheckbox(e) {
    setCheckboxSelected(e.target.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Tamanho do frame</legend>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            name="height"
            id="height"
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="number"
            name="width"
            id="width"
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Escolha o algoritmo</legend>
        <div>
          <label>DDA</label>
          <input
            name="dda"
            type="checkbox"
            checked={checkboxSelected === "dda"}
            onChange={handleChangeCheckbox}
          />
        </div>
        <div>
          <label>Bresenham/PM</label>
          <input
            name="pm"
            type="checkbox"
            checked={checkboxSelected === "pm"}
            onChange={handleChangeCheckbox}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Coordenadas</legend>
        <div>
          <label htmlFor="x1">X1</label>
          <input
            type="number"
            name="x1"
            id="x1"
            onChange={(e) => setX1(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="y1">Y1</label>
          <input
            type="number"
            name="y1"
            id="y1"
            onChange={(e) => setY1(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="x2">X2</label>
          <input
            type="number"
            name="x2"
            id="x2"
            onChange={(e) => setX2(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="y2">Y2</label>
          <input
            type="number"
            name="y2"
            id="y2"
            onChange={(e) => setY2(Number(e.target.value))}
          />
        </div>
      </fieldset>

      <button type="submit">Desenhar</button>
    </form>
  );
}

export default Form;
