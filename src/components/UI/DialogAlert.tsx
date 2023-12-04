import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../styles/sharedStyles/ButtonStyles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { H2, P } from "../../styles/sharedStyles/Typography";
import { useDeleteInvoice } from "../../hooks/useDeleteInvoice";
import { usePaid } from "../../hooks/usePaid";

interface DialogAlertProps {
  currentId: string;
  status: string | undefined;
}

export default function DialogAlert({ currentId, status }: DialogAlertProps) {
  const navigate = useNavigate();
  const { deleteInv, isDeleting } = useDeleteInvoice();
  const { markPaid } = usePaid(currentId);
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState("");

  const handleClickOpen = (btnName: string) => {
    setOpens(btnName);
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

  const handlePaid = () => {
    markPaid();
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setOpen(false);
  };
  return (
    <>
      <Button
        $btn="delete"
        onClick={() => handleClickOpen("delete")}
        disabled={isDeleting}
      >
        Delete
      </Button>
      <Button
        $btn="markpaid"
        onClick={() => handleClickOpen("paid")}
        disabled={status === "draft" || status === "paid"}
      >
        Mark as Paid
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <H2 id="alert-dialog-title">
            {opens === "delete" ? "Confirm Deletion" : "Mark as paid"}
          </H2>
          {opens === "delete" ? (
            <P color="pale">
              Are you sure you want to delete invoice # {currentId}? This action
              cannot be undone.
            </P>
          ) : (
            <P color="pale">
              Mark as paid # {currentId}. This action cannot be undone.
            </P>
          )}
        </DialogContent>
        <DialogActions>
          <Button $btn="cancel" onClick={handleClose}>
            Cancel
          </Button>
          {opens === "delete" && (
            <Button $btn="delete" onClick={handleDelete}>
              Delete
            </Button>
          )}
          {opens === "paid" && (
            <Button $btn="markpaid" onClick={handlePaid}>
              Confirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
