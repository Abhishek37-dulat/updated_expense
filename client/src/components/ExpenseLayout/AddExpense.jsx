import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function AddExpense({
  handleClickOpen,
  handleClose,
  open,
  setOpen,
}) {
  const [categorie, setCategorie] = useState("");
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState(undefined);

  const handleChangeCategorie = (e) => {
    setCategorie(e.target.value);
  };
  const handleSave = () => {
    if (categorie === "") {
      toast("Please Select Categorie🎠");
    }
    if (amount < 1) {
      toast("Please Enter Valid Amount💰");
    }
    if (itemName === "") {
      toast("Please Enter Item Name🔳");
    }
    if (categorie !== "" && amount >= 1 && itemName !== "") {
      const formData = {
        itemName: itemName,
        categorie: categorie,
        amount: amount,
      };
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create new expense"}
        </DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              id="standard-basic"
              label="ItemName"
              variant="standard"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              id="standard-basic"
              type="number"
              label="Amount"
              variant="standard"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Box>
          <Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Categorie
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={categorie}
                onChange={handleChangeCategorie}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
