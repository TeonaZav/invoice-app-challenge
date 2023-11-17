import styled from "styled-components";
import InvoiceListItem from "./InvoiceListItem";
import InvoiceListHeader from "./InvoiceListHeader";
import DummyData from "../../data.json";

function InvoiceList() {
  return (
    <StyledList>
      <InvoiceListHeader itemCount={DummyData.length} />
      {DummyData.map((invoice) => {
        return <InvoiceListItem key={invoice.id} {...invoice} />;
      })}
    </StyledList>
  );
}

export default InvoiceList;

const StyledList = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
