import styled from "styled-components";

const SelectStyle = styled.div`
  width: 100%;
  height: 4.8rem;
  border-radius: 0.4rem;
  -webkit-box-shadow: none;
  .react-select__control {
    width: 100%;
    border-radius: 0.4rem;
    height: 4.8rem;
    border: 1px solid var(--input-border);
    background-color: var(--card-color-2);
    cursor: pointer;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: -0.25px;
    font-weight: 500;
    &:hover,
    &:checked,
    &:focus {
      border: 1px solid var(--indigo-color-pale) !important;
      -webkit-box-shadow: none;
    }
  }

  .react-select__indicator-separator {
    display: none;
  }
  .react-select__dropdown-indicator {
    border: none;
  }
  .react-select__dropdown-indicator svg {
    fill: var(--indigo-color);
  }
  .react-select__menu {
    color: var(--main-text-color);
    background-color: var(--card-color-2);
    font-weight: 700;
  }
  .react-select__menu-list {
    padding: 0;
  }
  .react-select__option {
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-2);
    &:hover {
      color: var(--indigo-color);
      background-color: var(--card-color);
    }

    cursor: pointer;
  }
`;

export default SelectStyle;
