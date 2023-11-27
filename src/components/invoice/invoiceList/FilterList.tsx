import { useState } from "react";
import Select, { components } from "react-select";

function InputOption({
  getStyles,
  Icon,
  isDisabled,
  isSelected,
  children,
  innerProps,
  ...rest
}) {
  const style = {
    alignItems: "center",
    backgroundColor: "transparent",
    color: "black",
    display: "flex ",
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
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "transparent",
          }),
        }}
      />
    </>
  );
}
