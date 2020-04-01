import React, { useEffect } from 'react'
import Dygraph from 'dygraphs'
import { useTracker } from 'meteor/react-meteor-data';
import { TempCollection } from '../api/links';

export const Graph = () => {
    const temps = useTracker(() => {
        return TempCollection.find({}, {limit: 100}).map(temp => {
            return [
                temp.timestamp,
                temp['0'], 
                temp['1'], 
                temp['2'], 
                temp['3'], 
                temp['4'],
                temp['5'],
                temp['6']
            ]
        })
    })

    useEffect(() => {
        new Dygraph(document.getElementById('graphRef'), temps, {
            labels:["Timestamp", "Room 0", "Room 1", "Room 2", "Room 3", "Room 4", "Room 5", "Room 6"],
            hideOverlayOnMouseOut: false,
            labelsDiv: document.getElementById('graphLabels'),
            labelsSeparateLines: true,
            legend: 'always',
            axes: {
                y: {
                    valueFormatter: (num) => num.toPrecision(3)+"°C",
                    axisLabelFormatter: (num) => num.toPrecision(2)+"°C",
                }
            }
        })

    })

    return(
        <div>
            <div id='graphRef' style={styles.graphRef}></div>
            <div id="graphLabels" style={styles.graphLabels}></div>
        </div>
    )
}

const styles = {
    graphRef: {
        width: '100%'
    },
    graphLabels: {
        display: 'inline-block'
    }
}

export default Graph