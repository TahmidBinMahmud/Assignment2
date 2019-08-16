var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: "Name required"
  },
  session: {
    type: String
  }
});

var User = mongoose.model('User', userSchema)
module.exports = User;

var chatSchema = new Schema({
  session: {
    type: String,
    required: "Session name required"
  },
  message: {
    type: String
  }
});

var Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat;