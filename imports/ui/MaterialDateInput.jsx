import React, { useState } from 'react';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

export const MaterialDateInput = (props) => {

  const { startDate, setStartDate, endDate, setEndDate } = props

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        label="Start"
        inputVariant="outlined"
        value={startDate}
        onChange={setStartDate}
        maxDate={endDate}
        style={{ padding: '5px 10px 5px 0' }}
      />
      <DateTimePicker
        label="End"
        inputVariant="outlined"
        value={endDate}
        onChange={setEndDate}
        minDate={startDate}
        style={{ padding: '5px 10px 5px 0' }}
      />
    </MuiPickersUtilsProvider>
  );
};
