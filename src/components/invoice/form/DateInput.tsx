import { useState } from "react";
import { useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import { DatePickerStyles } from "../../../styles/formStyles/DatePickerStyles";
import "react-datepicker/dist/react-datepicker.css";
import FormRow from "../../UI/FormRow";

function DateInput() {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const watchStartDate = watch("createdAt");
  console.log(watchStartDate);
  const [startDate, setStartDate] = useState<Date | null>(null);
  console.log(startDate);

  function handleDateChange(date: Date) {
    if (date) {
      setValue("createdAt", date.toLocaleString());
    }
    setStartDate(date);
  }

  return (
    <FormRow
      label="Invoice Date"
      error={errors?.createdAt?.message?.toString()}
      $boxtype="secondary"
    >
      <DatePickerStyles $boxtype="secondary">
        <DatePicker
          id="createdAt"
          {...register("createdAt")}
          minDate={new Date()}
          placeholderText="d MMM yyyy"
          autoComplete="off"
          selected={watchStartDate ? new Date(watchStartDate) : startDate}
          onChange={(date: Date) => handleDateChange(date)}
          calendarClassName="rasta-stripes"
          dateFormat="d MMM yyyy"
          monthsShown={1}
        ></DatePicker>
      </DatePickerStyles>
    </FormRow>
  );
}

export default DateInput;
