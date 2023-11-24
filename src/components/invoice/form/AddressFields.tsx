import { AddressContainer } from "../../../styles/Form";
import FormRow from "../../UI/FormRow";
import Input from "../../../styles/Input";

import { useFormContext, FieldErrors } from "react-hook-form";

interface IProps {
  address: string;
}

function AddressFields({ address }: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <FormRow
        label="Street Address"
        error={(errors[address] as FieldErrors)?.street?.message?.toString()}
        boxtype="primary"
      >
        <Input
          type="text"
          id={`${address}.street`}
          {...register(`${address}.street`, {
            required: "This field is required",
          })}
        />
      </FormRow>
      <AddressContainer>
        <FormRow
          label="City"
          error={(errors[address] as FieldErrors)?.city?.message?.toString()}
          boxtype="tertiary"
        >
          <Input
            type="text"
            id={`${address}.city`}
            {...register(`${address}.city`, {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Post Code"
          error={(
            errors[address] as FieldErrors
          )?.postCode?.message?.toString()}
          boxtype="tertiary"
        >
          <Input
            type="text"
            id={`${address}.postCode`}
            {...register(`${address}.postCode`, {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Country"
          error={(errors[address] as FieldErrors)?.country?.message?.toString()}
          boxtype="tertiary"
        >
          <Input
            type="text"
            id={`${address}.country`}
            {...register(`${address}.country`, {
              required: "This field is required",
            })}
          />
        </FormRow>
      </AddressContainer>
    </>
  );
}
export default AddressFields;
