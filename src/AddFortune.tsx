import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function AddFortune() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fortune, setFortune] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFortune(event.target.value);
  };

  const handleSubmit = async () => {
    await addDoc(collection(db, "fortunes"), {
      fortune: fortune,
      created: Timestamp.now(),
    }).then(() => setIsDialogOpen(false));
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          m: 2,
          color: "primary.main",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsDialogOpen(true)}
        >
          Add fortune
        </Button>
      </Box>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle sx={{ color: "primary.main" }}>Add fortune</DialogTitle>
        <DialogContent sx={{ minWidth: "60vh" }}>
          <DialogContentText sx={{ color: "primary.main" }}>
            Write your own fortune or epigram bellow
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fortune"
            label="Your fortune"
            fullWidth
            variant="standard"
            InputLabelProps={{
              style: { color: "primary.main" },
            }}
            value={fortune}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddFortune;
