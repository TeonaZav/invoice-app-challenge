import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Select from "react-select";
import SelectStyle from "../../../styles/formStyles/SelectStyle";

interface IOptions {
  value: number;
  label: string;
}

interface IProps {
  options: IOptions[];
  fieldName: string;
}

function SelectField({ options, fieldName }: IProps) {
  const { register, setValue, watch } = useFormContext();
  const watchValue =
    fieldName !== "paymentTerms" ? watch(fieldName) : watch("paymentTerms");

  const editOption = options?.filter(
    (option: IOptions) => option.value == watchValue
  );

  const [selected, setSelected] = useState<IOptions | null>(null);

  function handleChange(selectedValue: IOptions | null) {
    if (selectedValue) {
      setSelected(selectedValue);
    }
    setValue(fieldName, selectedValue?.value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }

  return (
    <SelectStyle className="react-select">
      <Select
        id={fieldName}
        value={editOption ? editOption : selected}
        {...register(fieldName)}
        onChange={handleChange}
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "var(--indigo-color-pale)",
            neutral50: "var(--bold-color)",
            neutral80: "var(--bold-color)",
            primary: "var(--indigo-color-pale)",
          },
        })}
      />
    </SelectStyle>
  );
}

export default SelectField;
