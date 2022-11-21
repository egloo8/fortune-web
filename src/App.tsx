import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import logo from "./lib/logo.svg";
// import "./App.css";

import Fortunes from "./Fortunes";

function App() {
  const [isAutoChecked, setIsAutoChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutoChecked(event.target.checked);
  };

  return (
    <Box sx={{ backgroundColor: "background.paper", minHeight: "100vh" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Have your fortune told here!</p>
      </header>
      <Fortunes isAutoChecked={isAutoChecked} />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          ml: 2,
          mb: 1,
          color: "primary.main",
        }}
      >
        <FormControlLabel
          control={<Switch checked={isAutoChecked} onChange={handleChange} />}
          label="Automatic reload"
        />
      </Box>
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
    </Box>
  );
}

export default App;
