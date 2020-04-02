import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date("08/02/2020"));
  const [endDate, setEndDate] = useState(new Date("10/02/2020"));

  return (
    <div>
      {"Start "}
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat={'dd/MM/yyyy | h:mm aa'}
        showTimeSelect
        timeIntervals={15}
        timeCaption="time"
      />

      {"End "}
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat={'dd/MM/yyyy | h:mm aa'}
        showTimeSelect
        timeIntervals={15}
        timeCaption="time"
      />
    </div>
  );
};
