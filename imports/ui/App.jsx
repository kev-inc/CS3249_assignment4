import React, { useState } from 'react';
import Graph from './Graph';
import GraphConfig from './GraphConfig'
import { FloorplanSVG } from './FloorplanSVG';

import Box from '@material-ui/core/Box';

export const App = () => {

  const [startDate, setStartDate] = useState(new Date("10/02/2013"));
  const [endDate, setEndDate] = useState(new Date("10/04/2013"));
  const [sampleRate, setSampleRate] = useState(7);
  const [roomIsHidden, setRoomIsHidden] = useState([false,false,false,false,false,false,false]);

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
        roomIsHidden={roomIsHidden}
      />
      <FloorplanSVG
        startDate={startDate}
        endDate={endDate}
        roomIsHidden={roomIsHidden}
        setRoomIsHidden={setRoomIsHidden}
      />
    </div>
    </Box>
  )
}