import styled from "styled-components";

const DUMMY_DATA = {
  id: "RG0314",
  createdAt: "2021-09-24",
  paymentDue: "2021-10-01",
  description: "Website Redesign",
  paymentTerms: 7,
  clientName: "John Morrison",
  clientEmail: "jm@myco.com",
  status: "paid",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "79 Dover Road",
    city: "Westhall",
    postCode: "IP19 3PF",
    country: "United Kingdom",
  },
  items: [
    {
      name: "New Logo",
      quantity: 1,
      price: 1532.33,
      total: 1532.33,
    },
    {
      name: "Brand Guidelines",
      quantity: 1,
      price: 2500.0,
      total: 2500.0,
    },
  ],
  total: 14002.33,
};
function Invoice() {
  const {
    id,
    description,
    senderAddress,
    clientAddress,
    createdAt,
    paymentDue,
    clientName,
    clientEmail,
    items,
    total,
  } = DUMMY_DATA;
  return (
    <StyledInvoice>
      <div className="invoice-info-ct-1">
        <div>
          <p className="bold">
            <span className="pale">#</span>
            {id}
          </p>
          <p className="pale">{description}</p>
        </div>
        <div>
          <p className="pale">{senderAddress.street}</p>
          <p className="pale">{senderAddress.city}</p>
          <p className="pale">{senderAddress.postCode}</p>
          <p className="pale">{senderAddress.country}</p>
        </div>
      </div>
      <div className="invoice-info-ct-2">
        <div>
          <div>
            <p className="pale">Invoice Date</p>
            <p className="bold">{createdAt}</p>
          </div>
          <div>
            <p className="pale">Payment Due</p>
            <p className="bold">{paymentDue}</p>
          </div>
        </div>
        <div>
          <p className="pale">Bill To</p>
          <p className="bold">{clientName}</p>
          <div>
            <p className="pale">{clientAddress.street}</p>
            <p className="pale">{clientAddress.city}</p>
            <p className="pale">{clientAddress.postCode}</p>
            <p className="pale">{clientAddress.country}</p>
          </div>
        </div>
        <div>
          <p className="pale">Sent To</p>
          <p className="bold">{clientEmail}</p>
        </div>
      </div>
      <div className="invoice-info-ct-3">
        <table>
          <tr>
            <th>Item Name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {items.map((row) => {
            return (
              <tr>
                <td>{row.name}</td>
                <td>{row.quantity}</td>
                <td>{row.price}</td>
                <td>{row.total}</td>
              </tr>
            );
          })}
        </table>
        <div className="invoice-footer">
          <p className="pale">Amount Due</p>
          <p>{total}</p>
        </div>
      </div>
    </StyledInvoice>
  );
}

export default Invoice;

const StyledInvoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2f2;
  gap: 1.6rem;
  width: 32.7rem;
  padding: 2.4rem;
  .invoice-info-ct-1 {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-self: flex-start;
    margin-bottom: 3.1rem;
  }
  .invoice-info-ct-2 {
    display: flex;
    flex-wrap: wrap;
    gap: 6rem;
    align-self: flex-start;
    margin-bottom: 3.8rem;
  }
  .invoice-info-ct-3 {
    width: 100%;
  }
  .pale {
    color: var(--blue-grey-color1);
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
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
    gap: 1rem;
    &.paid {
      color: var(--color-green);
      background-color: var(--pale-green);
    }
    &.pending {
      color: var(--color-orange);
      background-color: var(--pale-orange);
    }
    &.draft {
      color: var(--dark-blue-color);
      background-color: var(--main-bg-color);
    }
  }
  @media (min-width: 48em) {
    width: 67.2rem;
    padding: 4.8rem;
    .invoice-info-ct-1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 2.1rem;
    }
    .invoice-info-ct-2 {
      gap: 11.7rem;
      margin-bottom: 4.7rem;
    }
  }
  @media (min-width: 90em) {
    width: 73rem;
  }
`;
