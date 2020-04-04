import React from 'react';
import Graph from './Graph.jsx';
import { DateInput } from './DateInput';
import { FloorplanSVG } from './FloorplanSVG';
import { SampleSlider } from './SampleSlider';

import { MaterialDateInput } from './MaterialDateInput'

export const App = () => (
  <div>
    <MaterialDateInput />

    <DateInput />
    <SampleSlider />
    <Graph />
    <FloorplanSVG />
  </div>
);

