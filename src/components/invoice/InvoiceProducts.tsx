import { useMediaQuery } from "react-responsive";
import { currencyFormat } from "../../utils/helpers";
import { P } from "../../styles/sharedStyles/Typography";
import {
  Products,
  PoductsList,
  TH,
  TD,
  PoductsListMobile,
  Subtotal,
} from "../../styles/invoicePageStyles/ProductsStyles";
interface IProductsProps {
  items: { name: string; quantity: number; price: number; total: number }[];
  subtotal: number;
}

function InvoiceProducts({ items, subtotal }: IProductsProps) {
  const isTablet = useMediaQuery({ query: "(min-width: 48em)" });

  return (
    <Products>
      {isTablet ? (
        <PoductsList>
          <thead>
            <tr>
              <TH className="pale" $justify="left">
                Item Name
              </TH>
              <TH className="pale" $justify="left">
                QTY.
              </TH>
              <TH className="pale" $justify="right">
                Price
              </TH>
              <TH className="pale" $justify="right">
                Total
              </TH>
            </tr>
          </thead>
          <tbody>
            {items.map((row, index) => {
              return (
                <tr key={index}>
                  <TD className="bold" $justify="left">
                    {row.name}
                  </TD>
                  <TD className="pale" $justify="left">
                    {row.quantity}
                  </TD>
                  <TD className="pale" $justify="right">
                    {currencyFormat(row.price)}
                  </TD>
                  <TD className="bold" $justify="right">
                    {currencyFormat(row.total)}
                  </TD>
                </tr>
              );
            })}
          </tbody>
        </PoductsList>
      ) : (
        <PoductsListMobile>
          {items.map((row, index) => {
            return (
              <div className="product-row-mobile" key={index}>
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
        </PoductsListMobile>
      )}

      <Subtotal className="invoice-subtotal">
        <P color="pale">Amount Due</P>

        <p className="subtotal">{currencyFormat(subtotal)}</p>
      </Subtotal>
    </Products>
  );
}

export default InvoiceProducts;
