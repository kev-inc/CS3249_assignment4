import React, { useState } from 'react';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

export const MaterialDateInput = () => {
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        label="Start"
        inputVariant="outlined"
        value={selectedStartDate}
        onChange={handleStartDateChange}
        maxDate={selectedEndDate}
      />
      {' '}
       <DateTimePicker
        label="End"
        inputVariant="outlined"
        value={selectedEndDate}
        onChange={handleEndDateChange}
        minDate ={selectedStartDate}
      />
    </MuiPickersUtilsProvider>
  );
};
