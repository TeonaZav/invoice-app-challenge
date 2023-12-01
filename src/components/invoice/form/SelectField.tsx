import { useEffect, useState } from "react";
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
  edit: boolean | undefined;
  editValue: number | string;
}
function SelectField({ options, fieldName, editValue }: IProps) {
  const { register, setValue } = useFormContext();
  const [selected, setSelected] = useState<IOptions | null>(null);

  useEffect(() => {
    const editOption = options?.filter(
      (option: IOptions) => option.value == editValue
    );
    setSelected(editOption?.[0]);
  }, [options, editValue]);

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
        value={selected}
        {...register(fieldName)}
        onChange={handleChange}
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectStyle>
  );
}

export default SelectField;
