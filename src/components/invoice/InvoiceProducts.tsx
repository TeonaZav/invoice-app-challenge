import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { currencyFormat } from "../../utils/helpers";
import { P } from "../../styles/Typography";

interface IProductsProps {
  items: { name: string; quantity: number; price: number; total: number }[];
  subtotal: number;
}

function InvoiceProducts({ items, subtotal }: IProductsProps) {
  const isTablet = useMediaQuery({ query: "(min-width: 48em)" });

  return (
    <StyledProducts>
      {isTablet ? (
        <table className="product-list">
          <thead>
            <tr>
              <th className="pale text-left">Item Name</th>
              <th className="pale text-left">QTY.</th>
              <th className="pale text-right">Price</th>
              <th className="pale text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, index) => {
              return (
                <tr key={index}>
                  <td className="bold text-left">{row.name}</td>
                  <td className="pale text-left">{row.quantity}</td>
                  <td className="pale text-right">
                    {currencyFormat(row.price)}
                  </td>
                  <td className="bold text-right">
                    {currencyFormat(row.total)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="product-list-mobile">
          {items.map((row) => {
            return (
              <div className="product-row-mobile">
                <div>
                  <P color="bold">{row.name}</P>
                  <P color="pale">
                    <span>{row.quantity}</span> &nbsp;x&nbsp; &nbsp;
                    <span>{currencyFormat(row.price)}</span>
                  </P>
                </div>

                <P color="bold">{currencyFormat(row.total)}</P>
              </div>
            );
          })}
        </div>
      )}

      <div className="invoice-subtotal">
        <P color="pale">Amount Due</P>

        <p className="subtotal">{currencyFormat(subtotal)}</p>
      </div>
    </StyledProducts>
  );
}

export default InvoiceProducts;

const StyledProducts = styled.section`
  background-color: var(--light-blue-color2);
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  .product-list-mobile {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2.4rem;
    .product-row-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .invoice-subtotal {
    width: 100%;
    height: 8rem;
    background-color: var(--header-bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem;

    .subtotal {
      color: var(--card-color);
      font-weight: 700;
      font-size: 2rem;
    }
  }
  .text-left {
    text-align: left;
    padding-bottom: 1.6rem;
  }
  .text-right {
    text-align: right;
    padding-bottom: 1.6rem;
  }
  @media (min-width: 48em) {
    .invoice-subtotal {
      padding: 3.2rem;
    }
    .product-list {
      width: 100%;
      padding: 3.2rem;
    }
  }
`;
