import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../styles/sharedStyles/ButtonStyles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { H2, P } from "../../styles/sharedStyles/Typography";
import { useDeleteInvoice } from "../../hooks/useDeleteInvoice";

interface DialogAlertProps {
  currentId: string;
}

export default function DialogAlert({ currentId }: DialogAlertProps) {
  const navigate = useNavigate();
  const { deleteInv, isDeleting } = useDeleteInvoice();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteInv(currentId);
    setTimeout(() => {
      navigate("/");
    }, 2000);

    setOpen(false);
  };

  return (
    <>
      <Button $btn="delete" onClick={handleClickOpen} disabled={isDeleting}>
        Delete
      </Button>
      <Button $btn="markpaid" onClick={handleClickOpen}>
        Mark as Paid
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <H2 id="alert-dialog-title">{"Confirm Deletion"}</H2>
          <P color="pale">
            Are you sure you want to delete invoice # {currentId}? This action
            cannot be undone.
          </P>
        </DialogContent>
        <DialogActions>
          <Button $btn="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button $btn="delete" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
