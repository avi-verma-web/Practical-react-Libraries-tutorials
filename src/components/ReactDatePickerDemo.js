import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePickerDemo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      //   minDate={new Date()}
      //   maxDate={new Date()}
      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      isClearable={true}
      showYearDropdown={true}
      scrollableMonthYearDropdown={true}
    ></DatePicker>
  );
};

export default ReactDatePickerDemo;
