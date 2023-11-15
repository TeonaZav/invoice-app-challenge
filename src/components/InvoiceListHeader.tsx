import { useState } from "react";
import styled from "styled-components";
import IconPlus from "../assets/icon-plus.svg";
import IconDown from "../assets/icon-arrow-down.svg";
interface InvoiceListHeaderProps {
  itemCount: number;
}

function InvoiceListHeader({ itemCount }: InvoiceListHeaderProps) {
  const [filterByValue, setFilterByValue] = useState("");

  function handleSelect(e) {
    console.log(e.target.value);
    setFilterByValue(e.target.value);
  }

  return (
    <StyledInvoiceListHeader>
      <div>
        <h1>Invoices</h1>
        <p>{itemCount} invoices</p>
      </div>
      <div className="ct-right">
        <div className="select-box">
          <label htmlFor="select-box1">
            <span>
              Filter by status <img src={IconDown} alt="" />
            </span>
          </label>
          {filterByValue && <p className={filterByValue}>{filterByValue}</p>}
          <select
            id="select-box1"
            className="select"
            value={filterByValue}
            onChange={(e) => handleSelect(e)}
          >
            <option value="paid">paid</option>
            <option value="pending">pending</option>
            <option value="draft">draft</option>
          </select>
        </div>
        <Button className="btn">
          <div className="add">
            <img src={IconPlus} />
          </div>
          New
        </Button>
      </div>
    </StyledInvoiceListHeader>
  );
}
export default InvoiceListHeader;

const StyledInvoiceListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32.7rem;
  height: 4.4rem;
  margin-bottom: 1.6rem;
  .ct-right {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .select-box {
    cursor: pointer;
    position: relative;
    width: 10rem;
    .select,
    label {
      font-size: 1rem;
      font-weight: 700;
      color: var(--blue-black-color1);
      display: block;
    }
    .select {
      width: 100%;
      position: absolute;
      top: 0;
      padding: 0.5rem 0;
      opacity: 0;
      border: 0 none;
    }
    .label {
      position: relative;
    }
    .paid {
      color: var(--color-green);
      background-color: var(--pale-green);
    }
    .pending {
      color: var(--color-orange);
      background-color: var(--pale-orange);
    }
    .draft {
      color: var(--dark-blue-color);
      background-color: var(--main-bg-color);
    }
  }

  @media (min-width: 48em) {
    width: 67.2rem;
    height: 5.4rem;

    .select-box {
      width: 15rem;
      .select,
      label {
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 90em) {
    width: 73rem;
  }
`;
const Button = styled.button`
  width: 9rem;
  height: 4.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem 0rem 0.5rem;
  .add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 3.2rem;
    background-color: var(--card-color);
    border-radius: 100%;
  }
  background-color: var(--indigo-color);
  &:hover {
    background-color: var(--indigo-color-pale);
  }
`;
