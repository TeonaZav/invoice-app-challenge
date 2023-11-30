import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Button from "../../styles/sharedStyles/ButtonStyles";
import { ButtonPanelCt } from "../../styles/sharedStyles/StyledContainers";

import { getInvoice } from "../../services/apiInvoices";
import { IInvoice } from "../../interfacese/IInvoice";
import { useInvoiceContextForm } from "../../context/formContext";
function InvoiceButtons() {
  const [{ drawerIsOpen }, dispatch] = useInvoiceContextForm();

  const { id } = useParams() as { id: string };

  const { data } = useQuery({
    queryKey: ["invoice"],
    queryFn: () => getInvoice(id),
  });

  const invoice: IInvoice = { ...data?.data(), id: data?.id };

  const fillFormForEdit = () => {
    dispatch({
      type: "EDIT_FORM",
      payload: { invoice: invoice, drawer: !drawerIsOpen },
    });
    console.log(drawerIsOpen);
  };
  return (
    <ButtonPanelCt $ct={"invoice"}>
      <Button $btn="edit" onClick={fillFormForEdit}>
        Edit
      </Button>

      <Button $btn="delete">Delete</Button>
      <Button $btn="markpaid">Mark as Paid</Button>
    </ButtonPanelCt>
  );
}
export default InvoiceButtons;
