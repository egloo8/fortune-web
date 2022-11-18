import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Fortunes from "./Fortunes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Have your fortune told here!</p>
      </header>
      <Fortunes />
      <footer className="App-footer">
        Using fortunes from{" "}
        <a
          className="App-link"
          href="https://github.com/bmc/fortunes"
          target="_blank"
          rel="noopener noreferrer"
        >
          bmc
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
