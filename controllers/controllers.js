var User = require('../models/users.js');

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