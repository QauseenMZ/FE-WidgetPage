import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

interface ConfirmModalProp {
  open: boolean;
  onYesHandler: (...p: any) => void;
  onNoHandler: (...p: any) => void;
};

const ConfirmDeleteModal = (props: ConfirmModalProp) => {
  const { open, onYesHandler, onNoHandler } = { ...props };

  return (
    <Dialog open={open} onClose={onNoHandler}>
      <DialogTitle>{"Delete Confirmation"}</DialogTitle>
      <DialogContent>
        <DialogContentText>{"Are you sure you want to delete?"}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onNoHandler} color='default'>No</Button>
        <Button onClick={onYesHandler} color='primary'>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
