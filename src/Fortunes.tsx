import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./firebase";

interface Props {
  isAutoChecked: boolean;
}

function Fortunes({ isAutoChecked }: Props) {
  const [fortunes, setFortunes] = useState<Array<string>>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "fortunes"));
      const querySnapshot = await getDocs(q);
      const fortunesArray: Array<string> = [];
      querySnapshot.forEach((doc) => {
        fortunesArray.push(doc.data().fortune);
      });

      setFortunes(fortunesArray);
    };

    fetchData()
      .catch(console.error);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "primary.main",
      }}
    >
      <GradiantButton
        variant="contained"
        size="large"
        onClick={() => setRandomNumberForArray(getRadomNumberForArray())}
      >
        Give me a new one!
      </GradiantButton>
      <FortunesBox>
        <Typography align="center" variant="h5">
          {fortunes[randomNumberForArray]}
        </Typography>
      </FortunesBox>
    </Box>
  );
}

export default Fortunes;

const GradiantButton = styled(Button)({
  backgroundImage:
    "linear-gradient(to right, #ECC440 0%, #FFFA8A 25%, #DDAC17 50%, #FFFF95 100%)",
});

const FortunesBox = styled(Box)({
  border: "1px solid transparent",
  borderImage:
    "linear-gradient(to right, #ECC440 0%, #FFFA8A 25%, #DDAC17 50%, #FFFF95 100%)",
  borderImageSlice: "1",
  padding: "2rem",
  margin: "2rem",
  width: "80vh",
});
