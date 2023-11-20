import styled, { css } from "styled-components";

function FormRow({ label, error, children, boxType }) {
  return (
    <StyledFormRow boxType={boxType}>
      <LabelErrorCt>
        {label && (
          <Label
            htmlFor={children.props.id}
            color={`${error ? "error" : null}`}
          >
            {label}
          </Label>
        )}
        {error && <Error>{error}</Error>}
      </LabelErrorCt>

      {children}
    </StyledFormRow>
  );
}

export default FormRow;

const StyledFormRow = styled.div<{ boxType: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  box-sizing: border-box;
  flex-grow: 1;
  ${(props) =>
    props.boxType === "address" &&
    css`
      max-width: 15.2rem;
    `}
`;

const LabelErrorCt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--blue-grey-color2);
  line-height: 1.5rem;
  ${(props) =>
    props.color === "error" &&
    css`
      color: var(--red-color);
    `}
`;

const Error = styled.span`
  font-size: 1rem;
  color: var(--red-color);
  line-height: 1.5rem;
`;
