import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');

export const TempCollection = new Mongo.Collection('temps');

// export function getRoom(roomId) {
//     console.log(roomId)
//     return TempCollection.find({'roomId':roomId})
// }