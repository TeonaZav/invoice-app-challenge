import { useState, useContext } from "react";
import styled from "styled-components";
import IconPlus from "../../../assets/icon-plus.svg";
import IconDown from "../../../assets/icon-arrow-down.svg";

import { P } from "../../../styles/sharedStyles/Typography";
import { UIContext } from "../../../context/uiContext";
import Button from "../../../styles/sharedStyles/ButtonStyles";

interface InvoiceListHeaderProps {
  itemCount: number;
}

function InvoiceListHeader({ itemCount }: InvoiceListHeaderProps) {
  const { openDrawer, toggleDrawer } = useContext(UIContext);
  const [filterByValue, setFilterByValue] = useState("");

  function handleSelect(e) {
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
          {filterByValue && <P color={filterByValue}>{filterByValue}</P>}
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

        {toggleDrawer && (
          <Button
            onClick={toggleDrawer(!openDrawer)}
            // sx={{ zIndex: 1500 }}
            $btn={"btnAdd"}
          >
            {
              <>
                <div className="add">
                  <img src={IconPlus} />
                </div>
                <span>New</span>
              </>
            }
          </Button>
        )}
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
