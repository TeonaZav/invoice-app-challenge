import { useParams } from "react-router-dom";
import Button from "../../styles/sharedStyles/ButtonStyles";
import { ButtonPanelCt } from "../../styles/sharedStyles/StyledContainers";

import { useInvoiceForm } from "../../context/formContext";
import { useInvoice } from "../../hooks/useInvoice";
function InvoiceButtons() {
  const { fillFormForEdit } = useInvoiceForm();

  const { id } = useParams() as { id: string };
  const { invoice } = useInvoice(id);

  function handFormFill() {
    fillFormForEdit(invoice);
  }

  return (
    <ButtonPanelCt $ct={"invoice"}>
      <Button $btn="edit" onClick={handFormFill}>
        Edit
      </Button>

      <Button $btn="delete">Delete</Button>
      <Button $btn="markpaid">Mark as Paid</Button>
    </ButtonPanelCt>
  );
}
export default InvoiceButtons;
