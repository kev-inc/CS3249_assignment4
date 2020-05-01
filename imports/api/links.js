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
  if(startDate instanceof moment) {
    startDate = startDate.toDate()
  }
  if(endDate instanceof moment) {
    endDate = endDate.toDate()
  }
  var average = [0,0,0,0,0,0,0]
  var count = [0,0,0,0,0,0,0]
  TempCollection.find({ timestamp: {$gte: startDate, $lte: endDate }}).forEach(temp => {
    if(temp[0]) {
      average[0] += temp['0']
      count[0] ++
    }
    if(temp[1]) {
      average[1] += temp['1']
      count[1] ++
    }
    if(temp[2]) {
      average[2] += temp['2']
      count[2] ++
    }
    if(temp[3]) {
      average[3] += temp['3']
      count[3] ++
    }
    if(temp[4]) {
      average[4] += temp['4']
      count[4] ++
    }
    if(temp[5]) {
      average[5] += temp['5']
      count[5] ++
    }
    if(temp[6]) {
      average[6] += temp['6']
      count[6] ++
    }
  })
  for(var i = 0; i < average.length; i++) {
    average[i] /= count[i]
  }
  return average
}