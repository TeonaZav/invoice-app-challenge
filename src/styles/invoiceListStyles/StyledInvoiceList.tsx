import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const StyledListHeader = styled.div`
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

const StyledFilterList = styled.div`
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
  @media (min-width: 48em) {
    width: 15rem;
    .select,
    label {
      font-size: 1.5rem;
    }
  }
`;
