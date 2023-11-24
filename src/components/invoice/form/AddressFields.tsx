import { AddressContainer } from "../../../styles/Form";
import FormRow from "../../UI/FormRow";
import Input from "../../../styles/Input";

function AddressFields({ errors, register, address }) {
  return (
    <>
      <FormRow
        label="Street Address"
        error={errors?.senderAddress?.street?.message}
        boxtype="primary"
      >
        <Input
          type="text"
          id="street"
          {...register(`${address}.street`, {
            required: "This field is required",
          })}
        />
      </FormRow>
      <AddressContainer>
        <FormRow
          label="City"
          error={errors?.senderAddress?.city?.message}
          boxtype="tertiary"
        >
          <Input
            type="text"
            id="city"
            {...register(`${address}.city`, {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Post Code"
          error={errors?.senderAddress?.postCode?.message}
          boxtype="tertiary"
        >
          <Input
            type="text"
            id="postCode"
            {...register(`${address}.postCode`, {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Country"
          error={errors?.senderAddress?.country?.message}
          boxtype="tertiary"
        >
          <Input
            type="text"
            id="country"
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
