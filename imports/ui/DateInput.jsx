import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DateInput = () => {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  return (
    <div>
     <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    </div>
  );
};
