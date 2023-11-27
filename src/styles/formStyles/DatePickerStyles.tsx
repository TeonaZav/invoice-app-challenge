import styled, { css } from "styled-components";

export const DatePickerStyles = styled.div<{ $boxtype: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  box-sizing: border-box;
  flex-grow: 1;

  .react-datepicker {
    height: 24.3rem;
    padding: 1.2rem;
    border-radius: 0.8rem;
    box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
    border: none !important;
    margin: 0 auto;
    &__input-container {
      width: 100%;
      border-radius: 0.4rem;
    }

    &__input-container input {
      border: 1px solid var(--light-blue-color);
      background-color: var(--card-color);
      border-radius: 0.4rem;
      height: 4.8rem;
      width: 100%;
      box-sizing: border-box;
      padding: 0 1.8rem;
    }
    &__triangle {
      display: none;
    }

    &__header {
      background: white !important;
      border-bottom: none;
    }
    .react-datepicker__day--outside-month {
      color: var(--red-pale) !important;
      pointer-events: none;
    }
    &__current-month {
      color: var(--blue-black-color1);
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.25px;
      margin-bottom: 1.5rem;
    }
    &__navigation-icon {
      top: 1rem;
      color: var(--indigo-color-pale);
    }
    &__day-name,
    &__day,
    &__time-name {
      width: 2.5rem;
    }
    &__day,
    &__month-text,
    &__quarter-text,
    &__year-text {
      cursor: pointer;
      font-size: 1.3rem;

      font-weight: 500;
      width: 2.5rem;
      padding: 0.3rem;
    }
    &__month-text {
      color: red;
    }

    &___day.react-datepicker__day--selected {
      border: none;
      border-radius: 0.7rem;
      background-color: var(--indigo-color-pale);
      color: var(--card-color);
    }
    &__day.react-datepicker__day--keyboard-selected {
      border: none;
      border-radius: 7px;
      background-color: var(--indigo-color-pale);
      color: var(--card-color);
      &:hover {
        border: none;
        border-radius: 7px;
        background-color: var(--indigo-color-pale);
      }
    }
    &__day--selected:hover,
    &__day--in-selecting-range:hover,
    &__day--in-range:hover,
    &__month-text--selected:hover,
    &__month-text--in-selecting-range:hover,
    &__month-text--in-range:hover,
    &__quarter-text--selected:hover,
    &__quarter-text--in-selecting-range:hover,
    &__quarter-text--in-range:hover,
    &__year-text--selected:hover,
    &__year-text--in-selecting-range:hover,
    &__year-text--in-range:hover {
      border: none;
      border-radius: 7px !important;
      background-color: var(--card-color) !important;
      color: var(--indigo-color) !important;
      font-weight: 700;
    }
  }

  ${(props) =>
    props.$boxtype === "secondary" &&
    css`
      @media (min-width: 48em) {
        max-width: 24rem;
        box-sizing: border-box;
        width: 50.4rem;
      }
    `}

  .react-datepicker-popper .react-datepicker__navigation {
    color: var(--indigo-color-pale) !important;
  }

  .react-datepicker__day.react-datepicker__day--today {
    border-radius: 7px;
    color: var(--indigo-color) !important;
    font-weight: 700;
  }
`;
