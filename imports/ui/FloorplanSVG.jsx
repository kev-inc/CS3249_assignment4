import React, { useState, useEffect } from 'react';
import { getAverage } from '../api/links';

const grey = '#9fa2a3';

const calAvgColor = (tempAvgArr) => {
  const oldRange = Math.max(...tempAvgArr) - Math.min(...tempAvgArr)
  const newRange = 90 - 20;
  var initAvgColor = [0, 0, 0, 0, 0, 0, 0]

  for (i = 0; i < tempAvgArr.length; i++) {
    initAvgColor[i] = Math.round((((tempAvgArr[i] - Math.min(...tempAvgArr)) * newRange) / oldRange) + 20)
  }

  if (isNaN(...initAvgColor))
    return [`hsl(211,100%,90%)`, `hsl(211,100%,40%)`, `hsl(211,100%,70%)`, `hsl(211,100%,20%)`, `hsl(211,100%,50%)`, `hsl(211,100%,46%)`, `hsl(211,100%,60%)`];

  return [`hsl(211, 100%, ${initAvgColor[0]}%)`, `hsl(211, 100%, ${initAvgColor[1]}%)`, `hsl(211, 100%, ${initAvgColor[2]}%)`, `hsl(211, 100%, ${initAvgColor[3]}%)`, `hsl(211, 100%, ${initAvgColor[4]}%)`, `hsl(211, 100%, ${initAvgColor[5]}%)`, `hsl(211, 100%, ${initAvgColor[6]}%)`];
}

