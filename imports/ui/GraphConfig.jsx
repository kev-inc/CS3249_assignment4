import React from 'react'
import { DateInput } from './DateInput';
import { SampleSlider } from './SampleSlider';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const GraphConfig = (props) => (
  <Box mb={1}>
    <Paper>
      <DateInput
        startDate={props.startDate}
        setStartDate={props.setStartDate}
        endDate={props.endDate}
        setEndDate={props.setEndDate}
      />
      <SampleSlider />
    </Paper>
  </Box>
  
)

export default GraphConfig