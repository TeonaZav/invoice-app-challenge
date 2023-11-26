import styled, { css } from "styled-components";
import { Label } from "../../styles/Form";

interface IFormRowProps {
  label: string;
  boxtype: string;
  error?: string;
  children?: React.ReactElement;
  invoiceItem?: boolean;
  hide?: string;
}

function FormRow({
  label,
  error,
  children,
  boxtype,
  invoiceItem,
  hide,
}: IFormRowProps) {
  return (
    <StyledFormRow boxtype={boxtype} className={hide}>
      {!invoiceItem && (
        <LabelErrorCt>
          {label && (
            <Label
              htmlFor={children?.props?.id}
              color={`${error ? "error" : null}`}
            >
              {label}
            </Label>
          )}
          {error && <Error>{error}</Error>}
        </LabelErrorCt>
      )}

      {children}
    </StyledFormRow>
  );
}

export default FormRow;

const StyledFormRow = styled.div<{ boxtype: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  box-sizing: border-box;
  flex-grow: 1;

  ${(props) =>
    props.boxtype === "secondary" &&
    css`
      @media (min-width: 48em) {
        &:not(:last-child) {
          max-width: 24rem;
        }
        box-sizing: border-box;
        width: 50.4rem;
      }
    `}
  ${(props) =>
    props.boxtype === "tertiary" &&
    css`
      &:not(:last-child) {
        max-width: 15.2rem;
      }
      @media (min-width: 48em) {
        max-width: 15.2rem;
        box-sizing: border-box;
        width: 50.4rem;
      }
    `}
    ${(props) =>
    props.boxtype === "productname" &&
    css`
      flex-grow: none;
      width: 100%;
    `}
    
    ${(props) =>
    props.boxtype === "sm" &&
    css`
      max-width: 10rem;
    `}


    ${(props) =>
    props.boxtype === "xs" &&
    css`
      max-width: 6.4rem;
    `}
`;

const LabelErrorCt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Error = styled.span`
  font-size: 1rem;
  color: var(--red-color);
  line-height: 1.5rem;
`;
