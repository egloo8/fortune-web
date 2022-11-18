import React from "react";
import "./App.css";

import { fortunesString } from "./fortunesString";

function Fortunes() {
  const fortunes = fortunesString.split("%");
  const fortuneLength = fortunes.length;

  return (
    <div className="App-body">
      <p className="Fortune-box Fortune-box-wrap">
        {fortunes[Math.floor(Math.random() * fortuneLength)]}
      </p>
    </div>
  );
}

export default Fortunes;
