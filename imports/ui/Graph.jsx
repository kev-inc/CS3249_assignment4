import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dygraph from 'dygraphs'
import { useTracker } from 'meteor/react-meteor-data';
import { TempCollection, getGraphData } from '../api/links';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import orange from '@material-ui/core/colors/orange'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: orange[700],
    color: 'black'
  },
  title: {
    flexGrow: 1,
  },
  graphRef: {
    height: 200
  },
  graphLabels: {
    display: 'inline-block'
  }
}));

export const Graph = (props) => {
  const classes = useStyles()
  const temps = useTracker(() => getGraphData(props.startDate, props.endDate))

  useEffect(() => {
    new Dygraph(document.getElementById('graphRef'), temps, {
      labels: ["Timestamp", "Room 0", "Room 1", "Room 2", "Room 3", "Room 4", "Room 5", "Room 6"],
      hideOverlayOnMouseOut: false,
      labelsDiv: document.getElementById('graphLabels'),
      labelsSeparateLines: true,
      legend: 'always',
      axes: {
        y: {
          valueFormatter: (num) => num.toPrecision(3) + "°C",
          axisLabelFormatter: (num) => num.toPrecision(2) + "°C",
        }
      }
    })

  })

  return (
    <Box>
      <Paper>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Temperature
                    </Typography>
          </Toolbar>
        </AppBar>

        <Grid container>
          <Grid item xs={12} sm={2}>
            <div id="graphLabels" align="right"></div>
          </Grid>
          <Grid item xs={12} sm={10}>
            <div id='graphRef' className={classes.graphRef}></div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}


export default Graph