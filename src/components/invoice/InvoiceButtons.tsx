import { useParams } from "react-router-dom";
import Button from "../../styles/sharedStyles/ButtonStyles";
import { ButtonPanelCt } from "../../styles/sharedStyles/StyledContainers";
import DialogAlert from "../UI/DialogAlert";
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
    <>
      <ButtonPanelCt $ct={"invoice"}>
        <Button $btn="edit" onClick={handFormFill}>
          Edit
        </Button>
        <DialogAlert currentId={id} status={invoice?.status} />
      </ButtonPanelCt>
    </>
  );
}
export default InvoiceButtons;
