import IconPlus from "../../../assets/icon-plus.svg";
import Button from "../../../styles/sharedStyles/ButtonStyles";
import { StyledListHeader } from "../../../styles/invoiceListStyles/StyledInvoiceList";
import FilterList from "./FilterList";
import { useInvoiceForm } from "../../../context/formContext";
import { H1, P } from "../../../styles/sharedStyles/Typography";
import { useMediaQuery } from "react-responsive";

interface InvoiceListHeaderProps {
  itemCount: number;
}

function InvoiceListHeader({ itemCount }: InvoiceListHeaderProps) {
  const { drawerToggle } = useInvoiceForm();
  function handleDrawer() {
    drawerToggle();
  }

  const isDes = useMediaQuery({ query: "(min-width: 90em)" });

  return (
    <StyledListHeader>
      <div>
        <H1>Invoices</H1>
        <P color="pale">{itemCount} invoices</P>
      </div>

      <div className="ct-right">
        <FilterList />
        <Button onClick={handleDrawer} $btn={"btnAdd"}>
          {
            <>
              <div className="add">
                <img src={IconPlus} />
              </div>
              <span>{isDes ? "New Invoice" : "New"}</span>
            </>
          }
        </Button>
      </div>
    </StyledListHeader>
  );
}
export default InvoiceListHeader;
