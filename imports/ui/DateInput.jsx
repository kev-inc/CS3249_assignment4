import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DateInput = (props) => {
  // const [startDate, setStartDate] = useState(new Date("08/02/2020"));
  // const [endDate, setEndDate] = useState(new Date("10/02/2020"));
  // range is from 2 Oct 2013 5am to 3 Dec 2013 3:30pm
  return (
    <div>
      {"Start "}
      <DatePicker
        selected={props.startDate}
        onChange={date => props.setStartDate(date)}
        selectsStart
        startDate={props.startDate}
        endDate={props.endDate}
        dateFormat={'dd/MM/yyyy | h:mm aa'}
        showTimeSelect
        timeIntervals={15}
        timeCaption="time"
      />

      {"End "}
      <DatePicker
        selected={props.endDate}
        onChange={date => props.setEndDate(date)}
        selectsEnd
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.startDate}
        dateFormat={'dd/MM/yyyy | h:mm aa'}
        showTimeSelect
        timeIntervals={15}
        timeCaption="time"
      />
    </div>
  );
};
