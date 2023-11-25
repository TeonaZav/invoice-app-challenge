import { useState } from "react";
import { useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import { DatePickerStyles } from "../../../styles/DatePickerStyles";
import "react-datepicker/dist/react-datepicker.css";
import FormRow from "../../UI/FormRow";

function DateInput() {
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  function handleDateChange(date: Date) {
    if (date) {
      setValue("createdAt", date.toISOString());
    }

    setStartDate(date);
  }

  return (
    <FormRow
      label="Invoice Date"
      error={errors?.createdAt?.message?.toString()}
      boxtype="secondary"
    >
      <DatePickerStyles boxtype="secondary">
        <DatePicker
          id="createdAt"
          {...register("createdAt", {
            required: "Invoice date is required",
          })}
          minDate={new Date()}
          placeholderText="d MMM yyyy"
          autoComplete="off"
          selected={startDate}
          onChange={(date: Date) => handleDateChange(date)}
          calendarClassName="rasta-stripes"
          dateFormat="d MMM yyyy"
          monthsShown={1}
          isClearable
        ></DatePicker>
      </DatePickerStyles>
    </FormRow>
  );
}

export default DateInput;