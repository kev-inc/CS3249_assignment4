import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dygraph from 'dygraphs'
import { useTracker } from 'meteor/react-meteor-data';
import { getGraphData, getAverage } from '../api/links';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Appbar from './Appbar';

const useStyles = makeStyles((theme) => ({
  graphRef: {
    height: 200
  },
  graphLabels: {
    display: 'inline-block'
  }
}));

export const Graph = (props) => {
  const [isZoom, setIsZoom] = useState(false);
  const classes = useStyles()
  const temps = useTracker(() => {
    const data = getGraphData(props.startDate, props.endDate)
    const nth = Math.ceil(data.length / Math.pow(2, props.sampleRate))
    let filtered = []
    for(var i = 0; i < data.length; i += nth) {
      filtered.push(data[i])
    }
    return filtered
  })

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
      },
      visibility: props.roomIsVisible,
      interactionModel: {
        dblclick : (event, g, context) => {
          console.log('clicked')
        },
        mousedown : (event, g, context) => {
          context.initializeMouseDown(event, g, context)
          if(event.button == 1) {
            event.preventDefault()
            Dygraph.startZoom(event, g, context)
          } else {
            Dygraph.startPan(event, g, context)
          }
        },
        mousemove : (event, g, context) => {
          if(context.isPanning) {
            Dygraph.movePan(event, g, context)
          } else if(context.isZooming) {
            Dygraph.moveZoom(event, g, context)
          }
        },
        mouseup : (event, g, context) => {
          if(context.isPanning) {
            Dygraph.endPan(event, g, context)
          } else if(context.isZooming) {
            Dygraph.endZoom(event, g, context)
          }
          let axes = g.xAxisRange()
          let startMin = new Date('2013-10-02T05:00:00')
          let endMax = new Date('2013-12-03T15:15:00')
          let startNew = new Date(axes[0])
          let endNew = new Date(axes[1])
          startMin < startNew ? props.setStartDate(startNew) : props.setStartDate(startMin)
          endMax > endNew ? props.setEndDate(endNew) : props.setEndDate(endMax)
        }
      }
    })
  })

  return (
    <Box width="100%">
      <Paper>
        <Appbar title="Temperature" />
        <Box m={2}>
        <Grid container>
          <Grid item sm={12} md={2}>
            <div id="graphLabels" align="left"></div>
          </Grid>
          <Grid item sm={12} md={10}>
            <div id='graphRef' className={classes.graphRef}></div>
          </Grid>
        </Grid>
        </Box>
      </Paper>
    </Box>
  )
}


export default Graph