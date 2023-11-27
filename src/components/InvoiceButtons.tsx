import Button from "../styles/sharedStyles/ButtonStyles";
import { ButtonPanelCt } from "../styles/sharedStyles/StyledContainers";

function InvoiceButtons() {
  return (
    <ButtonPanelCt $ct={"invoice"}>
      <Button $btn="edit">Edit</Button>
      <Button $btn="delete">Delete</Button>
      <Button $btn="markpaid">Mark as Paid</Button>
    </ButtonPanelCt>
  );
}
export default InvoiceButtons;
