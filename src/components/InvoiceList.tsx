import styled from "styled-components";
import InvoiceListItem from "./InvoiceListItem";
import InvoiceListHeader from "./InvoiceListHeader";
import DummyData from "../data.json";

function InvoiceList() {
  return (
    <>
      <StyledList>
        <InvoiceListHeader itemCount={DummyData.length} />
        {DummyData.map((invoice) => {
          return <InvoiceListItem key={invoice.id} {...invoice} />;
        })}
      </StyledList>
    </>
  );
}

export default InvoiceList;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 32.7rem;
  @media (min-width: 48em) {
    width: 67.2rem;
  }
  @media (min-width: 90em) {
    width: 73rem;
  }
`;
