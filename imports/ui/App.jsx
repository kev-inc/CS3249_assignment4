import React, {useState} from 'react';
import Graph from './Graph.jsx';
import { DateInput } from './DateInput';
import { FloorplanSVG } from './FloorplanSVG';
import { SampleSlider } from './SampleSlider';

export const App = () => {
  
  const [startDate, setStartDate] = useState(new Date("10/02/2013"));
  const [endDate, setEndDate] = useState(new Date("10/04/2013"));

  return (
    <div>
      <DateInput 
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <SampleSlider />
      <Graph 
        startDate={startDate}
        endDate={endDate}
      />
      <FloorplanSVG />
    </div>
  )
}

