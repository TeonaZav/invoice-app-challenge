import styled, { css } from "styled-components";

export const DatePickerStyles = styled.div<{ $boxtype: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  box-sizing: border-box;
  flex-grow: 1;
  color: var(--bold-color);

  .react-datepicker {
    height: 24.3rem;
    background-color: var(--card-color-2);
    padding: 1.2rem;
    border-radius: 0.8rem;

    /* box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25); */
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
    border: none !important;
    margin: 0 auto;
    &__input-container {
      width: 100%;
      border-radius: 0.4rem;
    }

    &__input-container input {
      color: var(--bold-color);
      border: 1px solid var(--input-border);
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
      background-color: var(--card-color-2);
      border-bottom: none;
    }
    .react-datepicker__day {
      color: var(--main-text-color);
    }
    .react-datepicker__day--disabled {
      color: var(--blue-grey-color1);
    }
    .react-datepicker__day--outside-month {
      color: var(--red-pale) !important;
      pointer-events: none;
    }
    &__current-month {
      color: var(--bold-color);
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
      color: var(--main-text-color);
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
    background-color: var(--card-color-2);
  }
  .react-datepicker__navigation-icon--next {
    fill: var(--indigo-color-pale);
  }
  .react-datepicker__day.react-datepicker__day--today {
    border-radius: 7px;
    color: var(--indigo-color) !important;
    font-weight: 700;
  }

  .react-datepicker__navigation-icon::before {
    border-color: var(--indigo-color);
  }
`;
