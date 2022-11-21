import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import { fortunesString } from "./fortunesString";

interface Props {
  isAutoChecked: boolean;
}

function Fortunes({ isAutoChecked }: Props) {
  const fortunes = fortunesString.split("%\n");
  const fortuneLength = fortunes.length;

  const getRadomNumberForArray = useCallback(() => {
    return Math.floor(Math.random() * fortuneLength);
  }, [fortuneLength]);

  const [randomNumberForArray, setRandomNumberForArray] = useState(
    getRadomNumberForArray()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAutoChecked) setRandomNumberForArray(getRadomNumberForArray());
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isAutoChecked, setRandomNumberForArray, getRadomNumberForArray]);

  return (
    <div className="App-body">
      <button
        className="App-button"
        onClick={() => setRandomNumberForArray(getRadomNumberForArray())}
      >
        Give me a new one!
      </button>
      <p className="Fortune-box Fortune-box-wrap">
        {fortunes[randomNumberForArray]}
      </p>
    </div>
  );
}

export default Fortunes;
