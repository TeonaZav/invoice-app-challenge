import IconPlus from "../../../assets/icon-plus.svg";
import Button from "../../../styles/sharedStyles/ButtonStyles";
import { StyledListHeader } from "../../../styles/invoiceListStyles/StyledInvoiceList";
import FilterList from "./FilterList";
import { useInvoiceForm } from "../../../context/formContext";

interface InvoiceListHeaderProps {
  itemCount: number;
}

function InvoiceListHeader({ itemCount }: InvoiceListHeaderProps) {
  const { drawerToggle } = useInvoiceForm();
  function handleDrawer() {
    // console.log(drawerIsOpen);
    // dispatch({
    //   type: "TOGGLE_DRAWER",
    //   payload: !drawerIsOpen,
    // });
    drawerToggle();
  }
  return (
    <StyledListHeader>
      <div>
        <h1>Invoices</h1>
        <p>{itemCount} invoices</p>
      </div>

      <div className="ct-right">
        <FilterList />
        <Button onClick={handleDrawer} $btn={"btnAdd"}>
          {
            <>
              <div className="add">
                <img src={IconPlus} />
              </div>
              <span>New</span>
            </>
          }
        </Button>
      </div>
    </StyledListHeader>
  );
}
export default InvoiceListHeader;
