import React, { useState } from 'react';
import Graph from './Graph.jsx';
import { DateInput } from './DateInput';
import { FloorplanSVG } from './FloorplanSVG';
import { SampleSlider } from './SampleSlider';

import { MaterialDateInput } from './MaterialDateInput'



export const App = () => {

  const [startDate, setStartDate] = useState(new Date("02/02/2020"));
  const [endDate, setEndDate] = useState(new Date("02/02/2020"));

  return (
    <div>
      <MaterialDateInput
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <SampleSlider />
      <Graph />
      <FloorplanSVG />
    </div>
  )
}
