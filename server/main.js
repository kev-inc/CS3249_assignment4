import { Meteor } from 'meteor/meteor';
import { TempCollection } from '/imports/api/links';

function insertTemp({ roomId, timestamp, temp }) {
  var obj = {timestamp: timestamp}
  obj[roomId] = temp
  TempCollection.upsert({timestamp: timestamp}, {$set: obj})
  // TempCollection.insert({roomId: roomId, timestamp: timestamp, temp: temp});
}

Meteor.startup(() => {

  if (TempCollection.find().count() === 0) {
    console.log("Database is empty...")
    console.log("Updating Database with room-temperatures.csv...")
    var count = 0
    try {
      Papa.parse(Assets.getText('room-temperatures.csv'), {
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
          console.log(count + " entries added.")
        },
        complete: function(results, file) {
          console.log('room-temperatures.csv successfully imported.')
        }
      });
    } catch (e) {
      console.log("room-temperatures.csv not found! Make sure that it is in the folder /private")
    }
    
  }
});
