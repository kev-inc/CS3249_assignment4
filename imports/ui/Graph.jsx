import React, { useEffect } from 'react'
import Dygraph from 'dygraphs'
import { useTracker } from 'meteor/react-meteor-data';
import { TempCollection } from '../api/links';

export const Graph = () => {
    const temps = useTracker(() => {
        return TempCollection.find({}, {limit: 100}).map(temp => {
            return [temp.timestamp, temp.roomId, temp.temp]
        })
    })

    useEffect(() => {
        console.log(temps)
        new Dygraph(document.getElementById('graphRef'), temps, {
            labels:["Date", "Room ID", "Temp"],
            hideOverlayOnMouseOut: false,
            labelsDiv: document.getElementById('graphLabels'),
            legend: 'always'
        })
        // console.log(temps)
        // const fs = require('fs')
        // const file = fs.createReadStream('../temps.csv')
        
        // [[new Date("2016/01/01"),10,20],
        // [new Date("2016/07/01"),20,10],
        // [new Date("2016/12/31"),40,30]]
    })

    return(
        <div>
            <div id='graphRef'></div>
            <div id="graphLabels"></div>
        </div>
    )
}

export default Graph