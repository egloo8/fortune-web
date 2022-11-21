import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";

import logo from "./lib/logo.svg";

import Fortunes from "./Fortunes";
import AddFortune from "./AddFortune";

function App() {
  const [isAutoChecked, setIsAutoChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutoChecked(event.target.checked);
  };

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      <AddFortune />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
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
          label="Auto reload"
        />
      </Box>
      <Box
        sx={{
          color: "primary.main",
          position: "absolute",
          bottom: 0,
          right: 0,
          p: "1rem",
        }}
      >
        <Typography variant="caption">
          Using fortunes from{" "}
          <Link
            href="https://github.com/bmc/fortunes"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary.main"
          >
            bmc
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
