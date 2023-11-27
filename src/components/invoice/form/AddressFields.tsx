import { AddressContainer } from "../../../styles/formStyles/FormStyle";
import { useFormContext, FieldErrors } from "react-hook-form";
import FormRow from "../../UI/FormRow";
import Input from "../../../styles/formStyles/InputStyle";
import SelectField from "./SelectField";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../../services/apiCountries";
interface IProps {
  address: string;
}

function AddressFields({ address }: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const countryOptions = data?.data.map((el) => {
    return { value: el.iso2, label: el.country };
  });

  return (
    <>
      <FormRow
        label="Street Address"
        error={(errors[address] as FieldErrors)?.street?.message?.toString()}
        $boxtype="primary"
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
          $boxtype="tertiary"
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
          $boxtype="tertiary"
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
          $boxtype="tertiary"
        >
          <SelectField
            options={countryOptions}
            fieldName={`${address}.country`}
          />
        </FormRow>
      </AddressContainer>
    </>
  );
}
export default AddressFields;
