import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';

export const SampleSlider = (props) => {
  const handleChange = (event, newValue) => {
    setSampleRate(newValue);
  };

  const { sampleRate, setSampleRate } = props

  return (
    <Box display="flex" height="100%" alignItems='center'>
      <Slider
        value={sampleRate}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
        min={1}
        max={10}
        marks
        step={1}
        style = {{width: '300px'}}
      />
      <Typography display="inline" style={{marginLeft:24}}>
        2^{sampleRate} = {Math.pow(2, sampleRate)} Samples
      </Typography>
    </Box>
  );
};
