import React, { useState } from 'react';
import Graph from './Graph';
import GraphConfig from './GraphConfig'
import { FloorplanSVG } from './FloorplanSVG';

export const App = () => {
  
  const [startDate, setStartDate] = useState(new Date("10/02/2013"));
  const [endDate, setEndDate] = useState(new Date("10/04/2013"));
  const [sampleRate, setSampleRate] = useState(7)

  return (
    <div>
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
      />
      <FloorplanSVG />
    </div>
  )
}