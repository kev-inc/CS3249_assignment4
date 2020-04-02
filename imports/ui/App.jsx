import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import Graph from './Graph.jsx';
import { DateInput } from './DateInput';
import { FloorplanSVG } from './FloorplanSVG';
import { SampleSlider } from './SampleSlider';
 
export const App = () => (
  <div>
    <DateInput />
    <SampleSlider/>
    <Graph />
    <FloorplanSVG />
  </div>
);

