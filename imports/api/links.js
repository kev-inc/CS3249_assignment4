import { Mongo } from 'meteor/mongo';
import moment from 'moment';

export const LinksCollection = new Mongo.Collection('links');

export const TempCollection = new Mongo.Collection('temps');

export function getGraphData(startDate, endDate) {
  if(startDate instanceof moment) {
    startDate = startDate.toDate()
  }
  if(endDate instanceof moment) {
    endDate = endDate.toDate()
  }
  return TempCollection.find({ timestamp: { $gte: startDate, $lte: endDate}}).map(temp => {
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
}

export function getAverage(startDate, endDate) {
  var average = [0,0,0,0,0,0,0]
  var count = 0
  return TempCollection.find({ timestamp: {$gte: startDate, $lte: endDate }}).forEach(temp => {
    average[0] = (average[0] * count + temp['0']) / count + 1
    average[1] = (average[1] * count + temp['1']) / count + 1
    average[2] = (average[2] * count + temp['2']) / count + 1
    average[3] = (average[3] * count + temp['3']) / count + 1
    average[4] = (average[4] * count + temp['4']) / count + 1
    average[5] = (average[5] * count + temp['5']) / count + 1
    average[6] = (average[6] * count + temp['6']) / count + 1
    count++
  })
}