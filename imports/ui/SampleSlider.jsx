import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export const SampleSlider = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <span>
        <Slider
          defaultValue={30}
          value={value}
          // getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          onChange={handleChange}
          step={1}
          marks
          min={10}
          max={110}
          style = {{width: '300px'}}
        />
        {value + ' Samples'}
      </span> */}
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
        min={10}
        max={110}
        style = {{width: '300px'}}
      />
      {value + ' Samples'}
    </div>
  );
};
