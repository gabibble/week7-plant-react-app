import React, {useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { serverCalls } from "../../api";

export const DeleteDialog = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }; 

  const handleClose = () => {
    setOpen(false);
  };

  let deleteData = async () => {
    console.log(props.id);
    await serverCalls.delete(props.id);
    window.location.reload();
  }

return (
    <div>
      <Button onClick={handleClickOpen}>
       delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Plant"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you srue you want to delete {props.id}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteData}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}