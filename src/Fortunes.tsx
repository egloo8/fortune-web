import React, { useState } from "react";
import "./App.css";

import { fortunesString } from "./fortunesString";

function Fortunes() {
  const fortunes = fortunesString.split("%");
  const fortuneLength = fortunes.length;

  const getRadomNumberForArray = () =>
    Math.floor(Math.random() * fortuneLength);

  const [randomNumberForArray, setRandomNumberForArray] = useState(
    getRadomNumberForArray()
  );

  return (
    <div className="App-body">
      <button className="App-button" onClick={() => setRandomNumberForArray(getRadomNumberForArray())}>
        Give me a new one!
      </button>
      <p className="Fortune-box Fortune-box-wrap">
        {fortunes[randomNumberForArray]}
      </p>
    </div>
  );
}

export default Fortunes;
