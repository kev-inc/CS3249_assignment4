import React, { useState } from 'react';
import Graph from './Graph';
import GraphConfig from './GraphConfig'
import Floorplan from './Floorplan';
import Box from '@material-ui/core/Box';

export const App = () => {

  const [startDate, setStartDate] = useState(new Date("10/02/2013"));
  const [endDate, setEndDate] = useState(new Date("10/04/2013"));
  const [sampleRate, setSampleRate] = useState(7);
  const [roomIsVisible, setRoomIsVisible] = useState([true, true, true, true, true, true, true]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <GraphConfig
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        sampleRate={sampleRate}
        setSampleRate={setSampleRate}
      />
      <Graph
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        sampleRate={sampleRate}
        roomIsVisible={roomIsVisible}
      />
      <Floorplan
        startDate={startDate}
        endDate={endDate}
        roomIsVisible={roomIsVisible}
        setRoomIsVisible={setRoomIsVisible}
      />
    </Box>
  )
}