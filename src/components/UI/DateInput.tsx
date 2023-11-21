import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerStyles } from "../../styles/DatePickerStyles";

function DateInput({ id, errors, register }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePickerStyles>
      <DatePicker
        {...register("createdAt", {
          required: "This field is required",
        })}
        placeholderText="mm / dd / yyyy"
        autoComplete="off"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        calendarClassName="rasta-stripes"
        dateFormat="MM/dd/yyyy"
        monthsShown={1}
        formatWeekDay={(day) => day.toString().substr(0, 1)}
      ></DatePicker>
    </DatePickerStyles>
  );
}
export default DateInput;
