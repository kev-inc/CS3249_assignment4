import { Meteor } from 'meteor/meteor';
import { TempCollection } from '/imports/api/links';

function insertTemp({ roomId, timestamp, temp }) {
  TempCollection.insert({roomId: roomId, timestamp: timestamp, temp: temp});
}

Meteor.startup(() => {

  if (TempCollection.find().count() === 0) {
    console.log("Database is empty...")
    console.log("Updating Database with csv file...")
    var count = 0
    Papa.parse(Assets.getText('temps.csv'), {
      header: true,
      skipEmptyLines: true,
      step: function(result) {
        let r = result.data[0]
        insertTemp({
          roomId: parseInt(r.RoomId),
          timestamp: new Date(r.timestamp),
          temp: parseFloat(r.temperature)
        })
        count++
      },
      complete: function(results, file) {
        console.log(count + ' entries added!')
      }
    });
  }
});
