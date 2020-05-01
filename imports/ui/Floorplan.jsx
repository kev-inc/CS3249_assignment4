import React from 'react'
import { FloorplanSVG } from './FloorplanSVG';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Appbar from './Appbar';
import { Grid } from '@material-ui/core';

const Floorplan = (props) => (
  <Box width="100%">
    <Paper>
      <Appbar title="Floorplan" />
      <Grid conatiner>
        <Grid item>
          <FloorplanSVG
            startDate={props.startDate}
            endDate={props.endDate}
            roomIsHidden={props.roomIsHidden}
            setRoomIsHidden={props.setRoomIsHidden}
          />
        </Grid>
      </Grid>
    </Paper>
  </Box>
)

export default Floorplan