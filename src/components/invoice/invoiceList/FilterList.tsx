import { useState } from "react";
import Select, { components, OptionProps } from "react-select";

interface IProps extends OptionProps<{ value: string; label: string }> {}

function InputOption({
  getStyles,
  isDisabled,
  isSelected,
  children,
  innerProps,
  ...rest
}: IProps) {
  const style: React.CSSProperties = {
    alignItems: "center",
    backgroundColor: "transparent",
    color: "black",
    display: "flex",
  };

  const props = {
    ...innerProps,
    style,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} readOnly />
      {children}
    </components.Option>
  );
}

const filterOptions = [
  { value: "paid", label: "Paid" },
  { value: "pending", label: "Pending" },
  { value: "draft", label: "Draft" },
];
export default function FilterList() {
  const [selectedOptions, setSelectedOptions] = useState<string[] | null>([]);

  return (
    <>
      <Select
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(options) => {
          if (options.length > 0) {
            setSelectedOptions(options.map((opt) => opt.value));
          }
        }}
        options={filterOptions}
        components={{
          Option: InputOption,
        }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "transparent",
          }),
        }}
      />
      <p>
        {selectedOptions?.map((value) => {
          return value;
        })}
      </p>
    </>
  );
}
