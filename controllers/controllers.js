var User = require('../models/users.js');
var Chat = require('../models/users.js');

module.exports.create = function(request, response) {
    var new_user = new User(request.body);
    new_user.save(function(err, data) {
      if (err)
        return response.status(400)
          .json({
            error: "Please add a name"
          });
      console.log(data);
      return response.status(200)
        .json({
          message: "User successfully created"
        });
  
    })
    console.log(request.body);
  }

  module.exports.list = function(request, response) {
    User.find(function(err, data){
      if(err){
        response.status(400)
          .json({
            error: "Database query error"
          });
      }
    
      response.status(200).json({
        users: data
      });
    });
    
    }

  module.exports.new = function(request, response) {
    var new_chat = new Chat(request.body);
    new_chat.save(function(err, data) {
      if (err)
        return response.status(400)
          .json({
            error: "Please add a Session name"
          });
      console.log(data);
      return response.status(200)
        .json({
          message: "Chat record successfully created"
        });
  
    })
    console.log(request.body);
  }