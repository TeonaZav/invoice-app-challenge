import styled from "styled-components";

const ITEM = [
  {
    id: "RT3080",
    createdAt: "2021-08-18",
    paymentDue: "2021-08-19",
    description: "Re-branding",
    paymentTerms: 1,
    clientName: "Jensen Huang",
    clientEmail: "jensenh@mail.com",
    status: "paid",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "106 Kendell Street",
      city: "Sharrington",
      postCode: "NR24 5WQ",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Brand Guidelines",
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
    total: 1800.9,
  },
];

function InvoiceListItem() {
  const { id, clientName, paymentDue, total, status } = ITEM[0];
  return (
    <StyledListItem>
      <div className="flex-ct">
        <p className="bold">
          <span className="pale">#</span>
          {id}
        </p>
        <p className="pale">{clientName}</p>
      </div>
      <div className="flex-ct">
        <div>
          <p className="pale">{paymentDue}</p>
          <p className="bold">{total}</p>
        </div>
        <div className="status paid">
          <p>{status}</p>
        </div>
      </div>
    </StyledListItem>
  );
}
export default InvoiceListItem;

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  width: 32.7rem;
  height: 13.4rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);

  .pale {
    color: var(--blue-grey-color1);
    font-weight: 500;
    font-size: 1.3rem;
  }

  .bold {
    color: var(--blue-black-color1);
    font-weight: 700;
    font-size: 1.5rem;
  }
  .status {
    width: 10.4rem;
    height: 4rem;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &.paid {
      color: var(--color-green);
      background-color: var(--pale-green);
    }
    &.pending {
      color: var(--color-orange);
      background-color: var(--pale-orange);
    }
  }
  .flex-ct {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
