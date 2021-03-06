var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conversationSchema = new Schema({
  productName: String
  ,productId: String
  ,photoUrl: String
  ,dateCreated: Date
  ,lastUpdated: Date
  ,comments: Array///will all comments in chronological order
  ,ownerId: String////product owner's id
  ,ownderName: String
  ,adminId: String////Id of th person a user is talking to
  ,adminName: String
})

module.exports = mongoose.model("Conversation", conversationSchema);
