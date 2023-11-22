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
    border: 1px solid var(--light-blue-color);
    cursor: pointer;
    color: var(--blue-black-color1);
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
  .react-select__indicators {
    border: none;
    fill: red;
  }
  .react-select__menu {
    color: var(--blue-black-color1);
    font-weight: 700;
  }
  .react-select__menu-list {
    padding: 0;
  }
  .react-select__option {
    padding: 1.5rem;
    border-bottom: 1px solid var(--light-blue-color);
    &:hover {
      color: var(--indigo-color);
      background-color: var(--card-color);
    }

    cursor: pointer;
  }
`;

export default SelectStyle;
