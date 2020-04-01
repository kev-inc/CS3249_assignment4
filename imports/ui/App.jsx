import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import Graph from './Graph.jsx';
import { DateInput } from './DateInput';
import { FloorplanSVG } from './FloorplanSVG';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <DateInput />
    <Hello />
    <Info />
    <Graph />
    <FloorplanSVG />
  </div>
);
