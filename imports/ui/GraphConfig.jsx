import React from 'react'
import { DateInput } from './DateInput';
import { SampleSlider } from './SampleSlider';
import { MaterialDateInput } from './MaterialDateInput'

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const GraphConfig = (props) => (
  <Box mb={1}>
    <Paper>
      <Box p={2}>
      <MaterialDateInput
        startDate={props.startDate}
        setStartDate={props.setStartDate}
        endDate={props.endDate}
        setEndDate={props.setEndDate}
        />
      <SampleSlider
        sampleRate={props.sampleRate}
        setSampleRate={props.setSampleRate}/>
      </Box>
    </Paper>
  </Box>
  
)

export default GraphConfig