export const FloorplanSVG = (props) => {
  var initc = calAvgColor(getAverage(props.startDate, props.endDate));

  const [c0, setc0] = useState(initc[0]);
  const [c1, setc1] = useState(initc[1]);
  const [c2, setc2] = useState(initc[2]);
  const [c3, setc3] = useState(initc[3]);
  const [c4, setc4] = useState(initc[4]);
  const [c5, setc5] = useState(initc[5]);
  const [c6, setc6] = useState(initc[6]);

  //update the room colour when startDate and endDate changes
  useEffect(() => {
    if (props.roomIsVisible[0])
      setc0(initc[0]);
    else
      setc0(grey);

    if (props.roomIsVisible[1])
      setc1(initc[1]);
    else
      setc1(grey);

    if (props.roomIsVisible[2])
      setc2(initc[2]);
    else
      setc2(grey);

    if (props.roomIsVisible[3])
      setc3(initc[3]);
    else
      setc3(grey);

    if (props.roomIsVisible[4])
      setc4(initc[4]);
    else
      setc4(grey);

    if (props.roomIsVisible[5])
      setc5(initc[5]);
    else
      setc5(grey);

    if (props.roomIsVisible[6])
      setc6(initc[6]);
    else
      setc6(grey);
  }, [props.startDate, props.endDate]);

  const handleChange = (room) => {
    if (room == 0) {
      if (c0 == grey) {
        setc0(initc[0]);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 0) {
              return true;
            } else {
              return item;
            }
          });
        });
      }
      else {
        setc0(grey);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 0) {
              return false;
            } else {
              return item;
            }
          });
        });
      }
    }
    else if (room == 1) {
      if (c1 == grey) {
        setc1(initc[1]);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 1) {
              return true;
            } else {
              return item;
            }
          });
        });
      }
      else {
        setc1(grey);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 1) {
              return false;
            } else {
              return item;
            }
          });
        });
      }
    }
    else if (room == 2) {
      if (c2 == grey) {
        setc2(initc[2]);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 2) {
              return true;
            } else {
              return item;
            }
          });
        });
      }
      else {
        setc2(grey);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 2) {
              return false;
            } else {
              return item;
            }
          });
        });
      }
    }
    else if (room == 3) {
      if (c3 == grey) {
        setc3(initc[3]);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 3) {
              return true;
            } else {
              return item;
            }
          });
        });
      }
      else {
        setc3(grey);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 3) {
              return false;
            } else {
              return item;
            }
          });
        });
      }
    }
    else if (room == 4) {
      if (c4 == grey) {
        setc4(initc[4]);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 4) {
              return true;
            } else {
              return item;
            }
          });
        });
      }
      else {
        setc4(grey);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 4) {
              return false;
            } else {
              return item;
            }
          });
        });
      }
    }
    else if (room == 5) {
      if (c5 == grey) {
        setc5(initc[5]);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 5) {
              return true;
            } else {
              return item;
            }
          });
        });
      }
      else {
        setc5(grey);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 5) {
              return false;
            } else {
              return item;
            }
          });
        });
      }
    }
    else if (room == 6) {
      if (c6 == grey) {
        setc6(initc[6]);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 6) {
              return true;
            } else {
              return item;
            }
          });
        });
      }
      else {
        setc6(grey);
        props.setRoomIsVisible(state => {
          return state.map((item, index) => {
            if (index === 6) {
              return false;
            } else {
              return item;
            }
          });
        });
      }
    }
    else {
      console.log("error, room number entered not found")
    }
  };

  return (
    <svg id="floorplanSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519.08 397.83" style={{ width: '50%', padding: '20px' }}>
      <title>FloorplanSVG</title>
      <g id="RoomTemp">
        <g>
          <rect x="10.08" y="16" width="196.48" height="142" style={{ fill: c0 }} onClick={(e) => handleChange(0)} />
          <text fontSize="35" x="50" y="150">Room 0</text>
        </g>
        <g>
          <rect x="10.67" y="261" width="80.54" height="130" style={{ fill: c1 }} onClick={(e) => handleChange(1)} />
          <text fontSize="15" x="27" y="380">Room 1</text>
        </g>
        <g>
          <rect x="96" y="261" width="82.67" height="130" style={{ fill: c2 }} onClick={(e) => handleChange(2)} />
          <text fontSize="15" x="112" y="380">Room 2</text>
        </g>
        <g>
          <rect x="184" y="261" width="81.67" height="130" style={{ fill: c3 }} onClick={(e) => handleChange(3)} />
          <text fontSize="15" x="197" y="380">Room 3</text>
        </g>
        <g>
          <rect x="271.33" y="261" width="81.67" height="130" style={{ fill: c4 }} onClick={(e) => handleChange(4)} />
          <text fontSize="15" x="287" y="380">Room 4</text>
        </g>
        <g>
          <rect x="357.79" y="261.33" width="80.8" height="130" style={{ fill: c5 }} onClick={(e) => handleChange(5)} />
          <text fontSize="15" x="373" y="380">Room 5</text>
        </g>
        <g>
          <rect x="441.47" y="261" width="77.62" height="130" style={{ fill: c6 }} onClick={(e) => handleChange(6)} />
          <text fontSize="15" x="452" y="380">Room 6</text>
        </g>
      </g>
      <g id="Floorplan">
        <polyline points="0 3 220 3 220 73.67 518 73.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: "10", strokeWidth: "6" }} />
        <polygon points="4.58 125.75 10.08 125.75 10.08 16.75 71.33 16.75 71.33 13.75 4.58 13.75 4.58 125.75" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: "10" }} />
        <polyline points="71.33 20.5 71.33 11.5 111.08 11.5 111.08 20.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <polyline points="112.08 13.75 174.33 13.75 174.33 16 112.08 16" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="175.83 20.5 175.83 11.5 212.33 11.5 212.33 23 203.33 23" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <polyline points="214.33 11.5 217.33 11.5 217.33 17.25 214.33 17.25" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polygon points="4.58 161 10.67 161 10.67 168.67 208 168.67 208 128.33 212.33 128.33 212.33 199 207.33 199 207.33 173.94 110 173.94 109.67 199 103.67 199 103.67 173.94 28.63 173.94 28.63 207.67 33 207.67 33.33 211.33 6.33 211.33 6 207.33 24 207 24.33 173.94 10.67 173.94 4.58 173.94 4.58 161" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="10.67 175.33 10.67 207.25 6 207.33 6 175.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="86.67" y1="175.33" x2="86.67" y2="198.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="33" y1="207.67" x2="71.33" y2="207.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="67" y1="226.67" x2="67" y2="211.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <line x1="34.33" y1="226.67" x2="34.33" y2="211.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <line x1="160.17" y1="227.5" x2="160.17" y2="212.17" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <line x1="127.5" y1="227.5" x2="127.5" y2="212.17" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <rect x="73.17" y="200.33" width="36.5" height="11" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <line y1="394.33" x2="518" y2="394.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 7 }} />
        <polyline points="4.58 391 4.58 254.33 52.67 254.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="10.67 391 10.67 261 52.67 261" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <rect x="91.21" y="254.33" width="48.79" height="6.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <rect x="175.83" y="254.33" width="9.5" height="6.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="276 261 222.67 261 222.67 254.33 314.67 254.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="356.67 257.67 348.67 257.67 348.67 254.33 401.33 254.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="450.08 254.33 437.33 254.33 437.33 257.67 434.08 257.67 434.08 290.75" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="482.08" y1="254.33" x2="519.08" y2="254.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <polyline points="111.08 206.67 124.83 206.67 124.83 211.33 111.08 211.33 111.08 206.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <rect x="125.67" y="207.33" width="36.33" height="4" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <rect x="163" y="206.67" width="12" height="4.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <rect x="176.17" y="200.33" width="36.17" height="11" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 3 }} />
        <line x1="34.33" y1="210.33" x2="71.33" y2="210.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="10.67 154.17 10.67 158.17 10.67 159.83 6 159.83 6 126.83 10.67 126.83 10.67 144.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="11.5" y1="158.17" x2="43.67" y2="158.17" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M207.33,78.5s-1,15.67,0,15.67h4V83.67l11.5-.17v-5Z" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M212.33,126V95.5h33s-2.54,16.17-9.5,22.83S212.33,126,212.33,126Z" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <polyline points="224.17 82.5 267.67 82.5 267.67 77.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <polyline points="267.67 88.83 267.67 83.83 279.83 83.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <polyline points="280.83 78.5 290.33 78.5 290.33 82.5 279.83 82.5 279.83 78.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polygon points="292 95.5 292 78.5 333.67 78.5 333.67 83.83 296.67 83.83 296.83 95.5 292 95.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <rect x="290.33" y="96.13" width="11" height="35.21" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <polygon points="292 133 292 133.83 292 166.17 301.33 166.17 301.33 161.17 295.83 161.5 295.83 133 292 133" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polygon points="365 78.5 365 86.33 369.33 86.33 369.33 82.5 382.83 82.5 382.83 78.5 365 78.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <rect x="384.17" y="78.5" width="40" height="7.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <polyline points="518 78.5 478.67 78.5 478.67 85.5 518 85.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="425.67" y1="82" x2="432.5" y2="82" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="441.67" y1="82.42" x2="453.33" y2="82.42" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="462.5" y1="82" x2="478" y2="82" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="74.33" y1="20.5" x2="109" y2="20.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="178.67" y1="20.5" x2="206.17" y2="20.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="206.49" y1="24.66" x2="206.57" y2="77" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="212.33" y1="69.25" x2="212.33" y2="74.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="212.33" y1="56.13" x2="212.33" y2="64" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="212.33" y1="36.75" x2="212.33" y2="50.13" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="212.33" y1="27.88" x2="212.33" y2="31.88" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="518 201.67 384.17 201.67 384.17 211.33 518 211.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <polyline points="382.83 206.67 363 206.67 363 203.67 358 203.67 358 211.33 384.17 211.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <line x1="30.33" y1="181.75" x2="30.33" y2="192.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="36.46" y1="186.83" x2="30.96" y2="186.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <polyline points="32.46 185.13 32.46 178.38 46.46 178.38 46.46 195.38 32.46 195.38 32.46 188.88" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="171.08" y1="175.33" x2="171.71" y2="205.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M51.08,211.33s0,7.8-4.62,11.67-12.75,4.5-12.75,4.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <path d="M67,227.5s-3.42.25-9.17-3.5-6.75-11.83-6.75-11.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <path d="M144.56,212.17s0,7.79-4.62,11.66-12.75,4.5-12.75,4.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <path d="M160.48,228.33s-3.42.25-9.17-3.5S144.56,213,144.56,213" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10 }} />
        <polyline points="90.33 254.33 87.17 254.33 53.67 254.33 53.67 261 88.33 261" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="87.17" y1="290.17" x2="87.17" y2="261" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M86.17,290.17s-8.84,2.5-20.5-5.84-12-22.33-12-22.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="174.67" y1="289.99" x2="174.67" y2="260.82" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M173.67,290s-8.84,2.5-20.5-5.83-12-22.34-12-22.34" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="348.17" y1="289.32" x2="348.17" y2="260.16" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M347.17,289.32s-8.84,2.5-20.5-5.83-12-22.33-12-22.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="434.08" y1="289.82" x2="434.08" y2="260.66" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M433.08,289.82s-8.83,2.5-20.5-5.83-12-22.33-12-22.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="217.67" y1="84.83" x2="217.67" y2="88.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 7 }} />
        <polyline points="221.33 88.17 266 88.83 290.33 88.83 290.33 83.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="340.67" y1="82" x2="364.17" y2="82" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="426.33" y1="86.33" x2="477.33" y2="86.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="450.08" y1="258.75" x2="450.08" y2="290.18" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M451.33,290.15a29.69,29.69,0,0,0,20-7.13c9.5-8,11-23.69,11-23.69" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="188.58" y1="260.91" x2="188.58" y2="292.34" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <path d="M221.58,260.17s-1.5,15.91-11,24.07a29.38,29.38,0,0,1-20,7.25" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="141.17 254.33 174.67 254.33 174.67 259.83 141.17 259.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="221.58 254.33 187.17 254.33 187.17 259.83 219.33 259.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="347.17 254.33 311.83 254.33 311.83 259.33 347.17 259.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="434.67 254.33 399.5 253.67 399.5 260.16 431.33 260.16" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="480.83 253.67 448.33 253.67 448.33 259.33 485.33 259.33 485.33 254.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="442.08 256 442.08 259.33 436.83 259.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="353 259.33 353.17 390.83 358 390.83 358 258.75" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="438 260.16 439.17 390.83 442.08 390.83 440.83 260.16" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="266.17 261.66 265.17 390.83 271.33 390.83 271.33 261.66" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="179.17 261.82 179.17 390.83 184.33 390.83 183.67 261.82" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <polyline points="91.21 261.82 91.21 390.83 97 390.83 96.33 262" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="92" y1="382.83" x2="96.96" y2="382.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="92" y1="387.33" x2="96.96" y2="387.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="266.17" y1="381.67" x2="271.33" y2="381.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="266.17" y1="386.83" x2="271.33" y2="386.83" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="353.83" y1="381.67" x2="358" y2="381.67" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="353.83" y1="387.5" x2="358" y2="387.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="359.17" y1="259.33" x2="399.5" y2="259.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="485.33" y1="258.75" x2="518.42" y2="258.75" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 0.5 }} />
        <line x1="112.58" y1="205.25" x2="119.83" y2="201.38" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="125.67" y1="197.88" x2="138.71" y2="190.58" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="143.3" y1="188.28" x2="157.42" y2="180.25" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="163" y1="177.13" x2="168.21" y2="173.94" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="166.83" y1="204.25" x2="160.48" y2="200.33" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="154.96" y1="197.88" x2="143.3" y2="190.58" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="138.08" y1="188.28" x2="122.96" y2="178.5" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
        <line x1="118.58" y1="176.38" x2="116.21" y2="174.75" style={{ fill: "none", stroke: "#231f20", strokeMiterlimit: 10, strokeWidth: 2 }} />
      </g>
    </svg>
  );
};
