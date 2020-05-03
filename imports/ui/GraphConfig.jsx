import React from 'react'
import { SampleSlider } from './SampleSlider';
import { MaterialDateInput } from './MaterialDateInput'

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Appbar from './Appbar'

const GraphConfig = (props) => {

  return (
    <Box width="100%" mb={2}>
      <Paper>
        <Appbar title="Graph Settings"/>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Box m={2}>
              <MaterialDateInput
                startDate={props.startDate}
                setStartDate={props.setStartDate}
                endDate={props.endDate}
                setEndDate={props.setEndDate} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <SampleSlider
              sampleRate={props.sampleRate}
              setSampleRate={props.setSampleRate} />
          </Grid>
        </Grid>
      </Paper>
    </Box>

  )
}

export default GraphConfig