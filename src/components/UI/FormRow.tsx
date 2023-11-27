import {
  StyledFormRow,
  LabelErrorCt,
  Label,
  Error,
} from "../../styles/formStyles/FormRowStyles";

interface IFormRowProps {
  label: string;
  $boxtype: string;
  error?: string;
  children?: React.ReactElement;
  invoiceItem?: boolean;
  hide?: string;
}

function FormRow({
  label,
  error,
  children,
  $boxtype,
  invoiceItem,
  hide,
}: IFormRowProps) {
  return (
    <StyledFormRow $boxtype={$boxtype} className={hide}>
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
